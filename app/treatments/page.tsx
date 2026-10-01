import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import TreatmentsCtaBand from "@/components/treatments/TreatmentsCtaBand";
import TreatmentsInfo from "@/components/treatments/TreatmentsInfo";
import { clinic, dentalTreatments, hairTreatments, skinTreatments } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Dental, Skin & Hair Treatments in Vijayawada",
  description:
    "Explore 38+ treatments under one roof in Vijayawada — dental implants, laser dentistry, root canal, braces, acne & anti-aging care, laser hair reduction and hair transplantation.",
  path: "/treatments",
  keywords: ["dental treatments Vijayawada","skin treatments Vijayawada","hair treatments Vijayawada","cosmetology clinic Vijayawada"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Treatments", path: "/treatments" }]);

const departments = [
  {
    href: "/treatments/dental",
    label: "Dental",
    description: "Laser dentistry, implants, zirconia crowns and more.",
    count: dentalTreatments.length,
  },
  {
    href: "/treatments/skin",
    label: "Skin & Cosmetology",
    description: "Chemical peels, anti-aging, botox & fillers and more.",
    count: skinTreatments.length,
  },
  {
    href: "/treatments/hair",
    label: "Hair Care",
    description: "Laser hair reduction, transplantation, dandruff care and more.",
    count: hairTreatments.length,
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <section className="relative -mt-[73px] flex min-h-[380px] items-end overflow-hidden pb-12 pt-36 sm:min-h-[460px] sm:pb-16 sm:pt-40 md:min-h-[560px] md:pb-20 md:pt-44">
        <Image
          src="/gallery/contacthome.webp"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <Reveal>
            <p className="text-sm text-coral">Full treatment index</p>
            <h1
              className="mt-4 max-w-2xl font-display leading-[0.98] tracking-tightest text-porcelain"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
            >
              <span className="block text-[2rem] font-light sm:text-4xl md:text-5xl">
                Every treatment,
              </span>
              <span className="mt-1 block text-[2.4rem] sm:text-5xl md:text-6xl">
                <span className="font-accent italic text-coral">in plain</span>{" "}
                <span className="font-light">language.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-porcelain/75 sm:mt-6 sm:text-[17px]">
              Pick a department to see what each visit covers. Call{" "}
              {clinic.phones[0]} if you&apos;d rather just ask.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-porcelain pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {departments.map((d, i) => (
              <Reveal key={d.href} delay={i * 0.08}>
                <Link
                  href={d.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-porcelain-dim/40 p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-lg"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-gold">
                      {d.count} treatments
                    </p>
                    <h2 className="mt-3 font-display text-2xl text-ink">
                      {d.label}
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                      {d.description}
                    </p>
                  </div>
                  <span className="mt-6 flex items-center gap-2 font-display text-ink">
                    View treatments
                    <ArrowUpRight
                      size={18}
                      className="text-coral transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TreatmentsInfo />

      <TreatmentsCtaBand />
    </>
  );
}
