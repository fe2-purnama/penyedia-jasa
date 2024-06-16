"use strict";

module.exports = function (app) {
  var HomeController = require("./controller/HomeController");
  var RegisterController = require("./controller/RegisterController");
  var LoginController = require("./controller/LoginController");
  var ServicesController = require("./controller/ServiceController");

  //route controller
  app.route("/").get(HomeController.index);
  app.route("/register").post(RegisterController.register);
  app.route("/login").post(LoginController.Login);

  // SERVICE CRUD CONTROLLERS ROUTES ---------
  //GET
  app.route("/services").get(ServicesController.Services);
  app.route("/services/:id").get(ServicesController.ServicesById);
  //POST
  app.route("/postServices").post(ServicesController.ServicesPost);
  //PUT
  app.route("/putServices/:id").put(ServicesController.ServicePut);
  //DELETE
  app.route("/deleteServices/:id").delete(ServicesController.ServicesDelete);
};
