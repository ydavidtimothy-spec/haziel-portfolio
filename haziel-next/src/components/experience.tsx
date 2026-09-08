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

const SCOPES = ["Vendors", "Orders", "Billing", "Accounts", "Devices", "Retention"];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <span className="eyebrow mono">02 / Experience</span>
          <h2 className="h-section">Chat support → escalations &amp; retention</h2>
          <p className="lede">
            Two support roles at Ibex Global Solutions, described in plain terms from the
            resume. The progression matters: frontline volume first, then complex cases.
          </p>
        </Reveal>

        <Reveal>
          <div className="exp-row">
            <div>
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
            <div className="exp-card">
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
            <div>
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
            <div className="exp-card">
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
              <div className="progress-year mono">2022</div>
              <p className="progress-name">Chat support</p>
              <p className="progress-desc">Vendors · Orders · Riders</p>
            </div>
            <div className="progress-step">
              <div className="progress-year mono">2023</div>
              <p className="progress-name">Escalations &amp; retention</p>
              <p className="progress-desc">Billing · Devices · Accounts</p>
            </div>
            <div className="progress-step">
              <div className="progress-year mono">2024</div>
              <p className="progress-name">Expanded responsibilities</p>
              <p className="progress-desc">Retention saves · Sensitive cases</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="scope-strip" aria-label="Support scope">
            {SCOPES.map((s) => (
              <span key={s} className="scope-item">{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
