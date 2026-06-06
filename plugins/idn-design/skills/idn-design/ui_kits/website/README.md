# IDN Website — UI Kit

A high-fidelity, interactive recreation of the **Innovative Dynamic Networks** marketing website. It demonstrates the brand's components in a real, click-through context — the primary surface IDN sells through.

> This is a UI kit, not production code. Components are simple, mostly-cosmetic recreations meant to be composed into mocks and prototypes quickly.

## Run it
Open `index.html`. It loads React 18 + Babel (in-browser) + Lucide icons, the brand tokens (`../../colors_and_type.css`), and the kit styles (`kit.css`).

## What's interactive
- **Routing** — Nav + footer links switch between **Home**, **Services**, and **Contact** (client-side state, no reload).
- **Free-assessment modal** — opens from any "Get a free assessment" button; multi-field form with focus/validation styling and a success state. `Esc` or backdrop closes it.
- **Mobile menu** — the hamburger (below 940px) opens a full-screen nav.
- **Hover states** — service cards lift, arrows nudge, buttons deepen.

## Components (JSX)
| File | Exports | Notes |
|------|---------|-------|
| `Primitives.jsx` | `Icon`, `Photo` | Lucide icon wrapper (1.7px stroke, brand color) + honest photo placeholder (never invented imagery). |
| `Nav.jsx` | `TopBar`, `Nav`, `MobileMenu` | Utility bar, sticky blurred nav, mobile drawer. |
| `Hero.jsx` | `Hero`, `ClientStrip`, `ProofBand` | Hero with floating SLA card, trusted-by strip, navy proof-point band. |
| `Services.jsx` | `IDN_SERVICES`, `ServicesSection` | The service catalogue (data) + the feature-card grid. |
| `Sections.jsx` | `WhyIDN`, `Founder`, `Testimonial`, `CTABand` | Differentiators, founder story (dark), testimonial, gradient CTA. |
| `Footer.jsx` | `Footer` | Ink footer with services, company, locations, certifications. |
| `AssessmentModal.jsx` | `AssessmentModal` | The interactive lead form + success state. |
| `Pages.jsx` | `ServicesPage`, `ContactPage` | Secondary routes reusing the shared sections. |

**Scope note:** each `text/babel` script has its own scope, so every component file ends with `Object.assign(window, {…})` to share globally. If you add a file, do the same and add it to the `<script>` list + the readiness guard in `index.html`.

## Coverage & honest gaps
- Built from the brand brief + prior IDN brand artifacts (`design/`), not a live site — copy is representative, not final.
- **Photography is placeholder.** Every `<Photo>` block is labeled with what real image belongs there (local teams, technicians on-site, the founder's portrait). Drop in real photography before shipping — per brand rules, avoid generic stock IT imagery.
- Phone/email/address are placeholders.
- Not every marketing section is recreated (no blog, pricing, or careers) — the kit prioritizes component coverage over completeness.
