import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // On successful login, redirect to dashboard and pass user
    navigate("/dashboard", { state: { user: email.split("@")[0] || "User" } });
  }

  return (
    <div className="login-container">
      <div className="login-logo">
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#D4FF3F"/>
          <path d="M11 17c0-3 2-6 6-6 2.5 0 4 1.5 4 4 0 2-1.5 3-3 3h-2c-1.5 0-2 1-2 2 0 1 1 2 2 2h2c2 0 3-1 3-3" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20.5" cy="13.5" r="1" fill="#181818"/>
        </svg>
      </div>
      <h1 className="login-title">Welcome back!</h1>
      <p className="login-subtitle">Login to CheckList AI</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email" className="login-label">Email</label>
        <input
          id="login-email"
          type="email"
          className="login-input"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="login-password" className="login-label">Password</label>
        <div className="login-password-wrapper">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="login-password-toggle" onClick={() => setShowPassword(s => !s)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="login-links-row">
          {/* <span className="login-forgot">Can't remember password?</span> */}
          {/* <span className="login-forgot-link">Forgot Password</span> */}
        </div>
        <button className="login-btn" type="submit">Log in</button>
      </form>
      <div className="login-or-row">
        <div className="login-or-line"></div>
        <span className="login-or-text">Or</span>
        <div className="login-or-line"></div>
      </div>
      {/* <button className="login-google-btn">
        <span className="login-google-icon"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" width="22" height="22" style={{verticalAlign:'middle'}}/> </span>
        Sign in with Google
      </button> */}
      <div className="login-signup-row">
        Don't have an account? <span className="login-signup-link">Sign up</span>
      </div>
    </div>
  );
} 