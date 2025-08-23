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
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/featured">Featured</Link></li>
                <li><Link to="/admin" className="special">Admin Login</Link></li>
                <li><Link to="/login" className="special">Login</Link></li>
                <li><Link to="/signup" className="special">Signup</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/sponsor">Sponsor</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
