import { BadgeIndianRupee, IdCard, PhoneCall } from "lucide-react";
import Reveal from "@/components/Reveal";
import { aftercare, clinic, schemes } from "@/lib/content";

const SCHEME_CARDS = [
  {
    icon: BadgeIndianRupee,
    title: "Aarogyasri / White Ration Card",
    te: "ఆరోగ్యశ్రీ / వైట్ రేషన్ కార్డుపై అతి తక్కువ ఖర్చుతో కార్పొరేట్‌స్థాయి దంత చికిత్సలు",
    text: schemes[0],
  },
  {
    icon: IdCard,
    title: "EHS Health Card · APSRTC · Govt. & Retired Employees",
    te: "EHS హెల్త్ కార్డు / APSRTC, రాష్ట్రప్రభుత్వ ఉద్యోగులకు మరియు రిటైర్డ్ ఉద్యోగులకు వారి కుటుంబసభ్యులకు క్యాష్‌లెస్ పద్ధతిలో కార్పొరేట్‌స్థాయి దంత చికిత్సలు",
    text: schemes[1],
  },
];

/** Health-card schemes + tooth-extraction aftercare, shown on the Treatments page. */
export default function TreatmentsInfo() {
  return (
    <>
      {/* Health card schemes */}
      <section className="bg-white py-14 md:py-24">
        <div className="container-x">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-coral">
              Affordable care
            </p>
            <h2 className="mt-3 font-hero text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-[#1B2A4A] sm:text-3xl md:text-4xl">
              Health card <span className="text-coral">schemes</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-muted">
              Corporate-standard dental treatment at very low cost — or fully
              cashless — for eligible families.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {SCHEME_CARDS.map(({ icon: Icon, title, te, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <article className="flex h-full flex-col gap-4 rounded-[1.5rem] bg-gradient-to-br from-[#1B2A4A] to-[#2B5CAB] p-5 text-white shadow-xl shadow-[#1B2A4A]/15 sm:flex-row sm:gap-5 sm:rounded-[1.75rem] sm:p-7 md:p-8">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#F4B48C] ring-1 ring-white/20">
                    <Icon size={26} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-hero text-xl font-semibold leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">
                      {text.split(" — ")[1] ?? text}
                    </p>
                    <p lang="te" className="mt-3 text-[13px] leading-relaxed text-white/60">
                      {te}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="bg-porcelain py-14 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-coral">
                  After your visit
                </p>
                <h2 className="mt-3 font-hero text-[1.65rem] font-semibold leading-tight tracking-[-0.02em] text-[#1B2A4A] sm:text-3xl md:text-4xl">
                  Care after a tooth <span className="text-coral">extraction</span>
                </h2>
                <p lang="te" className="mt-2 text-[15px] text-ink-muted">
                  పన్ను తీసిన తరువాత తీసుకోవలసిన జాగ్రత్తలు
                </p>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-muted">
                  Follow these simple steps for smooth, quick healing after your
                  tooth is removed.
                </p>

                <a
                  href={`tel:+91${clinic.phones[0]}`}
                  className="mt-8 flex max-w-sm items-center gap-4 rounded-2xl border border-coral/25 bg-white p-5 shadow-sm transition-colors hover:border-coral/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral text-white">
                    <PhoneCall size={19} />
                  </span>
                  <span className="leading-snug">
                    <span className="block text-[14px] font-semibold text-[#1B2A4A]">
                      Bleeding won&apos;t stop or a reaction?
                    </span>
                    <span className="text-[13.5px] text-ink-muted">
                      Call us right away: {clinic.phones[0]}
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>

            <ol className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {aftercare.map((a, i) => (
                <Reveal key={a.en} delay={(i % 2) * 0.06}>
                  <li className="flex h-full gap-3 rounded-2xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/10 font-hero text-[14px] font-semibold text-coral">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[14.5px] leading-relaxed text-[#1B2A4A]">
                        {a.en}
                      </p>
                      <p lang="te" className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                        {a.te}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
