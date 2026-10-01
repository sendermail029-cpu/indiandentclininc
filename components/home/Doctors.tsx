import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Aos from "@/components/Aos";
import ResultsCarousel from "@/components/home/ResultsCarousel";
import { doctors } from "@/lib/content";

const team = doctors
  .filter((d) => d.image)
  .map((d, i) => ({
    title: d.name,
    subtitle: i === 0 ? "Founder · Cosmetic Dental Surgeon" : d.role,
    image: d.image!,
    href: i === 0 ? "/about" : "/doctors",
    position: "center top",
  }));

/** Simple, light team row: centred heading + one carousel of portraits. */
export default function Doctors() {
  return (
    <section className="bg-porcelain py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Aos effect="fade-down">
            <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-8 bg-coral" /> Meet the team <span className="h-px w-8 bg-coral" />
            </p>
          </Aos>
          <Aos effect="flip-up" delay={0.1}>
            <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3rem]">
              <span className="font-accent text-[1.12em] italic tracking-normal">Our team of</span>{" "}
              <span className="font-semibold">
                specialist <span className="text-coral">doctors.</span>
              </span>
            </h2>
          </Aos>
          <Aos effect="fade-up" delay={0.15}>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              {doctors.length} experienced specialists under one roof — every
              case reviewed together.
            </p>
          </Aos>
        </div>
      </div>

      <Aos effect="fade-up" delay={0.1} className="mt-10 md:mt-12">
        <ResultsCarousel items={team} badge={null} portrait />
      </Aos>

      <div className="mt-8 text-center">
        <Link
          href="/doctors"
          className="group inline-flex items-center gap-2 rounded-full border border-[#1B2A4A]/15 bg-white px-6 py-3 text-[14.5px] font-medium text-[#1B2A4A] shadow-sm transition-all hover:-translate-y-0.5 hover:border-coral hover:text-coral"
        >
          Meet the full team
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
