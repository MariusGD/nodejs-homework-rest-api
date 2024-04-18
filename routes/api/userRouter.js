const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", authMiddleware, userController.logout);
router.patch("/", authMiddleware, userController.updateSubscription);

module.exports = router;
