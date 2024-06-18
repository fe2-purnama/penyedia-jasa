import React from "react";
import "./ACSubmitt.css";
import { Container } from "react-bootstrap";

const OrderConfirmation = () => {
  return (
    <Container>
      <div className="order-confirmation">
        <h2>Terima Kasih!</h2>
        <p>Pesanan Anda telah berhasil.</p>
        <p>Kami sedang memproses pesanan Anda. Mohon tunggu sebentar.</p>
        <p>Informasi lebih lanjut akan segera kami kirimkan.</p>
      </div>
    </Container>
  );
};

export default OrderConfirmation;
