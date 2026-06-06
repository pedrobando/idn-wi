---
name: idn-design
description: Use when crafting any marketing piece for IDN (Innovative Dynamic Networks) — a veteran-owned, minority-owned managed IT company in Racine, WI — including landing pages, websites, web/app UI, interface mockups, images/graphics/social posts, or slide decks/presentations, whether production code or a throwaway prototype, mock, or deck. Carries the IDN brand: voice, color/type tokens, fonts, logos, icons, and UI-kit components.
user-invocable: true
---

# IDN Design System

Read the `README.md` file within this skill first — it carries the full brand context: company story, voice/tone, visual foundations, iconography, and a manifest of everything here. Then explore the other files as needed.

## What's here
- `README.md` — context, content fundamentals (voice), visual foundations, iconography, index.
- `colors_and_type.css` — all design tokens (brand palette, semantic roles, type families + scale, radii, shadow, spacing, gradients) and `.idn-*` element classes. Import this first.
- `quality-and-accessibility.md` — the craft floor: priority order, **WCAG-verified color pairings** (which token combos pass AA — and the ones that don't), atomic rules, AVOID list, and a pre-delivery checklist. Read before building anything user-facing.
- `fonts/` — self-hosted variable fonts: **Cabin** (display/body), **Roboto Slab** (overlines, labels, numerics).
- `assets/` — logos (`idn-logo.png` for light, `idn-logo-dark.png` for dark) and `assets/icons/` (Lucide line set).
- `preview/` — small specimen cards for each token group.
- `ui_kits/website/` — high-fidelity, interactive React recreation of the IDN marketing site. Lift components from here.

## How to use
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need out, import `colors_and_type.css`, and produce static/standalone HTML the user can view. Reuse UI-kit components for speed.
- **Production code**: read the rules here to become an expert in the brand, then apply the tokens and patterns directly.

## Non-negotiables
- **Logo is fixed** — never alter, recolor, or redraw it. Light bg → `idn-logo.png`; dark bg → `idn-logo-dark.png`.
- **Voice**: confident, plain, accountable. "We manage your IT, so you can manage your business." You = client benefit, we = our team. Sentence case. **No emoji.**
- **Color**: blue is primary (from the mark); **Sky** (`#2293E0`, a brighter azure) is the secondary accent — keep it in the blue spectrum and use it sparingly.
- **Imagery**: people-first and community-rooted. Avoid generic stock IT (server rooms, hands-on-keyboards, glowing circuits). Use labeled placeholders when real photos aren't available.
- **Proof points** earn their place: 1,000+ clients · 10-min response SLA · 35+ yrs combined experience · veteran + minority owned (DVB/MBE) · Racine-built since 2004.
- **Quality floor**: anything user-facing must pass `quality-and-accessibility.md` — verified contrast (never white body text on Sky or Warning), visible focus states, 44px targets, reduced-motion, responsive. Run its Pre-Delivery Checklist before declaring done.

If invoked without specifics, ask what the user wants to build or design, ask a few focused questions, then act as an expert designer — outputting HTML artifacts or production code depending on the need.
