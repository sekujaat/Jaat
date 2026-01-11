// db.js

// 1) pg se Pool class import karo
const { Pool } = require("pg");

// 2) Pool banao, Neon ka DATABASE_URL use karke
//    Ye URL .env file me hai (DATABASE_URL=postgresql://...)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Neon ko SSL chahiye
});

// 3) Ek simple function jo DB se connect test kare
async function connectDB() {
  // Yeh sirf "SELECT 1" run karega, agar error aaya to throw ho jayega
  await pool.query("SELECT 1");
}

// 4) Baahar use karne ke liye export karo
module.exports = {
  pool,       // queries ke liye
  connectDB,  // server start se pehle call karne ke liye
};