"use strict";

module.exports = function (app) {
  var HomeController = require("./controller/HomeController");
  var RegisterController = require("./controller/RegisterController");
  var ServicesController = require("./controller/ServiceController");
  var OrdersController = require("./controller/OrderController");

  //route controller
  app.route("/").get(HomeController.index);
  app.route("/register").post(RegisterController.register);

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

  // ORDER CRUD CONTROLLERS ROUTES ---------
  //GET
  app.route("/order").get(OrdersController.Orders);
  app.route("/order/:id").get(OrdersController.OrderById);
  //POST
  app.route("/postOrder").post(OrdersController.OrderPost);
  //PUT
  app.route("/putOrder/:id").put(OrdersController.OrderPut);
  //DELETE
  app.route("/deleteOrder/:id").delete(OrdersController.OrderDelete);
};
