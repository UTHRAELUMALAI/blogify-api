const express = require("express");

const router = express.Router();

// Move your posts route here
router.get("/posts", (req, res) => {
  res.status(200).json({
    message: "Posts fetched successfully",
    data: []
  });
});

module.exports = router;
