// Adapted from React Bits (https://reactbits.dev — SpotlightCard, MIT-licensed).
// Tracks the cursor into --mx/--my custom properties; the ::after overlay in
// globals.css paints the highlight. Hover-only and pointer-safe on touch.

"use client";

import type { MouseEvent, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Spot({ className = "", children }: Props) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div className={`${className} spotlight`} onMouseMove={onMove}>
      {children}
    </div>
  );
}
