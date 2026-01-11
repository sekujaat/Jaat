// src/models/User.model.js
const { pool } = require("../config/dbConfig");

async function createUser({ email, passwordHash, username }) {
  const result = await pool.query(
    "INSERT INTO users (email, password_hash, username) VALUES ($1, $2, $3) RETURNING id, email, username, created_at",
    [email, passwordHash, username || null]
  );
  return result.rows[0];
}

async function findUserByEmail(email) {
  const result = await pool.query(
    "SELECT id, email, username, password_hash, created_at FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0] || null;
}

async function findUserById(id) {
  const result = await pool.query(
    "SELECT id, email, username, created_at FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}

async function listUsers(limit = 50) {
  const result = await pool.query(
    "SELECT id, email, username, created_at FROM users ORDER BY created_at DESC LIMIT $1",
    [limit]
  );
  return result.rows;
}

async function updateUser(id, { username }) {
  const result = await pool.query(
    "UPDATE users SET username = COALESCE($1, username) WHERE id = $2 RETURNING id, email, username, created_at",
    [username || null, id]
  );
  return result.rows[0] || null;
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  listUsers,
  updateUser,
};