import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/home/CtaBand";
import Image from "next/image";
import DoctorRow from "@/components/doctors/DoctorRow";
import { clinic, doctors } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Specialist Doctors",
  description:
    "Meet our specialist dentists and dermatologist in Vijayawada — implantology, orthodontics, prosthodontics, periodontics, oral & maxillofacial surgery, pediatric dentistry, oral medicine and cosmetology.",
  path: "/doctors",
  keywords: ["best dentist Vijayawada","orthodontist Vijayawada","dermatologist Vijayawada","implantologist Vijayawada","Dr Durga Prasad"],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Doctors", path: "/doctors" }]);

const specialties = [
  "Orthodontics",
  "Oral Medicine",
  "Prosthodontics",
  "Oral & Maxillofacial Surgery",
  "Pediatric Dentistry",
  "Periodontics",
  "Cosmetology",
];

export default function DoctorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {/* Phone/tablet: photo first, text below. Desktop: text over the photo. */}
      <section className="relative -mt-[73px] overflow-hidden bg-ink lg:flex lg:min-h-[620px] lg:items-end lg:pb-16 lg:pt-[73px]">
        {/* Image starts below the navbar so the back-row faces stay visible */}
        <div className="relative mt-[84px] aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[110px] lg:mt-0 lg:aspect-auto">
          <Image
            src="/doctors.webp"
            alt="The specialist doctors of Indian Dental & Cosmetology Clinic"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_top] lg:object-[right_top]"
          />
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-ink to-transparent lg:h-16" />
          {/* Phone/tablet: fade the photo's bottom into the text area */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent lg:hidden" />
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/90 via-ink/40 to-transparent lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:block" />

        <div className="relative z-10 mx-auto -mt-6 w-full max-w-[1180px] px-6 pb-12 sm:-mt-10 sm:pb-14 md:px-10 lg:mt-0 lg:pb-0">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-porcelain/70">
              <span className="h-px w-8 bg-porcelain/40" />
              Meet the team
            </p>
            <h1
              className="mt-4 max-w-2xl font-display leading-[1.04] tracking-tightest text-porcelain lg:mt-5"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
            >
              <span className="block text-[2.1rem] font-light sm:text-5xl lg:text-6xl">
                Our team of
              </span>
              <span className="mt-1 block text-[2.6rem] sm:text-6xl lg:text-7xl">
                <span className="font-accent italic text-coral">specialist</span>{" "}
                <span className="font-light">doctors.</span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-porcelain/80 sm:text-[16px] lg:mt-6">
              Along with Dr. Durga Prasad, our clinic is supported by a team
              of experienced dental specialists from different fields of
              dentistry — because comprehensive care is best delivered
              collaboratively.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-porcelain py-12 md:py-16">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2
                  className="font-display text-[1.75rem] leading-tight tracking-tightest text-ink sm:text-3xl md:text-4xl"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 0' }}
                >
                  <span className="font-light">Specialists who </span>
                  <span className="font-accent italic text-coral">
                    evaluate together.
                  </span>
                </h2>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                  Complex cases are reviewed from every clinical angle, so your
                  treatment plan fits you.
                </p>
              </div>

              <div className="flex w-fit shrink-0 items-center gap-4 rounded-full border border-coral/20 bg-coral/[0.07] py-2 pl-2 pr-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-coral font-display text-2xl text-porcelain shadow-md shadow-coral/30">
                  {doctors.length}
                </span>
                <span className="text-sm leading-tight text-ink">
                  Specialist doctors
                  <span className="block text-ink-muted">one clinic</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-ink/10 pt-6 sm:gap-2.5 sm:pt-8">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-[12.5px] sm:px-4 sm:py-2 sm:text-[13px] text-ink/80 shadow-sm transition-colors hover:border-coral/40 hover:text-coral"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-x-clip bg-porcelain-dim/40">
        <div className="container-x">
          {doctors.map((doc, i) => (
            <DoctorRow key={doc.name} doc={doc} index={i} />
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink py-20 text-porcelain md:py-32">
        <Image
          src="/indiandental (10).webp"
          alt="Our nursing and support team at Indian Dental & Cosmetology Clinic"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 -z-10 bg-ink/80" />
        <div className="container-x text-center">
          <Reveal>
            <p className="text-sm text-gold">
              One clinic. Multiple specialties.
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-[1.6rem] leading-tight sm:text-3xl md:text-4xl">
              Comprehensive dental, skin, hair &amp; aesthetic care — together
              under one roof.
            </h2>
            <p className="mt-5 text-xs uppercase tracking-[0.14em] text-porcelain/55">
              Since {clinic.since} · Dental Care · Cosmetology · Trichology ·
              Laser &amp; Aesthetic Treatments
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
