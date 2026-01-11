import { api, authHeaders } from "./client";

export async function fetchChatList() {
  const res = await api.get("/chats", { headers: await authHeaders() });
  return res.data.items ?? [];
}

export async function fetchMessages(chatId) {
  const res = await api.get(`/chats/${chatId}/messages`, {
    headers: await authHeaders(),
  });
  return res.data.items ?? [];
}

export async function sendMessageApi(chatId, message) {
  const res = await api.post(
    `/chats/${chatId}/messages`,
    { message },
    { headers: await authHeaders() }
  );
  return res.data;
}