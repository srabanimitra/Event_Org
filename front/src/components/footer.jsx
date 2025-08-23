import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Wave SVG */}
            <div className="wave"></div>

            {/* Footer Content */}
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@eventify.com</p>
                    <p>Phone: +880 123 456 789</p>
                </div>

                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        Eventify helps you manage and discover events with ease, connecting
                        people and organizations.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Organization</h3>
                    <ul>
                        <li>Event Management</li>
                        <li>Workshops</li>
                        <li>Conferences</li>
                        <li>Webinars</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Sponsors</h3>
                    <ul>
                        <li>Company A</li>
                        <li>Company B</li>
                        <li>Company C</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Eventify. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
