// src/utils/generateToken.js

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const env = require("../config/envConfig");

// Random string token (invite, reset-password, etc.)
function generateRandomToken(length = 32) {
  return crypto.randomBytes(length).toString("hex");
}

// Simple UUID v4
function generateUUID() {
  return crypto.randomUUID();
}

// JWT token (baad me auth me use kar sakte ho)
function generateJwtToken(payload, expiresIn = "7d") {
  if (!env.jwtSecret) {
    throw new Error("JWT secret missing");
  }
  return jwt.sign(payload, env.jwtSecret, { expiresIn });
}

module.exports = {
  generateRandomToken,
  generateUUID,
  generateJwtToken,
};