import React, { useState } from 'react';
import './Signup.css'; // Reusing same CSS for consistent styling
import { Link } from 'react-router-dom';

import email from '../assets/images/email.png';
import Password from '../assets/images/password.png';

const Login = () => {
  const [role, setRole] = useState("User");
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const handleLogin = async () => {
    if (!emailValue.includes("@")) {
      alert("Invalid email!");
      return;
    }
    if (passwordValue.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed!");
        return;
      }

      alert("Login successful!");
      console.log(data);

      window.location.href = "/";

    } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-dropdown"
          >
            <option value="" disabled hidden>Select Role</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>


        <div className="input">
          <img src={email} alt="Email" />
          <input
            placeholder="Email Id"
            type="email"
            value={emailValue}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
        </div>

        <div className="input">
          <img src={Password} alt="Password" />
          <input
            placeholder="Password"
            type="password"
            value={passwordValue}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="have-account">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default Login;
