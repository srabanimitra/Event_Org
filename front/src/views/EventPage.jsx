import React, { useEffect, useState } from "react";
import "./Events.css";
function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading events...</h2>;

  return (
    <div className="event-page">
      <h1 className="event-header">Events 🎉</h1>

      {events.length === 0 ? (
        <p style={{ textAlign: "center" }}>No events found.</p>
      ) : (
        <div className="event-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>
                <strong>Date & Time:</strong>{" "}
                {new Date(event.datetime).toLocaleString()}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Attendees:</strong> {event.attendees}
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfkYPdX7eIJCyv7-4DBQny8GHLskcw-Ajpll5PEAaniLv8e6Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="participate-btn"
              >
                Participate 🚀
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventPage;
