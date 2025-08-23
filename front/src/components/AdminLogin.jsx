import React, { useState } from "react";
import "./AdminLogin.css";

export default function AdminLogin() {
    const [registerId, setRegisterId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://127.0.0.1:8000/api/admin-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    register_id: registerId,
                    password: password,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setMessage("✅ Login Successful!");
            } else {
                setMessage("❌ " + data.message);
            }
        } catch (error) {
            console.error(error);
            setMessage("⚠️ Server error. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Register Id</label>
                    <input
                        type="text"
                        value={registerId}
                        onChange={(e) => setRegisterId(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>
                </form>
                {message && <p style={{ marginTop: "15px" }}>{message}</p>}
            </div>
        </div>
    );
}
