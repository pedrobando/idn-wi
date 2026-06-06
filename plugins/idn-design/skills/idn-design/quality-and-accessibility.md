# IDN — Quality & Accessibility Rubric

Brand fidelity is necessary but not sufficient. On-brand output can still ship broken contrast, missing focus states, or non-responsive layouts. This file is the craft floor for **every** IDN deliverable — read it before building UI, a landing page, an image/graphic, or a deck, and run the **Pre-Delivery Checklist** before you call anything done.

The single rule that decides effort: *if the artifact will be looked at, clicked, or read by a real person, it must pass this rubric.* Throwaway internal sketches can relax responsive/semantics — never contrast or no-emoji.

---

## 1. Priority order (highest-impact first)

Apply in this order; the top three are non-negotiable on anything user-facing.

| # | Dimension | Severity | The check |
|---|-----------|----------|-----------|
| 1 | **Color contrast** | CRITICAL | Body text ≥ 4.5:1, large text (≥24px, or ≥18.66px bold) & UI/icons ≥ 3:1. Use §2 table — do not eyeball. |
| 2 | **Focus & keyboard** | CRITICAL | Every interactive element has a visible `:focus-visible` ring (`--shadow-focus`). Logical tab order. |
| 3 | **Touch / hit targets** | HIGH | Buttons, links-as-buttons, inputs ≥ 44px tall (48px on marketing CTAs). |
| 4 | **Responsive** | HIGH | Works at 375 / 768 / 1024 / 1440px. No horizontal scroll. CTAs full-width on mobile. |
| 5 | **Motion** | MEDIUM | 150–200ms ease on hovers; entrances are fade + 4–8px translateY. Wrap all motion in `@media (prefers-reduced-motion: reduce)`. No bounces/loops. |
| 6 | **Typography** | MEDIUM | Body 16px / line-height 1.6; min UI text 14px; line length 65–75 chars; one `<h1>`, ordered headings. |
| 7 | **Layout & spacing** | MEDIUM | 4px spacing scale (`--space-*`); content max-width ~1080–1120px; grid/flex + `gap`, never inline-flow margins. |
| 8 | **Images & alt** | MEDIUM | Real `<img>` needs descriptive `alt`; decorative imagery/icons `alt=""` + `aria-hidden`. People-first, no stock server rooms. |
| 9 | **Semantics** | MEDIUM | `<header>/<main>/<section>/<article>/<nav>/<footer>`; `aria-label`/`aria-labelledby` on landmarks; buttons are `<button>`, links are `<a>`. |

---

## 2. WCAG-verified IDN color pairings

Computed ratios for the actual brand tokens (`colors_and_type.css`). **Trust this table over intuition.**

### ✅ Safe — text-on-light (use freely)
| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `--ink` #13293A | white / `--cloud` | 14.9 / 13.9 | AAA — primary text |
| `--slate` #223645 | white / `--cloud` | 12.5 / 11.6 | AAA — headings |
| `--gray` #5E6B73 | white / `--cloud` | 5.5 / 5.1 | **AA** — secondary/caption text (incl. 13px) |
| `--idn-blue` #1567A8 | white / `--cloud` | 5.9 / 5.5 | AA — links, key data |
| `--idn-blue-700` #0E4E82 | white | 8.6 | AAA |
| `--idn-sky-700` #1A6BAA | white | 5.6 | AA |

### ✅ Safe — white-on-color (buttons/fills)
| Background | Ratio (white text) | Verdict |
|---|---|---|
| `--idn-blue` #1567A8 | 5.9 | AA — **primary button** |
| `--idn-blue-700` #0E4E82 | 8.6 | AAA — hover/pressed |
| `--idn-sky-700` #1A6BAA | 5.6 | AA — **secondary button** |
| `--danger` #CF4334 | 4.7 | AA |

### ✅ Safe — on navy (`--ink` / dark sections)
| Foreground | Ratio | Verdict |
|---|---|---|
| `--fg-on-dark` #EAF1F6 / white | 13.1 / 14.9 | AAA — text on navy |
| `--mist` #B5C5D0 | 8.4 | AAA — secondary text on navy |
| `--idn-sky-300` #7AC0EE | 7.5 | AAA — **the safe accent on navy** |

### ⚠️ Watch-outs — these FAIL for normal text
| Pairing | Ratio | Rule |
|---|---|---|
| white on **`--idn-sky`** #2293E0 | **3.32** | Large text (≥24px / ≥18.66px bold) or icons/UI only. For body/buttons with white text, use `--idn-sky-700`. |
| white on **`--idn-blue-300`** #2E8BD0 | 3.67 | Large/UI only (it's a highlight, not a text surface). |
| white on **`--success`** #1F9D57 | 3.49 | Large/UI only — fine for status dots/large numerals, not small labels. |
| white on **`--warning`** #E0A030 | **2.27 — FAIL** | Never white text. Use `--ink` (dark) text on warning. |
| `--fg3` #8A97A0 on white | **2.99 — FAIL** | Decorative/placeholder only. Never real copy. |
| `--idn-blue-300` on navy | 4.07 | Large/UI only on dark; prefer `--idn-sky-300` for on-navy accents. |

---

## 3. Atomic rules (named, for quick lookup)

- `contrast-body` — body text ≥ 4.5:1; `contrast-large-ui` — ≥3:1 for ≥24px / bold ≥18.66px / icons / borders that carry meaning.
- `focus-ring` — `:focus-visible { box-shadow: var(--shadow-focus); outline: none; }` on every control. Never remove focus without a replacement.
- `touch-44` — interactive targets ≥ 44×44px (marketing CTAs 48px via `min-height`).
- `motion-150` — hover/press 150–200ms ease; entrance fade + 4–8px translateY; press `scale(0.98)`. Exit ≈ 60–70% of entrance duration.
- `reduced-motion` — `@media (prefers-reduced-motion: reduce){ *{ animation:none!important; transition:none!important; } }` (or scope it); disable hover translate.
- `line-length` — measure 65–75ch on long-form; `max-width: 65ch` on paragraphs.
- `line-height-1.6` — body 1.6; headings 1.05–1.3.
- `spacing-4` — only `--space-*` (4px scale); section padding 48–96px marketing, 16–24px UI.
- `responsive-4bp` — verify 375 / 768 / 1024 / 1440; single-column + full-width CTAs on mobile.
- `one-h1` — exactly one `<h1>`; no skipped heading levels.
- `no-emoji` — brand law. Use the Lucide line set (`assets/icons/`) at 1.6px stroke, `--idn-blue-700`/slate. Arrows (`→`) in links/CTAs are allowed.
- `img-alt` — descriptive `alt` on content images; `alt="" aria-hidden="true"` on decorative ones and icon chips.
- `real-imagery` — people-first, warm, real. Labeled placeholders when no photo exists; never invent imagery as SVG.

---

## 4. AVOID (consolidated anti-patterns)

**Brand:** teal/green as a brand accent (dropped at client request — stay in the blue spectrum) · purple/violet gradients (ever) · full-page gradient washes · altering/recoloring/redrawing the logo · emoji · banned words (synergy, cutting-edge, ninja/rockstar, leverage-as-verb, revolutionary, world-class, "seamless").

**Generic UX:** white text on `--idn-sky`/`--warning`/`--success` at body size (§2) · removing focus outlines · `<div>` click handlers instead of `<button>` · sub-44px tap targets · animations that ignore `prefers-reduced-motion` · decorative glassmorphism · generic stock IT imagery (server rooms, hands-on-keyboards, glowing circuits) · ALL-CAPS body copy · flat 50%-gray neutrals.

---

## 5. Pre-Delivery Checklist

Run before declaring any IDN piece done.

**Brand fidelity**
- [ ] Voice: "you" = client, "we" = IDN; sentence case; no banned words; no emoji.
- [ ] Correct logo for background (light → `idn-logo.png`, dark → `idn-logo-dark.png`), unaltered.
- [ ] Blue-forward; Sky used sparingly as accent; proof points present where they earn their place.

**Accessibility & craft**
- [ ] Every text/background pair checked against §2 (no white-on-Sky/Warning body text).
- [ ] All controls have visible `:focus-visible` ring; keyboard-navigable in logical order.
- [ ] Tap targets ≥ 44px; marketing CTAs ≥ 48px.
- [ ] `prefers-reduced-motion` honored; motion is 150–200ms, quiet, no loops.
- [ ] Responsive verified at 375 / 768 / 1024 / 1440; no horizontal scroll.
- [ ] Body 16px / 1.6; line length 65–75ch; one `<h1>`, ordered headings.
- [ ] Content images have descriptive `alt`; decorative ones `alt=""`/`aria-hidden`.
- [ ] Semantic landmarks + `aria-label`/`labelledby`.

**Decks / images (where applicable)**
- [ ] Text on photo/dark fills meets §2 contrast (add scrim/overlay if needed).
- [ ] One primary message per slide/graphic; proof points as slab numerals.
- [ ] Exported at adequate resolution; no tiny sub-14px text.
