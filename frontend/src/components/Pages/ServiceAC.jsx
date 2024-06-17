import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ServiceAC.css";
import { useNavigate } from "react-router-dom";
import bannerImage from "../Assets/Images/Benner3.png"; // Gambar ilustratif

const ServiceAC = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/form-order-ac"); // Mengarahkan pengguna ke halaman FormOrderAC.jsx
  };

  return (
    <div className="service-ac">
      {/* Menambahkan gambar ilustratif */}
      <img src={bannerImage} alt="Banner AC" className="banner-image" />
      <Container className="service-content">
        <Row>
          <Col md={6}>
            <div className="service-description">
              <h1 className="title">Layanan Service AC</h1>
              <p>
                Selamat datang di halaman layanan AC kami. Kami siap membantu
                Anda dengan berbagai kebutuhan perawatan dan perbaikan AC. Klik
                "Pesan Sekarang" untuk memesan jasa.
              </p>
              <h2 className="subtitle">Jenis Layanan</h2>
              <div className="service-cards">
                <div className="service-card" id="service-card1">
                  <h3>Perawatan rutin AC</h3>
                  <p>
                    Layanan perawatan rutin AC kami mencakup pembersihan,
                    pengecekan sistem, dan pengisian refrigeran untuk menjaga
                    performa AC Anda tetap optimal sepanjang tahun.
                  </p>
                </div>
                <div className="service-card" id="service-card2">
                  <h3>Perbaikan AC rusak</h3>
                  <p>
                    Tim teknisi kami siap membantu memperbaiki AC Anda yang
                    mengalami masalah seperti tidak dingin, bocor, atau mati
                    total agar AC kembali berfungsi dengan baik sesegera
                    mungkin.
                  </p>
                </div>
                <div className="service-card" id="service-card3">
                  <h3>Pemasangan AC baru</h3>
                  <p>
                    Kami menyediakan layanan pemasangan AC baru dengan
                    profesionalisme tinggi, memastikan AC terpasang dengan benar
                    dan berfungsi optimal sesuai kebutuhan ruangan Anda.
                  </p>
                </div>
                <div className="service-card" id="service-card4">
                  <h3>Penggantian suku cadang</h3>
                  <p>
                    Jika AC Anda memerlukan penggantian suku cadang, kami
                    menyediakan suku cadang berkualitas tinggi dan melakukan
                    penggantian dengan cepat agar AC kembali beroperasi seperti
                    semula.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="order-section">
              {/* Menyesuaikan properti onClick untuk mengarahkan pengguna */}
              <Button className="order-button" onClick={handleOrderNowClick}>
                Pesan Sekarang
              </Button>
            </div>
            <div className="contact-info">
              <h2 className="subtitle2">Kontak Kami</h2>
              <p>
                Nomor Telepon: <a href="tel:+1234567890">123-456-7890</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@contohacservice.com">
                  info@contohacservice.com
                </a>
              </p>
              <p>Alamat: Jl. Contoh No. 123, Kota Contoh, 12345</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceAC;
