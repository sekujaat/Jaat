// src/models/PostLike.js
const { pool } = require("../config/dbConfig");

async function likePost({ postId, userId }) {
  const result = await pool.query(
    "INSERT INTO post_likes (post_id, user_id) VALUES ($1, $2) ON CONFLICT (post_id, user_id) DO NOTHING RETURNING id, post_id, user_id, created_at",
    [postId, userId]
  );
  return result.rows[0] || null;
}

async function unlikePost({ postId, userId }) {
  await pool.query(
    "DELETE FROM post_likes WHERE post_id = $1 AND user_id = $2",
    [postId, userId]
  );
}

async function countLikes(postId) {
  const result = await pool.query(
    "SELECT COUNT(*)::int AS count FROM post_likes WHERE post_id = $1",
    [postId]
  );
  return result.rows[0].count;
}

module.exports = {
  likePost,
  unlikePost,
  countLikes,
};