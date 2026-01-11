# Synce

React Native + Node.js stack with AdMob, Agora, Render and PostgreSQL/Neon.

## Tech stack

- React Native 0.74 (mobile app)
- Node.js backend (Express) – `backend/` folder
- PostgreSQL on Neon (database)
- Render.com for hosting backend
- AdMob for ads (mobile)
- Agora for voice/video calls (mobile)

## Scripts

- `npm start` – Metro bundler
- `npm run android` – Run Android app (with Android SDK/Emulator)
- `npm run ios` – Run iOS app (Mac/Xcode required)
- `npm test` – Jest test suite
- `npm run lint` – ESLint
- `npm run backend` – Start Node.js backend

## Environment

Create a `.env` file (not committed to Git) for secrets:

- AdMob app ID and ad unit IDs
- Agora APP_ID and token endpoint URL
- Backend API base URL (Render)
- Neon PostgreSQL connection string

These values will be wired into the app and backend code in later steps.