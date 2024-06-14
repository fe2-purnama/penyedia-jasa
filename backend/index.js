"use strict";

module.exports = function (app) {
  var myJson = require("./controller/mainController");

  app.route("/").get(myJson.tampiljasa);
};
