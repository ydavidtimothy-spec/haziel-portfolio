import Reveal from "@/components/reveal";

const GROUPS: { title: string; desc: string; items: string[] }[] = [
  {
    title: "Vendor operations",
    desc: "Front-line tasks performed daily at Ibex.",
    items: [
      "Managing multiple live chats",
      "Order cancellation",
      "Order breakdown explanations",
      "Rider coordination",
      "Calming frustrated customers",
      "Account activation / termination",
    ],
  },
  {
    title: "Billing & account support",
    desc: "Careful with sensitive details and clear explanations.",
    items: [
      "Private data updates",
      "Bank detail changes",
      "Invoice / VAT explanations",
      "Device troubleshooting",
      "Store profile updates",
      "CRM & ticketing",
    ],
  },
  {
    title: "Customer handling",
    desc: "How Haziel describes herself on the resume.",
    items: [
      "Work under pressure",
      "Multi-tasking",
      "Empathy & patience",
      "Adaptability",
      "Time management",
      "Positive attitude",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <span className="eyebrow mono">03 / Skills</span>
          <h2 className="h-section">What I&rsquo;m good at</h2>
          <p className="lede">From the resume and day-to-day support work.</p>
        </Reveal>
        <div className="card-grid-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="info-card">
                <div className="card-index mono">0{i + 1}</div>
                <h3 className="card-title">{g.title}</h3>
                <p className="card-text">{g.desc}</p>
                <div className="skill-rows">
                  {g.items.map((item) => (
                    <div key={item} className="skill-row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true" style={{ color: "var(--accent)", flexShrink: 0 }}>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
