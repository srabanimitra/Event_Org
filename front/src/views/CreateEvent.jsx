import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import "./CreateEvent.css";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    datetime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Session guard
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!adminLoggedIn) navigate("/admin");
  }, [navigate]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to create event");
      }

      await res.json();
      alert("✅ Event created successfully!");
      navigate("/admin-dashboard"); // Ensure this matches your App.jsx route
    } catch (err) {
      console.error(err);
      setErrorMsg("Error creating event. Check server & CORS.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="create-event-page">
      <AdminNavbar />

      <div className="create-event-wrapper">
        <h1>Create Event</h1>

        {errorMsg && <div className="error-box">{errorMsg}</div>}

        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="title">Event Title <span>*</span></label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={onChange}
              placeholder="e.g., Tech Talk 2025"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              value={form.description}
              onChange={onChange}
              placeholder="Brief description of the event..."
            />
          </div>

          <div className="form-row">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={onChange}
              placeholder="Auditorium A / Online"
            />
          </div>

          <div className="form-row">
            <label htmlFor="datetime">Date & Time <span>*</span></label>
            <input
              id="datetime"
              name="datetime"
              type="datetime-local"
              value={form.datetime}
              onChange={onChange}
              required
            />
          </div>

          <div className="actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/admin/dashboard")}
              disabled={submitting}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? "Creating..." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
