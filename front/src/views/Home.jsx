import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg"; // ✅ import
import "./Home.css";
import ChatBot from "../views/ChatBot";

export default function Home() {
  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: `url(${banner})` }}  // ✅ use imported image
      >
        <h1>Welcome to Eventify 🎉</h1>
        <p>Your one-stop platform for university events.</p>
        <div className="buttons">
          <Link to="/signup" className="btn">Signup</Link>
          <Link to="/login" className="btn btn-outline">Login</Link>
        </div>
      </section>
      <ChatBot />
    </div>
  );
}
