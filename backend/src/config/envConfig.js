// src/config/envConfig.js

require("dotenv").config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4000,

  databaseUrl: process.env.DATABASE_URL,

  jwtSecret: process.env.JWT_SECRET || "change-me",

  clientOrigin: process.env.CLIENT_ORIGIN || "*",

  agoraAppId: process.env.AGORA_APP_ID,
  agoraAppCertificate: process.env.AGORA_APP_CERTIFICATE,
  agoraTokenServerUrl: process.env.AGORA_TOKEN_SERVER_URL || null,

  admobAppId: process.env.ADMOB_APP_ID || null,
  admobAdUnitId: process.env.ADMOB_AD_UNIT_ID || null,

  healthcheckSecret: process.env.HEALTHCHECK_SECRET || null,
};

if (!env.databaseUrl) {
  console.warn("⚠️ DATABASE_URL is not set in environment variables");
}

module.exports = env;