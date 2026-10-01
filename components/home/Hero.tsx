"use client";

import Image from "next/image";
import BookButton from "@/components/booking/BookButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import HeroShowcase from "@/components/home/HeroShowcase";
import { clinic, doctors } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;
const avatarDoctors = doctors.filter((d) => d.image).slice(0, 3);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF6EF] pt-24">
      {/* Background: warm cream with coral/blue washes and a faint dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 -top-32 h-[36rem] w-[36rem] rounded-full bg-[#7DB8FF]/[0.30] blur-[110px]" />
        <div className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-[#5FA0F5]/[0.20] blur-[110px]" />
        <div className="absolute left-[28%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-coral/[0.12] blur-[110px]" />
        <div className="absolute -bottom-48 left-[38%] h-[26rem] w-[26rem] rounded-full bg-gold-light/25 blur-[120px]" />
        <div className="absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-[#2B5CAB]/[0.08] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: "radial-gradient(rgba(43,92,171,0.22) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(to right, #000, transparent 55%)",
            WebkitMaskImage: "linear-gradient(to right, #000, transparent 55%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent" />
      </div>
      <div className="relative">
        <div className="container-x grid items-center gap-4 pb-8 pt-0 sm:gap-6 md:pb-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Copy */}
          <div className="relative z-10 max-w-xl">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-coral/15 bg-white/70 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-coral-dark shadow-sm backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
              </span>
              Dental · Skin · Hair — Since {clinic.since}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-4 font-display text-[2.35rem] font-light leading-[1.08] tracking-[-0.025em] text-ink sm:text-[3.1rem] lg:text-[3.1rem] xl:text-[3.5rem]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
            >
              <span className="block">Your smile, skin &amp; hair</span>
              in{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="font-accent italic text-coral">expert hands</span>
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-coral/40"
                >
                  <motion.path
                    d="M2 8 C 50 2, 120 2, 198 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease }}
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-3 max-w-md text-[15px] leading-relaxed sm:mt-4 text-[#4A5672] sm:text-[16.5px]"
            >
              Specialist care for your teeth, skin and hair<span className="hidden sm:inline">, all under one roof in Vijayawada</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6"
            >
              <BookButton className="group flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-porcelain shadow-lg shadow-coral/25 transition-all hover:-translate-y-0.5 hover:bg-coral-dark">
                Book an appointment
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </BookButton>
              <Link
                href="/treatments"
                className="group hidden items-center gap-1.5 rounded-full px-4 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:text-coral sm:flex"
              >
                Explore treatments
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 flex items-center gap-x-4 border-t border-ink/[0.08] pt-4 sm:mt-7 sm:flex-wrap sm:gap-x-6 sm:gap-y-4 sm:pt-5"
            >
              <div className="flex items-center gap-3">
                <div className="hidden -space-x-2.5 sm:flex">
                  {avatarDoctors.map((d) => (
                    <span key={d.name} className="relative h-9 w-9 overflow-hidden rounded-full ring-[2.5px] ring-white">
                      <Image src={d.image!} alt={d.name} fill sizes="36px" className="object-cover object-top" />
                    </span>
                  ))}
                </div>
                <p className="text-[12px] leading-tight text-[#5A6580] sm:text-[13px]">
                  <span className="block font-hero text-[14px] font-semibold text-[#2B5CAB] sm:text-[15px]">{doctors.length} specialists</span>
                  under one roof
                </p>
              </div>
              <span aria-hidden className="h-8 w-px bg-ink/10 sm:h-9" />
              <div className="text-[12px] leading-tight text-[#5A6580] sm:text-[13px]">
                <span className="flex items-center gap-1 font-hero text-[14px] font-semibold text-[#2B5CAB] sm:text-[15px]">
                  15,000+
                  <Star size={13} className="fill-gold text-gold" />
                </span>
                happy patients
              </div>
              <span aria-hidden className="h-8 w-px bg-ink/10 sm:h-9" />
              <div className="text-[12px] leading-tight text-[#5A6580] sm:text-[13px]">
                <span className="block font-hero text-[14px] font-semibold text-[#2B5CAB] sm:text-[15px]">
                  {new Date().getFullYear() - clinic.since}+ years
                </span>
                of trusted care
              </div>
            </motion.div>
          </div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease }}
            className="relative order-first lg:order-none"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
