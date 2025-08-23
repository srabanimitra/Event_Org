import React from "react";
import "./EventCard.css";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {new Date(event.datetime).toLocaleString()}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Attendees:</strong> {event.attendees}
      </p>

      {/* Buttons for Admin */}
      <div className="event-actions">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
