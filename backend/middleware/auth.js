var connection = require("../connection");
var mysql = require("mysql");
var md5 = require("md5");
var response = require("../res");
var jwt = require("jsonwebtoken");
var config = require("../config/secret_tokens");
var ip = require("ip");
const { query } = require("express");

exports.register = function (req, res) {
  var post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    no_telpon: req.body.no_telpon
  };

  var query = `SELECT email FROM ?? WHERE ?? = ?`;
  var table = ["tbl_users", "email", post.email];

  query = mysql.format(query, table);

  //INSERT
  connection.query(query, function (err, rows) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      if (rows.length == 0) {
        var query = `INSERT INTO ?? SET ?`;
        var table = ["tbl_users"];
        query = mysql.format(query, table);

        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
            next(error);
          } else {
            response.success("Berhasil menambahkan data user ", res);
          }
        });
      } else {
        response.success(
          "Email anda sudah terdaftar, harap ganti email anda",
          res
        );
      }
    }
  });
};

//controller login
exports.login = function (req, res) {
  var post = {
    email: req.body.email,
    password: req.body.password
  };

  var query = `SELECT * FROM ?? WHERE ??=? AND ??=? `;
  var table = [
    "tbl_users",
    "email",
    post.email,
    "password",
    md5(post.password)
  ];

  query = mysql.format(query, table);
  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 1) {
        var token = jwt.sign({ rows }, config.secret, {
          expiresIn: 1500
        });
        user_id = rows[0].user_id;
        var data = {
          user_id: user_id,
          access_token: token,
          devices_ip: ip.address()
        };
        var query = `INSERT INTO ?? SET ?`;
        var table = ["tbl_login"];

        query = mysql.format(query, table);
        connection.query(query, data, function (err, rows) {
          if (err) {
            console.log(err);
          } else {
            res.json({
              success: true,
              message: "Token JWT added successfully",
              token: token,
              currUsers: data.id
            });
          }
        });
      } else {
        res.json({ Error: true, message: "Email atau password salah" });
      }
    }
  });
};

exports.dashboard = function (req, res) {
  response.success("Selamat Datang Di Dashboard", res);
};
