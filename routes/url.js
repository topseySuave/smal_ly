const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const Url = require('../models/Url');

// @route   POST /api/uri
// @desc    Create short Url
router.post('/shorten', async(req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseURL') || process.env.baseURL;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).send('Invalid Url ');
    }

    // create Url code
    const urlCode = shortId.generate();

    // Check longUrl
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if (url) {
                res.send(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date(),
                    clicks: 0
                });

                await url.save();
                res.send(url);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    } else {
        res.status(401).send('Invalid Url');
    }
});

module.exports = router;