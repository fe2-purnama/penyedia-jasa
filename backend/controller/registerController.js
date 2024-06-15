"use strict";

var response = require("../res"); // Mengimpor res.js
var connection = require("../library/database"); // Mengimpor database.js

exports.index = function (req, res) {
  response.ok("Aplikasi Rest API berjalan!", res); // Menggunakan response.ok dari res.js
};

//Post Data
exports.dataRegister = function (req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let no_telpon = req.body.no_telpon;
  const query = `INSERT INTO register (username, email, password, no_telpon) VALUES (?,?,?,?)`;
  connection.query(
    query,
    [username, email, password, no_telpon],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok("Berhasil menambahkan data register", res);
      }
    }
  );
};
