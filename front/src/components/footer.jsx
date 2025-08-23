import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/gallery">Gallery</Link>
        <Link to="/sponsor">Sponsor</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="footer-bottom">
        © 2025 Eventify
      </div>
    </footer>
  );
};

export default Footer;
