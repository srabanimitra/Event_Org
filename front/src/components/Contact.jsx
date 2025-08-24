import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>
          Have questions? We'd love to hear from you. Get in touch with our team.
        </p>
        <button onClick={() => navigate("/information")}>Information</button>
      </div>
    </div>
  );
};

export default Contact;
