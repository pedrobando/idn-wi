/* Footer */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="top">
          <div className="brand">
            <img src="../../assets/idn-logo-dark.png" alt="Innovative Dynamic Networks" />
            <p>We manage your IT, so you can manage your business. Full-service technology for SE Wisconsin since 2004.</p>
            <div className="certs">
              <span className="cert-pill navy">DVB Certified</span>
              <span className="cert-pill">MBE Certified</span>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a onClick={() => setPage("services")}>Managed IT</a></li>
              <li><a onClick={() => setPage("services")}>Cybersecurity</a></li>
              <li><a onClick={() => setPage("services")}>Networking</a></li>
              <li><a onClick={() => setPage("services")}>VoIP Phones</a></li>
              <li><a onClick={() => setPage("services")}>Structured Cabling</a></li>
              <li><a onClick={() => setPage("services")}>Physical Security</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a onClick={() => setPage("home")}>About IDN</a></li>
              <li><a onClick={() => setPage("home")}>Our Story</a></li>
              <li><a onClick={() => setPage("home")}>Why IDN</a></li>
              <li><a onClick={() => setPage("contact")}>Contact</a></li>
              <li><a href="#">Client Login</a></li>
            </ul>
          </div>
          <div>
            <h5>Locations</h5>
            <ul>
              <li className="loc"><Icon name="map-pin" /> <span><b style={{color:'#fff',fontWeight:600}}>HQ</b> · Racine, WI</span></li>
              <li className="loc"><Icon name="map-pin" /> <span>Kenosha, WI</span></li>
              <li className="loc"><Icon name="map-pin" /> <span>Milwaukee, WI</span></li>
              <li className="loc"><Icon name="cable" /> <span>Nationwide cabling</span></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Innovative Dynamic Networks, LLC. All rights reserved.</span>
          <span className="vet">Veteran-Owned · Minority-Owned · Racine, Wisconsin</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
