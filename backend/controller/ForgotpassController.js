"use strict";

// Import statements
var response = require("../res"); // Importing res.js
var connection = require("../connection"); // Importing connection.js
var crypto = require("crypto"); // For generating token
var nodemailer = require("nodemailer"); // For sending emails

// Handle forgot password request
exports.ForgotPassword = function (req, res) {
  let email = req.body.email;

  if (!email) {
    return response.error("Email is required", res, 400);
  }

  // Check if the email exists in the database
  connection.query(
    "SELECT * FROM tbl_users WHERE email = ?",
    [email],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
        return response.error("Error retrieving user data", res, 500);
      }

      if (rows.length === 0) {
        return response.error("Email not found", res, 404);
      }

      // Generate a reset token
      let token = crypto.randomBytes(20).toString("hex");
      let resetPasswordToken = token;
      let resetPasswordExpires = Date.now() + 3600000; // 1 hour

      // Save the token to the user's record in the database
      connection.query(
        "UPDATE tbl_users SET resetPasswordToken = ?, resetPasswordExpires = ? WHERE email = ?",
        [resetPasswordToken, resetPasswordExpires, email],
        function (err, result) {
          if (err) {
            console.log(err);
            return response.error("Error updating user data", res, 500);
          }

          // Send email to the user with the reset token
          var transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "your-email@gmail.com",
              pass: "your-email-password",
            },
          });

          var mailOptions = {
            to: email,
            from: "passwordreset@yourdomain.com",
            subject: "Password Reset",
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                  Please click on the following link, or paste this into your browser to complete the process:\n\n
                  http://${req.headers.host}/reset/${token}\n\n
                  If you did not request this, please ignore this email and your password will remain unchanged.\n`,
          };

          transporter.sendMail(mailOptions, function (err) {
            if (err) {
              console.log(err);
              return response.error("Failed to send reset email", res, 500);
            }
            response.success(
              "An e-mail has been sent to " +
                email +
                " with further instructions.",
              res
            );
          });
        }
      );
    }
  );
};

// Handle password reset token verification
exports.VerifyToken = function (req, res) {
  let token = req.params.token;

  connection.query(
    "SELECT * FROM tbl_users WHERE resetPasswordToken = ? AND resetPasswordExpires > ?",
    [token, Date.now()],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
        return response.error("Error retrieving user data", res, 500);
      }

      if (rows.length === 0) {
        return response.error(
          "Password reset token is invalid or has expired",
          res,
          400
        );
      }

      // Token is valid
      response.success({ message: "Token is valid", user: rows[0] }, res);
    }
  );
};

// Handle password reset
exports.ResetPassword = function (req, res) {
  let token = req.params.token;
  let { password } = req.body;

  if (!password) {
    return response.error("Password is required", res, 400);
  }

  // Hash the new password (using bcrypt for example)
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

  connection.query(
    "SELECT * FROM tbl_users WHERE resetPasswordToken = ? AND resetPasswordExpires > ?",
    [token, Date.now()],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
        return response.error("Error retrieving user data", res, 500);
      }

      if (rows.length === 0) {
        return response.error(
          "Password reset token is invalid or has expired",
          res,
          400
        );
      }

      let userId = rows[0].id;

      // Hash and save the new password
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
          console.log(err);
          return response.error("Error hashing password", res, 500);
        }

        connection.query(
          "UPDATE users SET password = ?, resetPasswordToken = NULL, resetPasswordExpires = NULL WHERE id = ?",
          [hash, userId],
          function (err, result) {
            if (err) {
              console.log(err);
              return response.error("Error updating password", res, 500);
            }

            response.success("Password has been updated successfully", res);
          }
        );
      });
    }
  );
};
