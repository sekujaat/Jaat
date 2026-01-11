# Design Notes – Synce

Central notes for all wireframes, mockups, and flows.

---

## Visual Style

- Primary color: bright blue from `theme/colors.js` (e.g. #2563EB).
- Accent color: orange for call‑to‑action buttons.
- Background: mostly white with light grey surfaces.
- Typography:
  - Headings: bold, 20–24 pt.
  - Body: 14 pt, high contrast.
- Corners: medium rounded (10–16) for cards and buttons.
- Shadows: very subtle, mainly for floating cards and bottom sheets.

Goal: clean, minimal, friendly UI that looks native on Android.

---

## Layout Principles

- Use a single column layout with generous spacing between elements.
- Always keep key actions visible:
  - “Start random call” button centered on RandomCall screen.
  - “Start chat / Call” easily reachable on profiles.
- Use bottom tabs for main navigation:
  - Home, Search, Calls, Profile.
- Use stack navigation for details: chat, settings, subscription, advanced access.

Each screen should have:
- Header (title and optional back button).
- Main content area.
- Optional banner ad area for free users.

---

## Wireframes

### Home Wireframe

- Top:
  - App name or logo on left.
  - Small icon on right for notifications or advanced access.
- Body:
  - Scrollable list of cards:
    - avatar, username, short description.
    - “Call” or “Chat” icon buttons on each card.
- Bottom:
  - Tab bar: Home, Search, Calls, Profile.
- Optional:
  - Banner ad at bottom above tab bar.

### Profile Wireframe

- Header: “Profile”.
- Top section:
  - Circular avatar placeholder.
  - Username and short bio.
- Middle:
  - Stats row: calls, friends, premium badge (if active).
- Buttons:
  - “Edit profile”
  - “Subscription”
  - “Advanced access” (if enabled in build).
- List:
  - Settings, Privacy Policy, Terms of Use, Logout.

### Random Call Wireframe

- Header: “Random call”.
- Center:
  - Big “Start random call” button.
  - Status text under button (“Ready”, “Connecting…”, “In call”).
- Lower:
  - Link to “Call history”.
- Bottom:
  - Optional AdMob banner.

---

## Mockups

### Home Mockup

- Apply brand colors & icons.
- Each card uses:
  - avatar on left,
  - text on right,
  - subtle shadow and rounded corners.
- Use accent color for “Call” button and neutral for “Chat”.
- Show example content so developers understand spacing and text length.

### Subscription Mockup

- Two cards: Monthly, Yearly.
- Each card shows price, benefits list, and “Select” button.
- Highlight recommended plan with badge (e.g. “Best value”).
- Bottom fixed primary button: “Continue” or “Start subscription”.

### Advanced Access Mockup

- Grid or list of cards:
  - Usage data
  - Error logs
  - Device info
- Each card has icon, title, and short description.
- Use neutral palette to differentiate from main user features.

---

## Flows

### Login Flow

- Splash → Login/Signup → Home.
- Error cases:
  - Show inline error messages (under fields).
  - Avoid full‑screen alerts except for network failure.

### Random Call Flow

- RandomCallScreen:
  - User presses “Start random call”.
  - App fetches token from token server.
  - On success, join Agora channel and show video UI.
  - On end call, navigate back and append entry to CallHistory.

### Subscription Flow

- Profile → Subscription screen.
- User chooses plan and starts payment.
- After success:
  - Backend webhook sets `isPremium`.
  - App refreshes subscription status via `/subscription`.
  - UI hides ads and shows premium badge.

---

## Accessibility & UX

- Tap targets at least 44x44 points.
- High contrast between text and background.
- Do not rely on color alone to show errors (use text + icons).
- Show loading spinners during network requests and disable buttons to avoid double taps.

---

## Design‑to‑Dev Handoff

- The `.png` wireframes and mockups represent structure and style; code should follow them but can adjust for technical constraints.
- When updating designs, ensure:
  - navigationConstants route names stay unchanged, or update both docs and code.
  - API contracts remain in sync with `docs/api/*.md`.

These notes are a living document; any major UI change should be reflected here so implementation and docs never go out of sync.