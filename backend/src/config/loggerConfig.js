// src/config/loggerConfig.js

const morgan = require("morgan");

// Simple HTTP request logger middleware
// app.js me: const { httpLogger } = require("./config/loggerConfig");
const httpLogger = morgan("combined");

// Simple helper for logging messages with levels
function logInfo(message, meta = {}) {
  console.log("ℹ️ INFO:", message, Object.keys(meta).length ? meta : "");
}

function logError(message, error) {
  console.error("❌ ERROR:", message, error || "");
}

function logWarn(message, meta = {}) {
  console.warn("⚠️ WARN:", message, Object.keys(meta).length ? meta : "");
}

module.exports = {
  httpLogger,
  logInfo,
  logError,
  logWarn,
};