var express = require("express");
var auth = require("./auth");
var router = express.Router();
var verification = require("./verification");

// daftar registration (/auth/api/register)
router.post("/api/register", auth.register);

// daftar login (/auth/api/login)
router.post("/api/login", auth.login);
router.get("/api/verify", verification(), auth.dashboard);

module.exports = router;
