# Backend Architecture (Node.js + Express + Neon)

## Project layout

- src/
  - index.ts                # create Express app, start HTTP server
  - config/
    - env.ts                # read env vars (PORT, DATABASE_URL, JWT_SECRET, AGORA_APP_ID)
  - db/
    - pool.ts               # pg Pool using Neon connection string
    - migrations/           # SQL migration files
  - modules/
    - auth/
      - auth.routes.ts
      - auth.controller.ts
      - auth.service.ts
      - auth.types.ts
    - users/
      - users.routes.ts
      - users.controller.ts
      - users.repo.ts
    - chats/
      - chats.routes.ts
      - chats.controller.ts
      - chats.repo.ts
    - calls/
      - calls.routes.ts
      - calls.controller.ts
      - calls.repo.ts
    - subscription/
      - subscription.routes.ts
      - subscription.service.ts
    - analytics/
      - analytics.routes.ts
      - analytics.repo.ts
  - middlewares/
    - authMiddleware.ts     # verify JWT, attach req.user
    - errorHandler.ts       # central error formatting
    - loggingMiddleware.ts
  - utils/
    - logger.ts
    - password.ts           # hash, compare
    - validation.ts
  - types/
    - express.d.ts          # extend Request with user

Server boot:
1. load env, connect Neon, run migrations.  
2. register middlewares (JSON body, CORS, logging).  
3. mount module routers under `/auth`, `/users`, `/chats`, `/calls`, `/subscription`, `/analytics`.  
4. attach error handler last.  