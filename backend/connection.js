var mysql = require("mysql");

//Koneksi Database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_home_services"
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Hore Database Terkoneksi");
});

module.exports = conn;
