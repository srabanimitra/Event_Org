import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/gallery">Gallery</Link>
        <Link to="/sponsor">Sponsor</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-bottom">
        © 2025 Eventify
      </div>
    </footer>
  );
};

export default Footer;
