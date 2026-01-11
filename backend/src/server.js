// server.js (root of backend)
require("dotenv").config();
const http = require("http");
const app = require("./src/app");

// Optional: DB connect (assuming ./db.js exports connectDB)
const { connectDB } = require("./db");

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    // Connect to Neon / PostgreSQL
    await connectDB();
    console.log("✅ Connected to PostgreSQL / Neon");

    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
}

startServer();