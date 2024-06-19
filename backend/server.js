const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 7972;
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Mengimpor routes.js
var routes = require("./routes");
routes(app);

//Daftar menu routes dari index
const registrasi = require("./middleware");
app.use("/auth", registrasi);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
