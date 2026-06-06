<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/idn-logo-dark.png">
  <img alt="IDN — Innovative Dynamic Networks" src="./assets/idn-logo.png" width="300">
</picture>

### Design System for Claude Code

**We Manage Your IT, So You Can Manage Your Business.**

Veteran-owned & minority-owned managed IT · Racine, WI · since 2004

![Claude Code Plugin](https://img.shields.io/badge/Claude_Code-plugin-da7756)
![License: MIT](https://img.shields.io/badge/license-MIT-1567A8)
![Accessibility](https://img.shields.io/badge/contrast-WCAG_verified-1F9D57)

</div>

---

This is the IDN brand, packaged as a **Claude Code plugin**. Install it once and Claude becomes an IDN brand expert — it **auto-loads whenever you craft an IDN landing page, web/app UI, image or social graphic, or slide deck**, bringing the voice, color/type tokens, self-hosted fonts, logos, icon set, a WCAG-verified quality rubric, and a high-fidelity React UI kit.

You stop pasting brand guidelines into every prompt. You just describe what you want to build.

## Install

In Claude Code:

```
/plugin marketplace add pedrobando/idn-wi
/plugin install idn-design@idn-marketplace
```

Start a new session and you're set.

## How to use it

**It triggers itself.** You don't have to mention the design system. Any of these prompts will pull it in automatically:

```
Build a landing page for IDN's managed cybersecurity offering.
Mock up a dashboard UI for the IDN client portal.
Make a social graphic announcing our 10-minute response SLA.
Put together a 6-slide pitch deck for a manufacturing prospect.
```

Claude will use the right brand colors, the IDN voice ("we manage your IT, so you can manage your business"), the correct logo for the background, real proof points, and the accessibility rules — without being told.

**Or invoke it directly** any time with:

```
/idn-design
```

Called with no specifics, it asks a couple of focused questions, then acts as an expert designer — producing standalone HTML you can preview, or production code, depending on what you need.

## What you get

| | |
|---|---|
| 🎙️ **Brand voice** | Confident, plain, accountable. "You" = the client, "we" = IDN. Sentence case, no emoji, no buzzwords. |
| 🎨 **Design tokens** | Full blue-forward palette, type scale (Cabin + Roboto Slab), spacing, radii, shadows, gradients — as CSS custom properties. |
| 🔤 **Self-hosted fonts** | Cabin and Roboto Slab as variable `woff2`. No network dependency. |
| 🏷️ **Logos & icons** | Correct light/dark logo variants (never altered) + a Lucide line-icon set tuned to the brand stroke. |
| ✅ **Quality rubric** | WCAG-verified color pairings, focus/touch/motion/responsive rules, and a pre-delivery checklist. |
| ⚛️ **React UI kit** | A high-fidelity recreation of the IDN marketing site to lift components from. |

## Accessibility, verified — not guessed

Most design systems tell you the brand color. This one tells you **which color combinations actually pass WCAG contrast** — computed from the real tokens, so Claude never ships something that merely *looks* on-brand:

- ✅ `--ink` / `--slate` / `--gray` text on light → AA–AAA
- ✅ White text on `--idn-blue`, `--idn-blue-700`, `--idn-sky-700` buttons → AA+
- ⚠️ White text on **`--idn-sky`** (3.32) → large text only; use the tint or `--idn-sky-700`
- ⛔ White text on **`--warning`** (2.27) → fails; use dark text instead

The full table, atomic rules, and pre-delivery checklist live in [`quality-and-accessibility.md`](./plugins/idn-design/skills/idn-design/quality-and-accessibility.md).

## Brand non-negotiables

- **Logo is fixed** — never recolor, redraw, or distort it. Light bg → `idn-logo.png`; dark bg → `idn-logo-dark.png`.
- **Stay in the blue spectrum** — IDN Blue is primary; Sky is a sparing accent. No teal, no purple/violet gradients.
- **People-first imagery** — real people and local work, never generic server-room stock.
- **Proof points earn their place** — 1,000+ clients · 10-min response SLA · 35+ yrs combined experience · veteran + minority owned · Racine-built since 2004.

## Updating

The plugin omits a pinned version, so **every commit here is a new release**. Pull the latest with:

```
/plugin marketplace update idn-marketplace
```

## Repository layout

```
.claude-plugin/marketplace.json          # marketplace catalog
plugins/idn-design/
  .claude-plugin/plugin.json             # plugin manifest
  skills/idn-design/                      # the skill itself
    SKILL.md                              # entry point + non-negotiables
    README.md                             # full brand context
    colors_and_type.css                   # design tokens + .idn-* classes
    quality-and-accessibility.md          # WCAG pairings + quality checklist
    fonts/ assets/ preview/ ui_kits/      # fonts, logos, icons, specimens, React kit
```

## License

[MIT](./LICENSE). The IDN name, logos, and brand assets remain the property of Innovative Dynamic Networks; the MIT license covers the code and structure, not trademark rights to the brand.
