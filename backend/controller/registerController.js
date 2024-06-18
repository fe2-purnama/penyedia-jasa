"use strict";

var response = require("../res"); // Mengimpor res.js
var connection = require("../connection"); // Mengimpor database.js

exports.register = function (req, res) {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let no_telpon = req.body.no_telpon;

  const queryObat = `INSERT INTO tbl_register (username, email, password, no_telpon) VALUES (?,?,?,?)`;
  connection.query(
    queryObat,
    [username, email, password, no_telpon],
    function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send({ message: "Registrasi Gagal" });
      } else {
        // Mendapatkan id_obat
        const regis_id = result.insertId;
        // Query untuk menambahkan data ke tabel inventori
        const queryInventori = `INSERT INTO tbl_users (regis_id,username,email,no_telpon) VALUES (?, ?, ?, ?)`;
        connection.query(
          queryInventori,
          [regis_id, username, email, no_telpon],
          function (err, result) {
            if (err) {
              console.log(err);
              res.status(500).send({ message: "Register Gagal" });
            } else {
              res.status(200).send({
                message: "Register berhasil"
              });
            }
          }
        );
      }
    }
  );
};

//   const query = `INSERT INTO tbl_register (username, email, password, no_telpon) VALUES (?,?,?,?)`;
//   connection.query(
//     query,
//     [username, email, password, no_telpon],
//     function (err, rows, fields) {
//       if (err) {
//         console.log(err);
//       } else {
//         response.ok("Berhasil menambahkan data register", res);
//       }
//     }
//   );
// };
