// src/models/FriendRequest.model.js
const { pool } = require("../config/dbConfig");

async function createFriendRequest({ fromUserId, toUserId }) {
  const result = await pool.query(
    "INSERT INTO friend_requests (from_user_id, to_user_id, status) VALUES ($1, $2, 'pending') RETURNING id, from_user_id, to_user_id, status, created_at",
    [fromUserId, toUserId]
  );
  return result.rows[0];
}

async function updateFriendRequestStatus(id, status) {
  const result = await pool.query(
    "UPDATE friend_requests SET status = $1 WHERE id = $2 RETURNING id, from_user_id, to_user_id, status, created_at",
    [status, id]
  );
  return result.rows[0] || null;
}

async function listFriendRequestsForUser(userId) {
  const result = await pool.query(
    "SELECT * FROM friend_requests WHERE to_user_id = $1 ORDER BY created_at DESC",
    [userId]
  );
  return result.rows;
}

module.exports = {
  createFriendRequest,
  updateFriendRequestStatus,
  listFriendRequestsForUser,
};