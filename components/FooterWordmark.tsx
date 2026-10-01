"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Giant outlined wordmark at the foot of the page. "Indian" stays put while
 * the second word swaps every few seconds: its letters drop out one by one
 * and the next word falls in from above — "Dental" ⇄ "& Cosmetology".
 */
const WORDS = ["Dental", "& Cosmetology"];
const INTERVAL = 4000;

const letterStyle: React.CSSProperties = {
  WebkitTextStroke: "1px rgba(247,243,234,0.14)",
  backgroundImage: "linear-gradient(to bottom, rgba(247,243,234,0.12), transparent 85%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function FooterWordmark() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  // Only animate while the footer is visible
  useEffect(() => {
    if (reduce || !inView) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % WORDS.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [reduce, inView]);

  const word = WORDS[index];

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none relative z-0 select-none overflow-hidden"
      style={{ fontSize: "clamp(2rem, 7.5vw, 7.5rem)", height: "0.86em" }}
    >
      <div className="flex justify-center whitespace-nowrap font-display font-medium leading-none tracking-tight">
        {/* Constant first word; slides smoothly as the second word's width changes */}
        <motion.span layout transition={{ type: "spring", stiffness: 120, damping: 20 }} style={letterStyle}>
          Indian{" "}
        </motion.span>

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span key={word} layout className="relative inline-flex">
            {Array.from(word).map((ch, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={letterStyle}
                initial={{ y: "-110%", opacity: 0 }}
                animate={{
                  y: "0%",
                  opacity: 1,
                  transition: { delay: 0.35 + i * 0.04, type: "spring", stiffness: 170, damping: 18 },
                }}
                exit={{
                  y: "120%",
                  rotate: i % 2 ? 8 : -8,
                  opacity: 0,
                  transition: { delay: i * 0.03, duration: 0.5, ease: [0.55, 0, 0.75, 0.3] },
                }}
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
