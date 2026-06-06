# IDN — Innovative Dynamic Networks · Design System

> **Tagline:** *"We Manage Your IT, So You Can Manage Your Business."*
> Veteran-owned & minority-owned managed IT, headquartered in Racine, WI.

This repository is the single source of truth for the IDN brand: colors, typography, voice, logos, iconography, and high-fidelity UI kits. Use it to produce on-brand marketing pages, sales collateral, proposals, decks, and product UI — for both **enterprise/government** and **local SMB** audiences.

---

## 1. Company context

**Innovative Dynamic Networks (IDN)** is a full-service IT company founded in **2004** by **Angel Ramos-Ortiz** — a U.S. Army veteran, Puerto Rican immigrant, and one of Wisconsin's most influential Latino business leaders. From its Racine, WI headquarters, IDN manages *everything technology* for small and mid-sized businesses.

**What IDN does (all under one roof — the only provider in-market with the full stack):**
- Managed IT (proactive monitoring, helpdesk, strategy)
- Cybersecurity
- Networking
- VoIP phone systems
- Structured cabling (nationwide)
- Physical security — cameras + access control
- Web design

**Proof points to surface in design:**
| Stat | Meaning |
|------|---------|
| **1,000+** | Clients served |
| **35+ yrs** | Combined team experience |
| **10-min** | Response SLA — *no competitor publishes this* |
| **DVB + MBE** | Veteran-owned **and** minority-owned (certified) |
| **3 locations** | Plus nationwide structured-cabling work |
| **Since 2004** | 20+ year track record |

**Founder story (a core brand asset):** Angel Ramos-Ortiz built a 20-year company from Racine, recognized by Congress and the Governor of Wisconsin. The brand should carry that weight **without being heavy-handed** — earned credibility, stated plainly.

**Two audiences the brand must serve simultaneously:**
1. **Enterprise / government** (manufacturing, healthcare, education, government) — must feel *credible and capable*.
2. **Local SMB** (Racine, Kenosha, Milwaukee) — must feel *personal, accessible, community-rooted*.

**Brand personality:** Trustworthy, professional, local, mission-driven. Not corporate — *human and accountable.* Confident without being flashy.

---

## 2. Sources provided

These were the inputs used to build this system. The reader may or may not have access — links/paths kept for provenance.

- **`design/` codebase** (local mount) — prior brand artifacts:
  - `design/design-system.html` — earlier one-page design system
  - `design/brand-book-a4.html` + `design/brand-book-a4.pdf` — printable A4 brand book
  - `design/idn-logo.png` — logo
- **Uploaded logos** (in `uploads/`, copied into `assets/`):
  - `idn-logo.png` — black text + blue mark, for **light** backgrounds
  - `idn-logo-dark-backgrounds.png` — white text + blue mark, for **dark** backgrounds
- **Written brief** — palette intent (navy + blue; an early teal idea was dropped at the client's request), proof points, audience context, founder story, and imagery do/don'ts (captured throughout this README).

> **Reconciliation note:** the prior `design/` artifacts referenced "Milwaukee & Chicago / 2 metro areas." The written brief supersedes this: HQ is **Racine, WI**, the market is **Racine–Kenosha–Milwaukee**, there are **3 locations**, and cabling is **nationwide**. This system uses the brief's facts.

---

## 3. Brand decisions & reconciliations (read me first)

- **One blue-forward palette.** The system stays inside the blue spectrum: **IDN Blue** (`#1567A8`, from the logo mark) is the primary action color, and a brighter azure — **Sky** (`#2293E0`) — is the secondary accent for secondary CTAs, "extra" emphasis, accents on navy, and data viz. *(An earlier teal direction was explored and dropped at the client's request — keep the secondary in the blue family, not teal/green.)* See `colors_and_type.css`.
- **Fonts:** **Cabin** (humanist sans — calm, warm, professional) for display + body, and **Roboto Slab** for overlines, labels, and numeric proof-points. Both continue the prior brand book and are self-hosted in `/fonts` as variable woff2. *(Substitution flag: none — these are the documented brand fonts. If you'd prefer to evolve away from Roboto Slab for more distinctiveness, that's a one-line change in the CSS.)*
- **Imagery:** people-first and community-rooted. **Avoid** generic stock IT (server rooms, hands-on-keyboards, glowing blue circuits). If photography is used, show real people, local business relationships, and actual work.

---

## 4. CONTENT FUNDAMENTALS — how IDN writes

**Voice:** confident, plain-spoken, accountable. IDN sounds like a trusted local expert who happens to run an enterprise-grade shop — never a hype-driven SaaS startup, never a stiff Big-4 consultancy.

**Person & address:**
- Speak to the client as **"you"** / **"your business."**
- Speak about the company as **"we"** / **"our team"** (human, not "the platform" / "IDN leverages…").
- Example: *"We manage your IT, so you can manage your business."* — the whole voice in one line: **you** get the benefit, **we** carry the load.

**Tone by audience (same voice, different emphasis):**
- *Enterprise/government:* lead with capability, certifications, SLA, breadth. "One team accountable for your entire stack."
- *Local SMB:* lead with relationship and responsiveness. "Call a real person in Racine. We pick up."

**Casing:**
- Headlines & UI: **Sentence case** ("Get a free assessment"), occasionally Title Case for short labels/nav.
- Overlines / eyebrows / stat labels: **ALL CAPS**, tracked, in Roboto Slab ("MANAGED IT", "VETERAN-OWNED").
- Never ALL CAPS for full sentences or body copy.

**Numbers & proof:** numerals always (1,000+ not "one thousand"), paired with a short slab label. Stats do the talking — keep the prose around them lean. *"10-minute response SLA"* is a headline-worthy fact; let it stand alone.

**Sentence style:** short, declarative, benefit-first. Active voice. One idea per sentence. Cut adjectives that don't earn their place ("proactive," "certified," "accountable" are earned; "cutting-edge," "next-gen," "synergy" are banned).

**Do say:** proactive, managed, one-stop, accountable, certified, local, veteran-owned, response time, peace of mind, your whole stack.
**Don't say:** synergy, cutting-edge, ninja/rockstar, leverage (as verb), revolutionary, world-class, seamless (overused), buzzword stacks.

**Emoji:** **none.** Not part of the brand. Use the line-icon set instead (see Iconography).

**Voice samples:**
- Hero: *"Managed IT for businesses that can't afford downtime."*
- Subhead: *"Proactive monitoring, certified expertise, and a 10-minute response SLA — one team accountable for your entire stack."*
- CTA: *"Get a free assessment"* / *"Talk to a real person"*
- Trust line: *"Veteran-owned. Minority-owned. Racine-built since 2004."*
- SMB warmth: *"We're your neighbors in Racine — and your IT department when you need one."*

---

## 5. VISUAL FOUNDATIONS

**Overall feel:** clean, blue-forward, lots of white space, calm authority. Marketing surfaces are bright and airy (white/cloud); credibility moments (footers, founder story, enterprise sections, stat bands) drop to deep navy. Restraint over decoration.

**Color**
- **Primary:** IDN Blue `#1567A8` (action), with deep blue `#0E4E82` (hover/depth) and signal blue `#2E8BD0` (bright highlight — the mark's energy).
- **Secondary:** IDN Sky `#2293E0` — a brighter azure accent (in the blue spectrum) for secondary CTAs, "extra" emphasis, accents on navy, and data viz. Used sparingly so it stays special.
- **Authority:** Ink `#13293A` / Slate `#223645` for text and dark sections.
- **Neutrals:** warm-cool grays — `--gray #5E6B73`, `--mist`, `--line #E4E9ED`, `--cloud #F4F7F9`. Avoid flat 50%-gray IT clichés.
- **Semantic:** success green is reserved for status only (online/resolved) and is kept visibly different from brand sky.
- Full tokens in **`colors_and_type.css`**.

**Type**
- Display & body: **Cabin** (400/500/600/700). Headlines bold with tight tracking (`-0.025em` on display).
- Overlines, labels, numeric proof-points: **Roboto Slab**, uppercase + wide tracking for eyebrows; tabular figures for stats.
- Body 16px / line-height 1.6. Minimum UI text 14px. Marketing display up to 46px+.

**Spacing & layout**
- 4px base unit; tokens `--space-1…9` (4→96). Generous section padding (48–96px) on marketing; tighter (16–24px) in UI.
- Content max-width ~1080–1120px, 32px gutters.
- Grid-first: rows/groups use flex/grid + `gap`, never inline-flow margins.
- Layout rule: sticky header on marketing; one primary CTA per view; proof-point stat band recurs as a structural element.

**Backgrounds**
- Primarily **flat white / cloud**. No busy patterns or textures.
- Allowed brand flourish: a **soft radial blue glow** (top-right, ~14–16% opacity IDN Blue) on headers/hero — subtle dimension, never a loud gradient wash.
- Dark sections use `--gradient-ink` (slate→ink) for depth.
- Brand gradients (`--gradient-brand`, `--gradient-sky`) are for small accents (card top-rules, buttons, icon chips) — **not** full-page backgrounds. No purple/violet gradients, ever.

**Corner radii** — soft, not pill-ish: buttons/inputs/badges `6px`, cards/panels `10px`, feature cards/modals `16px`, pills/avatars `999px`.

**Cards**
- White surface, `1px solid --line` border, `--r-md (10px)`, `--shadow-sm`. Lift to `--shadow-md` + `translateY(-2px)` on hover for interactive cards.
- Signature **feature card**: a 6px brand-gradient top rule, a tinted icon chip (`rgba(idn-blue,0.10)`), heading, copy, and a stat row divided by a hairline.

**Shadows / elevation** — cool navy-tinted, never neutral black:
- `--shadow-xs/sm` resting; `--shadow-md` hover; `--shadow-lg` modals/popovers. Focus ring: `0 0 0 3px rgba(46,139,208,0.35)`.

**Borders & dividers:** 1px `--line` for most rules; dashed `--line` inside specimen/list rows; `--mist` for stronger separations and on-dark hairlines.

**Buttons**
- *Primary:* solid IDN Blue, white text, `6px`, semibold. Hover → deep blue `#0E4E82`. Press → slightly darker + `scale(0.98)`.
- *Sky (secondary brand):* deep sky `#1A6BAA` solid — for alternative emphasis.
- *Dark:* slate fill for footers/dark sections.
- *Ghost:* transparent, mist border, blue text; hover borders/colors to blue.
- Transitions ~150–200ms ease.

**Motion**
- Purposeful and quiet. Fades + small translateY (4–8px) for entrances; 150–200ms `ease`/`ease-out` for hovers. No bounces, no infinite decorative loops. Respect `prefers-reduced-motion`.

**Hover / press states**
- Hover: shift to the deeper shade of the same hue (blue→deep blue, sky→deep sky); cards lift with shadow; links underline (offset 2px).
- Press: deeper shade + subtle `scale(0.98)`.

**Transparency & blur**
- Sparingly. Tinted fills via `rgba` of brand colors (`-100` tokens) for badges/selected rows. Optional backdrop-blur only on sticky headers over content. Avoid glassmorphism as decoration.

**Imagery treatment**
- People-first, warm, real. Slightly warm color grade, natural light. **Not** cold/blue-tinted server-room stock. Black & white acceptable for the founder portrait to lend gravitas. Use `assets/` placeholders where real photography isn't available — never invent imagery with SVG.

---

## 6. ICONOGRAPHY

**System:** light **single-weight line icons** — `1.6px` stroke, rounded caps & joins, 24×24 viewbox, drawn in deep blue (`--idn-blue-700`) or slate. This matches the clean, technical iconography in the prior brand book.

**Source:** the prior IDN artifacts hand-drew a small inline-SVG set (security shield, servers, cloud, network, support headset, workplace). For broad coverage at production scale, **standardize on [Lucide](https://lucide.dev)** — its 1.5–2px stroke + rounded-join style is a near-exact match to the existing IDN icons, so the set scales without redrawing. Link from CDN (`lucide` / `lucide-react`) or copy individual SVGs into `assets/icons/`.

> **Substitution flag:** IDN has no proprietary icon font. Lucide is the recommended drop-in match — flagged here so the team can approve. Set the stroke to `1.6` and color to `--idn-blue-700` for brand fidelity. Curated brand-relevant SVGs are copied into `assets/icons/` (shield, server, cloud, network, headset/support, monitor, phone/VoIP, cable, camera, globe/web).

**Usage**
- Icons sit in tinted **chips** (`rgba(idn-blue,0.10)`, `10px` radius) on feature cards, or inline at text size in lists.
- One stroke weight everywhere. Don't mix filled and line styles. Don't recolor into rainbow sets — blue/sky/slate only.
- **No emoji.** No multicolor/3D icon packs. No hand-drawn one-offs that break the 1.6px system.

**Unicode:** avoid using unicode glyphs as UI icons (arrows excepted, e.g. `→` in links/CTAs where it matches the type).

---

## 7. Index / manifest

**Root files**
- `README.md` — this file (context, voice, visual foundations, iconography, index).
- `colors_and_type.css` — all design tokens: brand palette, semantic roles, type families + scale, radii, shadow, spacing, gradients, and semantic element classes (`.idn-*`).
- `SKILL.md` — Agent-Skills-compatible entry point for reuse in Claude Code.

**Folders**
- `fonts/` — self-hosted variable woff2 (`Cabin-var.woff2`, `RobotoSlab-var.woff2`).
- `assets/` — `idn-logo.png` (light bg), `idn-logo-dark.png` (dark bg), and `assets/icons/` brand-relevant line icons.
- `preview/` — small HTML specimen cards that populate the **Design System** tab (colors, type, spacing, components, brand).
- `ui_kits/website/` — high-fidelity recreation of the IDN marketing website (the primary product surface): `README.md`, `index.html`, and JSX components.
- `slides/` — *(only if a deck template is provided; none was, so this may be absent).*

**Where to start:** import `colors_and_type.css`, pull the logo from `assets/`, follow the voice in §4 and visual rules in §5, and lift components from `ui_kits/website/`.
