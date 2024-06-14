import React from "react";
import "./Contact.css";
import InstagramLogo from "./ig.png";
import FacebookLogo from "./fb.png";
import GmailLogo from "./gm.png"; 

function Contact() {
  return (
    <div className="contact">
      <h2>Kontak Saya</h2>
      <p>Anda dapat menghubungi saya melalui email atau media sosial.</p>
      <div className="contact-info">
        <div className="social-card">
          <div className="social-instagram contact-item">
            <img src={InstagramLogo} alt="Instagram Logo" />
            <div>
              <h3>Instagram</h3>
              <p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  M U N I Z
                </a>
              </p>
            </div>
          </div>
          <div className="social-facebook contact-item">
            <img src={FacebookLogo} alt="Facebook Logo" />
            <div>
              <h3>Facebook</h3>
              <p>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  M U N I Z
                </a>
              </p>
            </div>
          </div>
          <div className="social-gmail contact-item">
            {" "}
            {}
            <img src={GmailLogo} alt="Gmail Logo" />{" "}
            {}
            <div>
              <h3>Gmail</h3>
              <p>muniz@gmail.com</p>{" "}
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
