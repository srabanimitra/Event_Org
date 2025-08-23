import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Eventify 🎉</h1>
        <p>Your one-stop platform for university events.</p>
        <div className="buttons">
          <Link to="/signup" className="btn">Signup</Link>
          <Link to="/login" className="btn btn-outline">Login</Link>
        </div>
      </section>
    </div>
  );
}
