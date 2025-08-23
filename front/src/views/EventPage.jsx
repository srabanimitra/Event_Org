import React, { useEffect, useState } from "react";

function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from Laravel backend
    fetch("http://127.0.0.1:8000/api/events") // make sure your backend URL is correct
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
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Events 🎉</h1>

      {events.length === 0 ? (
        <p style={{ textAlign: "center" }}>No events found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9f9",
              }}
            >
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
              <p>
                <strong>Organized by Club ID:</strong> {event.club_id}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventPage;
