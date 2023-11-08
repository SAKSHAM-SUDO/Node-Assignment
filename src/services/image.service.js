const axios = require("axios");
const fs = require("fs");
const path = require("path");
const sanitize = require('sanitize-filename');

const downloadFolder = './downloads';

if (!fs.existsSync(downloadFolder)) {
  fs.mkdirSync(downloadFolder);
}

const downloadImage = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    const fileName = path.join(downloadFolder, sanitize(path.basename(url))); // Sanitize the filename
    const writer = fs.createWriteStream(fileName);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download image from ${url}: ${error.message}`);
    throw error;
  }

};

const downloadImages = async (imageUrls) => {
  try {
    await Promise.all(imageUrls.map(async (imageUrl) => {
      await downloadImage(imageUrl);
    }));
    console.log('All images downloaded successfully');
  } catch (error) {
    console.error(`Error downloading images: ${error.message}`);
    throw error;
  }
};

module.exports = { downloadImages };
