import type { Metadata } from "next";
import BookButton from "@/components/booking/BookButton";
import Reveal from "@/components/Reveal";
import TreatmentCards from "@/components/treatments/TreatmentCards";
import TreatmentsCtaBand from "@/components/treatments/TreatmentsCtaBand";
import TreatmentTicker from "@/components/treatments/TreatmentTicker";
import ToothVideo from "@/components/ToothVideo";
import { ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { clinic, dentalTreatments } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Dental Implants, Root Canal & Braces in Vijayawada",
  description:
    "Painless dental care in Vijayawada — dental implants, laser dentistry, single-visit root canal, zirconia crowns, braces, Zoom teeth whitening, wisdom tooth removal and gum treatment by specialist dentists.",
  path: "/treatments/dental",
  keywords: ["dental implants Vijayawada","root canal treatment Vijayawada","braces Vijayawada","teeth whitening Vijayawada","zirconia crowns Vijayawada","laser dentistry Vijayawada","dentist near me Vijayawada"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Treatments", path: "/treatments" }, { name: "Dental", path: "/treatments/dental" }]);

export default function DentalTreatmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <section className="relative overflow-hidden bg-white pt-24 md:pt-28">
        {/* Soft blue + coral glows behind the copy */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 hidden h-[460px] w-[460px] rounded-full bg-[#2B5CAB]/[0.06] blur-[120px] lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/4 hidden h-[320px] w-[320px] rounded-full bg-coral/[0.07] blur-[110px] lg:block"
        />        <div className="container-x relative grid items-center gap-10 pb-12 pt-6 md:pb-16 md:pt-8 lg:grid-cols-[1.05fr_1fr]">
          {/* Colours: video workwear blue + deep navy, with brand coral accents */}
          <Reveal>
            <h1 className="max-w-xl font-hero text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-[#1B2A4A] sm:text-[3rem] md:text-[3.8rem]">
              <span className="font-accent text-[1.12em] italic tracking-normal">
                Restore your
              </span>
              <span className="block font-semibold text-[#2B5CAB]">
                healthy <span className="text-coral">smile.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#1B2A4A]/60">
              Gentle, precise dental care — from cleanings to implants.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <BookButton department="Dental"
                className="group flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-[15px] font-medium text-white shadow-lg shadow-coral/25 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                Book a dental visit
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </BookButton>
              <a
                href={`tel:+91${clinic.phones[0]}`}
                className="flex items-center gap-2 rounded-full border border-[#2B5CAB]/25 px-6 py-3 text-[15px] text-[#1B2A4A] transition-colors hover:border-[#2B5CAB]/60 hover:bg-[#2B5CAB]/[0.05]"
              >
                <Phone size={16} className="text-[#2B5CAB]" />
                {clinic.phones[0]}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative order-first lg:order-none">
            <ToothVideo />

            {/* Floating card — sits in the empty top-left of the frame */}
            <div className="absolute left-0 top-2 hidden items-center gap-3 rounded-2xl border border-ink/5 bg-white/90 px-4 py-3 shadow-xl shadow-ink/10 backdrop-blur-md sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/10 text-coral">
                <ShieldCheck size={18} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-lg text-[#1B2A4A]">
                  Since {clinic.since}
                </span>
                <span className="text-[12px] text-[#1B2A4A]/55">
                  Trusted dental care
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <TreatmentTicker items={dentalTreatments.map((t) => t.name.replace(/^Dental /, ""))} />

      {/* Fades white → cream → white so it blends into the hero and CTA */}
      <section
        className="pb-16 pt-12 sm:pb-24 sm:pt-16 md:pt-20"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0, #F7F3EA 260px, #F7F3EA calc(100% - 260px), #FFFFFF 100%)",
        }}
      >
        <div className="container-x">
          <Reveal delay={0.1}>
            <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-6">
              <h2 className="font-hero text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-[#1B2A4A] sm:text-3xl md:text-4xl">
                All dental <span className="text-coral">treatments</span>
              </h2>
            </div>
          </Reveal>
          <TreatmentCards category="dental" layout="tiles" />
        </div>
      </section>

      <TreatmentsCtaBand />
    </>
  );
}
