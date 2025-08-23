import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                Eventi<span className="wave">~</span>fy
            </div>
            <ul className="nav-links">
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/featured">Featured</Link></li>
                <li><Link to="/admin">Admin Login</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/sponsor">Sponsor</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
