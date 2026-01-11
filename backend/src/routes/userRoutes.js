// src/routes/userRoutes.js

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.listUsers);
router.get("/:id", userController.getUser);
router.patch("/:id", userController.updateUser);

module.exports = router;