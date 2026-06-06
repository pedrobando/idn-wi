/* @ds-bundle: {"format":3,"namespace":"IDNDesignSystem_5b23af","components":[],"sourceHashes":{"ui_kits/website/AssessmentModal.jsx":"74c309488bfe","ui_kits/website/Footer.jsx":"0411c3b7c2f4","ui_kits/website/Hero.jsx":"7c28ec45a330","ui_kits/website/Nav.jsx":"28a4a9b73d71","ui_kits/website/Pages.jsx":"8aaf7f823498","ui_kits/website/Primitives.jsx":"81f3942023e8","ui_kits/website/Sections.jsx":"ab1a5a2ac710","ui_kits/website/Services.jsx":"db85910c5065"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IDNDesignSystem_5b23af = window.IDNDesignSystem_5b23af || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/AssessmentModal.jsx
try { (() => {
/* Free-assessment modal — interactive, with success state */
function AssessmentModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setSent(false), 250);
      return () => clearTimeout(t);
    }
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  })), sent ? /*#__PURE__*/React.createElement("div", {
    className: "success-state"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("h3", null, "Request received."), /*#__PURE__*/React.createElement("p", null, "Thanks \u2014 a real person from our Racine team will reach out within one business day to schedule your free assessment."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block",
    onClick: onClose
  }, "Back to site")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " Free assessment"), /*#__PURE__*/React.createElement("h3", null, "Let's look at your IT \u2014 on us."), /*#__PURE__*/React.createElement("p", null, "No pressure, no jargon. Tell us a bit about your business and we'll follow up within one business day.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "First name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Maria"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Last name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Delgado"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Business name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "Lakeshore Manufacturing"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Work email"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    required: true,
    placeholder: "(262) 555-0140"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "What do you need help with?"), /*#__PURE__*/React.createElement("select", {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a service\u2026"), /*#__PURE__*/React.createElement("option", null, "Managed IT"), /*#__PURE__*/React.createElement("option", null, "Cybersecurity"), /*#__PURE__*/React.createElement("option", null, "Networking"), /*#__PURE__*/React.createElement("option", null, "VoIP phone systems"), /*#__PURE__*/React.createElement("option", null, "Structured cabling"), /*#__PURE__*/React.createElement("option", null, "Physical security (cameras / access)"), /*#__PURE__*/React.createElement("option", null, "Web design"), /*#__PURE__*/React.createElement("option", null, "Not sure \u2014 help me figure it out"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg btn-block"
  }, "Request my free assessment"), /*#__PURE__*/React.createElement("div", {
    className: "m-foot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock"
  }), " Your information stays with our team. No spam, ever.")))));
}
Object.assign(window, {
  AssessmentModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AssessmentModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer */
function Footer({
  setPage
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/idn-logo-dark.png",
    alt: "Innovative Dynamic Networks"
  }), /*#__PURE__*/React.createElement("p", null, "We manage your IT, so you can manage your business. Full-service technology for SE Wisconsin since 2004."), /*#__PURE__*/React.createElement("div", {
    className: "certs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cert-pill navy"
  }, "DVB Certified"), /*#__PURE__*/React.createElement("span", {
    className: "cert-pill"
  }, "MBE Certified"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("services")
  }, "Managed IT")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("services")
  }, "Cybersecurity")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("services")
  }, "Networking")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("services")
  }, "VoIP Phones")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("services")
  }, "Structured Cabling")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("services")
  }, "Physical Security")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("home")
  }, "About IDN")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("home")
  }, "Our Story")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("home")
  }, "Why IDN")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage("contact")
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Client Login")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Locations"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "loc"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  }), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, "HQ"), " \xB7 Racine, WI")), /*#__PURE__*/React.createElement("li", {
    className: "loc"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  }), " ", /*#__PURE__*/React.createElement("span", null, "Kenosha, WI")), /*#__PURE__*/React.createElement("li", {
    className: "loc"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  }), " ", /*#__PURE__*/React.createElement("span", null, "Milwaukee, WI")), /*#__PURE__*/React.createElement("li", {
    className: "loc"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cable"
  }), " ", /*#__PURE__*/React.createElement("span", null, "Nationwide cabling"))))), /*#__PURE__*/React.createElement("div", {
    className: "bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Innovative Dynamic Networks, LLC. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "vet"
  }, "Veteran-Owned \xB7 Minority-Owned \xB7 Racine, Wisconsin"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero + client strip + proof band */
function Hero({
  onAssess,
  setPage
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " Managed IT \xB7 Racine, WI"), /*#__PURE__*/React.createElement("h1", null, "Managed IT for businesses that ", /*#__PURE__*/React.createElement("span", {
    className: "pri"
  }, "can't afford downtime.")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Proactive monitoring, certified expertise, and a 10-minute response SLA \u2014 one local team accountable for your entire technology stack."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: onAssess
  }, "Get a free assessment ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => setPage("services")
  }, "See our services")), /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cert-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cert-pill navy"
  }, "DVB Certified"), /*#__PURE__*/React.createElement("span", {
    className: "cert-pill"
  }, "MBE Certified")), /*#__PURE__*/React.createElement("span", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-stat"
  }, /*#__PURE__*/React.createElement("b", null, "1,000+"), /*#__PURE__*/React.createElement("span", null, "Clients served")), /*#__PURE__*/React.createElement("span", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-stat"
  }, /*#__PURE__*/React.createElement("b", null, "Since 2004"), /*#__PURE__*/React.createElement("span", null, "Racine-built")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-media"
  }, /*#__PURE__*/React.createElement(Photo, {
    className: "hero-photo",
    icon: "users",
    label: "Local business team \u2014 real photo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "floating-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "timer"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "10-min"), /*#__PURE__*/React.createElement("span", null, "Avg. response SLA"))))));
}
function ClientStrip() {
  const logos = [["factory", "Lakeshore Mfg."], ["stethoscope", "Bayview Clinic"], ["graduation-cap", "Unified School Dist."], ["landmark", "City of Kenosha"], ["building-2", "Harborline Logistics"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "clients"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead-txt"
  }, "Trusted across manufacturing, healthcare, education & government in SE Wisconsin"), /*#__PURE__*/React.createElement("div", {
    className: "logos"
  }, logos.map(([ic, nm]) => /*#__PURE__*/React.createElement("span", {
    className: "client-logo",
    key: nm
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic
  }), " ", nm)))));
}
function ProofBand() {
  const stats = [["1,000", "+", "Clients served"], ["10", "-min", "Response SLA"], ["35", "+", "Yrs combined experience"], ["3", "", "Locations · nationwide cabling"], ["20", "+", "Years in business"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, stats.map(([n, u, l], i) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: i
  }, /*#__PURE__*/React.createElement("b", null, n, /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, u)), /*#__PURE__*/React.createElement("span", null, l)))));
}
Object.assign(window, {
  Hero,
  ClientStrip,
  ProofBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Top utility bar + sticky nav + mobile menu */
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tb-left"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), " (262) 555-0140"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  }), " Racine \xB7 Kenosha \xB7 Milwaukee")), /*#__PURE__*/React.createElement("div", {
    className: "tb-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vet"
  }, "Veteran-Owned \xB7 Minority-Owned"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock"
  }), " Client Login"))));
}
function Nav({
  page,
  setPage,
  onAssess,
  onMenu
}) {
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    className: page === id ? "active" : "",
    onClick: () => setPage(id)
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: "../../assets/idn-logo.png",
    alt: "IDN",
    onClick: () => setPage("home")
  }), /*#__PURE__*/React.createElement("nav", {
    className: "links"
  }, link("services", "Services"), link("home", "Why IDN"), link("home", "About"), link("contact", "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "phone",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), " (262) 555-0140"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onAssess
  }, "Get a free assessment"), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    onClick: onMenu,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu"
  })))));
}
function MobileMenu({
  open,
  setOpen,
  setPage,
  onAssess
}) {
  const go = id => {
    setPage(id);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-head"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/idn-logo.png",
    alt: "IDN"
  }), /*#__PURE__*/React.createElement("button", {
    className: "mm-close",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Home"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("services")
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home")
  }, "Why IDN"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go("contact")
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "mm-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-block",
    onClick: () => {
      setOpen(false);
      onAssess();
    }
  }, "Get a free assessment")));
}
Object.assign(window, {
  TopBar,
  Nav,
  MobileMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
/* Secondary pages: Services detail + Contact */
function ServicesPage({
  onAssess,
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " Services"), /*#__PURE__*/React.createElement("h1", null, "One team for everything technology."), /*#__PURE__*/React.createElement("p", null, "From the helpdesk to the server room to the cabling in your walls \u2014 IDN manages it all, so you don't have to juggle vendors."))), /*#__PURE__*/React.createElement(ServicesSection, {
    setPage: setPage
  }), /*#__PURE__*/React.createElement(CTABand, {
    onAssess: onAssess
  }));
}
function ContactPage({
  onAssess
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " Contact"), /*#__PURE__*/React.createElement("h1", null, "Talk to a real person."), /*#__PURE__*/React.createElement("p", null, "Call our Racine office or send a note \u2014 a member of our team (not a call center) will get back to you fast."))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("h3", null, "We're your neighbors."), /*#__PURE__*/React.createElement("p", null, "Headquartered in Racine since 2004, with teams in Kenosha and Milwaukee and structured-cabling crews working nationwide."), /*#__PURE__*/React.createElement("div", {
    className: "contact-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Call us"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "(262) 555-0140"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "v norm"
  }, "hello@idnwi.com"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Headquarters"), /*#__PURE__*/React.createElement("div", {
    className: "v norm"
  }, "Racine, Wisconsin"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "timer"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Response SLA"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "10 minutes")))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Send us a message"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onAssess();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Business email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "How can we help?"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Tell us what's going on\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg btn-block"
  }, "Send message"))))));
}
Object.assign(window, {
  ServicesPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Primitives.jsx
try { (() => {
/* Shared primitives: Icon (Lucide) + Photo placeholder */
function Icon({
  name,
  cls = "",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide) {
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      el.appendChild(i);
      window.lucide.createIcons({
        attrs: {}
      });
    }
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "lic " + cls,
    style: {
      display: "inline-flex",
      ...style
    }
  });
}

/* Honest branded placeholder for photography (never invented imagery) */
function Photo({
  label = "Photo",
  icon = "image",
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ph " + className,
    style: style
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ph-label"
  }, label));
}
Object.assign(window, {
  Icon,
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Why IDN split + Founder story + Testimonial + CTA band */
function WhyIDN({
  onAssess
}) {
  const points = [["timer", "10-minute response SLA", "A commitment no competitor in our market publishes. When something breaks, you hear from a real person — fast."], ["layers", "One-stop shop", "Managed IT, security, networking, phones, cabling, cameras, and web — all under one roof, one team."], ["badge-check", "Certified & accountable", "35+ years of combined experience and certifications across every layer of your stack."], ["map-pin", "Local, and here to stay", "Racine-built since 2004. We're your neighbors — and your IT department when you need one."]];
  return /*#__PURE__*/React.createElement("section", {
    className: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " Why IDN"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--ink)",
      margin: "0 0 12px",
      lineHeight: 1.12
    }
  }, "Enterprise-grade IT, with a local handshake."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--gray)",
      margin: 0,
      lineHeight: 1.6,
      maxWidth: "40ch"
    }
  }, "Big enough to handle manufacturing, healthcare, and government \u2014 small enough that you know who's answering."), /*#__PURE__*/React.createElement("ul", {
    className: "checklist"
  }, points.map(([ic, h, p]) => /*#__PURE__*/React.createElement("li", {
    key: h
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, h), /*#__PURE__*/React.createElement("p", null, p)))))), /*#__PURE__*/React.createElement(Photo, {
    className: "why-visual",
    icon: "wrench",
    label: "Technician on-site with a client"
  })));
}
function Founder() {
  return /*#__PURE__*/React.createElement("section", {
    className: "founder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Photo, {
    className: "founder-photo",
    icon: "user",
    label: "Angel Ramos-Ortiz \u2014 portrait"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " Our story"), /*#__PURE__*/React.createElement("blockquote", null, "\"I built IDN from Racine on one idea: treat a client's technology like it's my own.", /*#__PURE__*/React.createElement("span", {
    className: "pri"
  }, " Twenty years later, that's still the whole job.\"")), /*#__PURE__*/React.createElement("div", {
    className: "sig"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Angel Ramos-Ortiz"), /*#__PURE__*/React.createElement("div", {
    className: "ro"
  }, "Founder & CEO \xB7 U.S. Army Veteran"))), /*#__PURE__*/React.createElement("div", {
    className: "accolades"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "award"
  }), " Recognized by the U.S. Congress & the Governor of Wisconsin"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: "star"
  }), " One of Wisconsin's most influential Latino business leaders")))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "testi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    style: {
      fill: "var(--warning)"
    }
  }))), /*#__PURE__*/React.createElement("q", null, "When our line went down at 6am, IDN had someone on it before we'd finished our coffee. They don't feel like a vendor \u2014 they feel like part of our team."), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement(Photo, {
    className: "av",
    icon: "user",
    label: ""
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "Maria Delgado"), /*#__PURE__*/React.createElement("div", {
    className: "ro"
  }, "Operations Director \xB7 Lakeshore Manufacturing")))));
}
function CTABand({
  onAssess
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h2", null, "Ready to stop worrying about IT?"), /*#__PURE__*/React.createElement("p", null, "Get a free, no-pressure assessment of your technology \u2014 and a plan to fix what's holding you back."), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-white btn-lg",
    onClick: onAssess
  }, "Get a free assessment ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-lg",
    style: {
      background: "rgba(255,255,255,.14)",
      color: "#fff"
    },
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), " (262) 555-0140")))));
}
Object.assign(window, {
  WhyIDN,
  Founder,
  Testimonial,
  CTABand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Shared service catalogue + Services grid section */
const IDN_SERVICES = [{
  icon: "shield-check",
  name: "Managed IT",
  alt: false,
  desc: "Proactive monitoring, helpdesk, and strategy — one team accountable for your whole stack."
}, {
  icon: "lock",
  name: "Cybersecurity",
  alt: true,
  desc: "Layered protection, monitoring, and response sized to your business, not an enterprise budget."
}, {
  icon: "network",
  name: "Networking",
  alt: false,
  desc: "Designed, installed, and managed networks that keep every site fast and connected."
}, {
  icon: "phone",
  name: "VoIP Phone Systems",
  alt: true,
  desc: "Modern cloud phone systems with the features you need and support that actually answers."
}, {
  icon: "cable",
  name: "Structured Cabling",
  alt: false,
  desc: "Certified low-voltage cabling — local installs and nationwide rollouts, done right."
}, {
  icon: "cctv",
  name: "Physical Security",
  alt: true,
  desc: "Cameras and access control, fully integrated and monitored alongside your IT."
}, {
  icon: "globe",
  name: "Web Design",
  alt: false,
  desc: "Clean, credible websites that represent your business as well as your team does."
}, {
  icon: "server",
  name: "Cloud & Backup",
  alt: true,
  desc: "Migration, hosting, and tested backups so your data is recoverable when it matters."
}, {
  icon: "life-buoy",
  name: "Helpdesk Support",
  alt: false,
  desc: "Real people in Racine who pick up the phone and resolve issues in minutes."
}];
function ServicesSection({
  setPage,
  limit
}) {
  const list = limit ? IDN_SERVICES.slice(0, limit) : IDN_SERVICES;
  return /*#__PURE__*/React.createElement("section", {
    className: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }), " One-stop shop"), /*#__PURE__*/React.createElement("h2", null, "Everything technology, under one roof."), /*#__PURE__*/React.createElement("p", null, "The only provider in our market with the full stack \u2014 so you call one team, get one bill, and hold one company accountable.")), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, list.map(s => /*#__PURE__*/React.createElement("article", {
    className: "svc" + (s.alt ? " alt" : ""),
    key: s.name,
    onClick: () => setPage && setPage("services")
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon
  })), /*#__PURE__*/React.createElement("h3", null, s.name), /*#__PURE__*/React.createElement("p", null, s.desc), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  }))))))));
}
Object.assign(window, {
  IDN_SERVICES,
  ServicesSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

})();
