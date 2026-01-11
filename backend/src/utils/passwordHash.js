// src/utils/passwordHash.js

const bcrypt = require("bcryptjs");

async function hashPassword(plain, saltRounds = 10) {
  return bcrypt.hash(plain, saltRounds);
}

async function comparePassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

module.exports = {
  hashPassword,
  comparePassword,
};