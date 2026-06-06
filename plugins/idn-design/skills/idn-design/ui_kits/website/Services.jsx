/* Shared service catalogue + Services grid section */
const IDN_SERVICES = [
  { icon: "shield-check", name: "Managed IT", alt: false,
    desc: "Proactive monitoring, helpdesk, and strategy — one team accountable for your whole stack." },
  { icon: "lock", name: "Cybersecurity", alt: true,
    desc: "Layered protection, monitoring, and response sized to your business, not an enterprise budget." },
  { icon: "network", name: "Networking", alt: false,
    desc: "Designed, installed, and managed networks that keep every site fast and connected." },
  { icon: "phone", name: "VoIP Phone Systems", alt: true,
    desc: "Modern cloud phone systems with the features you need and support that actually answers." },
  { icon: "cable", name: "Structured Cabling", alt: false,
    desc: "Certified low-voltage cabling — local installs and nationwide rollouts, done right." },
  { icon: "cctv", name: "Physical Security", alt: true,
    desc: "Cameras and access control, fully integrated and monitored alongside your IT." },
  { icon: "globe", name: "Web Design", alt: false,
    desc: "Clean, credible websites that represent your business as well as your team does." },
  { icon: "server", name: "Cloud & Backup", alt: true,
    desc: "Migration, hosting, and tested backups so your data is recoverable when it matters." },
  { icon: "life-buoy", name: "Helpdesk Support", alt: false,
    desc: "Real people in Racine who pick up the phone and resolve issues in minutes." },
];

function ServicesSection({ setPage, limit }) {
  const list = limit ? IDN_SERVICES.slice(0, limit) : IDN_SERVICES;
  return (
    <section className="services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow"><span className="tick" /> One-stop shop</p>
          <h2>Everything technology, under one roof.</h2>
          <p>The only provider in our market with the full stack — so you call one team, get one bill, and hold one company accountable.</p>
        </div>
        <div className="grid">
          {list.map((s) => (
            <article className={"svc" + (s.alt ? " alt" : "")} key={s.name} onClick={() => setPage && setPage("services")}>
              <div className="top" />
              <div className="body">
                <div className="chip"><Icon name={s.icon} /></div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="more">Learn more <Icon name="arrow-right" /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { IDN_SERVICES, ServicesSection });
