// src/middlewares/rateLimitMiddleware.js

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 60; // per IP per window

const hits = new Map();

function rateLimit(req, res, next) {
  const now = Date.now();
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (!hits.has(ip)) {
    hits.set(ip, []);
  }

  const timestamps = hits.get(ip).filter((ts) => now - ts < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);

  if (timestamps.length > MAX_REQUESTS) {
    return res
      .status(429)
      .json({ error: "Too many requests, please slow down" });
  }

  return next();
}

module.exports = {
  rateLimit,
};