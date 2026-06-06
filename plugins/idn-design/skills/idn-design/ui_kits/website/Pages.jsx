/* Secondary pages: Services detail + Contact */
function ServicesPage({ onAssess, setPage }) {
  return (
    <React.Fragment>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow"><span className="tick" /> Services</p>
          <h1>One team for everything technology.</h1>
          <p>From the helpdesk to the server room to the cabling in your walls — IDN manages it all, so you don't have to juggle vendors.</p>
        </div>
      </section>
      <ServicesSection setPage={setPage} />
      <CTABand onAssess={onAssess} />
    </React.Fragment>
  );
}

function ContactPage({ onAssess }) {
  return (
    <React.Fragment>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow"><span className="tick" /> Contact</p>
          <h1>Talk to a real person.</h1>
          <p>Call our Racine office or send a note — a member of our team (not a call center) will get back to you fast.</p>
        </div>
      </section>
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>We're your neighbors.</h3>
            <p>Headquartered in Racine since 2004, with teams in Kenosha and Milwaukee and structured-cabling crews working nationwide.</p>
            <div className="contact-line">
              <span className="ic"><Icon name="phone" /></span>
              <div><div className="k">Call us</div><div className="v">(262) 555-0140</div></div>
            </div>
            <div className="contact-line">
              <span className="ic"><Icon name="mail" /></span>
              <div><div className="k">Email</div><div className="v norm">hello@idnwi.com</div></div>
            </div>
            <div className="contact-line">
              <span className="ic"><Icon name="map-pin" /></span>
              <div><div className="k">Headquarters</div><div className="v norm">Racine, Wisconsin</div></div>
            </div>
            <div className="contact-line">
              <span className="ic"><Icon name="timer" /></span>
              <div><div className="k">Response SLA</div><div className="v">10 minutes</div></div>
            </div>
          </div>
          <div className="contact-card">
            <h3>Send us a message</h3>
            <form onSubmit={(e) => { e.preventDefault(); onAssess(); }}>
              <div className="field"><label>Name</label><input placeholder="Your name" /></div>
              <div className="field"><label>Business email</label><input type="email" placeholder="you@company.com" /></div>
              <div className="field"><label>How can we help?</label><input placeholder="Tell us what's going on…" /></div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { ServicesPage, ContactPage });
