import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!adminLoggedIn) {
      navigate("/admin");
    }
  }, [navigate]);

  // Fetch events
  const fetchEvents = () => {
    fetch("http://127.0.0.1:8000/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete Event
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await fetch(`http://127.0.0.1:8000/api/events/${id}`, { method: "DELETE" });
      setEvents(events.filter(e => e.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete event");
    }
  };

  // Stats
  const totalAttendees = events.reduce((sum, e) => sum + e.attendees, 0);
  const upcomingEvents = events.filter(e => new Date(e.datetime) > new Date()).length;

  return (
    <div className="admin-dashboard">
      <AdminNavbar />

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Dashboard Stats */}
        <div className="dashboard-left">
          <h2>Admin Dashboard</h2>
          <div className="stats-container">
            <div className="stat-card"><h3>Total Events</h3><p>{events.length}</p></div>
            <div className="stat-card"><h3>Upcoming Events</h3><p>{upcomingEvents}</p></div>
            <div className="stat-card"><h3>Total Attendees</h3><p>{totalAttendees}</p></div>
          </div>
        </div>

        {/* Right Side - Manage Events */}
        <div className="dashboard-right">
          <h2>Manage Events</h2>
          <div className="event-list-wrapper">
            <div className="event-list">
              {events.map(event => (
                <div key={event.id} className="event-card">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p><b>{new Date(event.datetime).toLocaleString()}</b></p>
                  <p>{event.location}</p>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
