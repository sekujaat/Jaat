import { api, authHeaders } from "./client";

export async function getSubscriptionStatus() {
  const res = await api.get("/subscription", {
    headers: await authHeaders(),
  });
  return res.data;
}

export async function startSubscription(plan) {
  const res = await api.post(
    "/subscription/start",
    { plan },
    { headers: await authHeaders() }
  );
  return res.data;
}

export async function cancelSubscription() {
  const res = await api.post(
    "/subscription/cancel",
    {},
    { headers: await authHeaders() }
  );
  return res.data;
}