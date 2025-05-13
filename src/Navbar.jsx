import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__icon">
          {/* Dodo SVG icon */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#D4FF3F"/>
            <path d="M11 17c0-3 2-6 6-6 2.5 0 4 1.5 4 4 0 2-1.5 3-3 3h-2c-1.5 0-2 1-2 2 0 1 1 2 2 2h2c2 0 3-1 3-3" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20.5" cy="13.5" r="1" fill="#181818"/>
          </svg>
        </span>
        <span className="navbar__brand">CheckList AI</span>
      </div>
      <ul className="navbar__links">
        {/* <li>Products</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Developer</li> */}
      </ul>
      <div className="navbar__actions">
        {/* Hide 'Get Started' and 'Login' buttons since user is already logged in */}
        {/* <button className="navbar__btn navbar__btn--primary">Get Started</button>
        <button className="navbar__btn navbar__btn--secondary" onClick={() => navigate('/login')}>Login</button> */}
      </div>
    </nav>
  );
} 