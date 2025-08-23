import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", backgroundColor: "#0f172a", color: "white" }}>
      <h2>Admin Panel</h2>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><Link to="/admin-dashboard" style={{ color: "white" }}>Dashboard</Link></li>
        <li><Link to="/admin/create-event" style={{ color: "white" }}>Create Event</Link></li>
        <li><button onClick={handleLogout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
