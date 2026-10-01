import type { Metadata } from "next";
import BookButton from "@/components/booking/BookButton";
import { ArrowUpRight, Phone } from "lucide-react";
import ToothVideo from "@/components/ToothVideo";
import { clinic, skinTreatments } from "@/lib/content";
import Reveal from "@/components/Reveal";
import TreatmentCards from "@/components/treatments/TreatmentCards";
import TreatmentsCtaBand from "@/components/treatments/TreatmentsCtaBand";
import TreatmentTicker from "@/components/treatments/TreatmentTicker";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Skin & Cosmetology Treatments in Vijayawada",
  description:
    "Advanced skin care in Vijayawada — acne & acne scar treatment, chemical peels, melasma and pigmentation care, anti-aging, Botox & fillers, laser treatments, medifacials and pre-bridal makeovers.",
  path: "/treatments/skin",
  keywords: ["skin clinic Vijayawada","acne treatment Vijayawada","chemical peel Vijayawada","botox fillers Vijayawada","pigmentation treatment Vijayawada","cosmetologist Vijayawada"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Treatments", path: "/treatments" }, { name: "Skin", path: "/treatments/skin" }]);

export default function SkinTreatmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {/* White hero — same layout as the Dental hero: text left, video right */}
      <section className="relative overflow-hidden bg-white pt-24 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-10 hidden h-[460px] w-[460px] rounded-full bg-coral/[0.07] blur-[120px] lg:block"
        />
        <div className="container-x relative grid items-center gap-8 pb-6 pt-6 md:gap-10 md:pb-8 md:pt-8 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-8 bg-coral" /> Skin &amp; cosmetology
            </p>
            <h1 className="mt-5 max-w-xl font-hero text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-[#1B2A4A] sm:text-[3rem] md:text-[3.8rem]">
              <span className="font-accent text-[1.12em] italic tracking-normal">
                Skin that looks
              </span>
              <span className="block font-semibold">
                like yours, <span className="text-coral">only clearer.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#1B2A4A]/60">
              Peels, lasers, anti-aging and facial aesthetics — planned by our
              skin specialist around you.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <BookButton department="Skin"
                className="group flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-[15px] font-medium text-white shadow-lg shadow-coral/25 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                Book a skin consultation
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </BookButton>
              <a
                href={`tel:+91${clinic.phones[0]}`}
                className="flex items-center gap-2 rounded-full border border-coral/30 px-6 py-3 text-[15px] text-[#1B2A4A] transition-colors hover:border-coral hover:bg-coral/[0.05]"
              >
                <Phone size={16} className="text-coral" />
                {clinic.phones[0]}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative order-first lg:order-none">
            <ToothVideo src="/skincare-loop.mp4" label="A professional skin treatment at the clinic" />
          </Reveal>
        </div>
      </section>

      <TreatmentTicker theme="coral" label="Our skin treatments" items={skinTreatments.map((t) => t.name)} />

      {/* Cream section that fades to white at the bottom into the CTA */}
      <section
        className="pb-16 pt-12 sm:pb-24 sm:pt-16 md:pt-20"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0, #F7F3EA 260px, #F7F3EA calc(100% - 260px), #FFFFFF 100%)",
        }}
      >
        <div className="container-x">
          <Reveal delay={0.1}>
            <div className="border-b border-ink/10 pb-6">
              <h2 className="font-hero text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-[#1B2A4A] sm:text-3xl md:text-4xl">
                All skin &amp; cosmetology{" "}
                <span className="text-coral">treatments</span>
              </h2>
            </div>
          </Reveal>
          <TreatmentCards category="skin" layout="tiles" />
        </div>
      </section>

      <TreatmentsCtaBand />
    </>
  );
}
