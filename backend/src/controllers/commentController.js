// src/controllers/commentController.js

const PostCommentModel = require("../models/PostComment");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

async function listComments(req, res) {
  try {
    const { postId } = req.params;
    const comments = await PostCommentModel.listComments(postId);
    return res.json({ comments });
  } catch (err) {
    console.error("comment.listComments error", err);
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
    console.error("comment.addComment error", err);
    return sendError(res, 500, "Internal server error");
  }
}

module.exports = {
  listComments,
  addComment,
};