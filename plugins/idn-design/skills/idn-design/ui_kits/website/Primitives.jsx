/* Shared primitives: Icon (Lucide) + Photo placeholder */
function Icon({ name, cls = "", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide) {
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      el.appendChild(i);
      window.lucide.createIcons({ attrs: {} });
    }
  }, [name]);
  return <span ref={ref} className={"lic " + cls} style={{ display: "inline-flex", ...style }} />;
}

/* Honest branded placeholder for photography (never invented imagery) */
function Photo({ label = "Photo", icon = "image", className = "", style }) {
  return (
    <div className={"ph " + className} style={style}>
      <Icon name={icon} />
      <span className="ph-label">{label}</span>
    </div>
  );
}

Object.assign(window, { Icon, Photo });
