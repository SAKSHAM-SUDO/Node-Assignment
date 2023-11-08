const express = require('express');
const imageController = require('../controllers/image.controller');
const router = express.Router();

router.post('/download', imageController.downloadImages);

module.exports = router;
