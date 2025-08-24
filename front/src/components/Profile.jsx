import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import download from "../assets/images/download.png";

const Profile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    interests: ""
  });

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProfileData(user);
      setFormData({
        name: user.name || "",
        mobile: user.mobile || "",
        address: user.address || "",
        interests: user.interests || ""
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Save updated profile
  const handleSave = async () => {
    if (!profileData || !profileData.id) return;

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/update-profile/${profileData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Update failed!");
        return;
      }

      alert("Profile updated successfully!");
      setProfileData(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating profile.");
    }
  };

  if (!profileData) return null;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src={download} alt="Avatar" className="profile-avatar" />
          <h2>Profile</h2>
        </div>

        {!isEditing ? (
          <div className="profile-info">
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Mobile:</strong> {profileData.mobile || "-"}</p>
            <p><strong>Address:</strong> {profileData.address || "-"}</p>
            <p><strong>Interests:</strong> {profileData.interests || "-"}</p>
            <p><strong>Role:</strong> {profileData.role || "User"}</p>
          </div>
        ) : (
          <div className="edit-form">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="Interests"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            />
          </div>
        )}

        <div className="profile-actions">
          {!isEditing ? (
            <button className="profile-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
          ) : (
            <>
              <button className="profile-button" onClick={handleSave}>Save</button>
              <button className="profile-button logout" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
          <button onClick={handleLogout} className="profile-button logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
