import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Dashboard.css";

const Home = () => {
  return (
    <div className="dashboard-home">
      <h2>Dashboard Jasa Servis Rumah</h2>

      <section className="summary">
        <h3>Ringkasan Layanan</h3>
        <p>
          Selamat datang di dashboard jasa servis Rumah. Di sini Anda dapat melihat
          informasi terkini tentang layanan servis Rumah yang telah dilakukan,
          statistik pelanggan, dan rincian lainnya.
        </p>
      </section>

      <section className="stats">
        <h3>Statistik Terkini</h3>
        <div className="stats-grid">
          <Card className="stat-item">
            <CardContent>
              <Typography variant="h6" component="div">
                Jumlah Servis Hari Ini
              </Typography>
              <Typography variant="body1" component="div">
                15
              </Typography>
            </CardContent>
          </Card>

          <Card className="stat-item">
            <CardContent>
              <Typography variant="h6" component="div">
                Jumlah Pelanggan Aktif
              </Typography>
              <Typography variant="body1" component="div">
                120
              </Typography>
            </CardContent>
          </Card>

          <Card className="stat-item">
            <CardContent>
              <Typography variant="h6" component="div">
                Total Servis Bulan Ini
              </Typography>
              <Typography variant="body1" component="div">
                300
              </Typography>
            </CardContent>
          </Card>

          <Card className="stat-item">
            <CardContent>
              <Typography variant="h6" component="div">
                Feedback Pelanggan
              </Typography>
              <Typography variant="body1" component="div">
                4.8/5
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="recent-activities">
        <h3>Aktivitas Terbaru</h3>
        <ul>
          <li>Servis AC di rumah Bapak Andi - Selesai</li>
          <li>Penjadwalan ulang servis AC di kantor PT. Maju Jaya</li>
          <li>Penggantian filter AC di apartemen Bu Susi - Dalam Proses</li>
          <li>Servis rutin di sekolah SD Harapan Bangsa - Selesai</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
