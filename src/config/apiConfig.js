// src/config/apiConfig.js

import { BACKEND_BASE_URL } from "./env";

const base = BACKEND_BASE_URL.replace(//$/, "");

export const apiConfig = {
  baseUrl: base,
  endpoints: {
    health: "/health",
    generateToken: "/api/call/token",
    reportUser: "/api/report",
    posts: "/api/posts",
    users: "/api/users",
  },
};

export const buildUrl = (path) => `${base}${path}`;