/* Why IDN split + Founder story + Testimonial + CTA band */
function WhyIDN({ onAssess }) {
  const points = [
    ["timer", "10-minute response SLA", "A commitment no competitor in our market publishes. When something breaks, you hear from a real person — fast."],
    ["layers", "One-stop shop", "Managed IT, security, networking, phones, cabling, cameras, and web — all under one roof, one team."],
    ["badge-check", "Certified & accountable", "35+ years of combined experience and certifications across every layer of your stack."],
    ["map-pin", "Local, and here to stay", "Racine-built since 2004. We're your neighbors — and your IT department when you need one."],
  ];
  return (
    <section className="why">
      <div className="wrap">
        <div>
          <p className="eyebrow"><span className="tick" /> Why IDN</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 12px", lineHeight: 1.12 }}>
            Enterprise-grade IT, with a local handshake.
          </h2>
          <p style={{ fontSize: 16, color: "var(--gray)", margin: 0, lineHeight: 1.6, maxWidth: "40ch" }}>
            Big enough to handle manufacturing, healthcare, and government — small enough that you know who's answering.
          </p>
          <ul className="checklist">
            {points.map(([ic, h, p]) => (
              <li key={h}>
                <span className="ic"><Icon name={ic} /></span>
                <div><h4>{h}</h4><p>{p}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <Photo className="why-visual" icon="wrench" label="Technician on-site with a client" />
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="founder">
      <div className="wrap">
        <Photo className="founder-photo" icon="user" label="Angel Ramos-Ortiz — portrait" />
        <div>
          <p className="eyebrow"><span className="tick" /> Our story</p>
          <blockquote>
            "I built IDN from Racine on one idea: treat a client's technology like it's my own.
            <span className="pri"> Twenty years later, that's still the whole job."</span>
          </blockquote>
          <div className="sig">
            <div>
              <div className="nm">Angel Ramos-Ortiz</div>
              <div className="ro">Founder &amp; CEO · U.S. Army Veteran</div>
            </div>
          </div>
          <div className="accolades">
            <div><Icon name="award" /> Recognized by the U.S. Congress &amp; the Governor of Wisconsin</div>
            <div><Icon name="star" /> One of Wisconsin's most influential Latino business leaders</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="testi">
      <div className="wrap">
        <div className="stars">
          {[0,1,2,3,4].map(i => <Icon key={i} name="star" style={{ fill: "var(--warning)" }} />)}
        </div>
        <q>When our line went down at 6am, IDN had someone on it before we'd finished our coffee. They don't feel like a vendor — they feel like part of our team.</q>
        <div className="who">
          <Photo className="av" icon="user" label="" />
          <div>
            <div className="nm">Maria Delgado</div>
            <div className="ro">Operations Director · Lakeshore Manufacturing</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABand({ onAssess }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="box">
          <h2>Ready to stop worrying about IT?</h2>
          <p>Get a free, no-pressure assessment of your technology — and a plan to fix what's holding you back.</p>
          <div className="cta-row">
            <button className="btn btn-white btn-lg" onClick={onAssess}>Get a free assessment <Icon name="arrow-right" /></button>
            <a className="btn btn-lg" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }} href="#"><Icon name="phone" /> (262) 555-0140</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WhyIDN, Founder, Testimonial, CTABand });
