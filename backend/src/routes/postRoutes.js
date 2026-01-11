// src/routes/postRoutes.js

const express = require("express");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

const router = express.Router();

// Posts
router.get("/", postController.listPosts);
router.post("/", postController.createPost);

// Comments under a post
router.get("/:postId/comments", commentController.listComments);
router.post("/:postId/comments", commentController.addComment);

module.exports = router;