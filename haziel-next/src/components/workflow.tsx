"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/reveal";

export const STEPS = [
  {
    name: "Listen",
    desc: "Understand what the customer or vendor is actually trying to resolve before jumping into a solution.",
    points: ["Acknowledge the frustration first", "Let them explain fully", "Keep the tone calm and professional"],
    goal: "Start from what they need, not what is fastest to answer.",
  },
  {
    name: "Clarify",
    desc: "Find the real issue with one clear question at a time.",
    points: ["Billing or invoice confusion", "Hardware or device problem", "Order, rider, or delivery status", "Account settings or store details"],
    goal: "Name the actual problem before offering a solution.",
  },
  {
    name: "Investigate",
    desc: "Look at the information available before deciding what action makes sense.",
    points: ["Account information", "Order status", "Billing details", "Previous interactions", "Device / technical issue"],
    goal: "Find the actual problem before offering a solution.",
  },
  {
    name: "Act",
    desc: "Fix what can be fixed now, and route the rest to the right place.",
    points: ["Resolve immediately when possible", "Cancel, correct, update, or retry", "Coordinate with the right team", "Follow security steps for sensitive data"],
    goal: "Own the case until it moves forward.",
  },
  {
    name: "Confirm",
    desc: "Close the loop clearly so nothing is left ambiguous.",
    points: ["Explain what was done", "Explain what happens next", "Check the vendor understood", "Document the case"],
    goal: "The customer knows what happened and what happens next.",
  },
];

export default function Workflow() {
  const [active, setActive] = useState(2);
  const step = STEPS[active];

  return (
    <div>
      <div className="workflow-grid">
        <div className="step-list" role="tablist" aria-label="Escalation handling steps">
          {STEPS.map((s, i) => (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`step-btn${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="step-num mono">0{i + 1}</span>
              <span className="step-name">{s.name.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <div className="step-panel">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step.name}
              className="step-panel-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="step-panel-title mono">0{active + 1} / {step.name.toUpperCase()}</div>
              <h3 className="step-panel-name">{step.name}</h3>
              <p className="step-panel-desc">{step.desc}</p>
              <ul className="check-list">
                {step.points.map((p) => (
                  <li key={p}>
                    <svg className="check-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="step-panel-desc" style={{ marginTop: 20 }}>
                <strong style={{ color: "var(--ink)" }}>The goal:</strong> {step.goal}
              </p>
            </motion.div>
          </AnimatePresence>
          <span className="sim-label mono">Simulated example · No customer data</span>
        </div>
      </div>
    </div>
  );
}

export function WorkflowSection() {
  return (
    <section id="how-i-work" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">07 / How I work</span>
            <h2 className="h-section">
              How I handle difficult
              <br />
              customer &amp; vendor issues
            </h2>
            <p className="lede">
              Listen → clarify → investigate → act → confirm. The same method behind
              vendor escalations and content review queues — select a step to see what I
              actually do at each stage.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <Workflow />
        </Reveal>
      </div>
    </section>
  );
}
