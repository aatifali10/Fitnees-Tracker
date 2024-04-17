const express = require("express");
const router = express.Router();
const UserController = require("../controllers/authControllers.js");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update-profile/:userId", UserController.updateProfile);

module.exports = router;
