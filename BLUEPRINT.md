# 📘 Haziel Nablo — Portfolio Blueprint & Technical Design Specifications

> **Living Document**: This specification serves as the single source of truth (SSOT) for the design tokens, layout hierarchy, and content architecture for **Haziel Nablo's Flagship Portfolio**, strictly grounded in her official resume.

---

## 🎯 1. Overview & Professional Positioning

- **Name**: Haziel Nablo
- **Location**: Agdao, Davao City, Philippines
- **Email**: `hazielnablo19@gmail.com`
- **Phone**: `+63 935 198 0042`
- **Education**: Bachelor of Science in Business Administration (BSBA), Major in Human Resource Development Management — **Holy Cross of Davao College** (2019–2021)
- **Primary Discipline**: Customer Experience (CX) Specialist • Vendor Operations & Escalations Lead • High-Concurrency Chat Support
- **Key Accolades**:
  - 🏆 **Top Agent 2023** (Ibex Global Solutions)
  - ⚡ **Chat Warrior Awardee 2023** (Ibex Global Solutions — 4+ concurrent chats)
  - 🎖️ **Leadership Awardee**

---

## 🎨 2. Technical & Design Specifications (CommandCode + Sawad Standard)

### A. Design Tokens & Visual Language
```css
:root {
  /* Pitch Black to Charcoal Hierarchy */
  --bg-pitch: #080808;
  --bg-charcoal: #111111;
  --surface-card: #161616;
  --surface-card-hover: #1c1c1c;
  --surface-elevated: #222222;
  --surface-glass: rgba(16, 16, 16, 0.78);

  /* Precise Subtle Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-bright: rgba(255, 255, 255, 0.20);
  --border-divider: #262626;

  /* Typography Palette */
  --text-primary: #FFFFFF;
  --text-muted: #8E8E93;
  --text-dim: #636366;

  /* Accents */
  --accent-lime: #c5ff41;       /* Sawad electric neon */
  --accent-lime-glow: rgba(197, 255, 65, 0.16);
  --accent-orange: #f46c38;
}
```

### B. Typography & Micro-Interactions
- **Font Stack**: `Inter`, `JetBrains Mono`, `-apple-system`, `sans-serif`.
- **Navigation**: Floating pill island with `backdrop-filter: blur(16px)` and active ScrollSpy.
- **Card Kinematics**: Hover elevation `translateY(-4px)`, subtle border brightening, spring curve `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Hero Visual**: Haziel's studio portrait with transparent cutout (`haziel-nablo-cutout.png`) encased in ambient radial glow.

---

## 🏛️ 3. Information Architecture (Grounded in Haziel's Resume)

1. **Hero Section**:
   - Focus: High-volume customer experience, vendor operations, and empathetic dispute resolution.
   - Live metrics: `4+ Concurrent Chats`, `Top Agent '23`, `Chat Warrior Awardee`.
   - Contact CTA: 1-click email copy for `hazielnablo19@gmail.com` and direct phone reach.
2. **About & Professional Philosophy**:
   - Resilience under pressure, rapid de-escalation, and balancing customer satisfaction with business retention goals.
3. **Core Case Studies (Bento Grid)**:
   - **Case 01: High-Concurrency Chat Resolution (Ibex)**: Handling 4+ simultaneous vendor chats, order cancellations, delivery rider tracking, and financial breakdown explanations.
   - **Case 02: Escalation & Account Retention Engine**: Resolving vendor disputes, troubleshooting POS/tablet hardware, and mitigating merchant churn.
   - **Case 03: Vendor Data & Financial Invoicing Security**: Secure verification of merchant banking details, VAT/tax deductions, and store onboarding.
4. **Skills Matrix**:
   - *Operations & Support*: Multi-Chat Management, Escalation Resolution, Churn Prevention, Hardware Troubleshooting.
   - *Financial & Data*: Invoicing Audits, VAT Breakdown, Bank Detail Verification, CRM Documentation.
   - *Interpersonal & Soft*: High-Stress Composure, Empathy & Active Listening, Time Optimization.
5. **Career Milestones & Awards**:
   - Ibex Global Solutions (Escalation Specialist & Chat Support)
   - Holy Cross of Davao College (BSBA HRDM)
   - Official Industry Awards & National Certifications (NCII)
6. **Lavish Architecture Diagram (`diagram.html`)**:
   - Standard 2.7 representation of Haziel's Customer Escalation & Resolution Pipeline.
