import Reveal from "@/components/reveal";

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <svg className="check-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

const SCOPES = ["Vendors", "Orders", "Billing", "Accounts", "Devices", "Retention", "Moderation", "Policy Enforcement", "Spam & Scams"];
const MOD_SCOPES = new Set(["Moderation", "Policy Enforcement", "Spam & Scams"]);

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow mono">02 / Experience</span>
            <h2 className="h-section">
              Content moderation <span className="h-muted">→ escalations → chat support</span>
            </h2>
            <p className="lede">
              Three chapters, newest first: trust &amp; safety review queues,
              then complex cases, then frontline volume.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="exp-row mod">
            <div className="exp-meta">
              <div className="exp-dates mono">2024 — 2026</div>
              <div className="exp-role">CONTENT MODERATION</div>
              <h3 className="exp-title">Trust &amp; safety review on Threads</h3>
              <div className="exp-tags">
                <span className="tag mono">Conectys</span>
                <span className="tag mono">Concentrix</span>
                <span className="tag mono">Policy enforcement</span>
                <span className="tag mono">Review queues</span>
              </div>
            </div>
            <div className="exp-body">
              <ul className="check-list">
                <Check><strong>Reviewed uploaded videos</strong>&nbsp;and decided: allow, restrict, age-gate, or remove.</Check>
                <Check><strong>Checked visual content</strong>&nbsp;— profile pictures, thumbnails, photo posts — for nudity, graphic violence, hateful imagery, and prohibited symbols.</Check>
                <Check><strong>Read for context</strong>,&nbsp;not just individual elements, before judging a post or comment.</Check>
                <Check><strong>Handled abusive comments</strong>&nbsp;— threats, hate, sexual content, harassment — plus sensitive cases like self-harm and exploitation.</Check>
                <Check><strong>Spotted new spam, scams,</strong>&nbsp;and harmful challenges as patterns emerged.</Check>
                <Check><strong>Applied Community Guidelines</strong>&nbsp;consistently and objectively across user posts, images, and interactions.</Check>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-dates mono">2022 — 2023</div>
              <div className="exp-role">CHAT SUPPORT</div>
              <h3 className="exp-title">Vendors &amp; orders</h3>
              <div className="exp-tags">
                <span className="tag mono">Multi-chat</span>
                <span className="tag mono">Order support</span>
                <span className="tag mono">Rider follow-up</span>
                <span className="tag mono">Cancellation</span>
              </div>
            </div>
            <div className="exp-body">
              <ul className="check-list">
                <Check><strong>Assisted vendors</strong>&nbsp;with their concerns and day-to-day order issues.</Check>
                <Check><strong>Cancelled orders</strong>&nbsp;as per vendor request.</Check>
                <Check><strong>Explained order breakdowns</strong>&nbsp;so vendors understood totals and status.</Check>
                <Check><strong>Followed up with the assigned rider</strong>&nbsp;to move each order through to delivery.</Check>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="exp-row">
            <div className="exp-meta">
              <div className="exp-dates mono">2023 — 2024</div>
              <div className="exp-role">ESCALATIONS &amp; RETENTION</div>
              <h3 className="exp-title">Escalations, retention &amp; account help</h3>
              <div className="exp-tags">
                <span className="tag mono">Retention</span>
                <span className="tag mono">Billing</span>
                <span className="tag mono">Device support</span>
                <span className="tag mono">Account support</span>
              </div>
            </div>
            <div className="exp-body">
              <ul className="check-list">
                <Check><strong>Updated private vendor data</strong>&nbsp;— bank details, contact person, registered info.</Check>
                <Check><strong>Explained invoices</strong>&nbsp;— total revenue, VAT, charges, and deductions.</Check>
                <Check><strong>Troubleshot or replaced</strong>&nbsp;the device vendors used.</Check>
                <Check><strong>Retained vendors</strong>&nbsp;considering account termination.</Check>
                <Check><strong>Terminated or activated</strong>&nbsp;accounts upon verified request.</Check>
                <Check><strong>Updated restaurant / store</strong>&nbsp;address or name changes.</Check>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="progress-rail" aria-label="Career progression">
            <div className="progress-step">
              <div className="progress-year mono">2024</div>
              <p className="progress-name">Content moderation</p>
              <p className="progress-desc">Threads · Policy · Review queues</p>
            </div>
            <div className="progress-step">
              <div className="progress-year mono">2023</div>
              <p className="progress-name">Escalations &amp; retention</p>
              <p className="progress-desc">Billing · Devices · Accounts</p>
            </div>
            <div className="progress-step">
              <div className="progress-year mono">2022</div>
              <p className="progress-name">Chat support</p>
              <p className="progress-desc">Vendors · Orders · Riders</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="scope-rail" aria-label="Support scope">
            {SCOPES.map((s) => (
              <span key={s} className={`scope-item${MOD_SCOPES.has(s) ? " voice-mod" : ""}`}>{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
