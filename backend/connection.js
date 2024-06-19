var mysql = require("mysql");

//Koneksi Database
const conn = mysql.createConnection({
  host: "educalab.id",
  port: 3307,
  user: "1r8WXUjtRic7zouP",
  password: "dr82YoxEOq8oIC8F",
  database: "u8HyGwhbMmvbg4Dr"
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Hore Database Terkoneksi");
});

module.exports = conn;
