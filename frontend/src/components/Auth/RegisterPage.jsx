import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <section className="register-page vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-8 col-lg-5 offset-lg-1">
            <form>
              <div className="social-login">
                <p className="lead fw-normal mb-0 me-3">Register with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                />
                <label className="form-label" htmlFor="name">
                  Name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control form-control-lg"
                  placeholder="Repeat your password"
                />
                <label className="form-label" htmlFor="confirmPassword">
                  Repeat your password
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <Link to="/" className="link-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
