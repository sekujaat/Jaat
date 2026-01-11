// src/models/Call.model.js
const { pool } = require("../config/dbConfig");

async function logCall({ channel, callerId, calleeId, status }) {
  const result = await pool.query(
    "INSERT INTO calls (channel, caller_id, callee_id, status) VALUES ($1, $2, $3, $4) RETURNING id, channel, caller_id, callee_id, status, created_at",
    [channel, callerId, calleeId, status || "initiated"]
  );
  return result.rows[0];
}

async function listCallsForUser(userId, limit = 50) {
  const result = await pool.query(
    "SELECT * FROM calls WHERE caller_id = $1 OR callee_id = $1 ORDER BY created_at DESC LIMIT $2",
    [userId, limit]
  );
  return result.rows;
}

module.exports = {
  logCall,
  listCallsForUser,
};