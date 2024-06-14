"use strict";

var response = require("../res"); // Mengimpor res.js
var connection = require("../library/database"); // Mengimpor database.js

exports.index = function (req, res) {
  response.ok("Aplikasi Rest API berjalan!", res); // Menggunakan response.ok dari res.js
};

// Tampilkan Data Kategori
exports.tampiljasa = function (req, res) {
  connection.query("SELECT * FROM tbl_services", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res); // Menggunakan response.ok untuk mengirim data
    }
  });
};
