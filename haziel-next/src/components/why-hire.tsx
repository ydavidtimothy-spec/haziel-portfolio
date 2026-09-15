import Reveal from "@/components/reveal";

const POINTS = [
  {
    index: "01",
    title: "Calm under pressure",
    text: "Comfortable with frustrated customers and escalations. I listen first and keep the conversation from becoming confrontational.",
  },
  {
    index: "02",
    title: "Clear written communication",
    text: "Used to explaining orders, invoices, and next steps simply — even while juggling several conversations at once.",
  },
  {
    index: "03",
    title: "Fast learner",
    text: "Quick to pick up new systems, products, policies, and workflows. I take notes and follow procedures carefully.",
  },
  {
    index: "04",
    title: "Ownership mindset",
    text: "I check what caused the issue and make sure the customer knows what happens next.",
  },
];

export default function WhyHire() {
  return (
    <section id="why-hire" className="section section--band">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">05 / Why hire me</span>
            <h2 className="h-section">
              What I bring <span className="h-muted">to your support team</span>
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="why-grid">
            <p className="why-statement">
              I don&rsquo;t just close conversations.{" "}
              <em>
                I make sure the customer understands what happened and what happens next.
              </em>
            </p>
            <div className="why-points">
              {POINTS.map((c) => (
                <article key={c.index} className="why-point">
                  <span className="why-index mono">{c.index}</span>
                  <div>
                    <h3 className="why-title">{c.title}</h3>
                    <p className="why-text">{c.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
