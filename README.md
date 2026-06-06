# IDN Design System — Claude Code plugin

The IDN (Innovative Dynamic Networks) brand & design system, packaged as a Claude Code plugin. Once installed, it **auto-loads whenever someone crafts an IDN landing page, UI, image/graphic, or slide deck** — bringing the brand voice, color/type tokens, self-hosted fonts, logos, Lucide icon set, a WCAG-verified quality rubric, and a high-fidelity React UI kit.

This repo is **both** the marketplace and the plugin.

## Install

In Claude Code:

```
/plugin marketplace add pedrobando/idn-wi
/plugin install idn-design@idn-marketplace
```

Start a new session and the `idn-design` skill is live. Invoke it directly any time with `/idn-design`.

## Update

Because the plugin manifest omits a pinned `version`, **every commit to this repo is treated as a new release** — no version bumping. Users pull updates with:

```
/plugin marketplace update idn-marketplace
```

## What's inside

```
.claude-plugin/marketplace.json          # marketplace catalog
plugins/idn-design/
  .claude-plugin/plugin.json             # plugin manifest
  skills/idn-design/                      # the skill
    SKILL.md                              # entry point + non-negotiables
    README.md                             # full brand context (voice, visual foundations, iconography)
    colors_and_type.css                   # design tokens + .idn-* classes
    quality-and-accessibility.md          # WCAG-verified pairings, quality rubric, pre-delivery checklist
    fonts/ assets/ preview/ ui_kits/      # fonts, logos, icons, specimens, React UI kit
```

## Note on brand assets

This plugin embeds IDN's logos and full brand system. Treat it as an internal brand asset — share the marketplace only with people authorized to use the IDN brand. If this repo is public, consider that the assets become publicly downloadable.
