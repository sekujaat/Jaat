// src/routes/subscriptionRoutes.js

const express = require("express");
const subscriptionController = require("../controllers/subscriptionController");

const router = express.Router();

// GET /api/subscriptions/:userId
router.get("/:userId", subscriptionController.getSubscription);

// POST /api/subscriptions
router.post("/", subscriptionController.createOrUpdateSubscription);

module.exports = router;