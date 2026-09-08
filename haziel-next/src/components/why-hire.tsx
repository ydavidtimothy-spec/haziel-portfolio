import Reveal from "@/components/reveal";
import Spot from "@/components/bits/spot";

const CARDS = [
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
    <section id="why-hire" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="why-panel">
            <span className="eyebrow mono">05 / Why hire me</span>
            <h2 className="h-section">What I bring to your support team</h2>
            <p className="why-statement">
              I don&rsquo;t just close conversations. <em>I make sure the customer understands
              what happened and what happens next.</em>
            </p>
            <div className="card-grid-2">
              {CARDS.map((c) => (
                <Spot key={c.index} className="info-card">
                  <div className="card-index mono">{c.index}</div>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-text">{c.text}</p>
                </Spot>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
