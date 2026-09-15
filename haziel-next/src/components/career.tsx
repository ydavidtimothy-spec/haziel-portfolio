import Reveal from "@/components/reveal";

const ITEMS = [
  {
    role: "Content moderation — Threads",
    meta: "Conectys · Concentrix, Davao · 2024 — Jun 2026",
    text: "Trust & safety review: allow, restrict, age-gate, or remove violating videos, images, and comments per Community Guidelines.",
  },
  {
    role: "Vendor escalations & retention support",
    meta: "Ibex Global Solutions · 2023 — 2024",
    text: "Sensitive updates, invoice walkthroughs, device issues, retention saves, and account or store-profile changes.",
  },
  {
    role: "Chat support specialist",
    meta: "Ibex Global Solutions · 2022 — 2023",
    text: "Vendor support across up to 4 concurrent chats — cancellations, breakdowns, and rider follow-ups for delivery.",
  },
  {
    role: "BS Business Administration, HR Development Management",
    meta: "Holy Cross of Davao College · AY 2019 — 2021",
    text: "Degree foundation in people management and organizational processes.",
  },
  {
    role: "TVL — Beauty Care, Nail Care & Massage",
    meta: "Francisco Bangoy SHS, Sasa, Davao City · SY 2017 — 2018",
    text: "Technical-vocational track; basis for TESDA NCII certifications and Best in TVL recognition.",
  },
];

export default function Career() {
  return (
    <section id="career" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">04 / Career</span>
            <h2 className="h-section">
              Work <span className="h-muted">and education</span>
            </h2>
            <p className="lede">Work history and schooling exactly as listed on the resume.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {ITEMS.map((item, i) => (
              <div key={item.role} className="timeline-item">
                <div className="timeline-mark mono">0{i + 1}</div>
                <div>
                  <p className="timeline-role">{item.role}</p>
                  <div className="timeline-meta">{item.meta}</div>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
