import { api, authHeaders } from "./client";

export async function fetchCurrentUser() {
  const res = await api.get("/users/me", { headers: await authHeaders() });
  return res.data.user;
}

export async function updateProfile(payload) {
  const res = await api.put("/users/me", payload, {
    headers: await authHeaders(),
  });
  return res.data.user;
}