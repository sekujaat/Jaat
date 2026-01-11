# User API

## GET /users/me
Return detailed profile.

Response:
- id
- email
- username
- bio
- avatarUrl
- createdAt
- isPremium

## PUT /users/me
Update editable fields.

Body:
- username? (string)
- bio? (string)
- avatarUrl? (string)

## GET /users/:id
Public profile by id.

Response:
- id
- username
- bio
- avatarUrl
- isOnline?

## GET /users/search
Search by name/username.

Query:
- q (string)
- limit (default 20)

Response:
- items: UserSummary[]