import React from "react";
import "./BenefitsSection.css";

export default function BenefitsSection() {
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
          <div className="benefits-feature benefits-feature--active">
            <span className="benefits-feature-icon">⏱️</span>
            <div>
              <div className="benefits-feature-title">Launch Global Business within Minutes</div>
              <div className="benefits-feature-desc">
                No need to set up your own entity or integrate any payment gateway, subscription or billing engine, fraud or chargeback solution etc
              </div>
              <div className="benefits-feature-underline"></div>
            </div>
          </div>
          <div className="benefits-feature">
            <span className="benefits-feature-icon">✔️</span>
            <div className="benefits-feature-title benefits-feature-title--muted">Eliminate Payment Friction for Customers</div>
          </div>
          <div className="benefits-feature">
            <span className="benefits-feature-icon">🌐</span>
            <div className="benefits-feature-title benefits-feature-title--muted">Automate Global Tax and Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
} 