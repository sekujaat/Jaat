// src/config/agoraConfig.js

const env = require("./envConfig");

const agoraConfig = {
  appId: env.agoraAppId,
  appCertificate: env.agoraAppCertificate,
  tokenServerUrl: env.agoraTokenServerUrl, // existing Render token server
};

// Basic safety checks
if (!agoraConfig.appId) {
  console.warn("⚠️ AGORA_APP_ID is not set in environment variables");
}

if (!agoraConfig.appCertificate) {
  console.warn("⚠️ AGORA_APP_CERTIFICATE is not set in environment variables");
}

module.exports = agoraConfig;