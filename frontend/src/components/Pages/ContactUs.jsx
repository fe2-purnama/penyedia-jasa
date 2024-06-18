import React, { useState, useEffect } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="contact-page">
      <div className="theme-switch">
        <button className="theme-toggle-button" onClick={handleThemeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>KONTAK KAMI</h2>
          <p>+62834567234544</p>
          <h2>LOKASI</h2>
          <p>Condongcatur, Gang Amikom, Yogyakarta, Indonesia, Sleman</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2818403508622!2d110.40647117500475!3d-7.75990489225917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd3bdc4ef%3A0x6f1714b0c4544586!2sUniversitas%20Amikom%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718077559164!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
          <h2>JAM KERJA</h2>
          <p>Senin-Jumat BUKA 08.00-22.00 Sabtu-Minggu TUTUP</p>
        </div>
        <div className="contact-form">
          <h2>CONTACT US</h2>
          <form>
            <input type="text" placeholder="Masukan Nama" required />
            <input type="address" placeholder="Masukan Alamat" required />
            <select required>
              <option value="">Pilih Kota</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Bandung">Bandung</option>
            </select>
            <select required>
              <option value="">Pilih Negara</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Singapore">Singapore</option>
              <option value="Thailand">Thailand</option>
            </select>
            <input type="email" placeholder="Masukan Email Anda" required />
            <textarea placeholder="Masukan Pesan" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
