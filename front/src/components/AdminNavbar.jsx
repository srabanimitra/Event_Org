import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#0f172a", color: "white" }}>
      <h2 style={{ marginRight: "2rem" }}>Admin Panel</h2>
      <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
        <li><Link to="/admin/create-event" style={{ color: "white" }}>Create Event</Link></li>
        <li><Link to="/admin/manage-users" style={{ color: "white" }}>Manage Users</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
