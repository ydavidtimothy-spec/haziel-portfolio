import Reveal from "@/components/reveal";

const CREDENTIALS: { year: string; org: string; items: string[] }[] = [
  {
    year: "2023",
    org: "Ibex Global Solutions",
    items: ["Top Agent", "Chat Warrior Awardee"],
  },
  {
    year: "2018",
    org: "Francisco Bangoy SHS",
    items: ["Leadership Awardee", "Best in TVL", "Best in OJT — Massage", "Best in OJT — Beauty Care"],
  },
  {
    year: "NCII",
    org: "TESDA Certified",
    items: ["Beauty Care / Nail Care", "Massage Therapy", "Housekeeping"],
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">06 / Recognition</span>
            <h2 className="h-section">
              Honors <span className="h-muted">&amp; certifications</span>
            </h2>
            <p className="lede">Awards and NCII holdings transcribed from the resume — nothing added.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="creds">
            {CREDENTIALS.map((c) => (
              <div key={c.year + c.org} className="cred">
                <div className="cred-year">{c.year}</div>
                <div className="cred-org">{c.org}</div>
                <ul className="cred-list">
                  {c.items.map((item) => (
                    <li key={item}>
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
