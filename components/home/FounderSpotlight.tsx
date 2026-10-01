import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, ShieldCheck, Sparkles, Stethoscope, Users } from "lucide-react";
import Aos from "@/components/Aos";

const HIGHLIGHTS = [
  { icon: Stethoscope, label: "Dental, Skin & Hair under one roof" },
  { icon: Users, label: "9 experienced specialists" },
  { icon: ShieldCheck, label: "B-Class sterilization" },
  { icon: Sparkles, label: "Modern laser technology" },
];

/** "About our hospital" — clinic building photo + short introduction. */
export default function FounderSpotlight() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2B5CAB]/[0.05] blur-[120px]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Photo */}
        <Aos effect="fade-right">
          <div className="relative mx-auto max-w-[360px] sm:max-w-[420px]">
            <div className="absolute -inset-3 rotate-3 rounded-[2.25rem] bg-gradient-to-br from-coral/25 to-[#F4B48C]/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20">
              <Image
                src="/hospital.webp"
                alt="Indian Dental & Cosmetology Clinic building, Vijayawada"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[center_60%]"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white">
                <Building2 size={18} />
              </span>
              <span className="leading-tight">
                <span className="block font-hero text-[16px] font-semibold text-[#1B2A4A]">Since 2012 · Vijayawada</span>
                <span className="text-[12px] text-ink-muted">Trusted by 15,000+ patients</span>
              </span>
            </div>
          </div>
        </Aos>

        {/* Text */}
        <div className="pt-4 lg:pt-0">
          <Aos effect="fade-left">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-8 bg-coral" /> About our hospital
            </p>
          </Aos>
          <Aos effect="flip-up" delay={0.1}>
            <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3rem]">
              <span className="block font-accent text-[1.12em] italic tracking-normal">Indian Dental &amp;</span>
              <span className="font-semibold">
                Cosmetology <span className="text-coral">Clinic.</span>
              </span>
            </h2>
          </Aos>
          <Aos effect="fade-up" delay={0.15}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-muted">
              What began as a single dental clinic in Chittinagar on 1st March
              2012 has grown into Vijayawada&apos;s multidisciplinary Dental,
              Cosmetology &amp; Trichology centre — bringing advanced dental
              treatment together with skin, hair and aesthetic care, at
              affordable prices.
            </p>
          </Aos>
          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {HIGHLIGHTS.map((h, i) => (
              <Aos key={h.label} effect="fade-up" delay={0.2 + i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl bg-porcelain/70 px-3.5 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-coral/10 text-coral">
                    <h.icon size={16} />
                  </span>
                  <span className="text-[13.5px] font-medium text-[#1B2A4A]">{h.label}</span>
                </div>
              </Aos>
            ))}
          </div>
          <Aos effect="fade-up" delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1B2A4A] px-6 py-3 text-[14.5px] font-medium text-white shadow-lg shadow-[#1B2A4A]/25 transition-all hover:-translate-y-0.5 hover:bg-coral"
              >
                Read our story
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-coral"
              >
                <MapPin size={16} /> Visit us
              </Link>
            </div>
          </Aos>
        </div>
      </div>
    </section>
  );
}
