const express = require('express');
const router = express.Router();
const { createShortUrl, redirectUrl } = require('../controllers/urlController');

// @route   POST /api/shorten
router.post('/api/shorten', createShortUrl);

// @route   GET /:urlId
router.get('/:urlId', redirectUrl);

module.exports = router;
