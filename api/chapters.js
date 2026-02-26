const { appendChapter } = require("./_content-store");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const expectedPasscode = String(process.env.ADMIN_PASSCODE || "").trim();
  const providedPasscode = String(req.headers["x-admin-passcode"] || "").trim();
  if (!expectedPasscode) {
    return res.status(500).json({ error: "ADMIN_PASSCODE is not configured on server." });
  }
  if (providedPasscode !== expectedPasscode) {
    return res.status(401).json({ error: "Invalid admin passcode." });
  }

  try {
    const { title, memory, mainLine, hidden, mediaUrl, mediaMimeType } = req.body || {};

    const { chapter, updated } = await appendChapter({
      title,
      memory,
      mainLine,
      hidden,
      mediaUrl,
      mediaMimeType,
    });

    return res.status(201).json({
      ok: true,
      chapter,
      totalChapters: Array.isArray(updated.chapters) ? updated.chapters.length : 0,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Failed to create chapter",
    });
  }
};
