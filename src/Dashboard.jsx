import React, { useState } from "react";
import "./Dashboard.css";

const steps = [
  {
    label: "Travel Dates",
    content: ({ values, onChange }) => (
      <div className="dashboard-step-fields">
        <label>
          Start Date
          <input type="date" name="startDate" value={values.startDate} onChange={onChange} />
        </label>
        <label>
          End Date
          <input type="date" name="endDate" value={values.endDate} onChange={onChange} />
        </label>
      </div>
    ),
  },
  {
    label: "From Destination",
    content: ({ values, onChange }) => (
      <div className="dashboard-step-fields">
        <label>
          From
          <input type="text" name="from" placeholder="e.g. New York" value={values.from} onChange={onChange} />
        </label>
      </div>
    ),
  },
  {
    label: "To Destination",
    content: ({ values, onChange }) => (
      <div className="dashboard-step-fields">
        <label>
          To
          <input type="text" name="to" placeholder="e.g. Paris" value={values.to} onChange={onChange} />
        </label>
      </div>
    ),
  },
  {
    label: "Budget",
    content: ({ values, onChange }) => (
      <div className="dashboard-step-fields">
        <label>
          Budget (USD)
          <input type="number" name="budget" placeholder="e.g. 2000" value={values.budget} onChange={onChange} min="0" />
        </label>
      </div>
    ),
  },
];

export default function Dashboard({ user = "User" }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    startDate: "",
    endDate: "",
    from: "",
    to: "",
    budget: "",
  });

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleNext() {
    if (step < steps.length - 1) setStep(step + 1);
  }
  function handleBack() {
    if (step > 0) setStep(step - 1);
  }
  function handleStart() {
    // You can handle itinerary creation here
    alert("Itinerary creation started!\n" + JSON.stringify(values, null, 2));
  }

  return (
    <div className="dashboard-root">
      <aside className="dashboard-sidebar">
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
        <div className="dashboard-stepper">
          <div className="dashboard-stepper-progress">
            Step {step + 1} of {steps.length}: <span className="dashboard-stepper-label">{steps[step].label}</span>
          </div>
          <form className="dashboard-stepper-form" onSubmit={e => e.preventDefault()}>
            {steps[step].content({ values, onChange: handleChange })}
            <div className="dashboard-stepper-actions">
              {step > 0 && (
                <button type="button" className="dashboard-btn dashboard-btn--secondary" onClick={handleBack}>
                  Back
                </button>
              )}
              {step < steps.length - 1 ? (
                <button type="button" className="dashboard-btn" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="button" className="dashboard-btn dashboard-btn--primary" onClick={handleStart}>
                  Start Creating Itineraries
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 