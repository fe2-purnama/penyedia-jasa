"use strict";

var response = require("../res"); // Importing res.js
var connection = require("../connection"); // Importing connection.js

exports.Orders = function (req, res) {
  connection.query("SELECT * FROM tbl_order", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.success(rows, res); // Menggunakan response.success untuk mengirim data
    }
  });
};

//GET BY ID
exports.OrderById = function (req, res) {
  let id = req.params.id;
  const query = `SELECT * FROM tbl_order WHERE order_id = ?;`;
  connection.query(query, [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
      response.error("Failed to retrieve order data", res);
    } else {
      response.success(rows, res);
    }
  });
};

// POST
exports.OrderPost = function (req, res) {
  let { address, message, order_status } = req.body;

  const query = `
    INSERT INTO tbl_services (address, message, order_status)
    VALUES (?, ?, ?)
  `;
  connection.query(
    query,
    [address, message, order_status],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        response.error("Insert Data Failed", res);
      } else {
        response.success("Insert Data Success", res);
      }
    }
  );
};

//PUT BY ID
exports.OrderPut = function (req, res) {
  let id = req.params.id;
  let { address, message, order_status } = req.body;
  const query = `
        UPDATE tbl_order
        SET address = ?, message = ?, order_status = ?
        WHERE order_id = ?
      `;
  connection.query(
    query,
    [address, message, order_status, id],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
        response.error("Update Data Failed", res);
      } else {
        if (rows.affectedRows === 0) {
          console.log("Data not found!!");
          response.success(`Data with id ${id} not found!!`, res);
        } else {
          // Data berhasil Update
          response.success("Update Data Success", res);
        }
      }
    }
  );
};

//DELETE
exports.OrderDelete = function (req, res) {
  let id = req.params.id;
  const query = `
        DELETE FROM tbl_order
        WHERE order_id = ?
      `;
  connection.query(query, [id], function (error, results, fields) {
    if (error) {
      console.log(error);
      response.error("Remove Data Failed", res);
    } else {
      response.success("Remove Data Success!", res);
    }
  });
};
