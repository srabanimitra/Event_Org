import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

import person from '../assets/images/person.png';
import email from '../assets/images/email.png';
import Password from '../assets/images/password.png';

const Signup = () => {
  const [name, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const handleSignup = () => {
    // Just a dummy validation (no backend call)
    if (!emailValue.includes("@")) {
      alert("Invalid email! Email must contain '@'.");
      return;
    }
    if (passwordValue.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert(`Signup successful!\nName: ${name}\nEmail: ${emailValue}`);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={person} alt="Person" />
          <input 
            placeholder="Name" 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
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
        Already have an account? <Link to="/login">Login</Link>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>Sign Up</div>
      </div>
    </div>
  );
};

export default Signup;
