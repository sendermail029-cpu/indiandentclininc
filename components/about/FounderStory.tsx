import Image from "next/image";
import { Award, GraduationCap, Quote, Star } from "lucide-react";
import Aos from "@/components/Aos";

const TITLES = [
  "Cosmetic Dental Surgeon",
  "Implantologist",
  "Trichologist",
  "Aesthetic Medicine Practitioner",
  "Consultant Cosmetologist",
];

const EDUCATION = [
  { flag: "🇮🇳", country: "India", course: "Bachelor of Dental Surgery (2011)", where: "Dr. Sudha & Nageswara Rao Siddhartha Institute of Dental Sciences" },
  { flag: "🇬🇧", country: "United Kingdom", course: "Master's in Global Health Care", where: "International postgraduate study" },
  { flag: "🇩🇪", country: "Germany", course: "Medical Cosmetology", where: "Specialised professional training" },
  { flag: "🇬🇧", country: "United Kingdom", course: "Clinical Cosmetology, Medical Trichology, Facial Aesthetics & Aesthetic Medicine", where: "Specialised professional training" },
  { flag: "🇬🇧", country: "United Kingdom", course: "Cosmetic & Medical Micropigmentation", where: "Specialised professional training" },
  { flag: "🇫🇷", country: "France", course: "PG Diploma in Medical Trichology", where: "European International University" },
];

/** One continuous section: how the clinic began + the founder behind it. */
export default function FounderStory() {
  return (
    <section className="relative overflow-x-clip bg-porcelain py-16 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-coral/[0.07] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#2B5CAB]/[0.05] blur-[120px]" />

      <div className="container-x relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Aos effect="fade-down">
            <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-8 bg-coral" /> Our story <span className="h-px w-8 bg-coral" />
            </p>
          </Aos>
          <Aos effect="flip-up" delay={0.1}>
            <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.12] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3.2rem]">
              <span className="font-accent text-[1.12em] italic tracking-normal">One doctor&apos;s vision,</span>{" "}
              <span className="font-semibold">
                fourteen years of <span className="text-coral">trust.</span>
              </span>
            </h2>
          </Aos>
        </div>

        <div className="mt-10 grid gap-12 md:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ── Photo collage ── */}
          <div className="relative h-full">
          <div className="lg:sticky lg:top-28">
          <Aos effect="fade-right" className="relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[460px] sm:pb-16 sm:pr-16">
              {/* Decorative frame */}
              <div className="absolute left-6 top-6 hidden h-[88%] w-[82%] rounded-[2.25rem] border-2 border-coral/30 sm:block" />
              {/* Main portrait */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-2xl shadow-ink/20">
                <Image src="/Dr.DurgaPrasad.webp" alt="Dr. Durga Prasad" fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover object-[60%_10%]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0B0E]/85 via-[#0A0B0E]/30 to-transparent p-6 pt-24">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#F4B48C]">Founder</p>
                  <p className="mt-1 font-hero text-2xl font-semibold text-white">Dr. Durga Prasad</p>
                </div>
              </div>
              {/* Inset photo */}
              <div className="absolute bottom-0 right-0 hidden w-[48%] overflow-hidden rounded-3xl border-[6px] border-porcelain shadow-xl shadow-ink/20 sm:block">
                <div className="relative aspect-square">
                  <Image src="/indiandental (8).webp" alt="Dr. Durga Prasad in the treatment room" fill sizes="240px" className="object-cover object-top" />
                </div>
              </div>
              {/* Reviews badge */}
              <div className="absolute -left-6 top-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink/10 sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white">
                  <Star size={17} className="fill-white" />
                </span>
                <span className="leading-tight">
                  <span className="block font-hero text-[17px] font-semibold text-[#1B2A4A]">1,200+</span>
                  <span className="text-[11.5px] text-ink-muted">5-star Google reviews</span>
                </span>
              </div>
              {/* Since badge */}
              <div className="absolute -right-2 top-1/3 hidden rounded-2xl bg-[#1B2A4A] px-4 py-3 text-center text-white shadow-xl shadow-[#1B2A4A]/30 sm:block">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#F4B48C]">Since</span>
                <span className="font-hero text-2xl font-bold leading-none">2012</span>
              </div>
            </div>

            {/* Phone: badges sit below the portrait instead of over the face */}
            <div className="mx-auto mt-4 grid max-w-[360px] grid-cols-[1fr_auto] gap-3 sm:hidden">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-ink/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-white">
                  <Star size={17} className="fill-white" />
                </span>
                <span className="leading-tight">
                  <span className="block font-hero text-[17px] font-semibold text-[#1B2A4A]">1,200+</span>
                  <span className="text-[11.5px] text-ink-muted">5-star Google reviews</span>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#1B2A4A] px-4 py-3 text-white shadow-lg shadow-[#1B2A4A]/25">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F4B48C]">Since</span>
                <span className="font-hero text-2xl font-bold leading-none">2012</span>
              </div>
            </div>
          </Aos>
          </div>
          </div>

          {/* ── Continuous narrative ── */}
          <div>
            <Aos effect="fade-up">
              <p className="text-[16px] leading-[1.8] text-[#1B2A4A]/80 sm:text-[17px] sm:leading-[1.85] first-letter:float-left first-letter:mr-3 first-letter:font-accent first-letter:text-[4.2rem] first-letter:leading-[0.85] first-letter:text-coral">
                Our story began in 2011, when Dr. Durga Prasad completed his
                Bachelor of Dental Surgery at Dr. Sudha &amp; Nageswara Rao
                Siddhartha Institute of Dental Sciences. With a vision to make
                quality, accessible and modern dental care available to every
                family, he opened our first clinic at{" "}
                <strong className="font-semibold text-[#1B2A4A]">Chittinagar, Vijayawada on 1st March 2012.</strong>
              </p>
            </Aos>
            <Aos effect="fade-up" delay={0.1}>
              <p className="mt-5 text-[15px] leading-[1.8] text-ink-muted sm:text-[16px] sm:leading-[1.85]">
                As patient trust grew, so did the practice — and so did his
                learning. He pursued international education in the United
                Kingdom, Germany and France, bringing implantology, skin, hair,
                laser, cosmetology and aesthetic medicine together with
                dentistry. That multidisciplinary approach is what shapes our
                clinic today: personalised, comprehensive care under one roof.
              </p>
            </Aos>

            {/* Titles */}
            <Aos effect="fade-up" delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {TITLES.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-[#1B2A4A] shadow-sm ring-1 ring-ink/[0.06]">
                    <Award size={13} className="text-coral" /> {t}
                  </span>
                ))}
              </div>
            </Aos>

            {/* Education */}
            <Aos effect="fade-up" delay={0.2}>
              <p className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1B2A4A]/60">
                <GraduationCap size={16} className="text-coral" /> Education &amp; training
              </p>
            </Aos>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {EDUCATION.map((e, i) => (
                <Aos key={e.course} effect="zoom-in" delay={0.1 + i * 0.06}>
                  <div className="group flex h-full gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-ink/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-coral/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-porcelain text-xl transition-transform group-hover:scale-110" aria-hidden>
                      {e.flag}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-coral">{e.country}</p>
                      <p className="mt-0.5 text-[14px] font-semibold leading-snug text-[#1B2A4A]">{e.course}</p>
                      <p className="mt-0.5 text-[12px] leading-snug text-ink-muted">{e.where}</p>
                    </div>
                  </div>
                </Aos>
              ))}
            </div>

            {/* Quote */}
            <Aos effect="fade-up" delay={0.2}>
              <blockquote className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0B0E] via-ink to-ink-soft p-6 text-white sm:p-7 md:p-8">
                <Quote size={44} className="absolute -right-1 -top-1 rotate-180 text-coral/25" />
                <p className="relative font-accent text-[1.2rem] italic leading-relaxed sm:text-[1.35rem] md:text-[1.5rem]">
                  &ldquo;Combining dentistry, implantology, skin, hair, laser,
                  cosmetology and aesthetic medicine — so every patient receives
                  personalised, comprehensive care.&rdquo;
                </p>
                <footer className="relative mt-4 flex items-center gap-3 text-[13px] text-white/70">
                  <span className="h-px w-8 bg-coral" /> Dr. Durga Prasad, Founder
                </footer>
              </blockquote>
            </Aos>
          </div>
        </div>
      </div>
    </section>
  );
}
