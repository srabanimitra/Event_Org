import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = localStorage.getItem("adminLoggedIn") === "true";

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("adminLoggedIn");
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

                {/* ✅ Show Admin Panel only if ADMIN logged in */}
                {isAdmin && <li><Link to="/admin-dashboard">Admin Panel</Link></li>}

                {/* ✅ Show Admin Login only if NOT logged in at all */}
                {!user && !isAdmin && <li><Link to="/admin">Admin Login</Link></li>}

                {/* ✅ If USER logged in */}
                {user && !isAdmin && (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li>
                            <button onClick={handleLogout} className="logout-btn small">
                                Logout
                            </button>
                        </li>
                    </>
                )}

                {/* ✅ If ADMIN logged in */}
                {isAdmin && (
                    <li>
                        <button onClick={handleLogout} className="logout-btn small">
                            Logout
                        </button>
                    </li>
                )}

                {/* ✅ If NOT logged in (no user, no admin) */}
                {!user && !isAdmin && (
                    <>
                        <li><Link to="/login" className="special">Login</Link></li>
                        <li><Link to="/signup" className="special">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
