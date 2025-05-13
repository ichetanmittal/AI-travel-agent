import React, { useEffect, useState } from "react";
import "./BenefitsSection.css";

const benefits = [
  {
    icon: "⏱️",
    title: "Launch Global Business within Minutes",
    desc:
      "No need to set up your own entity or integrate any payment gateway, subscription or billing engine, fraud or chargeback solution etc",
  },
  {
    icon: "✔️",
    title: "Eliminate Payment Friction for Customers",
    desc:
      "90%+ success rate and 25+ local payment methods across 150+ countries",
  },
  {
    icon: "🌐",
    title: "Automate Global Tax and Compliance",
    desc: null,
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
      <h2 className="benefits-headline">The Global Merchant Of Record Platform You Need</h2>
      <p className="benefits-subheading">Generate revenue seamlessly with Dodo Payments</p>
      <div className="benefits-content">
        <div className="benefits-card-gradient">
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
        </div>
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