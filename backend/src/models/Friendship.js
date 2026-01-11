// src/models/Friendship.js
const { pool } = require("../config/dbConfig");

async function createFriendship({ userId1, userId2 }) {
  const result = await pool.query(
    "INSERT INTO friendships (user_id_1, user_id_2) VALUES ($1, $2) RETURNING id, user_id_1, user_id_2, created_at",
    [userId1, userId2]
  );
  return result.rows[0];
}

async function listFriends(userId) {
  const result = await pool.query(
    `SELECT 
       CASE 
         WHEN user_id_1 = $1 THEN user_id_2 
         ELSE user_id_1 
       END AS friend_id
     FROM friendships
     WHERE user_id_1 = $1 OR user_id_2 = $1`,
    [userId]
  );
  return result.rows.map((row) => row.friend_id);
}

module.exports = {
  createFriendship,
  listFriends,
};