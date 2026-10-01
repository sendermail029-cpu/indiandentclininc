"use client";

import { motion } from "framer-motion";

export default function AccentUnderline({
  className,
  delay = 0.5,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      aria-hidden
    >
      <motion.path
        d="M2 8 C 40 1, 70 11, 100 6 C 130 1, 160 11, 198 5"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
