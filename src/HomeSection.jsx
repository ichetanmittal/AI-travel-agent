import React from "react";
import "./HomeSection.css";
import { useNavigate } from "react-router-dom";

export default function HomeSection() {
  const navigate = useNavigate();
  return (
    <section className="home-section">
      <h1 className="home-section__headline">
      Travel Planner That Respects Your Budget
      </h1>
      <p className="home-section__subheading">
      From planning to payments, we handle the chaos so you enjoy the journey.
      </p>
      <div className="home-section__actions">
        <button className="home-section__btn home-section__btn--primary" onClick={() => navigate('/signup')}>Get Started</button>
        <button className="home-section__btn home-section__btn--secondary">Talk to Founder</button>
      </div>
    </section>
  );
} 