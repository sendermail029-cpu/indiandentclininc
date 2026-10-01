"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import WireTerrain from "@/components/WireTerrain";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe2,
  MapPin,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { clinic, testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AUTOPLAY_MS = 5000;

const Globe3D = dynamic(
  () => import("@/components/ui/3d-globe").then((m) => m.Globe3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] items-center justify-center text-sm text-ink-muted">
        Loading globe…
      </div>
    ),
  }
);

const globeMarkers = [
  {
    lat: 16.5062,
    lng: 80.648,
    src: "/brand/logo.webp",
    label: "Indian Dental & Cosmetology Clinic, Vijayawada",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Patients from Dubai",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "Patients from London",
  },
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "Patients from the USA",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Patients from Singapore",
  },
];

export default function GlobeSection({ banner = true }: { banner?: boolean }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const avgRating = useMemo(() => {
    const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
    return (sum / total).toFixed(1);
  }, [total]);

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }

  // Only load the 3D globe on screens wider than a phone
  const [showGlobe, setShowGlobe] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setShowGlobe(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Autoplay only while the section is on screen
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "100px 0px" });
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [total, index, inView]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden bg-porcelain pb-16 md:pb-24 ${banner ? "" : "pt-4 md:pt-8"}`}>
      {banner && (
      <>
      {/* Banner with the animated wire-terrain background */}
      <div className="relative isolate overflow-hidden bg-[#0A0B0E]">
        <WireTerrain
          background="#0A0B0E"
          lineColor="#C1652E"
          accent="#F4B48C"
          density={70}
          speed={40}
          relief={230}
          dotSize={80}
          className="-z-10"
          style={{ position: "absolute", inset: 0 }}
        />
        {/* Darken behind the text on the left so it stays readable */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#0A0B0E]/90 via-[#0A0B0E]/45 to-[#0A0B0E]/20" />

        <div className="container-x flex min-h-[420px] flex-col justify-center gap-8 py-16 sm:gap-10 md:min-h-[480px] md:py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F4B48C]">
              <Globe2 size={14} /> International care
            </p>
            <h2 className="mt-4 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.4rem] md:text-[3rem]">
              <span className="block font-accent text-[1.12em] italic tracking-normal">
                Trusted by patients,
              </span>
              <span className="font-semibold">
                near <span className="text-[#F4B48C]">and far.</span>
              </span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/75 sm:text-[15.5px]">
              From Vijayawada to NRIs and visitors from abroad, our
              internationally trained specialists welcome patients from
              everywhere for advanced dental and cosmetic care.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: <Star size={18} className="fill-[#F4B48C]" />, value: avgRating, label: "Avg. rating" },
              { icon: <Users size={18} />, value: "15,000+", label: "Happy patients" },
              { icon: <MapPin size={18} />, value: "5+", label: "Countries served" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/[0.08] px-2 py-4 text-center backdrop-blur-md sm:px-6 sm:py-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/25 text-[#F4B48C]">
                  {s.icon}
                </span>
                <p className="mt-3 font-hero text-xl font-semibold leading-none text-white sm:text-2xl md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[10.5px] leading-tight text-white/65 sm:text-[11.5px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
      )}

      <div className="container-x relative">
        {!banner && (
          <div className="pt-12 text-center md:pt-16">
            <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-8 bg-coral" /> Patient stories <span className="h-px w-8 bg-coral" />
            </p>
            <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3rem]">
              <span className="font-accent text-[1.12em] italic tracking-normal">Trusted by patients,</span>{" "}
              <span className="font-semibold">
                near <span className="text-coral">and far.</span>
              </span>
            </h2>
          </div>
        )}
        <div className="mt-12 grid items-center gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="rounded-[28px] bg-gradient-to-br from-coral/50 via-gold/30 to-transparent p-[1.5px] shadow-[0_25px_60px_-25px_rgba(20,21,27,0.35)]">
              <div className="relative overflow-hidden rounded-[26px] bg-porcelain-dim/70 p-5 sm:p-6 md:p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-6 font-display text-[7rem] italic leading-none text-ink/[0.06]"
                >
                  &rdquo;
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-coral">
                        <Sparkles size={12} /> {active.treatment}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < active.rating
                                ? "fill-gold text-gold"
                                : "fill-transparent text-ink/20"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-5 min-h-[96px] font-display text-lg italic leading-relaxed text-ink sm:text-xl">
                      &ldquo;{active.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink/10 pt-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink-soft text-[11px] font-semibold text-porcelain ring-2 ring-porcelain ring-offset-2 ring-offset-porcelain-dim">
                          {initials(active.name)}
                        </span>
                        <div>
                          <p className="text-[13px] font-medium text-ink">
                            {active.name}
                          </p>
                          <p className="flex items-center gap-1 text-[11px] text-ink-muted">
                            <BadgeCheck size={12} className="text-coral" />{" "}
                            Verified patient
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-1.5 w-24 overflow-hidden rounded-full bg-ink/10 sm:w-32">
                  <motion.span
                    key={index}
                    className="absolute inset-y-0 left-0 rounded-full bg-coral"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: AUTOPLAY_MS / 1000,
                      ease: "linear",
                    }}
                  />
                </div>
                <span className="text-xs text-ink-muted">
                  {index + 1} / {total}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-1.5 text-[12px] font-medium text-ink-muted transition-colors hover:text-coral sm:flex"
                >
                  Read verified reviews on Google
                  <ExternalLink size={12} />
                </a>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous review"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-coral hover:bg-coral hover:text-porcelain"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next review"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-coral hover:bg-coral hover:text-porcelain"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Globe: hidden on phones (and its 3D code is never downloaded there) */}
          <div className="relative hidden sm:block">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mx-auto flex max-w-[420px] items-center justify-center"
            >
              <div className="h-[70%] w-[70%] rounded-full bg-sky-300/25 blur-[90px]" />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mx-auto flex max-w-[420px] items-center justify-center"
            >
              <div className="h-[90%] w-[90%] rounded-full border border-dashed border-gold/30" />
            </div>

            {showGlobe && (
            <Globe3D
              className="mx-auto h-[320px] w-full max-w-[420px] sm:h-[380px] md:h-[440px]"
              config={{
                autoRotateSpeed: 0.6,
                showAtmosphere: false,
                enableZoom: false,
                enablePan: false,
              }}
              markers={globeMarkers}
            />
            )}

            <div className="absolute bottom-0 left-1/2 flex max-w-[92vw] -translate-x-1/2 items-center gap-2 rounded-full text-center sm:whitespace-nowrap border border-ink/10 bg-porcelain/85 px-4 py-2 text-xs font-medium text-ink shadow-[0_10px_30px_-12px_rgba(20,21,27,0.35)] backdrop-blur-md">
              <MapPin size={13} className="text-coral" />
              Patients from India, Dubai, London, Singapore &amp; USA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
