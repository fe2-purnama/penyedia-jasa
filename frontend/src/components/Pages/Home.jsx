import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Benner1 from "../Assets/Images/Benner.png";
import Benner2 from "../Assets/Images/Benner2.png";
import Benner3 from "../Assets/Images/Benner3.png";
import AC from "../Assets/Images/AC.png";
import Clean from "../Assets/Images/clean.png";

const Home = () => {
  const [showFullTextAC, setShowFullTextAC] = useState(false);
  const [showFullTextClean, setShowFullTextClean] = useState(false);

  const toggleFullTextAC = () => {
    setShowFullTextAC(!showFullTextAC);
  };

  const toggleFullTextClean = () => {
    setShowFullTextClean(!showFullTextClean);
  };

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Benner1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Benner2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Benner3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder"> F I X i t</h1>
            <p className="lead mb-0" style={{ textAlign: "justify" }}>
              Fixit adalah perusahaan home service yang mengkhususkan diri dalam
              layanan perawatan dan perbaikan AC serta jasa pembersihan. Kami
              menyediakan solusi cepat, andal, dan profesional untuk menjaga
              kenyamanan dan kebersihan rumah Anda. Dengan tim ahli yang
              berpengalaman, Fixit memastikan AC Anda berfungsi optimal dan
              rumah Anda selalu bersih dan rapi. Percayakan kebutuhan home
              service Anda pada Fixit, karena kepuasan dan kenyamanan Anda
              adalah prioritas kami.
            </p>
          </div>
        </div>
      </header>

      <div className="container mt-5">
        <h2 className="text-center mb-4">LAYANAN KAMI</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src={AC} className="card-img-top" alt="AC" />
              <div className="card-body">
                <h5 className="card-title">Service Air Conditioner (AC) </h5>
                <p className="card-text justify">
                  Dapatkan layanan service AC yang terbaik dan terpercaya hanya
                  di kami! Kami menawarkan jasa perawatan dan perbaikan AC yang
                  profesional dan efisien.{" "}
                  {showFullTextAC ? (
                    <>
                      Dengan tim teknisi yang berpengalaman dan peralatan yang
                      modern, kami dapat memastikan bahwa AC Anda berfungsi
                      dengan baik dan efisien. Kami juga menawarkan jasa
                      maintenance AC rutin untuk mencegah kerusakan dan
                      meningkatkan kinerja AC Anda. Dengan demikian, Anda dapat
                      menikmati udara sejuk dan bersih di rumah atau kantor
                      Anda.
                    </>
                  ) : (
                    <button
                      className="btn btn-link read-more"
                      onClick={toggleFullTextAC}
                    >
                      Selengkapnya
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Clean} className="card-img-top" alt="Clean" />
              <div className="card-body">
                <h5 className="card-title">Clean</h5>
                <p className="card-text justify">
                  Rumah Anda butuh perawatan? Kami hadir untuk membantu! Layanan
                  clean rumah kami menawarkan jasa pembersihan yang profesional
                  dan efisien.{" "}
                  {showFullTextClean ? (
                    <>
                      Dari lantai hingga langit-langit, kami akan membuat rumah
                      Anda bersih dan nyaman. Kami juga menawarkan jasa
                      pembersihan khusus untuk area-area yang sulit dijangkau,
                      seperti kamar mandi, dapur, dan lain-lain. Dengan
                      demikian, Anda dapat menikmati rumah yang bersih dan
                      sehat.
                    </>
                  ) : (
                    <button
                      className="btn btn-link read-more"
                      onClick={toggleFullTextClean}
                    >
                      Selengkapnya
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mt-4 text-center">Daftar Harga Service AC</h2>
        <p className="text-center">AC Mahkota Teknik</p>
        <table className="table mt-4">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Jenis Layanan</th>
              <th scope="col">Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Cuci AC S - 1 PK</td>
              <td>Rp. 75.000,-</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Cuci AC 1,5 - 2 PK</td>
              <td>Rp. 85.000,-</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Tambah Freon R22</td>
              <td>Rp. 150.000,-</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Tambah Freon R32</td>
              <td>Rp. 250.000,-</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Tambah Freon R410</td>
              <td>Rp. 250.000,-</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Isi Freon R22</td>
              <td>Rp. 300.000,-</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Isi Freon R32</td>
              <td>Rp. 500.000,-</td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Isi Freon R410</td>
              <td>Rp. 500.000,-</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>Bongkar Pasang AC S - 1 PK</td>
              <td>Rp. 350.000,-</td>
            </tr>
            <tr>
              <td>10.</td>
              <td>Bongkar Pasang AC 1,5 - 2 PK</td>
              <td>Rp. 450.000,-</td>
            </tr>
            <tr>
              <td>11.</td>
              <td>Bongkar AC S - 1 PK</td>
              <td>Rp. 150.000,-</td>
            </tr>
            <tr>
              <td>12.</td>
              <td>Bongkar AC 1,5 - 2 PK</td>
              <td>Rp. 200.000,-</td>
            </tr>
            <tr>
              <td>13.</td>
              <td>Pasang AC S - 1 PK</td>
              <td>Rp. 250.000,-</td>
            </tr>
            <tr>
              <td>14.</td>
              <td>Pasang AC 1,5 - 2 PK</td>
              <td>Rp. 300.000,-</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Catatan:</strong>
        </p>
        <p>
          Untuk Jasa Bongkaran Gedung, Fabrik, Perkantoran, Akan Dikenakan Biaya
          Tambahan Sebesar Rp. 50.000,-
        </p>
        <p>
          Apabila terjadi kerusakan pada unit AC, biaya service akan disesuaikan
          dengan kerusakan yang terjadi. Harga dapat berubah sewaktu-waktu tanpa
          pemberitahuan terlebih dahulu.
        </p>
      </div>
    </div>
  );
};

export default Home;
