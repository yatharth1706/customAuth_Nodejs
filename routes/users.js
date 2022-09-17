const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/UserController");

router.get("/signup", UserController.signupUser);

router.get("/login", UserController.loginUser);

module.exports = router;
