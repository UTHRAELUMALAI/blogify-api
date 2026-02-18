const express = require('express');
const router = express.Router();

// Import controller
const postController = require('../controllers/posts.controller');

// Use controller function
router.get('/', postController.getAllPosts);

module.exports = router;