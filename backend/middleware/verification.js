const jwt = require("jsonwebtoken");
const config = require("../config/secret_tokens");

function verification(requiredRole) {
  return function (req, res, next) {
    var tokenWithBearer = req.headers.authorization;

    if (!tokenWithBearer) {
      return res
        .status(401)
        .send({ auth: false, message: "Token tidak tersedia" });
    }

    const token = tokenWithBearer.split(" ")[1];

    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .send({ auth: false, message: "Token tidak valid" });
      }

      // Memeriksa peran pengguna dari token yang telah didekode
      if (requiredRole && decoded.role !== requiredRole) {
        return res
          .status(403)
          .send({ auth: false, message: "Akses tidak diijinkan" });
      }

      // Jika semuanya sesuai, lanjutkan ke middleware berikutnya
      req.auth = decoded;
      next();
    });
  };
}

module.exports = verification;
