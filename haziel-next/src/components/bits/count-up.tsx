// Adapted from React Bits (https://reactbits.dev — CountUp, MIT-licensed).
// Counts 0 → `to` once when scrolled into view. Respects reduced motion
// globally via the MotionConfig provider in components/providers.tsx.

"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

type Props = {
  to: number;
  duration?: number;
};

export default function CountUp({ to, duration = 1.1 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease: [0.4, 0, 0.2, 1] });
    return () => controls.stop();
  }, [inView, value, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
