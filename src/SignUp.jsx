import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");

  return (
    <div className="signup-container">
      <div className="signup-logo">
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D4FF3F"/>
          <path d="M11 17c0-3 2-6 6-6 2.5 0 4 1.5 4 4 0 2-1.5 3-3 3h-2c-1.5 0-2 1-2 2 0 1 1 2 2 2h2c2 0 3-1 3-3" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20.5" cy="13.5" r="1" fill="#181818"/>
        </svg>
      </div>
      <h1 className="signup-title">Sign up to CheckList AI</h1>
      <p className="signup-subtitle">Create a free account using your email</p>
      <form className="signup-form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="email" className="signup-label">Email</label>
        <input
          id="email"
          type="email"
          className="signup-input"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="signup-btn" type="submit">Sign up</button>
      </form>
      <div className="signup-login">
        Already have an account? <span className="signup-login-link">Login</span>
      </div>
      <div className="signup-terms">
        By Signing up, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
} 