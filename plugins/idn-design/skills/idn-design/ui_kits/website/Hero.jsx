/* Hero + client strip + proof band */
function Hero({ onAssess, setPage }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tick" /> Managed IT · Racine, WI</p>
          <h1>Managed IT for businesses that <span className="pri">can't afford downtime.</span></h1>
          <p className="lead">
            Proactive monitoring, certified expertise, and a 10-minute response SLA —
            one local team accountable for your entire technology stack.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary btn-lg" onClick={onAssess}>
              Get a free assessment <Icon name="arrow-right" />
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => setPage("services")}>See our services</button>
          </div>
          <div className="trust">
            <div className="cert-pills">
              <span className="cert-pill navy">DVB Certified</span>
              <span className="cert-pill">MBE Certified</span>
            </div>
            <span className="divider" />
            <div className="t-stat"><b>1,000+</b><span>Clients served</span></div>
            <span className="divider" />
            <div className="t-stat"><b>Since 2004</b><span>Racine-built</span></div>
          </div>
        </div>
        <div className="hero-media">
          <Photo className="hero-photo" icon="users" label="Local business team — real photo" />
          <div className="floating-card">
            <span className="pulse"><Icon name="timer" /></span>
            <div>
              <b>10-min</b>
              <span>Avg. response SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientStrip() {
  const logos = [
    ["factory", "Lakeshore Mfg."],
    ["stethoscope", "Bayview Clinic"],
    ["graduation-cap", "Unified School Dist."],
    ["landmark", "City of Kenosha"],
    ["building-2", "Harborline Logistics"],
  ];
  return (
    <section className="clients">
      <div className="wrap">
        <p className="lead-txt">Trusted across manufacturing, healthcare, education &amp; government in SE Wisconsin</p>
        <div className="logos">
          {logos.map(([ic, nm]) => (
            <span className="client-logo" key={nm}><Icon name={ic} /> {nm}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofBand() {
  const stats = [
    ["1,000", "+", "Clients served"],
    ["10", "-min", "Response SLA"],
    ["35", "+", "Yrs combined experience"],
    ["3", "", "Locations · nationwide cabling"],
    ["20", "+", "Years in business"],
  ];
  return (
    <section className="proof">
      <div className="wrap">
        {stats.map(([n, u, l], i) => (
          <div className="stat" key={i}>
            <b>{n}<span className="u">{u}</span></b>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, ClientStrip, ProofBand });
