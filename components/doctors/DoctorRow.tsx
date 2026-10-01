"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import type { MouseEvent } from "react";
import { doctors } from "@/lib/content";

type Doctor = (typeof doctors)[number];

const ease = [0.16, 1, 0.3, 1] as const;

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const pastelBands = [
  "from-[#FCEAE2] via-[#F8E6EE] to-[#EFE6F5]", // peach → blush → lavender
  "from-[#E3F4EE] via-[#E9F5F1] to-[#E4EFF6]", // mint → powder blue
  "from-[#ECE6F7] via-[#F1EAF6] to-[#F8E9F0]", // lavender → pink
  "from-[#E3EEF9] via-[#EAF1F8] to-[#EFF5EA]", // sky blue → sage
  "from-[#FBF1DC] via-[#FBEDE0] to-[#F9E6E4]", // butter → apricot
];

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -35 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: 24, rotateY: -20 },
  show: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6, ease } },
};

function TiltCard({ doc, reversed }: { doc: Doctor; reversed: boolean }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [5, -5]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, rotateY: reversed ? -35 : 35, x: reversed ? 60 : -60, scale: 0.9 }}
      whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease }}
      className="mx-auto w-full max-w-[300px] [perspective:1200px] sm:max-w-sm md:mx-0"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative aspect-[4/5] w-full"
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/25"
          style={{ transform: "translateZ(0px)" }}
        >
          {doc.image ? (
            <Image
              src={doc.image}
              alt={doc.name}
              fill
              sizes="(min-width: 640px) 384px, 300px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-ink to-ink-soft">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-porcelain/10 text-2xl font-semibold text-porcelain">
                {initials(doc.name)}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DoctorRow({
  doc,
  index,
}: {
  doc: Doctor;
  index: number;
}) {
  const reversed = index % 2 === 1;
  // Doctors 1, 3, 5, 7… sit on a full-bleed pastel band, cycling colours
  const band = index % 2 === 0 ? pastelBands[(index / 2) % pastelBands.length] : null;

  return (
    <div
      className={`relative isolate grid items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-10 lg:gap-16 ${
        band ? "py-14 md:py-20 lg:py-24" : "py-12 md:py-16 lg:py-20"
      }`}
    >
      {band && (
        <div
          className={`absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-gradient-to-br ${band}`}
        />
      )}
      <div className={reversed ? "md:order-2" : ""}>
        <TiltCard doc={doc} reversed={reversed} />
      </div>

      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className={`[perspective:900px] ${reversed ? "md:order-1" : ""}`}
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, scale: 1.6, y: 20 },
            show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease } },
          }}
          className="block origin-left font-display text-6xl leading-none text-ink/[0.07] sm:text-7xl"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <motion.h3
          variants={textItem}
          className="-mt-5 origin-bottom font-display text-[1.65rem] leading-tight text-ink sm:-mt-6 sm:text-3xl"
        >
          {doc.name}
        </motion.h3>
        <motion.p
          variants={textItem}
          className="mt-1.5 origin-bottom text-[12.5px] uppercase leading-snug tracking-[0.1em] text-coral sm:text-sm sm:tracking-[0.12em]"
        >
          {doc.role}
        </motion.p>
        <motion.span
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.8, ease } },
          }}
          className="mt-4 block h-px w-16 origin-left bg-coral/50"
        />
        {doc.bio && (
          <motion.p
            variants={textItem}
            className="mt-5 max-w-md origin-bottom text-[14.5px] leading-relaxed text-ink-muted sm:text-[15px]"
          >
            {doc.bio}
          </motion.p>
        )}
        {doc.credentials && (
          <motion.ul
            variants={textContainer}
            className="mt-5 max-w-md space-y-2.5 text-[14px] text-ink-muted"
          >
            {doc.credentials.map((c) => (
              <motion.li
                key={c}
                variants={listItem}
                whileHover={{ x: 6 }}
                className="flex origin-left gap-3"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {c}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
}
