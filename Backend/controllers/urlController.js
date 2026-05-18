const shortid = require('shortid');
const Url = require('../models/Url');

// @desc    Create short URL
const createShortUrl = async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;

  const urlId = shortid.generate();

  // Validate the base URL
  if (!base) {
    return res.status(500).json({ error: 'Base URL not configured' });
  }

  // Basic URL validation
  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  if (isValidUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date()
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid Original URL');
  }
};

// @desc    Redirect to original URL
const redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne({
        urlId: req.params.urlId,
      }, { $inc: { clicks: 1 } });
      return res.redirect(url.origUrl);
    } else {
      res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
};

module.exports = {
  createShortUrl,
  redirectUrl,
};
