import axios from "axios";
import { secureStorage } from "./storage/secureStorage";

const api = axios.create({
  baseURL: "https://YOUR-RENDER-URL/api",
});

async function authHeaders() {
  const token = await secureStorage.get("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchChats() {
  const res = await api.get("/chats", { headers: await authHeaders() });
  return res.data.items ?? [];
}

export async function sendMessage(chatId, message) {
  const res = await api.post(
    `/chats/${chatId}/messages`,
    { message },
    { headers: await authHeaders() }
  );
  return res.data;
}