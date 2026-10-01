import Link from "next/link";
import ResultsCarousel from "@/components/home/ResultsCarousel";
import { ArrowUpRight } from "lucide-react";
import Aos from "@/components/Aos";
import { transformations } from "@/lib/content";

export default function ResultsPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Aos effect="fade-right">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
                <span className="h-px w-8 bg-coral" /> Real patients
              </p>
            </Aos>
            <Aos effect="flip-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3.2rem]">
                <span className="block font-accent text-[1.12em] italic tracking-normal">Real results,</span>
                <span className="font-semibold">
                  from real <span className="text-coral">patients.</span>
                </span>
              </h2>
            </Aos>
          </div>
          <Aos effect="fade-left" delay={0.15}>
            <Link
              href="/transformation"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-[14.5px] font-medium text-white shadow-lg shadow-coral/25 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              See all results
              <ArrowUpRight size={16} />
            </Link>
          </Aos>
        </div>

      </div>

      <Aos effect="fade-up" delay={0.1} className="mt-10 md:mt-12">
        <ResultsCarousel items={transformations.map((t) => ({ title: t.title, image: t.image }))} />
      </Aos>
    </section>
  );
}
