"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Droplet, Scissors } from "lucide-react";
import ToothIcon from "@/components/icons/ToothIcon";
import ToothVideo from "@/components/ToothVideo";


/**
 * Hero showcase: the three department videos float freely on the white
 * background (no boxes): dental centred on top, skin and hair side by side.
 * Positions are % of a fixed-ratio stage so it scales on every screen.
 */
const ITEMS = [
  {
    key: "dental",
    title: "Dental care",
    video: "/home1-loop.mp4",
    alt: "Miniature team polishing a giant tooth on a dental implant",
    href: "/treatments/dental",
    icon: ToothIcon,
    accent: "bg-[#2B5CAB]",
    box: "left-[11%] top-0 w-[78%]",
    chip: "right-0 top-[9%]",
  },
  {
    key: "skin",
    title: "Skin & cosmetology",
    video: "/skincare-loop.mp4",
    alt: "A professional skin treatment at the clinic",
    href: "/treatments/skin",
    icon: Droplet,
    accent: "bg-coral",
    box: "left-0 top-[55%] w-[48%]",
    chip: "left-[6%] top-[88%]",
  },
  {
    key: "hair",
    title: "Hair & trichology",
    video: "/hair1-loop.mp4",
    alt: "Hair follicle regeneration with PRP therapy",
    href: "/treatments/hair",
    icon: Scissors,
    accent: "bg-[#2F7A5B]",
    box: "right-0 top-[55%] w-[48%]",
    chip: "right-[6%] top-[88%]",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto aspect-[1.16] w-full max-w-[330px] sm:max-w-[520px] lg:max-w-[600px]">
      {/* Luminous halo the videos sit in, with slow orbit rings */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[14%] rounded-full bg-[radial-gradient(closest-side,#fff_62%,rgba(255,255,255,0.7)_80%,rgba(255,255,255,0)_100%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[4%] hidden animate-[spin_60s_linear_infinite] rounded-full border border-coral/15 will-change-transform motion-reduce:animate-none sm:block"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral shadow-[0_0_12px_rgba(193,101,46,0.6)]" />
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[11%] hidden animate-[spin_90s_linear_infinite_reverse] rounded-full border border-dashed border-[#2B5CAB]/10 will-change-transform motion-reduce:animate-none sm:block"
      >
        <span className="absolute bottom-[14%] left-[8%] h-2 w-2 rounded-full bg-[#2B5CAB]/60" />
      </span>

      {ITEMS.map((it, i) => (
        <motion.div
          key={it.key}
          className={`absolute ${it.box}`}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 + i * 0.18, ease }}
        >
          <Link href={it.href} aria-label={`Explore ${it.title}`} className="block">
            <ToothVideo src={it.video} label={it.alt} soft />
          </Link>
        </motion.div>
      ))}

      {/* Floating label chips */}
      {ITEMS.map((it, i) => (
        <motion.div
          key={it.key + "-chip"}
          className={`absolute z-10 ${it.chip}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.9 + i * 0.2 }}
        >
          <Link
              href={it.href}
              className="group flex items-center gap-1.5 rounded-full bg-white/95 py-1 pl-1 pr-2.5 shadow sm:gap-2 sm:py-1.5 sm:pl-1.5-[0_10px_30px_-10px_rgba(27,42,74,0.35)] ring-1 ring-ink/[0.05] backdrop-blur transition-transform hover:-translate-y-0.5 sm:pr-3"
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-white sm:h-8 sm:w-8 ${it.accent}`}>
                <it.icon size={12} />
              </span>
              <span className="leading-tight">
                <span className="block font-hero text-[10.5px] font-semibold text-[#1B2A4A] sm:text-[13px]">{it.title}</span>
              </span>
              <ArrowUpRight size={14} className="hidden text-coral transition-transform sm:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
