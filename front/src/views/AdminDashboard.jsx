import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import EventCard from "../components/EventCard";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // Session check: redirect if not logged in
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!adminLoggedIn) {
      navigate("/admin"); // redirect to login if not logged in
    }
  }, [navigate]);

  // Fetch events from backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/admin-events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = (id) => alert("Edit event " + id);

  const handleDelete = async (id) => {
    // Optional: call backend to delete
    setEvents(events.filter(e => e.id !== id));
  };

  const totalAttendees = events.reduce((sum, e) => sum + e.attendees, 0);
  const upcomingEvents = events.filter(e => new Date(e.date) > new Date()).length;

  return (
    <div style={{ padding: "2rem" }}>
      <AdminNavbar />

      {/* Stats */}
      <div style={{ display: "flex", gap: "1rem", margin: "2rem 0" }}>
        <div style={{ flex: 1, padding: "1rem", backgroundColor: "#1e293b", color: "white", borderRadius: "10px" }}>
          <h3>Total Events</h3>
          <p>{events.length}</p>
        </div>
        <div style={{ flex: 1, padding: "1rem", backgroundColor: "#1e293b", color: "white", borderRadius: "10px" }}>
          <h3>Upcoming Events</h3>
          <p>{upcomingEvents}</p>
        </div>
        <div style={{ flex: 1, padding: "1rem", backgroundColor: "#1e293b", color: "white", borderRadius: "10px" }}>
          <h3>Total Attendees</h3>
          <p>{totalAttendees}</p>
        </div>
      </div>

      {/* Event list */}
      <div>
        {events.map(event => (
          <EventCard key={event.id} event={event} onEdit={handleEdit} onDelete={() => handleDelete(event.id)} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

