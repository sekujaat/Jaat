import axios from "axios";
import { secureStorage } from "./storage/secureStorage";

const api = axios.create({
  baseURL: "https://YOUR-RENDER-URL/api",
});

async function authHeaders() {
  const token = await secureStorage.get("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function createPremiumSession() {
  const res = await api.post(
    "/payments/create-session",
    {},
    { headers: await authHeaders() }
  );
  return res.data; // e.g. { checkoutUrl }
}

export async function checkSubscriptionStatus() {
  const res = await api.get("/payments/subscription", {
    headers: await authHeaders(),
  });
  return res.data; // { isPremium, plan, expiresAt }
}