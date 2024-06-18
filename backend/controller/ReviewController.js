"use strict";

var response = require("../res"); // Importing res.js
var connection = require("../connection"); // Importing connection.js

exports.Reviews = function (req, res) {
  connection.query("SELECT * FROM tbl_reviews", function (error, rows, fields) {
    if (error) {
      console.log(error);
      response.error("Failed to retrieve reviews data", res);
    } else {
      response.success(rows, res); // Menggunakan response.success untuk mengirim data
    }
  });
};

//GET BY ID
exports.ReviewById = function (req, res) {
  let id = req.params.id;
  const query = `SELECT * FROM tbl_reviews WHERE review_id = ?;`;
  connection.query(query, [id], function (error, rows, fields) {
    if (error) {
      console.log(error);
      response.error("Failed to retrieve review data", res);
    } else {
      if (rows.length === 0) {
        response.error(`Review with id ${id} not found!`, res, 404);
      } else {
        response.success(rows[0], res);
      }
    }
  });
};

// POST
exports.ReviewPost = function (req, res) {
  let { reviews, rating } = req.body;

  const query = `
    INSERT INTO tbl_reviews (reviews, rating)
    VALUES (?, ?)
  `;
  connection.query(query, [reviews, rating], function (error, results, fields) {
    if (error) {
      console.log(error);
      response.error("Insert Data Failed", res);
    } else {
      response.success("Insert Data Success", res);
    }
  });
};

//DELETE
exports.ReviewDelete = function (req, res) {
  let id = req.params.id;
  const query = `
        DELETE FROM tbl_reviews
        WHERE review_id = ?
      `;
  connection.query(query, [id], function (error, results, fields) {
    if (error) {
      console.log(error);
      response.error("Remove Data Failed", res);
    } else {
      if (results.affectedRows === 0) {
        response.error(`Review with id ${id} not found!`, res, 404);
      } else {
        response.success("Remove Data Success!", res);
      }
    }
  });
};
