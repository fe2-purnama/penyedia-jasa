// Kirim datanya ke acsubmitt.jsx
import React, { useState } from "react";
import "./FormOrderAC.css";
import { Form, Button } from "react-bootstrap";

function FormOrderAC() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="form-container">
      <h2>Formulir Pemesanan</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nama:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama Anda"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Telepon:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Masukkan nomor telepon Anda"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formService">
          <Form.Label>Layanan:</Form.Label>
          <Form.Control
            as="select"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Pilih layanan yang dipesan</option>
            <option value="Cuci AC S - 1 PK">
              Cuci AC S - 1 PK - Rp. 75.000,-
            </option>
            <option value="Cuci AC 1,5 - 2 PK">
              Cuci AC 1,5 - 2 PK - Rp. 85.000,-
            </option>
            <option value="Tambah Freon R22">
              Tambah Freon R22 - Rp. 150.000,-
            </option>
            <option value="Tambah Freon R32">
              Tambah Freon R32 - Rp. 250.000,-
            </option>
            <option value="Tambah Freon R410">
              Tambah Freon R410 - Rp. 250.000,-
            </option>
            <option value="Isi Freon R22">Isi Freon R22 - Rp. 300.000,-</option>
            <option value="Isi Freon R32">Isi Freon R32 - Rp. 500.000,-</option>
            <option value="Isi Freon R410">
              Isi Freon R410 - Rp. 500.000,-
            </option>
            <option value="Bongkar Pasang AC S - 1 PK">
              Bongkar Pasang AC S - 1 PK - Rp. 350.000,-
            </option>
            <option value="Bongkar Pasang AC 1,5 - 2 PK">
              Bongkar Pasang AC 1,5 - 2 PK - Rp. 450.000,-
            </option>
            <option value="Bongkar AC S - 1 PK">
              Bongkar AC S - 1 PK - Rp. 150.000,-
            </option>
            <option value="Bongkar AC 1,5 - 2 PK">
              Bongkar AC 1,5 - 2 PK - Rp. 200.000,-
            </option>
            <option value="Pasang AC S - 1 PK">
              Pasang AC S - 1 PK - Rp. 250.000,-
            </option>
            <option value="Pasang AC 1,5 - 2 PK">
              Pasang AC 1,5 - 2 PK - Rp. 300.000,-
            </option>
            <option value="Bersihan 1 jam">
              Bersihan 1 jam - Rp. 90.000,-
            </option>
            <option value="Bersihan 2 jam">
              Bersihan 2 jam - Rp. 170.000,-
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Alamat Lengkap:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan alamat lengkap Anda"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Pesan:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Masukkan pesan Anda"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Kirim
        </Button>
      </Form>
    </div>
  );
}

export default FormOrderAC;
