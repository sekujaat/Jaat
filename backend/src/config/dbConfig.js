// src/config/dbConfig.js

const { Pool } = require("pg");
const env = require("./envConfig");

const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: { rejectUnauthorized: false }, // Neon requires SSL
});

async function connectDB() {
  await pool.query("SELECT 1");
  console.log("✅ PostgreSQL / Neon connection OK");
}

module.exports = {
  pool,
  connectDB,
};