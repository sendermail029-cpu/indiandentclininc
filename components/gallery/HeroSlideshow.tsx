"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface Slide {
  src: string;
  alt: string;
  /** CSS object-position, to keep faces in frame */
  position?: string;
}

const INTERVAL = 5000;

/** Background slideshow: crossfades with a slow zoom, plus dot controls. */
export default function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, [reduce, slides.length, index]); // restarting on index resets the timer after a dot click

  const slide = slides[index];

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: reduce ? 1.08 : 1 }}
            transition={{ duration: INTERVAL / 1000 + 1.2, ease: "linear" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position ?? "center 30%" }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}
