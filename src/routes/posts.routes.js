const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Posts fetched successfully"
    });
});

module.exports = router;