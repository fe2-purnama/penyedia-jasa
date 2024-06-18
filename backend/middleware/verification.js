const jwt = require("jsonwebtoken");
const config = require("../config/secret_tokens");

function verification() {
  return function (req, res, next) {
    var role = req.body.role;
    const tokenWithBearer = req.headers.authorization;
    if (tokenWithBearer) {
      const token = tokenWithBearer.split(" ")[1];

      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res
            .status(401)
            .send({ auth: false, message: "Token tidak valid" });
        } else {
          if (role == "penyedia_jasa") {
            req.auth = decoded;
            next();
          } else {
            return res.status(403).send({
              auth: false,
              message: "Anda tidak memiliki akses ke halaman ini!"
            });
          }
        }
      });
    } else {
      return res
        .status(401)
        .send({ auth: false, message: "Token tidak tersedia" });
    }
  };
}

module.exports = verification;
