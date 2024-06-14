const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./index");
routes(app);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
