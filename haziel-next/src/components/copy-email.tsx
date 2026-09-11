"use client";

import { useState } from "react";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "hazielnablo19@gmail.com";

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const area = document.createElement("textarea");
      area.value = email;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }

  return (
    <button type="button" className="btn btn-secondary" onClick={copy} aria-live="polite">
      <span key={copied ? "copied" : "copy"} className="copy-label">
        {copied ? "Copied to clipboard" : "Copy Email Address"}
      </span>
    </button>
  );
}
