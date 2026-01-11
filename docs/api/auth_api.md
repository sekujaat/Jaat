# Auth API

Base: `https://agora-node-tokenserver-1.onrender.com`

## POST /auth/signup
Create new account.

Body:
- email (string, required, unique)
- password (string, required, min 6)
- username (string, required, unique)

Responses:
- 201: `{ user, token }`
- 400: validation error (email in use, weak password)

## POST /auth/login
Authenticate user.

Body:
- email
- password

Responses:
- 200: `{ user, token }`
- 401: invalid credentials
- 423: account locked (optional)

## GET /auth/me
Get current profile.

Headers:
- Authorization: `Bearer <token>`

Responses:
- 200: `{ user }`
- 401: missing / invalid token

## POST /auth/logout
(Stateless JWT, optional)

Headers:
- Authorization: `Bearer <token>`

Response:
- 204 No Content  (client side token delete)

## POST /auth/refresh
Optional refresh token flow.

Body:
- refreshToken

Response:
- 200: `{ token, refreshToken }`