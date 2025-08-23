import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import EventCard from "../components/EventCard";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // Session check: redirect if not logged in
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

  const handleEdit = async (event) => {
    const newTitle = prompt("Edit Event Title", event.title);
    if (!newTitle) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/events/${event.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...event, title: newTitle }),
      });
      const updated = await res.json();
      setEvents(events.map(e => e.id === updated.id ? updated : e));
    } catch (err) {
      console.error(err);
      alert("Failed to update event");
    }
  };

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

  const totalAttendees = events.reduce((sum, e) => sum + e.attendees, 0);
  const upcomingEvents = events.filter(e => new Date(e.datetime) > new Date()).length;

  return (
    <div className="admin-dashboard">
      <AdminNavbar />

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p>{events.length}</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Events</h3>
          <p>{upcomingEvents}</p>
        </div>
        <div className="stat-card">
          <h3>Total Attendees</h3>
          <p>{totalAttendees}</p>
        </div>
      </div>

      {/* Event List */}
      <div className="event-list">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onEdit={() => handleEdit(event)}
            onDelete={() => handleDelete(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
