import axios from "axios";
import { secureStorage } from "../storage/secureStorage";

// MAIN backend (Node.js + Neon)
export const api = axios.create({
  baseURL: "https://agora-node-tokenserver-1.onrender.com",
});

export async function authHeaders() {
  const token = await secureStorage.get("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}