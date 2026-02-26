const CONTENT_PREFIX = "couple/content-";
const UPLOAD_PREFIX = "couple/uploads";

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

function parseDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid image data. Please choose a valid image file.");
  }

  const mimeType = match[1];
  const base64Payload = match[2];
  const buffer = Buffer.from(base64Payload, "base64");

  return {
    mimeType,
    buffer,
  };
}

function extensionFromMime(mimeType) {
  const [type, subtypeRaw] = String(mimeType).split("/");
  const subtype = String(subtypeRaw || "bin").toLowerCase();
  if (subtype.includes("jpeg")) return "jpg";
  if (subtype.includes("quicktime")) return "mov";
  if (subtype.includes("x-matroska")) return "mkv";
  if (!type) return "bin";
  return subtype.replace(/[^a-z0-9]/g, "") || "bin";
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
  const { put } = getBlobClient();

  const title = sanitizeText(input.title, 80);
  const blurb = sanitizeText(input.mainLine, 240);
  const revealText = sanitizeText(input.hidden, 320);
  const caption = sanitizeText(input.memory, 120);

  if (!title || !blurb || !revealText || !input.imageDataUrl) {
    throw new Error("Missing required fields. Please fill title, main line, hidden text, and photo.");
  }

  const { mimeType, buffer } = parseDataUrl(input.imageDataUrl);
  const mediaType = mimeType.startsWith("video/") ? "video" : "image";
  const ext = extensionFromMime(mimeType);
  const baseSlug = slugify(title);
  const stamp = Date.now();
  const mediaPath = `${UPLOAD_PREFIX}/${stamp}-${baseSlug}.${ext}`;

  const upload = await put(mediaPath, buffer, {
    access: "public",
    addRandomSuffix: false,
    contentType: mimeType,
  });

  const chapter = {
    id: `${baseSlug}-${stamp}`,
    title,
    blurb,
    revealText,
    mediaType,
    mediaSrc: upload.url,
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
