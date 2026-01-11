// src/models/Chat.model.js
const { pool } = require("../config/dbConfig");

async function listMessages(channel, limit = 200) {
  const result = await pool.query(
    "SELECT id, channel, sender_id, content, created_at FROM messages WHERE channel = $1 ORDER BY created_at ASC LIMIT $2",
    [channel, limit]
  );
  return result.rows;
}

async function createMessage({ channel, senderId, content }) {
  const result = await pool.query(
    "INSERT INTO messages (channel, sender_id, content) VALUES ($1, $2, $3) RETURNING id, channel, sender_id, content, created_at",
    [channel, senderId, content]
  );
  return result.rows[0];
}

module.exports = {
  listMessages,
  createMessage,
};