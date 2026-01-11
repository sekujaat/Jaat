// src/models/Post.model.js
const { pool } = require("../config/dbConfig");

// Latest posts list karne ke liye
async function listPosts(limit = 100) {
  const result = await pool.query(
    "SELECT id, user_id, content, created_at FROM posts ORDER BY created_at DESC LIMIT $1",
    [limit]
  );
  return result.rows;
}

// Naya post banane ke liye
async function createPost({ userId, content }) {
  const result = await pool.query(
    "INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING id, user_id, content, created_at",
    [userId, content]
  );
  return result.rows[0];
}

module.exports = {
  listPosts,
  createPost,
};