import { api, authHeaders } from "./client";

export async function fetchFriendRequests() {
  const res = await api.get("/friends/requests", {
    headers: await authHeaders(),
  });
  return res.data.items ?? [];
}

export async function respondToRequest(requestId, accept) {
  const res = await api.post(
    `/friends/requests/${requestId}/${accept ? "accept" : "reject"}`,
    {},
    { headers: await authHeaders() }
  );
  return res.data;
}