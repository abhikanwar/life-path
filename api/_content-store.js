const CONTENT_PREFIX = "couple/content-";

function getBlobClient() {
  try {
    return require("@vercel/blob");
  } catch (err) {
    throw new Error("@vercel/blob is not installed. Run: npm i @vercel/blob");
  }
}

function slugify(value) {
  return String(value || "memory")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);
}

function sanitizeText(value, maxLen = 280) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLen);
}

async function readLatestContent() {
  const { list } = getBlobClient();
  const { blobs = [] } = await list({
    prefix: CONTENT_PREFIX,
    limit: 100,
  });

  if (!blobs.length) {
    return null;
  }

  const latest = [...blobs].sort((a, b) => {
    const aTime = new Date(a.uploadedAt || 0).getTime();
    const bTime = new Date(b.uploadedAt || 0).getTime();
    return bTime - aTime;
  })[0];

  const res = await fetch(latest.url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to read existing content blob.");
  }

  return res.json();
}

async function writeContentSnapshot(content) {
  const { put } = getBlobClient();
  const path = `${CONTENT_PREFIX}${Date.now()}.json`;

  await put(path, JSON.stringify(content, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

async function appendChapter(input) {
  const title = sanitizeText(input.title, 80);
  const blurb = sanitizeText(input.mainLine, 240);
  const revealText = sanitizeText(input.hidden, 320);
  const caption = sanitizeText(input.memory, 120);
  const mediaUrl = String(input.mediaUrl || "").trim();
  const mediaMimeType = String(input.mediaMimeType || "").toLowerCase();

  if (!title || !blurb || !revealText || !mediaUrl) {
    throw new Error("Missing required fields. Please fill title, main line, hidden text, and photo.");
  }

  if (!mediaUrl.startsWith("https://")) {
    throw new Error("Invalid uploaded media URL.");
  }

  const mediaType = mediaMimeType.startsWith("video/") ? "video" : "image";
  const baseSlug = slugify(title);
  const stamp = Date.now();

  const chapter = {
    id: `${baseSlug}-${stamp}`,
    title,
    blurb,
    revealText,
    mediaType,
    mediaSrc: mediaUrl,
    mediaAlt: `${title} memory`,
    caption: caption || `${title} memory`,
  };

  const current = (await readLatestContent()) || {
    chapters: [],
  };

  const updated = {
    ...current,
    chapters: [...(Array.isArray(current.chapters) ? current.chapters : []), chapter],
  };

  await writeContentSnapshot(updated);

  return {
    chapter,
    updated,
  };
}

module.exports = {
  appendChapter,
  readLatestContent,
};
