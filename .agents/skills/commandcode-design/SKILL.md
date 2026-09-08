---
name: commandcode-design
description: Design system, token architecture, and UI recreation blueprint for high-end dark technical portfolios, Framer-fidelity web experiences, and CommandCode visual aesthetics.
version: 1.0.0
---

# CommandCode Design System & Recreation Blueprint

The **CommandCode Design Skill** is a UI/UX and frontend engineering standard engineered for building modern, high-conversion dark technical portfolios, developer/designer showcases, and interactive Framer-grade web applications.

---

## 🎨 1. Visual Language & Token Architecture

### Color Tokens
```css
:root {
  /* Surface & Background */
  --bg-pitch: #080808;
  --bg-charcoal: #111111;
  --surface-card: #161616;
  --surface-card-hover: #1c1c1c;
  --surface-glass: rgba(17, 17, 17, 0.75);

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(255, 255, 255, 0.20);
  --border-accent: rgba(197, 255, 65, 0.35);

  /* Typography */
  --text-primary: #FFFFFF;
  --text-muted: #8E8E93;
  --text-subtle: #636366;

  /* Accents & Brand */
  --accent-electric: #c5ff41; /* Sawad electric lime */
  --accent-glow: rgba(197, 255, 65, 0.15);
  --accent-orange: #f46c38;
}
```

### Typography Hierarchy
- **Font Stack**: Modern geometric or neo-grotesque sans-serif (`Inter`, `Plus Jakarta Sans`, `Geist`, `SF Pro Display`, `Poppins`).
- **Section Eyebrows / Headers**: Uppercase, tracking `+0.05em` to `+0.1em`, font size `11px–13px`, font-weight `600`, color `var(--text-muted)`.
- **Hero & Big Titles**: Tracking `-0.03em` to `-0.04em`, font-weight `700` to `800`, line-height `1.05–1.15`, pure white.
- **Body & Captions**: Font size `15px–16px`, line-height `1.6`, color `var(--text-muted)`.

---

## ⚡ 2. Framer-Grade Motion & Interaction Physics

- **Timing Function**: Smooth spring curve `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Navigation**: Floating sticky pill or docked header with `backdrop-filter: blur(16px)` and `-webkit-backdrop-filter: blur(16px)`.
- **Card Lift & Hover States**:
  - `transform: translateY(-4px) translateZ(0)`
  - `border-color: rgba(255, 255, 255, 0.2)`
  - `box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6), 0 0 20px var(--accent-glow)`
- **Thumbnail / Media Scale**:
  - `transform: scale(1.03)` with `overflow: hidden` on parent container.
- **Micro-interactions**:
  - Click-to-copy with dynamic floating toast.
  - Active pill indicators with fluid sliding backgrounds.

---

## 🧱 3. Material Web & Component Integration

Integrate modern web components and Material Web (`@material/web` / Lit tokens):
- **Elevation**: Material elevation layers adapted to dark pitch black aesthetics (`--md-elevation-level`).
- **State Layers**: Subtle ripple and focus rings with zero layout shift (`--md-ripple-color`).
- **Chips & Pills**: Filter chips for skills, tech stack tags, and category selectors.
- **Buttons**:
  - High-emphasis filled button (pure white or electric lime with pitch black text).
  - Outlined button with 1px subtle stroke and glass hover.
  - Text button with animated arrow slide (`→`).

---

## 📐 4. Layout & Structural Anatomy

1. **Header / Nav**: Floating frosted island (`max-width: 900px`), logo monogram, smooth anchor links, status pill (`Available for new projects`).
2. **Hero Section**: Bold headline statement, high-resolution portrait badge with subtle ambient glow, concise mission tagline, primary CTA + resume/work links.
3. **Selected Works Grid**: Asymmetrical or 2-column bento cards with responsive aspect ratios, role tags, delivery metrics, and direct live preview links.
4. **Skills & Capabilities**: Grouped technical badges with category tabs (UI/UX, Frontend, Tools, Management).
5. **Experience & Milestones**: Clean vertical timeline with subtle connection lines and organization badges.
6. **Footer / Contact CTA**: Pitch-black container with direct email copy action, social channels, and copyright.
