import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Information.css";

const Information = () => {
  return (
    <div className="info-page">
      <div className="info-box">
        <h2>Get in Touch</h2>
        <p className="info-subtitle">Reach out to us through any of the following channels.</p>

        <div className="info-grid">
          <div className="info-card">
            <h3>Address</h3>
            <p>
              Shanta Western Tower, Level-10 <br />
              Bir Uttam Mir Shawkat Sarak, Tejgaon <br />
              Dhaka-1208, Bangladesh
            </p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+880 1890-430560</p>
            <p>+880 1732-395364</p>
            <p>+880 1975728958</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>eventify@gmail.com</p>
            <p>eventityadmin@gmail.com</p>
            <p>eventityteam@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>Social Media</h3>
            <p>
              <FaFacebook style={{ marginRight: "8px" }} />
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                Facebook
              </a>
            </p>
            <p>
              <FaWhatsapp style={{ marginRight: "8px" }} />
              <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" className="social-link">
                WhatsApp
              </a>
            </p>
            <p>
              <FaYoutube style={{ marginRight: "8px" }} />
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                YouTube
              </a>
            </p>
          </div>



          <div className="info-card">
            <h3>Need Quick Help?</h3>
            <p>We’re here to assist you anytime.</p>
            <p>+880 1890-430780</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
