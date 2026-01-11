# Call API

Used for history + analytics of Agora calls.

## GET /calls/history
List recent calls for current user.

Headers:
- Authorization: `Bearer <token>`

Query:
- limit (int, default 20)
- cursor (string, optional, for pagination)

Response:
- 200: 
  - items: Call[]
  - nextCursor: string | null

Call:
- id (uuid)
- direction: "incoming" | "outgoing"
- peerId (uuid)
- type: "video"
- status: "completed" | "missed" | "rejected" | "failed"
- durationSeconds (int)
- startedAt (ISO date)

## POST /calls/log
Called by backend after each call.

Headers:
- Authorization: `Bearer <token>`

Body:
- peerId
- type
- status
- durationSeconds
- startedAt
- endedAt