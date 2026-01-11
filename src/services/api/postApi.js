import { api, authHeaders } from "./client";

export async function fetchFeed() {
  const res = await api.get("/posts/feed", {
    headers: await authHeaders(),
  });
  return res.data.items ?? [];
}

export async function createPost(title, body) {
  const res = await api.post(
    "/posts",
    { title, body },
    { headers: await authHeaders() }
  );
  return res.data.post;
}