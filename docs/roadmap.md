# Synce Roadmap

This roadmap is split into phases so the app can ship early and improve over time.

---

## Phase 0 – Setup (Week 1)

- Create Git repo and basic folder structure for:
  - React Native app (`src/screens`, `services`, `theme`, `docs`).
  - Node.js backend on Render (`src/modules`, `db`, `config`).
- Configure Neon PostgreSQL database and store `DATABASE_URL` in Render env.
- Integrate basic tools:
  - ESLint + Prettier.
  - Logger util and error handling middleware.
- Define all architecture, API, product, and legal docs (this folder).

Deliverable: skeleton app that builds, empty screens, health‑check endpoint.

---

## Phase 1 – Core Auth + Profile (Week 2–3)

Backend:
- Implement `/auth/signup`, `/auth/login`, `/auth/me` with JWT.
- Implement `/users/me`, `/users/:id`, `/users/search`.
- Store password hashes using a secure algorithm (bcrypt or argon2).
- Add input validation and rate limiting for auth endpoints.

Frontend:
- Build Login, Signup, and Profile screens using wireframes + theme.
- Set up `AuthContext` to store user object and token.
- Hook `authservice.js` + `userApi.js` to real backend.
- Handle loading states and common error messages.

Deliverable: user can create an account, log in, edit profile, and stay logged in.

---

## Phase 2 – Chats (Week 4)

Backend:
- Create tables: `chats`, `chat_members`, `messages`.
- Endpoints:
  - `GET /chats`, `GET /chats/:chatId/messages`,
  - `POST /chats/:chatId/messages`,
  - `POST /chats/start`.
- Implement pagination and basic moderation (max message length, spam limits).

Frontend:
- Implement Chat List and Chat screens.
- Connect to `chatApi.js` for fetch + send.
- Add message time formatting and basic “typing / sending” states.

Deliverable: users can text chat with each other, with history saved in Neon.

---

## Phase 3 – Random Video Calls (Week 5–6)

Backend:
- Confirm Agora token server URLs and response shape.
- Call‑logging endpoints:
  - `GET /calls/history`,
  - `POST /calls/log`.
- (Optional) Simple random match endpoint that pairs available users.

Frontend:
- Implement RandomCallScreen + CallHistoryScreen as per wireframes.
- Use `videoCallConfig` and `videoCallService` to fetch token via:
  - `https://agora-node-tokenserver-7ivo.onrender.com/rtcToken`.
- Integrate Agora SDK in React Native:
  - join channel, handle remote user join/leave,
  - end call and send log to backend.

Deliverable: working random video call feature with history list.

---

## Phase 4 – Monetization (Week 7)

Backend:
- Add `subscriptions` table and subscription endpoints.
- Integrate payment provider (Play Store or Stripe) and webhook.
- Track user’s `isPremium` status in `users` table or through joins.

Frontend:
- Build Subscription screen (mockups).
- Implement `subscriptionApi.js` calls.
- Hide ads and enable premium features when `isPremium` is true.

Deliverable: premium subscriptions live, with backend correctly updating Neon.

---

## Phase 5 – Ads + Analytics (Week 8)

Ads:
- Replace AdMob test IDs with production IDs in `adsService.js`.
- Decide where banners/interstitials appear (Home, RandomCall, etc.).
- Ensure ads are not shown to premium users.

Analytics:
- Connect `usageTracker.js` and `advancedAccessData.js` to backend endpoints.
- Track key events: screen views, calls started/ended, messages sent,
  subscription started/canceled.

Deliverable: app generates useful analytics for future optimization.

---

## Phase 6 – Safety & Legal (Week 9)

- Extend reporting / block flow for users.
- Improve privacy policy and terms of use drafts with a lawyer or template review.
- Add in‑app links to Privacy Policy and Terms from Profile/Settings.
- Implement data deletion request flow (at least manual via support).

Deliverable: stronger trust & safety baseline.

---

## Phase 7 – Polish & Optimization (Week 10+)

- UI polish: animations, empty states, better error messages.
- Performance: query indexes in Neon, caching hot routes, image optimization.
- A/B tests for onboarding and subscription paywall.

This roadmap can shift as feedback comes in, but phases should always keep the app shippable at the end of each stage.