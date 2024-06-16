"use strict";

var response = require("../res");
var connection = require("../connection");

exports.Login = function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  const query = `
  INSERT INTO tbl_login (regis_id, email, password)
  SELECT regis_id, email, password
  FROM tbl_register
  WHERE email = ? AND password = ?`;

  connection.query(query, [email, password], function (err, rows, fields) {
    if (err) {
      console.log(err);
    } else {
      if (rows.affectedRows === 0) {
        // Tidak ada data yang cocok, kirim pesan kesalahan
        console.log("Email dan password tidak cocok");
        return response.ok("Data Email atau Password tidak di temukan ", res);
      } else {
        // Data login berhasil ditambahkan
        response.ok("Login Berhasil", res);
      }
    }
  });
};
