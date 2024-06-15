"use strict";

module.exports = function (app) {
  var myJson = require("../controller/mainController");
  var registerContoller = require("../controller/registerController");
  var loginController = require("../controller/loginController");

  app.route("/").get(myJson.index); // router controller
  app.route("/tbl_service").get(myJson.tampiljasa); // router dari mainController
  app.route("/tbl_register").get(registerContoller.dataRegister); // router dari registerController
  app.route("/tbl_login").get(loginController.dataLogin); // router dari loginController
};
