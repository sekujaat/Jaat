// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Config
const env = require("./config/envConfig");

// Middlewares
const { attachLocation } = require("./middlewares/locationMiddleware");
const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const callRoutes = require("./routes/callRoutes");
const chatRoutes = require("./routes/chatRoutes");
const postRoutes = require("./routes/postRoutes");
const friendRequestRoutes = require("./routes/friendRequestRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const tokenRoutes = require("./routes/token.routes");

const app = express();

// CORS
app.use(
  cors({
    origin: env.clientOrigin === "*" ? "*" : [env.clientOrigin],
    credentials: true,
  })
);

// Body parsers
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Logging
app.use(morgan("dev"));

// Attach location info
app.use(attachLocation);

// Healthcheck (Render / uptime)
app.get("/health", (req, res) => {
  if (
    env.healthcheckSecret &&
    req.query.secret !== env.healthcheckSecret
  ) {
    return res.status(401).json({ status: "unauthorized" });
  }

  return res.json({ status: "ok", timestamp: Date.now() });
});

// Simple info route
app.get("/api/info", (req, res) => {
  res.json({
    app: "React Native + Node.js + Agora + AdMob backend",
    agoraTokenServer: env.agoraTokenServerUrl || null,
    admobAppId: env.admobAppId || null,
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/call", callRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/friends", friendRequestRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/token", tokenRoutes);

// 404 + error handlers
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;