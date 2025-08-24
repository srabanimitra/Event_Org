import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

import person from '../assets/images/person.png';
import email from '../assets/images/email.png';
import Password from '../assets/images/password.png';
import Phone from '../assets/images/phone.png';
import Address from '../assets/images/address.png';

const Signup = () => {
  const [name, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = async () => {
    if (!emailValue.includes("@")) {
      alert("Invalid email!");
      return;
    }
    if (passwordValue.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email: emailValue, password: passwordValue,
          mobile, address
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed!");
        return;
      }

      alert("Signup successful!");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className='container'>
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={person} alt="Person" />
            <input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="input">
            <img src={email} alt="Email" />
            <input placeholder="Email Id" type="email" value={emailValue} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
          </div>

          <div className="input">
            <img src={Password} alt="Password" />
            <input placeholder="Password" type="password" value={passwordValue} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="input">
            <img src={Phone} alt="Phone" />
            <input placeholder="Mobile Number" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="input">
            <img src={Address} alt="Address" />
            <input placeholder="Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>

        <div className="have-account">
          Already have an account? <Link to="/login">Login</Link>
        </div>

        <div className="submit-container">
          <div className="submit" onClick={handleSignup}>Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
