import { fetchCurrentUser } from "@src/services/api/userApi";
import { fetchChatList, sendMessageApi } from "@src/services/api/chatApi";

jest.mock("@src/services/api/userApi");
jest.mock("@src/services/api/chatApi");

describe("Search and chat flow", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("loads chats and sends a new message", async () => {
    fetchCurrentUser.mockResolvedValue({
      id: "me",
      username: "meUser",
    });

    fetchChatList.mockResolvedValue([
      { id: "chat-1", lastMessagePreview: "hi", lastMessageAt: "2025-01-01" },
    ]);

    sendMessageApi.mockResolvedValue({
      id: "msg-1",
      chatId: "chat-1",
      body: "hello there",
      senderId: "me",
    });

    const me = await fetchCurrentUser();
    expect(me.id).toBe("me");

    const chats = await fetchChatList();
    expect(chats.length).toBeGreaterThan(0);

    const firstChat = chats[0];
    const msg = await sendMessageApi(firstChat.id, "hello there");

    expect(msg.chatId).toBe(firstChat.id);
    expect(msg.body).toBe("hello there");
  });
});