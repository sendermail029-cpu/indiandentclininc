import Link from "next/link";
import { ArrowUpRight, BadgeIndianRupee, IdCard } from "lucide-react";
import Aos from "@/components/Aos";

const CARDS = [
  {
    icon: BadgeIndianRupee,
    title: "Aarogyasri / White Ration Card",
    text: "Corporate-standard dental treatment at very affordable cost.",
    te: "అతి తక్కువ ఖర్చుతో కార్పొరేట్‌స్థాయి దంత చికిత్సలు",
  },
  {
    icon: IdCard,
    title: "EHS Health Card · APSRTC",
    text: "Cashless treatment for state government employees, retired employees and their families.",
    te: "క్యాష్‌లెస్ పద్ధతిలో కార్పొరేట్‌స్థాయి దంత చికిత్సలు",
  },
];

export default function SchemesBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF1FB] via-[#F1EEF8] to-[#FBEFE8] py-16 md:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2B5CAB]/10 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-coral/10 blur-[110px]" />
      <div className="container-x relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <Aos effect="fade-right">
              <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-coral">
                <span className="h-px w-8 bg-coral" /> Affordable care
              </p>
            </Aos>
            <Aos effect="flip-up" delay={0.1}>
              <h2 className="mt-5 font-hero text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-[#1B2A4A] sm:text-[2.4rem] md:text-[3rem]">
                <span className="block font-accent text-[1.12em] italic tracking-normal">Health card</span>
                <span className="font-semibold">
                  schemes <span className="text-coral">accepted.</span>
                </span>
              </h2>
            </Aos>
            <Aos effect="fade-up" delay={0.2}>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
                Quality treatment shouldn&apos;t be out of reach. Eligible families
                get corporate-standard care at very low cost — or fully cashless.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 text-[14.5px] font-semibold text-coral"
              >
                Ask us about your eligibility
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Aos>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((c, i) => (
              <Aos key={c.title} effect={i ? "fade-left" : "fade-up"} delay={0.1 + i * 0.12}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#1B2A4A] to-[#2B5CAB] p-6 text-white shadow-xl shadow-[#1B2A4A]/20 transition-transform duration-300 hover:-translate-y-1.5 sm:p-7">
                  <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#F4B48C]/20 blur-2xl" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F4B48C] ring-1 ring-white/20">
                    <c.icon size={26} strokeWidth={1.7} />
                  </span>
                  <h3 className="relative mt-5 font-hero text-xl font-semibold leading-snug">{c.title}</h3>
                  <p className="relative mt-2 text-[14.5px] leading-relaxed text-white/80">{c.text}</p>
                  <p lang="te" className="relative mt-3 text-[13px] leading-relaxed text-white/55">{c.te}</p>
                </article>
              </Aos>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
