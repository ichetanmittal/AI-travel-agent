import React, { useEffect, useState } from "react";
import "./BenefitsSection.css";
import countryImg from './assets/country.png';
const benefits = [
  {
    icon: "⏱️",
    title: "Itinerary That Matches Your Budget, Not Just Your Dreams",
    desc:
      "Can't afford the $40 ticket to that castle? We'll suggest a beautiful local alternative—same vibe, no guilt",
  },
  {
    icon: "✔️",
    title: "Travel Smarter with the Right Fintech Tools",
    desc:
      "Avoid hidden fees. Get the best travel cards, eSIMs, and local deals based on your destination and spending habits",
  },
  {
    icon: "🌐",
    title: "Stay One Step Ahead, Wherever You Are",
    desc: "Get real-time alerts about protests, seasonal shifts, or what not to wear in a temple. It's like having a local guide—without the awkward group tours",
  },
];

export default function BenefitsSection() {
  const [active, setActive] = useState(0);
  const DURATION = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % benefits.length);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="benefits-section">
      <div className="benefits-label">
        <span className="benefits-label-icon">✱</span> Benefits
      </div>
      {/* <h2 className="benefits-headline">The Global Merchant Of Record Platform You Need</h2>
      <p className="benefits-subheading">Generate revenue seamlessly with Dodo Payments</p> */}
      <div className="benefits-content">
        <img src={countryImg} alt="World Map" style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }} />
        {/* <div className="benefits-card-gradient">
          <div className="benefits-card">
            <div className="benefits-step">
              <span>Step 1. Identity verification</span>
              <span className="benefits-verified">● Verified</span>
            </div>
            <div className="benefits-step">
              <span>Step 2. Business verification</span>
              <span className="benefits-verified">● Verified</span>
            </div>
          </div>
        </div> */}
        <div className="benefits-features">
          {benefits.map((b, i) => (
            <div
              className={`benefits-feature${i === active ? " benefits-feature--active" : ""}`}
              key={b.title}
            >
              <span className="benefits-feature-icon">{b.icon}</span>
              <div>
                <div
                  className={`benefits-feature-title${i !== active ? " benefits-feature-title--muted" : ""}`}
                >
                  {b.title}
                </div>
                {b.desc && i === active && (
                  <div className="benefits-feature-desc">{b.desc}</div>
                )}
                <div
                  className="benefits-feature-underline"
                  style={
                    i === active
                      ? { width: "120px", transition: `width ${DURATION}ms linear` }
                      : { width: 0, transition: "width 0.2s" }
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 