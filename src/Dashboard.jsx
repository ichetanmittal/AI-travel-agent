import React from "react";
import "./Dashboard.css";

export default function Dashboard({ user = "User" }) {
  return (
    <div className="dashboard-root">
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#D4FF3F"/>
            <path d="M11 17c0-3 2-6 6-6 2.5 0 4 1.5 4 4 0 2-1.5 3-3 3h-2c-1.5 0-2 1-2 2 0 1 1 2 2 2h2c2 0 3-1 3-3" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="20.5" cy="13.5" r="1" fill="#181818"/>
          </svg>
          <span className="dashboard-brand">Dodo Payments</span>
        </div>
        <nav className="dashboard-nav">
          <div className="dashboard-nav-item dashboard-nav-item--active">Get Started</div>
          <div className="dashboard-nav-item">Itineraries</div>
        </nav>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-greeting">
          <h1>Hello {user},</h1>
          <h2>Let's get started on creating your first itinerary!</h2>
        </div>
        {/* You can add more dashboard content here */}
      </main>
    </div>
  );
} 