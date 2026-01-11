// src/routes/friendRequestRoutes.js

const express = require("express");
const friendController = require("../controllers/friendRequestController");

const router = express.Router();

// Send friend request
router.post("/requests", friendController.sendRequest);

// Accept friend request
router.post("/requests/:id/accept", friendController.acceptRequest);

module.exports = router;