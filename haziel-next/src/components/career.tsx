import Reveal from "@/components/reveal";

const ITEMS = [
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
    <section id="career" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <span className="eyebrow mono">04 / Career</span>
          <h2 className="h-section">Work and education</h2>
          <p className="lede">Work history and schooling exactly as listed on the resume.</p>
        </Reveal>
        <Reveal>
          <div className="timeline">
            {ITEMS.map((item) => (
              <div key={item.role} className="timeline-item">
                <p className="timeline-role">{item.role}</p>
                <div className="timeline-meta">{item.meta}</div>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
