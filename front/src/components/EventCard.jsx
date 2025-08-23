import React from "react";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "1rem" }}>
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Attendees: {event.attendees}</p>
      <button style={{ marginRight: "0.5rem" }} onClick={() => onEdit(event.id)}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default EventCard;
