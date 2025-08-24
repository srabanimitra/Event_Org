import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Eventify</h1>
        <p>Your trusted event organization platform</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Eventify is an event organization platform that helps clubs,
          societies, and organizations host competitions and events smoothly.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to simplify event management by providing an easy-to-use
          system for organizing, registering, and managing events of all scales.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Do</h2>
        <ul>
          <li>Organize competitions for clubs and organizations</li>
          <li>Manage registrations and participants</li>
          <li>Provide smooth communication between organizers and participants</li>
        </ul>
      </div>

      <div className="about-cta">
        <button
          className="contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
