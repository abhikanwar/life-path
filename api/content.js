const { readLatestContent } = require("./_content-store");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const content = await readLatestContent();
    return res.status(200).json({ content: content || null });
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Failed to load content",
    });
  }
};
