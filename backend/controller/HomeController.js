"use strict";

var response = require("../res");
var connection = require("../connection"); // Mengimpor koneksi.js

exports.index = function (req, res) {
  response.success("Aplikasi Rest API berjalan!", res); // Menggunakan response.success dari res.js
};


