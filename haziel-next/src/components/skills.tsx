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
    title: "Trust & safety operations",
    desc: "Content moderation on Threads at Conectys and Concentrix.",
    items: [
      "Video & image review",
      "Allow / restrict / age-gate / remove",
      "Harassment & hate-speech detection",
      "Spam, scams & harmful challenges",
      "Context-first judgment calls",
      "Community Guidelines consistency",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section--band">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">03 / Skills</span>
            <h2 className="h-section">What I&rsquo;m good at</h2>
            <p className="lede">From the resume and day-to-day support work.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="skill-groups">
            {GROUPS.map((g, i) => (
              <div key={g.title} className={`skill-group${i === 2 ? " mod" : ""}`}>
                <div className="skill-group-head">
                  <span className="skill-group-index mono">0{i + 1}</span>
                  <h3 className="skill-group-title">
                    {i === 2 && <span className="mod-dot" aria-hidden="true" />}
                    {g.title}
                  </h3>
                  <p className="skill-group-desc">{g.desc}</p>
                </div>
                <div className="skill-row">
                  {g.items.map((item) => (
                    <span key={item} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
