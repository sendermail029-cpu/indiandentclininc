import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  HeartHandshake,
  MapPin,
  Microscope,
  Scale,
  Sparkles,
  Sprout,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import Aos from "@/components/Aos";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import FounderStory from "@/components/about/FounderStory";
import ServicesBento from "@/components/about/ServicesBento";
import DepartmentsAccordion from "@/components/about/DepartmentsAccordion";
import VisionCommitment from "@/components/about/VisionCommitment";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us – Trusted Since 2012",
  description:
    "Since 2012, Indian Dental & Cosmetology Clinic has grown from a single dental clinic into Vijayawada's multispeciality dental, skin and hair centre — 15,000+ happy patients and 1,200+ five-star Google reviews.",
  path: "/about",
  keywords: ["about Indian Dental clinic","best dental clinic Vijayawada","Dr Durga Prasad Vijayawada","dental and cosmetology centre Vijayawada"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "About", path: "/about" }]);

const STATS = [
  { icon: Users, value: "15,000+", label: "Happy patients" },
  { icon: Star, value: "1,200+", label: "5-star Google reviews" },
  { icon: Sparkles, value: "14", label: "Years of care" },
  { icon: MapPin, value: "4", label: "Branches in Vijayawada" },
];

const JOURNEY = [
  {
    year: "2012",
    place: "Chittinagar",
    tag: "First branch",
    text: "The journey began on 1st March 2012 with our first dental clinic at Chittinagar, Vijayawada — focused on dependable, patient-centred dental care.",
  },
  {
    year: "2014",
    place: "Kedareswararaopet",
    tag: "Second branch",
    text: "Growing patient trust and demand for advanced dental services led to our second branch at Kedareswararaopet.",
  },
  {
    year: "2015",
    place: "Krishnalanka",
    tag: "Third branch",
    text: "The practice continued to expand with a third branch at Krishnalanka, bringing quality dental care to more patients.",
  },
  {
    year: "2017",
    place: "Ranigarithota",
    tag: "Fourth branch",
    text: "Our fourth branch at Ranigarithota further strengthened our presence and accessibility across the city.",
  },
  {
    year: "2023",
    place: "Kedareswararaopet",
    tag: "Advanced centre",
    text: "A new era — an advanced centre combining Dental Care, Cosmetology and Trichology under one roof, with specialised equipment and modern treatment technology.",
    highlight: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {/* ───────── Hero (same style as Contact) ───────── */}
      <section
        id="hospital"
        className="relative -mt-[73px] flex min-h-[440px] scroll-mt-24 items-end overflow-hidden pb-20 pt-40 md:min-h-[560px] md:pb-24 md:pt-44"
      >
        <Aos effect="zoom-out" duration={2.4} className="absolute inset-0">
          <Image
            src="/about.jpeg"
            alt="The Indian Dental & Cosmetology Clinic team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </Aos>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="container-x relative z-10">
          <Aos effect="fade-right" delay={0.2}>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-10 bg-coral" />
              About us · Since 2012
            </p>
          </Aos>
          <h1 className="mt-5 max-w-3xl font-hero text-[2rem] leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.6rem] md:text-[3.4rem]">
            <Aos effect="flip-up" delay={0.35} as="span" className="block">
              <span className="font-accent text-[1.12em] italic tracking-normal">
                A journey of trust,
              </span>
            </Aos>
            <Aos effect="flip-up" delay={0.5} as="span" className="block font-semibold">
              excellence &amp; <span className="text-coral">advanced care.</span>
            </Aos>
          </h1>
        </div>
      </section>

      {/* ───────── Stats strip ───────── */}
      <section className="relative z-10 -mt-10 md:-mt-12">
        <div className="container-x">
          <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-20px_rgba(20,21,27,0.25)] ring-1 ring-ink/[0.05] md:grid-cols-4">
            {STATS.map((s, i) => (
              <Aos
                key={s.label}
                effect="fade-up"
                delay={0.1 + i * 0.1}
                className={`flex flex-col items-center gap-2.5 p-5 text-center sm:flex-row sm:gap-4 sm:p-6 sm:text-left md:p-7 ${
                  i % 2 === 0 ? "border-r border-ink/[0.07]" : "md:border-r md:border-ink/[0.07]"
                } ${i < 2 ? "border-b border-ink/[0.07] md:border-b-0" : ""} ${i === 3 ? "md:border-r-0" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                  <s.icon size={22} className={s.icon === Star ? "fill-coral" : ""} />
                </span>
                <div>
                  <p className="font-hero text-[1.6rem] font-semibold leading-none text-[#1B2A4A] md:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-snug text-ink-muted sm:text-[12.5px]">{s.label}</p>
                </div>
              </Aos>
            ))}
          </div>
        </div>
      </section>

      <FounderStory />

      {/* ───────── Journey timeline ───────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Aos effect="pop">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-coral">
                <MapPin size={13} /> Our journey
              </span>
            </Aos>
            <Aos effect="fade-up" delay={0.1}>
              <h2 className="mt-4 font-hero text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-[#1B2A4A] sm:text-3xl md:text-4xl">
                From one clinic to <span className="text-coral">four branches</span>
              </h2>
            </Aos>
          </div>

          <JourneyTimeline items={JOURNEY} />
        </div>
      </section>

      <ServicesBento />

      <DepartmentsAccordion />

      <VisionCommitment />
    </>
  );
}
