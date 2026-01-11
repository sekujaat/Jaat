# Subscription API

Monetization + premium features.

## GET /subscription
Get current subscription for logged in user.

Response:
- isPremium (boolean)
- plan: "monthly" | "yearly" | null
- status: "none" | "active" | "canceled" | "past_due"
- currentPeriodEnd (ISO | null)

## POST /subscription/start
Create subscription.

Body:
- plan: "monthly" | "yearly"
- paymentProvider: "playstore" | "stripe" | "test"

Response:
- checkoutUrl? (for web)
- clientSecret? (if using Stripe)
- status: "pending" | "active"

## POST /subscription/webhook
Webhook endpoint for provider (server‑to‑server).

Used to mark user as premium and set `currentPeriodEnd`.

## POST /subscription/cancel
Request cancel at period end.

Response:
- status: "canceled"