import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-section">
                <h2>Eventi<span className="wave">~</span>fy</h2>
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
                <li><Link to="/featured">Featured</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/admin">Admin Login</Link></li>

                <li><Link to="/login" className="special">Login</Link></li>
                <li><Link to="/signup" className="special">Signup</Link></li>


            </ul>
        </nav>
    );
};

export default Navbar;
