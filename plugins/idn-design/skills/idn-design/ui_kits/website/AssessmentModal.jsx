/* Free-assessment modal — interactive, with success state */
function AssessmentModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) { const t = setTimeout(() => setSent(false), 250); return () => clearTimeout(t); }
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="close" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
        {sent ? (
          <div className="success-state">
            <div className="badge-ic"><Icon name="check" /></div>
            <h3>Request received.</h3>
            <p>Thanks — a real person from our Racine team will reach out within one business day to schedule your free assessment.</p>
            <button className="btn btn-primary btn-block" onClick={onClose}>Back to site</button>
          </div>
        ) : (
          <React.Fragment>
            <div className="m-head">
              <p className="eyebrow"><span className="tick" /> Free assessment</p>
              <h3>Let's look at your IT — on us.</h3>
              <p>No pressure, no jargon. Tell us a bit about your business and we'll follow up within one business day.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="field-2">
                <div className="field"><label>First name</label><input required placeholder="Maria" /></div>
                <div className="field"><label>Last name</label><input required placeholder="Delgado" /></div>
              </div>
              <div className="field"><label>Business name</label><input required placeholder="Lakeshore Manufacturing" /></div>
              <div className="field-2">
                <div className="field"><label>Work email</label><input required type="email" placeholder="you@company.com" /></div>
                <div className="field"><label>Phone</label><input required placeholder="(262) 555-0140" /></div>
              </div>
              <div className="field">
                <label>What do you need help with?</label>
                <select defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>Managed IT</option>
                  <option>Cybersecurity</option>
                  <option>Networking</option>
                  <option>VoIP phone systems</option>
                  <option>Structured cabling</option>
                  <option>Physical security (cameras / access)</option>
                  <option>Web design</option>
                  <option>Not sure — help me figure it out</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Request my free assessment</button>
              <div className="m-foot"><Icon name="lock" /> Your information stays with our team. No spam, ever.</div>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { AssessmentModal });
