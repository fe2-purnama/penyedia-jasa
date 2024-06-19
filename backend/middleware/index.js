var express = require("express");
var session = require("express-session"); // Import session
var bodyParser = require("body-parser"); // Import body-parser
var auth = require("./auth");
var router = express.Router();
var verification = require("./verification");
var connection = require("../connection"); // Import connection

// Middleware body-parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Konfigurasi session
router.use(
  session({
    secret:
      "dasufdfdsfjdijsfiujgffosf9ewuirfejfiphg[spk-9eruagifjsfipjfri324iheoh3452hioewhr4o3h5irwfiiohfwo543fjsihfe4375847ghudsgfyu4t38tufsgvyut3w487g",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// daftar registration (/auth/api/register)
router.post("/api/register", auth.register);

// daftar login (/auth/api/login)
router.post("/api/login", (req, res) => auth.login(req, res, connection));

// Rute Dashboard
router.get("/admin/dashboard", verification("penyedia_jasa"), auth.dashboardAdmin);
router.get("/dashboard", auth.dashboard);

// lupa password (/routes/api/forgot)

module.exports = router;
