const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");

router.get("/", HomeController.index);

router.get("/register", UserController.register);
router.post("/register", UserController.registerAction);

router.get("/login", UserController.login);
router.post("/login", UserController.loginAction);

router.get("/logout", UserController.logout);

router.get("/secret", HomeController.secret);

module.exports = router;
