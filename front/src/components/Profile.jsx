import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import download from "../assets/images/download.png";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfileData({
        name: user.name,
        email: user.email,
        role: "User", // default role for signup
      });
    } else {
      navigate("/login"); // if not logged in, go to login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user data
    navigate("/login"); // redirect to login
  };

  if (!profileData) return null; // prevent flash before loading

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={download} alt="Default Avatar" className="profile-avatar" />
          <h2>Profile</h2>
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Role:</strong> {profileData.role}</p>
        </div>
        <div className="profile-actions">
          <button onClick={() => navigate("/events")} className="profile-button">
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
