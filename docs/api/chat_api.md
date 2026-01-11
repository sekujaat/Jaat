# Chat API

## GET /chats
List chat threads.

Headers:
- Authorization: Bearer

Query:
- limit (default 20)
- cursor

Response:
- items: Chat[]
- nextCursor

Chat:
- id
- lastMessagePreview
- lastMessageAt
- unreadCount
- members: [userId]

## GET /chats/:chatId/messages
Paginated messages for a thread.

Query:
- cursor
- limit (default 30)

Message:
- id
- chatId
- senderId
- body
- createdAt

## POST /chats/:chatId/messages
Send new message.

Body:
- message (string, required)

Response:
- 201: created Message

## POST /chats/start
Start or fetch 1‑1 chat between two users.

Body:
- userId (other user)

Response:
- chat object (existing or new)