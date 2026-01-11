// src/models/PostComment.js
const { pool } = require("../config/dbConfig");

async function listComments(postId) {
  const result = await pool.query(
    "SELECT id, post_id, user_id, content, created_at FROM comments WHERE post_id = $1 ORDER BY created_at ASC",
    [postId]
  );
  return result.rows;
}

async function createComment({ postId, userId, content }) {
  const result = await pool.query(
    "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING id, post_id, user_id, content, created_at",
    [postId, userId, content]
  );
  return result.rows[0];
}

module.exports = {
  listComments,
  createComment,
};