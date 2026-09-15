// Announcement strip — the thin full-width signal at the very top of the page,
// carrying availability + location and a direct route to contact.

import Link from "next/link";

export default function Announce() {
  return (
    <div className="announce">
      <div className="container announce-inner">
        <span className="announce-status">
          <span className="announce-dot" aria-hidden="true" />
          Open to work · Davao City
        </span>
        <Link href="/#contact" className="announce-link">
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
