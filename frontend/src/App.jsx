import React, { memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import ForgotPassword from "./components/Auth/ForgotPassword";
import NavigationBar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";
import ServiceAC from "./components/Pages/ServiceAC";
import ContactUs from "./components/Pages/ContactUs";
import FormOrderAC from "./components/Pages/FormOrderAC";

const MemoizedLayout = memo(() => (
  <div>
    <NavigationBar />
    <Home />
    <Footer />
  </div>
));

const MemoizedServiceACLayout = memo(() => (
  <div>
    <NavigationBar />
    <ServiceAC />
    <Footer />
  </div>
));

const MemoizedContactUsLayout = memo(() => (
  <div>
    <NavigationBar />
    <ContactUs />
    <Footer />
  </div>
));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<MemoizedLayout />} />
          <Route path="/serviceAC" element={<MemoizedServiceACLayout />} />
          <Route path="/contactus" element={<MemoizedContactUsLayout />} />
          <Route path="/form-order-ac" element={<FormOrderAC />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
