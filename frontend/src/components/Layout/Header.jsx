import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <header className="header bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Selamat Datang di Jasa Elektronik</h1>
        <p className="lead">
          Layanan perbaikan dan penjualan elektronik terpercaya
        </p>
      </div>
    </header>
  );
}

export default Header;
