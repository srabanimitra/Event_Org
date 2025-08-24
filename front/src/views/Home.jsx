import React from "react";
import { Link } from "react-router-dom";
import boy from "../assets/images/boy.png"; // 👦 Freepik boy illustration
import "./Home.css";
import ChatBot from "../views/ChatBot";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="overlay"></div>

        {/* Boy Illustration */}
        <img src={boy} alt="Boy" className="boy" />

        {/* Animated Title */}
        <h1 className="title">Welcome to Eventify 🎉</h1>
        <p className="subtitle">Your one-stop platform for university events.</p>

        {/* Buttons */}
        <div className="buttons">
          <Link to="/signup" className="btn">Signup</Link>
          <Link to="/login" className="btn btn-outline">Login</Link>
        </div>
      </section>
      <ChatBot />
    </div>
  );
}
