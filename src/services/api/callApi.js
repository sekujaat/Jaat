import { api, authHeaders } from "./client";

export async function fetchCallHistoryApi() {
  const res = await api.get("/calls/history", {
    headers: await authHeaders(),
  });
  return res.data.items ?? [];
}