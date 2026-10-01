"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Building2, MapPin, Sparkles } from "lucide-react";

export interface JourneyItem {
  year: string;
  place: string;
  tag: string;
  text: string;
  highlight?: boolean;
}

const ease = [0.16, 1, 0.3, 1] as const;

/** Zig-zag timeline whose centre line fills with coral as you scroll. */
export default function JourneyTimeline({ items }: { items: JourneyItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className="relative mx-auto mt-10 max-w-5xl md:mt-16">
      {/* Track + animated fill */}
      <div className="absolute bottom-6 left-5 top-6 w-[3px] -translate-x-1/2 rounded-full bg-ink/[0.07] md:left-1/2" />
      <motion.div
        style={{ scaleY: reduce ? 1 : fill }}
        className="absolute bottom-6 left-5 top-6 w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-coral via-coral to-[#2B5CAB] md:left-1/2"
      />

      <ol className="space-y-8 md:space-y-4">
        {items.map((j, i) => {
          const right = i % 2 === 1;
          const Icon = j.highlight ? Sparkles : i === 0 ? MapPin : Building2;

          return (
            <li key={j.year} className="relative md:grid md:min-h-[240px] md:grid-cols-2 md:items-center md:gap-20">
              {/* Badge on the line */}
              <motion.span
                initial={reduce ? false : { scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`absolute left-5 top-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-white shadow-lg ring-[5px] ring-white md:left-1/2 md:h-12 md:w-12 md:ring-[6px] md:top-1/2 md:-translate-y-1/2 ${
                  j.highlight
                    ? "bg-gradient-to-br from-[#1B2A4A] to-[#2B5CAB] shadow-[#2B5CAB]/30"
                    : "bg-coral shadow-coral/30"
                }`}
              >
                <Icon size={20} strokeWidth={2} />
              </motion.span>

              {/* Big faded year on the empty side (desktop) */}
              <motion.span
                aria-hidden
                initial={reduce ? false : { opacity: 0, x: right ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1, ease, delay: 0.15 }}
                className={`pointer-events-none hidden select-none font-hero text-[7.5rem] font-bold leading-none tracking-tight md:block ${
                  right ? "md:col-start-1 md:row-start-1 md:text-right" : "md:col-start-2 md:row-start-1"
                } ${j.highlight ? "text-[#2B5CAB]/10" : "text-coral/10"}`}
              >
                {j.year}
              </motion.span>

              {/* Card */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: right ? 70 : -70, rotateY: right ? -12 : 12 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.9, ease }}
                style={{ transformPerspective: 1000 }}
                className={`ml-12 md:ml-0 md:row-start-1 ${right ? "md:col-start-2" : "md:col-start-1"}`}
              >
                <article
                  className={`group relative overflow-hidden rounded-3xl p-5 transition-all sm:p-7 duration-300 hover:-translate-y-1.5 ${
                    j.highlight
                      ? "bg-gradient-to-br from-[#1B2A4A] via-[#22386A] to-[#2B5CAB] text-white shadow-2xl shadow-[#1B2A4A]/30"
                      : "bg-white shadow-[0_18px_50px_-20px_rgba(27,42,74,0.22)] ring-1 ring-ink/[0.05] hover:shadow-[0_28px_60px_-20px_rgba(193,101,46,0.35)]"
                  }`}
                >
                  {/* Accent bar */}
                  <span
                    className={`absolute inset-y-0 w-1.5 ${right ? "left-0" : "left-0 md:left-auto md:right-0"} ${
                      j.highlight ? "bg-[#F4B48C]" : "bg-gradient-to-b from-coral to-[#F4B48C]"
                    }`}
                  />
                  {/* Soft glow */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${
                      j.highlight ? "bg-[#F4B48C]/25 opacity-100" : "bg-coral/15 opacity-0"
                    }`}
                  />

                  <div className="relative flex flex-wrap items-center gap-3">
                    <span className={`font-hero text-3xl font-bold leading-none sm:text-4xl ${j.highlight ? "text-[#F4B48C]" : "text-coral"}`}>
                      {j.year}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                        j.highlight ? "bg-white/15 text-white" : "bg-coral/10 text-coral"
                      }`}
                    >
                      {j.tag}
                    </span>
                  </div>
                  <h3 className={`relative mt-3 flex items-center gap-2 font-hero text-lg font-semibold sm:text-xl ${j.highlight ? "text-white" : "text-[#1B2A4A]"}`}>
                    <MapPin size={17} className={j.highlight ? "text-[#F4B48C]" : "text-coral"} />
                    {j.place}
                  </h3>
                  <p className={`relative mt-3 text-[14px] leading-relaxed sm:text-[14.5px] ${j.highlight ? "text-white/80" : "text-ink-muted"}`}>
                    {j.text}
                  </p>
                </article>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
