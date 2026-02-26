const { handleUpload } = require("@vercel/blob/client");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const expectedPasscode = String(process.env.ADMIN_PASSCODE || "").trim();
  if (!expectedPasscode) {
    return res.status(500).json({ error: "ADMIN_PASSCODE is not configured on server." });
  }

  try {
    const json = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        const parsedPayload = JSON.parse(clientPayload || "{}");
        const providedPasscode = String(parsedPayload.passcode || "").trim();
        const mediaKind = String(parsedPayload.mediaKind || "");

        if (providedPasscode !== expectedPasscode) {
          throw new Error("Invalid admin passcode.");
        }

        return {
          allowedContentTypes:
            mediaKind === "video" ? ["video/mp4", "video/quicktime", "video/webm"] : ["image/jpeg", "image/png", "image/webp", "image/gif"],
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({
            mediaKind,
          }),
        };
      },
      onUploadCompleted: async () => {},
    });

    return res.status(200).json(json);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Could not create upload token.",
    });
  }
};
