import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./views/Home";
import './App.css';
import Login from "./components/login";
import Signup from "./components/SignUp";
import AdminLogin from "./components/AdminLogin";
import Profile from "./components/Profile";
import AdminDashboard from "./views/AdminDashboard";
import EventPage from "./views/EventPage";
function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Navbar />

      {/* Page Content */}
      <main style={{ paddingTop: "60px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<h1>Featured Page</h1>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sponsor" element={<h1>Sponsor Page</h1>} />
          <Route path="/gallery" element={<h1>Gallery Page</h1>} />
          <Route path="/" element={<h1>Welcome to Eventify 🎉</h1>} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </Router>
  );
}

export default App;