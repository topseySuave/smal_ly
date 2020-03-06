const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route   GET /:id
// @desc    Redirect to long Url
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const url = await Url.findOne({ urlCode: id });

        if (url) {
            url.clicks++;
            url.save();

            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No Url Found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }

});

module.exports = router;