// src/controllers/postController.js

const PostModel = require("../models/Post.model");
const PostCommentModel = require("../models/PostComment");
const PostLikeModel = require("../models/PostLike");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

async function listPosts(req, res) {
  try {
    const posts = await PostModel.listPosts();
    return res.json({ posts });
  } catch (err) {
    console.error("post.listPosts error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function createPost(req, res) {
  try {
    const { userId, content } = req.body;

    if (!userId || !content) {
      return sendError(res, 400, "userId and content are required");
    }

    const post = await PostModel.createPost({ userId, content });

    return res.status(201).json({ post });
  } catch (err) {
    console.error("post.createPost error", err);
    return sendError(res, 500, "Internal server error");
  }
}

// Comments helper controllers (agar separate commentController use karna ho to yeh wahan shift kar sakte ho)
async function listComments(req, res) {
  try {
    const { postId } = req.params;
    const comments = await PostCommentModel.listComments(postId);
    return res.json({ comments });
  } catch (err) {
    console.error("post.listComments error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function addComment(req, res) {
  try {
    const { postId } = req.params;
    const { userId, content } = req.body;

    if (!userId || !content) {
      return sendError(res, 400, "userId and content are required");
    }

    const comment = await PostCommentModel.createComment({
      postId,
      userId,
      content,
    });

    return res.status(201).json({ comment });
  } catch (err) {
    console.error("post.addComment error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function likePost(req, res) {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return sendError(res, 400, "userId is required");
    }

    const like = await PostLikeModel.likePost({ postId, userId });
    const count = await PostLikeModel.countLikes(postId);

    return res.json({ like, likeCount: count });
  } catch (err) {
    console.error("post.likePost error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function unlikePost(req, res) {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return sendError(res, 400, "userId is required");
    }

    await PostLikeModel.unlikePost({ postId, userId });
    const count = await PostLikeModel.countLikes(postId);

    return res.json({ likeCount: count });
  } catch (err) {
    console.error("post.unlikePost error", err);
    return sendError(res, 500, "Internal server error");
  }
}

module.exports = {
  listPosts,
  createPost,
  listComments,
  addComment,
  likePost,
  unlikePost,
};