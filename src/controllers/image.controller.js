const { imageService } = require("../services");

const downloadImages = async (req, res) => {
  const imageUrls = req.body.imageUrls;

  if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
    return res.status(400).json({ error: "Invalid or empty imageUrls array" });
  }

  try {
    const response = await imageService.downloadImages(imageUrls);
    res.status(200).json({ message: "Images downloaded successfully" });
  } catch (error) {
    console.error(`Failed to download images: ${error.message}`);
    res.status(500).json({ error: error });
  }
};

module.exports = { downloadImages };
