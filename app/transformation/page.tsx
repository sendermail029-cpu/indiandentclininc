import type { Metadata } from "next";
import Image from "next/image";
import Aos, { type AosEffect } from "@/components/Aos";
import GlobeSection from "@/components/GlobeSection";
import { transformations } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Before & After Results",
  description:
    "Real before-and-after results from our patients in Vijayawada — smile makeovers, dental implants, braces, acne and pigmentation treatments, chemical peels and hair restoration.",
  path: "/transformation",
  keywords: ["smile makeover before after Vijayawada","dental implant results","acne treatment before after","hair treatment results Vijayawada"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Results", path: "/transformation" }]);

// Cards enter from alternating directions across each row of 3
const CARD_EFFECTS: AosEffect[] = ["fade-right", "fade-up", "fade-left"];

export default function TransformationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      <section className="relative -mt-[73px] flex min-h-[400px] items-end overflow-hidden pb-12 pt-36 sm:min-h-[460px] sm:pb-16 sm:pt-40 md:min-h-[560px] md:pb-20 md:pt-44">
        {/* Photo settles from a slow zoom as the page opens */}
        <Aos effect="zoom-out" duration={2.4} className="absolute inset-0">
          <Image
            src="/gallery/contacthome1.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </Aos>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="container-x relative z-10">
          <Aos effect="fade-right" delay={0.2}>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral"><span className="h-px w-8 bg-coral" />Transformation</p>
          </Aos>
          {/* Same heading style as the Doctors hero */}
          <h1
            className="mt-5 max-w-2xl font-display leading-[1.02] tracking-tightest text-porcelain"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
          >
            <Aos effect="flip-up" delay={0.35} as="span" className="block text-[2.1rem] font-light sm:text-5xl md:text-6xl">
              Real results,
            </Aos>
            <Aos effect="flip-up" delay={0.5} as="span" className="mt-1 block text-[2.5rem] sm:text-6xl md:text-7xl">
              <span className="font-light">from </span>
              <span className="font-accent italic text-coral">real</span>{" "}
              <span className="font-light">patients.</span>
            </Aos>
          </h1>
          <Aos effect="fade-up" delay={0.7}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-porcelain/75 sm:mt-6 sm:text-[17px]">
              A look at genuine before and after outcomes from our dental and
              cosmetology treatments. Patient identities are kept private.
            </p>
          </Aos>
        </div>
      </section>

      <section className="bg-porcelain py-12 sm:py-16">
        <div className="container-x">
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {transformations.map((t, i) => (
              <Aos
                key={t.title + i}
                effect={CARD_EFFECTS[i % 3]}
                delay={(i % 3) * 0.12}
                duration={0.9}
              >
                <div className="group overflow-hidden rounded-2xl border border-ink/10 bg-porcelain-dim/40 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={`${t.title} — before and after treatment results`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-lg text-ink transition-colors group-hover:text-coral">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{t.description}</p>
                  </div>
                </div>
              </Aos>
            ))}
          </div>
        </div>
      </section>

      <Aos effect="fade-up" duration={1}>
        <GlobeSection />
      </Aos>

    </>
  );
}
