import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Sprout, Stethoscope } from "lucide-react";
import Aos from "@/components/Aos";
import { dentalTreatments, hairTreatments, skinTreatments } from "@/lib/content";

const DEPTS = [
  {
    icon: Stethoscope,
    title: "Dental Care",
    blurb: "Laser dentistry, implants, zirconia crowns, single-visit root canals and more.",
    image: "/treatments/dental/implantology.webp",
    href: "/treatments/dental",
    items: dentalTreatments,
    accent: "bg-[#2B5CAB]",
  },
  {
    icon: Sparkles,
    title: "Skin & Cosmetology",
    blurb: "Peels, lasers, anti-aging, pigmentation, facial aesthetics and pre-bridal care.",
    image: "/treatments/skin/laser-treatments.webp",
    href: "/treatments/skin",
    items: skinTreatments,
    accent: "bg-coral",
  },
  {
    icon: Sprout,
    title: "Hair Care",
    blurb: "Laser hair reduction, hair-loss therapy, transplantation and electrolysis.",
    image: "/treatments/hair/hair-loss.webp",
    href: "/treatments/hair",
    items: hairTreatments,
    accent: "bg-[#2F7A5B]",
  },
];

/** Three departments as large photo cards. */
export default function ServicesSplit() {
  return (
    <section className="relative overflow-hidden bg-porcelain py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-coral/[0.07] blur-[120px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Aos effect="fade-right">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
                <span className="h-px w-8 bg-coral" /> What we treat
              </p>
            </Aos>
            <Aos effect="flip-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3.2rem]">
                <span className="block font-accent text-[1.12em] italic tracking-normal">Three departments,</span>
                <span className="font-semibold">
                  one <span className="text-coral">address.</span>
                </span>
              </h2>
            </Aos>
          </div>
          <Aos effect="fade-left" delay={0.15}>
            <Link
              href="/treatments"
              className="group inline-flex items-center gap-2 rounded-full border border-[#1B2A4A]/15 bg-white px-5 py-3 text-[14.5px] font-medium text-[#1B2A4A] shadow-sm transition-all hover:-translate-y-0.5 hover:border-coral hover:text-coral"
            >
              View all treatments
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Aos>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-3">
          {DEPTS.map((d, i) => (
            <Aos key={d.title} effect="fade-up" delay={i * 0.12}>
              <Link
                href={d.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_2px_20px_rgba(27,42,74,0.06)] ring-1 ring-ink/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-15px_rgba(27,42,74,0.2)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E]/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-[#1B2A4A] backdrop-blur">
                    {d.items.length} treatments
                  </span>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg ${d.accent}`}>
                      <d.icon size={20} />
                    </span>
                    <h3 className="font-hero text-2xl font-semibold text-white">{d.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{d.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {d.items.slice(0, 4).map((t) => (
                      <li key={t.slug} className="rounded-full bg-porcelain px-3 py-1 text-[12px] text-[#1B2A4A]/80">
                        {t.name.replace(/^Dental /, "")}
                      </li>
                    ))}
                    {d.items.length > 4 && (
                      <li className="rounded-full bg-coral/10 px-3 py-1 text-[12px] font-medium text-coral">
                        +{d.items.length - 4} more
                      </li>
                    )}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-[#1B2A4A] transition-colors group-hover:text-coral">
                    Explore {d.title.toLowerCase()}
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Aos>
          ))}
        </div>
      </div>
    </section>
  );
}
