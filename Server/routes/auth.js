const express = require("express");
const router = express.Router();
const { get, register, login } = require("../controllers/authController");

// router.get("/get", get);
// router.post("/register", register);
router.post("/login", login);

module.exports = router;
