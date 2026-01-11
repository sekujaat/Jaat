// src/controllers/subscriptionController.js

const SubscriptionModel = require("../models/Subscription.model");

function sendError(res, status, message) {
  return res.status(status).json({ error: message });
}

async function getSubscription(req, res) {
  try {
    const { userId } = req.params;
    const subscription = await SubscriptionModel.getLatestSubscription(userId);
    return res.json({ subscription });
  } catch (err) {
    console.error("subscription.getSubscription error", err);
    return sendError(res, 500, "Internal server error");
  }
}

async function createOrUpdateSubscription(req, res) {
  try {
    const { userId, plan, status, validUntil } = req.body;

    if (!userId || !plan || !status) {
      return sendError(res, 400, "userId, plan, status are required");
    }

    const subscription = await SubscriptionModel.createSubscription({
      userId,
      plan,
      status,
      validUntil,
    });

    return res.status(201).json({ subscription });
  } catch (err) {
    console.error("subscription.createOrUpdateSubscription error", err);
    return sendError(res, 500, "Internal server error");
  }
}

module.exports = {
  getSubscription,
  createOrUpdateSubscription,
};