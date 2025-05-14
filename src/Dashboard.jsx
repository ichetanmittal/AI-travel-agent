import React, { useState } from "react";
import "./Dashboard.css";
import { jsPDF } from "jspdf";

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
    label: "Origin",
    content: ({ values, onChange }) => (
      <div className="dashboard-step-fields">
        <label>
         
          <input type="text" name="from" placeholder="e.g. New York" value={values.from} onChange={onChange} />
        </label>
      </div>
    ),
  },
  {
    label: "Destination",
    content: ({ values, onChange }) => (
      <div className="dashboard-step-fields">
        <label>
          
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
  const [modalOpen, setModalOpen] = useState(false);
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleNext() {
    if (step < steps.length - 1) setStep(step + 1);
  }
  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  async function handleStart() {
    setLoading(true);
    setError("");
    setModalOpen(true);
    setItinerary("");
    try {
      const prompt = `Create a detailed travel itinerary for the following trip (in markdown):\n${JSON.stringify(values, null, 2)}`;
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "",
        },
        body: JSON.stringify({
          model: "gpt-4.1",
          input: prompt,
        }),
      });
      const data = await response.json();
      // Extract the itinerary text from the nested API response
      let itineraryText = "";
      try {
        itineraryText = data.output?.[0]?.content?.[0]?.text || "";
        // Remove code block markers if present
        itineraryText = itineraryText.replace(/^```[a-zA-Z]*\n?|```$/g, "");
      } catch (e) {
        itineraryText = "";
      }
      setItinerary(itineraryText || "No itinerary generated.");
    } catch (err) {
      setError("Failed to generate itinerary: " + (err.message || err.toString()));
    } finally {
      setLoading(false);
    }
  }

  function handleDownloadPDF() {
    if (!itinerary) return;
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10;
    let y = 20;

    // Split the itinerary into lines that fit the page width
    const lines = doc.splitTextToSize(itinerary, 180); // 180 is page width minus margins

    lines.forEach(line => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, margin, y);
      y += 8; // line height
    });

    doc.save("itinerary.pdf");
  }

  return (
    <div className="dashboard-root">
      <aside className="dashboard-sidebar">
        <nav className="dashboard-nav">
          <div className="dashboard-nav-item dashboard-nav-item--active">Get Started</div>
          {/* <div className="dashboard-nav-item">Itineraries</div> */}
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
        {/* Modal for itinerary */}
        {modalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              background: '#181818',
              color: '#fff',
              borderRadius: 16,
              padding: 32,
              maxWidth: 600,
              width: '90%',
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
              position: 'relative',
              overflowY: 'auto',
              maxHeight: '80vh',
            }}>
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: '#232323',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 14px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                ×
              </button>
              <button
                onClick={handleDownloadPDF}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 56,
                  background: '#d4ff3f',
                  color: '#181818',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 14px',
                  cursor: itinerary && !loading && !error ? 'pointer' : 'not-allowed',
                  fontWeight: 700,
                  fontSize: 16,
                  opacity: itinerary && !loading && !error ? 1 : 0.5,
                }}
                disabled={!itinerary || loading || error}
              >
                Download PDF
              </button>
              <h2 style={{marginTop: 0}}>Generated Itinerary</h2>
              {loading && <div>Generating itinerary...</div>}
              {error && <div style={{color: '#ff4d4f'}}>{error}</div>}
              {!loading && !error && (
                <div style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: itinerary.replace(/\n/g, '<br/>')}} />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 