// src/services/paymentService.js

const SubscriptionModel = require("../models/Subscription.model");

// Placeholder payment logic; real life me Stripe/Razorpay SDK use hoga
async function createSubscriptionFromPayment({
  userId,
  plan,
  paymentStatus,
  validUntil,
}) {
  if (paymentStatus !== "success") {
    throw new Error("Payment not successful");
  }

  const subscription = await SubscriptionModel.createSubscription({
    userId,
    plan,
    status: "active",
    validUntil,
  });

  return subscription;
}

module.exports = {
  createSubscriptionFromPayment,
};