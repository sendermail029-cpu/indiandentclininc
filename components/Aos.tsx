"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** AOS-style presets. */
const PRESETS: Record<string, Variants> = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0 } },
  "fade-left": { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  "zoom-in": { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  "zoom-out": { hidden: { opacity: 0, scale: 1.12 }, show: { opacity: 1, scale: 1 } },
  "flip-up": {
    hidden: { opacity: 0, rotateX: -70, y: 30 },
    show: { opacity: 1, rotateX: 0, y: 0 },
  },
  pop: { hidden: { opacity: 0, scale: 0.4 }, show: { opacity: 1, scale: 1 } },
};

export type AosEffect = keyof typeof PRESETS;

const ease = [0.16, 1, 0.3, 1] as const;

export default function Aos({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  effect?: AosEffect;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      style={{ transformPerspective: 900 }}
      variants={reduce ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : PRESETS[effect]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease,
        ...(effect === "pop" && !reduce
          ? { type: "spring", stiffness: 380, damping: 18 }
          : {}),
      }}
    >
      {children}
    </Tag>
  );
}
