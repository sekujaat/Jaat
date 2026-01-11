// backend/db.js
const { pool, connectDB } = require("./src/config/dbConfig");
module.exports = { pool, connectDB };