import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-section">
                <h2>
                    Eventi<span className="wave">~</span>fy
                </h2>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Nav Links */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>

                <li><Link to="/admin">Admin Login</Link></li>

                {/* ✅ If logged in, show Profile + Logout */}
                {user ? (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
                    </>
                ) : (
                    <>
                        {/* ✅ If NOT logged in, show Login + Signup */}
                        <li><Link to="/login" className="special">Login</Link></li>
                        <li><Link to="/signup" className="special">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
