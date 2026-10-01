"use client";

import { useState } from "react";
import LazyVideo from "@/components/LazyVideo";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Scale, Sparkles, Sprout, Stethoscope, type LucideIcon } from "lucide-react";
import Aos from "@/components/Aos";
import { dentalTreatments, hairTreatments, skinTreatments } from "@/lib/content";

type Dept = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  paras: string[];
  image: string;
  /** Optional looping video shown instead of the photo */
  video?: string;
  href: string;
  /** Home variant: treatment chips + count */
  chips?: string[];
  count?: number;
  cta?: string;
};

const chipNames = (list: { name: string }[]) =>
  list.slice(0, 6).map((t) => t.name.replace(/^Dental /, ""));

const HOME: Dept[] = [
  {
    icon: Stethoscope,
    title: "Dental Care",
    tagline: "Precise, painless, modern dentistry",
    paras: ["Laser dentistry, implants, zirconia crowns, single-visit root canals, braces, gum care and more — planned by our team of dental specialists."],
    image: "/treatments/dental/laser-dentistry.webp",
    video: "/indiandental%20(3).mp4",
    href: "/treatments/dental",
    chips: chipNames(dentalTreatments),
    count: dentalTreatments.length,
    cta: "Explore dental care",
  },
  {
    icon: Sparkles,
    title: "Skin & Cosmetology",
    tagline: "Skin that looks like yours — only clearer",
    paras: ["Chemical peels, lasers, anti-aging, pigmentation, facial aesthetics and pre-bridal care — each plan tailored by our skin specialist."],
    image: "/indiandental (14).webp",
    video: "/skin2.mp4",
    href: "/treatments/skin",
    chips: chipNames(skinTreatments),
    count: skinTreatments.length,
    cta: "Explore skin care",
  },
  {
    icon: Sprout,
    title: "Hair Care",
    tagline: "Healthier scalp, stronger hair",
    paras: ["Laser hair reduction, hair-loss therapy with PRP & GFC, hair transplantation and electrolysis."],
    image: "/about/trichology.webp",
    video: "/hair.mp4",
    href: "/treatments/hair",
    chips: chipNames(hairTreatments),
    count: hairTreatments.length,
    cta: "Explore hair care",
  },
];

const DEPARTMENTS: Dept[] = [
  {
    icon: Stethoscope,
    title: "Advanced Dental Care",
    tagline: "Precise, painless, modern dentistry",
    paras: [
      "Our dental department is equipped with modern, specialised equipment that supports accurate diagnosis, efficient treatment and enhanced patient comfort.",
      "From routine preventive dentistry to cosmetic dentistry, restorative procedures, dental implants and advanced aesthetic treatments — with an emphasis on comfort, safety, precision and minimally invasive approaches wherever clinically appropriate.",
    ],
    image: "/treatments/dental/laser-dentistry.webp",
    href: "/treatments/dental",
  },
  {
    icon: Sparkles,
    title: "Cosmetology & Aesthetic Care",
    tagline: "Skin that looks like yours — only clearer",
    paras: [
      "Since expanding into cosmetology in 2023, we have developed a dedicated range of advanced skin and aesthetic treatments, supported by modern equipment and professional training.",
      "Skin rejuvenation, pigmentation, facial aesthetics, laser-based treatments and other cosmetic procedures — each plan tailored to the individual patient.",
    ],
    image: "/indiandental (14).webp",
    href: "/treatments/skin",
  },
  {
    icon: Sprout,
    title: "Trichology & Hair Care",
    tagline: "Healthier scalp, stronger hair",
    paras: [
      "Specialised evaluation and management of common hair and scalp concerns.",
      "We combine clinical assessment, personalised treatment planning and advanced hair-care technologies to support patients experiencing hair and scalp problems.",
    ],
    image: "/about/trichology.webp",
    href: "/treatments/hair",
  },
  {
    icon: Scale,
    title: "Weight Management",
    tagline: "Wellness, planned around you",
    paras: [
      "As part of our growing aesthetic and wellness services, weight-management and weight-loss treatment options are also available.",
      "Treatment is planned according to individual requirements and appropriate clinical assessment.",
    ],
    image: "/about/weight-management.webp",
    href: "/contact",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function DepartmentsAccordion({ variant = "about" }: { variant?: "about" | "home" }) {
  const [active, setActive] = useState(0);
  const home = variant === "home";
  const items = home ? HOME : DEPARTMENTS;

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0B0E] py-16 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[480px] w-[480px] rounded-full bg-coral/20 blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#2B5CAB]/20 blur-[130px]" />

      <div className="container-x">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Aos effect="fade-right">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
                <span className="h-px w-8 bg-coral" /> {home ? "What we treat" : "Our departments"}
              </p>
            </Aos>
            <Aos effect="flip-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] sm:text-[2.4rem] md:text-[3.2rem]">
                <span className="block font-accent text-[1.12em] italic tracking-normal">{home ? "Three departments," : "Complete care,"}</span>
                <span className="font-semibold">
                  {home ? <>one <span className="text-coral">address.</span></> : <>every <span className="text-coral">specialty.</span></>}
                </span>
              </h2>
            </Aos>
          </div>
          <Aos effect="fade-left" delay={0.15}>
            <p className="hidden max-w-xs text-[14px] leading-relaxed text-white/55 md:block">
              Hover or tap a department to explore it.
            </p>
          </Aos>
        </div>

        {/* Accordion (desktop) */}
        <Aos effect="zoom-in" delay={0.15} className="mt-12 hidden h-[540px] gap-3 lg:flex">
          {items.map((d, i) => {
            const on = i === active;
            return (
              <div
                key={d.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ flexGrow: on ? 5 : 1, flexBasis: 0 }}
              >
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={`object-cover transition-transform duration-[1200ms] ${on ? "scale-100" : "scale-110 grayscale-[40%]"}`}
                />
                {d.video && (
                  <LazyVideo
                    src={d.video}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ${on ? "scale-100" : "scale-110 grayscale-[40%]"}`}
                  />
                )}
                <div
                  className={`absolute inset-0 transition-colors duration-700 ${
                    on
                      ? "bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/60 to-[#0A0B0E]/10"
                      : "bg-[#0A0B0E]/70 group-hover:bg-[#0A0B0E]/55"
                  }`}
                />

                {/* Number */}
                <span className="absolute left-6 top-6 font-hero text-sm font-semibold text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Collapsed: vertical title */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-end gap-5 pb-8 transition-opacity duration-300 ${
                    on ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                  }`}
                >
                  <span className="whitespace-nowrap font-hero text-lg font-semibold [writing-mode:vertical-rl] rotate-180">
                    {d.title}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/90 text-white">
                    <d.icon size={19} />
                  </span>
                </div>

                {/* Expanded: full content */}
                <AnimatePresence>
                  {on && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, ease } }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      className="absolute inset-x-0 bottom-0 p-8 xl:p-10"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-coral text-white shadow-lg shadow-coral/40">
                        <d.icon size={24} strokeWidth={1.8} />
                      </span>
                      <p className="mt-5 text-[12px] uppercase tracking-[0.25em] text-[#F4B48C]">{d.tagline}</p>
                      <h3 className="mt-2 font-hero text-3xl font-semibold leading-tight xl:text-4xl">{d.title}</h3>
                      <div className="mt-4 max-w-xl space-y-3">
                        {d.paras.map((p) => (
                          <p key={p} className="text-[14.5px] leading-relaxed text-white/75">{p}</p>
                        ))}
                      </div>
                      {d.chips && (
                        <ul className="mt-5 flex max-w-xl flex-wrap gap-2">
                          {d.chips.map((c) => (
                            <li key={c} className="rounded-full bg-white/10 px-3 py-1 text-[12.5px] text-white/90 ring-1 ring-white/20 backdrop-blur-sm">{c}</li>
                          ))}
                          {d.count && d.count > d.chips.length && (
                            <li className="rounded-full bg-coral/80 px-3 py-1 text-[12.5px] font-medium text-white">+{d.count - d.chips.length} more</li>
                          )}
                        </ul>
                      )}
                      <Link
                        href={d.href}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#1B2A4A] transition-colors hover:bg-coral hover:text-white"
                      >
                        {d.cta ?? `Explore ${d.title.split(" ")[0] === "Advanced" ? "dental" : d.title.split(" ")[0].toLowerCase()}`}
                        <ArrowUpRight size={16} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Aos>

        {/* Stacked cards (mobile / tablet) */}
        <div className={`mt-10 grid gap-5 lg:hidden ${home ? "" : "md:grid-cols-2"}`}>
          {items.map((d, i) => (
            <Aos key={d.title} effect="fade-up" delay={(i % 2) * 0.08}>
              <Link href={d.href} className="group relative block h-full min-h-[400px] overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
                <Image src={d.image} alt={d.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                {d.video && (
                  <LazyVideo src={d.video} className="absolute inset-0 h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/70 to-[#0A0B0E]/10" />
                <div className="relative flex h-full min-h-[400px] flex-col justify-end p-5 sm:p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral text-white">
                    <d.icon size={22} />
                  </span>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#F4B48C]">{d.tagline}</p>
                  <h3 className="mt-1.5 font-hero text-[1.35rem] font-semibold sm:text-2xl">{d.title}</h3>
                  {d.paras.map((p) => (
                    <p key={p} className="mt-2.5 text-[14px] leading-relaxed text-white/75">{p}</p>
                  ))}
                  {d.chips && (
                    <ul className="mt-3.5 flex flex-wrap gap-1.5">
                      {d.chips.slice(0, 4).map((c) => (
                        <li key={c} className="rounded-full bg-white/10 px-2.5 py-1 text-[11.5px] text-white/90 ring-1 ring-white/20">{c}</li>
                      ))}
                      {d.count && (
                        <li className="rounded-full bg-coral/80 px-2.5 py-1 text-[11.5px] font-medium text-white">{d.count} treatments</li>
                      )}
                    </ul>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#F4B48C]">
                    {d.cta ?? "Explore"} <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Aos>
          ))}
        </div>
      </div>
    </section>
  );
}
