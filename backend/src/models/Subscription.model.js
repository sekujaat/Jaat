// src/models/Subscription.model.js
const { pool } = require("../config/dbConfig");

async function getLatestSubscription(userId) {
  const result = await pool.query(
    "SELECT id, user_id, plan, status, valid_until, created_at FROM subscriptions WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1",
    [userId]
  );
  return result.rows[0] || null;
}

async function createSubscription({ userId, plan, status, validUntil }) {
  const result = await pool.query(
    "INSERT INTO subscriptions (user_id, plan, status, valid_until) VALUES ($1, $2, $3, $4) RETURNING id, user_id, plan, status, valid_until, created_at",
    [userId, plan, status, validUntil || null]
  );
  return result.rows[0];
}

module.exports = {
  getLatestSubscription,
  createSubscription,
};