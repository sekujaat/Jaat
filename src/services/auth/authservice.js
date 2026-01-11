import { api } from "../api/client";
import { secureStorage } from "../storage/secureStorage";

export async function login(email, password) {
  const res = await api.post("/auth/login", { email, password });
  const { token, user } = res.data;
  await secureStorage.set("auth_token", token);
  return user;
}

export async function signup(payload) {
  const res = await api.post("/auth/signup", payload);
  const { token, user } = res.data;
  await secureStorage.set("auth_token", token);
  return user;
}

export async function logout() {
  await secureStorage.remove("auth_token");
}

export async function getStoredToken() {
  return secureStorage.get("auth_token");
}