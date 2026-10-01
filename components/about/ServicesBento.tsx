import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Aos from "@/components/Aos";

type Dept = "Dental" | "Skin" | "Hair & Wellness";

const SERVICES: { name: string; image: string; dept: Dept; href: string }[] = [
  { name: "Advanced Dental Treatments", image: "/indiandental (8).webp", dept: "Dental", href: "/treatments/dental" },
  { name: "Cosmetic Dentistry", image: "/treatments/dental/zirconia-crowns.webp", dept: "Dental", href: "/treatments/dental" },
  { name: "Dental Implants", image: "/treatments/dental/implantology.webp", dept: "Dental", href: "/treatments/dental" },
  { name: "Painless & Patient-Friendly Procedures", image: "/treatments/dental/scaling-polishing.webp", dept: "Dental", href: "/treatments/dental" },
  { name: "Advanced Diagnostics & Equipment", image: "/treatments/dental/digital-xray.webp", dept: "Dental", href: "/treatments/dental" },
  { name: "Skin & Cosmetology Treatments", image: "/treatments/skin/chemical-peels.webp", dept: "Skin", href: "/treatments/skin" },
  { name: "Laser Treatments", image: "/treatments/skin/laser-treatments.webp", dept: "Skin", href: "/treatments/skin" },
  { name: "Facial Aesthetic Procedures", image: "/treatments/skin/botox-fillers.webp", dept: "Skin", href: "/treatments/skin" },
  { name: "Pigmentation & Skin Rejuvenation", image: "/treatments/skin/dermaplaning.webp", dept: "Skin", href: "/treatments/skin" },
  { name: "Trichology & Hair-Loss Treatments", image: "/treatments/hair/hair-loss.webp", dept: "Hair & Wellness", href: "/treatments/hair" },
  { name: "Advanced Hair & Scalp Care", image: "/treatments/hair/hair-transplant.webp", dept: "Hair & Wellness", href: "/treatments/hair" },
  { name: "Weight Management & Weight Loss", image: "/about/weight-management.webp", dept: "Hair & Wellness", href: "/contact" },
  { name: "Cosmetic & Medical Micropigmentation", image: "/treatments/skin/permanent-makeup.webp", dept: "Skin", href: "/treatments/skin" },
];

const DEPT_STYLE: Record<Dept, string> = {
  Dental: "bg-[#2B5CAB]",
  Skin: "bg-coral",
  "Hair & Wellness": "bg-[#2F7A5B]",
};

/** "Under one roof" — every service as a photo tile in a bento grid. */
export default function ServicesBento() {
  return (
    <section className="relative overflow-hidden bg-porcelain py-16 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-coral/[0.07] blur-[120px]" />

      <div className="container-x relative">
        {/* Heading row */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Aos effect="fade-right">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
                <span className="h-px w-8 bg-coral" /> 2023 · A new era
              </p>
            </Aos>
            <Aos effect="flip-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.85rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3.2rem]">
                <span className="block font-accent text-[1.12em] italic tracking-normal">
                  Dental, Cosmetology &amp; Trichology —
                </span>
                <span className="font-semibold">
                  under <span className="text-coral">one roof.</span>
                </span>
              </h2>
            </Aos>
          </div>
          <Aos effect="fade-left" delay={0.15}>
            <p className="text-[15.5px] leading-relaxed text-ink-muted">
              In 2023 we opened an advanced centre that brings modern dental
              treatment together with advanced skin, hair and aesthetic care —
              supported by specialised equipment and contemporary treatment
              technologies.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(Object.keys(DEPT_STYLE) as Dept[]).map((d) => (
                <span key={d} className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-[#1B2A4A] shadow-sm ring-1 ring-ink/[0.06]">
                  <span className={`h-2 w-2 rounded-full ${DEPT_STYLE[d]}`} /> {d}
                </span>
              ))}
            </div>
          </Aos>
        </div>

        {/* Bento grid: first tile spans 2×2, the rest fill 4 columns */}
        <div className="mt-10 grid auto-rows-[165px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:mt-12 md:auto-rows-[210px] md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const feature = i === 0;
            return (
              <Aos
                key={s.name}
                effect={feature ? "zoom-in" : "fade-up"}
                delay={feature ? 0 : (i % 4) * 0.07}
                className={feature ? "col-span-2 row-span-2" : ""}
              >
                <Link
                  href={s.href}
                  className="group relative block h-full overflow-hidden rounded-[1.5rem] shadow-md shadow-ink/10"
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes={feature ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={feature ? { objectPosition: "center 20%" } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E]/90 via-[#0A0B0E]/30 to-transparent transition-opacity duration-500 group-hover:from-[#0A0B0E]/95" />
                  {/* Coral wash on hover */}
                  <div className="absolute inset-0 bg-coral/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-coral/25" />

                  {/* Dept tag */}
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/15 px-2 py-1 text-[10px] sm:left-4 sm:top-4 sm:px-2.5 sm:text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white ring-1 ring-white/25 backdrop-blur-md">
                    <span className={`h-1.5 w-1.5 rounded-full ${DEPT_STYLE[s.dept]}`} /> <span className={feature ? "" : "hidden sm:inline"}>{s.dept}</span>
                  </span>
                  {/* Arrow */}
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1B2A4A] opacity-0 shadow-lg transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100 -rotate-45">
                    <ArrowUpRight size={16} />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 md:p-5">
                    {feature && (
                      <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#F4B48C]">
                        13 specialities · 1 centre
                      </p>
                    )}
                    <h3
                      className={`font-hero font-semibold leading-snug text-white ${
                        feature ? "text-[1.6rem] sm:text-3xl md:text-4xl" : "text-[13.5px] sm:text-[15px] md:text-[17px]"
                      }`}
                    >
                      {s.name}
                    </h3>
                    <span className="mt-2 block h-0.5 w-8 rounded-full bg-coral transition-all duration-500 group-hover:w-16" />
                  </div>
                </Link>
              </Aos>
            );
          })}
        </div>
      </div>
    </section>
  );
}
