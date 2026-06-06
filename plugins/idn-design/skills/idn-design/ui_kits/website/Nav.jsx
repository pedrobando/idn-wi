/* Top utility bar + sticky nav + mobile menu */
function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="tb-left">
          <a href="#"><Icon name="phone" /> (262) 555-0140</a>
          <a href="#"><Icon name="map-pin" /> Racine · Kenosha · Milwaukee</a>
        </div>
        <div className="tb-right">
          <span className="vet">Veteran-Owned · Minority-Owned</span>
          <a href="#"><Icon name="lock" /> Client Login</a>
        </div>
      </div>
    </div>
  );
}

function Nav({ page, setPage, onAssess, onMenu }) {
  const link = (id, label) => (
    <a className={page === id ? "active" : ""} onClick={() => setPage(id)}>{label}</a>
  );
  return (
    <header className="nav">
      <div className="wrap">
        <img className="logo" src="../../assets/idn-logo.png" alt="IDN" onClick={() => setPage("home")} />
        <nav className="links">
          {link("services", "Services")}
          {link("home", "Why IDN")}
          {link("home", "About")}
          {link("contact", "Contact")}
        </nav>
        <div className="spacer" />
        <div className="nav-cta">
          <a className="phone" href="#"><Icon name="phone" /> (262) 555-0140</a>
          <button className="btn btn-primary" onClick={onAssess}>Get a free assessment</button>
          <button className="burger" onClick={onMenu} aria-label="Menu"><Icon name="menu" /></button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, setOpen, setPage, onAssess }) {
  const go = (id) => { setPage(id); setOpen(false); };
  return (
    <div className={"mobile-menu" + (open ? " open" : "")}>
      <div className="mm-head">
        <img src="../../assets/idn-logo.png" alt="IDN" />
        <button className="mm-close" onClick={() => setOpen(false)}><Icon name="x" /></button>
      </div>
      <nav>
        <a onClick={() => go("home")}>Home</a>
        <a onClick={() => go("services")}>Services</a>
        <a onClick={() => go("home")}>Why IDN</a>
        <a onClick={() => go("contact")}>Contact</a>
      </nav>
      <div className="mm-cta">
        <button className="btn btn-primary btn-lg btn-block" onClick={() => { setOpen(false); onAssess(); }}>Get a free assessment</button>
      </div>
    </div>
  );
}

Object.assign(window, { TopBar, Nav, MobileMenu });
