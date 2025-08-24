import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./views/Home";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/SignUp";
import AdminLogin from "./components/AdminLogin";
import Profile from "./components/Profile";
import AdminDashboard from "./views/AdminDashboard";
import EventPage from "./views/EventPage";
import Gallary from "./components/Gallery";
import ArrangedEvents from "./components/ArrangedEvents";
import EventImages from "./components/EventImages";
import Sponsor from "./components/Sponsor";
import Contact from "./components/Contact";
import Information from "./components/Information";
import ManageUsers from "./components/ManageUsers";
import CreateEvent from "./views/CreateEvent";
import About from "./components/About";



function App() {
  return (
    <Router>
      {/* Navbar always on top */}
      <Navbar />

      {/* Page Content */}
      <main style={{ paddingTop: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<h1>Featured Page</h1>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/about" element={<About />} />
          <Route path="/arrangedevents" element={<ArrangedEvents />} />
          <Route path="/images/:eventId" element={<EventImages />} />
          <Route path="/" element={<h1>Welcome to Eventify 🎉</h1>} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/admin/create-event" element={<CreateEvent />} />
        </Routes>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </Router>
  );
}

export default App;