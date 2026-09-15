import Reveal from "@/components/reveal";

const POINTS = [
  {
    index: "01",
    title: "Flexible across clients",
    text: "Comfortable shifting between different vendors, customers, tones, and request types without losing patience or clarity.",
  },
  {
    index: "02",
    title: "Balanced multitasking",
    text: "Handled up to 4 live conversations at once while researching issues, coordinating with riders, and keeping replies accurate.",
  },
  {
    index: "03",
    title: "Positive under challenge",
    text: "Keeps a steady, empathetic demeanor during disputes, termination risks, and device or billing frustrations.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">01 / About</span>
            <h2 className="h-section">
              Steady, flexible, and <span className="h-muted">easy to work with</span>
            </h2>
            <p className="lede">
              “Being flexible enough to deal with a range of clients and customers. Balancing
              multiple tasks and responding to customers in a timely manner. Maintaining a
              positive demeanor even in challenging situations to provide excellent service.”
              — from Haziel.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="points">
            {POINTS.map((c) => (
              <article key={c.index} className="point">
                <span className="point-index mono">{c.index}</span>
                <div>
                  <h3 className="point-title">{c.title}</h3>
                  <p className="point-text">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
