import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import download from "../assets/images/download.png";

const Profile = () => {
  const navigate = useNavigate();

  // Dummy data for frontend only
  const profileData = {
    name: "John Doe",
    phone: "0123456789",
    email: "john@example.com",
    address: "Dhaka, Bangladesh",
    role: "User",
  };

  const handleLogout = () => {
    navigate("/"); // Just redirect to homepage for now
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={download} alt="Default Avatar" className="profile-avatar" />
          <h2>Profile</h2>
        </div>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {profileData.name}
          </p>
          <p>
            <strong>Phone:</strong> {profileData.phone}
          </p>
          <p>
            <strong>Email:</strong> {profileData.email}
          </p>
          <p>
            <strong>Address:</strong> {profileData.address}
          </p>
          <p>
            <strong>Role:</strong> {profileData.role}
          </p>
        </div>
        <div className="profile-actions">
          <button
            onClick={() => navigate("/events")}
            className="profile-button"
          >
            My Events
          </button>
          <button className="profile-button">Edit Profile</button>
          <button onClick={handleLogout} className="profile-button logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
