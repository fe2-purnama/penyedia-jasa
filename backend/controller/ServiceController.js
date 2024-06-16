"use strict";

var response = require("../res"); // Importing res.js
var connection = require("../connection"); // Importing connection.js

//GET ALL
exports.Services = function (req, res) {
  connection.query(
    "SELECT * FROM tbl_services",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res); // Menggunakan response.ok untuk mengirim data
      }
    }
  );
};

//GET BY ID
exports.ServicesById = function (req, res) {
  let id = req.params.id;
  const query = `SELECT * FROM tbl_services WHERE services_id = ?;`;
  connection.query(query, [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
      response.error("Failed to retrieve home service data", res);
    } else {
      response.ok(rows, res);
    }
  });
};

// POST
exports.ServicesPost = function (req, res) {
  let { nama_jasa, img_url, deskripsi, harga, status } = req.body;

  const query = `
  INSERT INTO tbl_services (nama_jasa, img_url, deskripsi, harga, status)
  VALUES (?, ?, ?, ?, ?)
`;
  connection.query(
    query,
    [nama_jasa, img_url, deskripsi, harga, status],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        response.error("Gagal menambah data", res);
      } else {
        response.ok("Data berhasil di input", res);
      }
    }
  );
};

//PUT BY ID
exports.ServicePut = function (req, res) {
  let id = req.params.id;
  let { nama_jasa, img_url, deskripsi, harga, status } = req.body;
  const query = `
      UPDATE tbl_services
      SET nama_jasa = ?, img_url = ?, deskripsi = ?, harga = ?, status=?
      WHERE services_id = ?
    `;
  connection.query(
    query,
    [nama_jasa, img_url, deskripsi, harga, status, id],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
        response.error("Terjadi kesalahan saat update data", res);
      } else {
        if (rows.affectedRows === 0) {
          // Tidak ada data yang cocok, kirim pesan kesalahan
          console.log("Data tidak ditemukan!!");
          response.ok(`Data dengan id ${id} tidak ditemukan!!`, res);
        } else {
          // Data berhasil Update
          response.ok("Data berhasil diupdate", res);
        }
      }
    }
  );
};

//DELETE
exports.ServicesDelete = function (req, res) {
  let id = req.params.id;
  const query = `
      DELETE FROM tbl_services
      WHERE services_id = ?
    `;
  connection.query(query, [id], function (error, results, fields) {
    if (error) {
      console.log(error);
      response.error("Gagal menghapus data", res);
    } else {
      response.ok("Data berhasil di hapus!", res);
    }
  });
};
