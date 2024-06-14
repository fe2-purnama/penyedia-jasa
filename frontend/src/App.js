import React, { memo, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";
import Navbar from "./components/Layout/Navbar";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";

const MemoizedLayout = memo(() => (
  <div>
    <Navbar />
    <Home />
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
          <Route path="/layout" element={<MemoizedLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
