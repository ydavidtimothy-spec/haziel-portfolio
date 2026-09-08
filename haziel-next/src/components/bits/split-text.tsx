// Adapted from React Bits (https://reactbits.dev — SplitText, MIT-licensed).
// Rewritten in TypeScript and tuned to this project's dual-theme tokens and
// restrained motion (vertical rise only, no rotation).

"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function SplitText({ text, className = "", delay = 0, stagger = 0.022 }: Props) {
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, y: "0.4em" },
            visible: { opacity: 1, y: "0em" },
          }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
