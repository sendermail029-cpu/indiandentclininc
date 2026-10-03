import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import Aos from "@/components/Aos";
import { clinic } from "@/lib/content";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

/** Shared, simple layout for the Terms and Privacy pages. */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  other,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  other: { href: string; label: string };
}) {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-[#FBF6EF] pb-12 pt-32 md:pb-16 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-[#7DB8FF]/25 blur-[110px]" />
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-coral/15 blur-[110px]" />
        </div>
        <div className="container-x relative">
          <Aos>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-coral-dark">
              <span className="h-px w-6 bg-coral/60" />
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-[2.4rem] font-light leading-tight tracking-tight text-ink md:text-[3.4rem]">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-[#4A5672]">{intro}</p>
            <p className="mt-5 inline-flex rounded-full bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-ink-muted ring-1 ring-ink/[0.06]">
              Last updated: {updated}
            </p>
          </Aos>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">On this page</p>
              <ol className="mt-4 space-y-2 border-l border-ink/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px flex gap-2 border-l-2 border-transparent py-0.5 pl-4 text-[13.5px] text-ink-muted transition-colors hover:border-coral hover:text-ink"
                    >
                      <span className="text-coral/70">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Sections */}
          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <Aos key={s.id}>
                <article id={s.id} className="scroll-mt-28 border-b border-ink/[0.07] py-7 first:pt-0">
                  <h2 className="flex items-baseline gap-3 font-display text-[1.45rem] text-ink md:text-[1.6rem]">
                    <span className="font-hero text-[13px] font-semibold text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </h2>
                  <div className="legal-body mt-3 space-y-3 text-[15px] leading-relaxed text-[#4A5672] [&_a]:font-medium [&_a]:text-coral-dark [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                    {s.body}
                  </div>
                </article>
              </Aos>
            ))}

            {/* Contact card */}
            <Aos>
              <div className="mt-10 rounded-3xl bg-[#FBF6EF] p-6 ring-1 ring-ink/[0.06] md:p-8">
                <h2 className="font-display text-[1.4rem] text-ink">Questions about this page?</h2>
                <p className="mt-1.5 text-[14.5px] text-[#4A5672]">
                  We&apos;re happy to help — reach the clinic any day, 9:30 AM to 8:30 PM.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`tel:+91${clinic.phones[0]}`}
                    className="flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-coral-dark"
                  >
                    <Phone size={15} /> +91 {clinic.phones[0]}
                  </a>
                  <a
                    href={`https://wa.me/91${clinic.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-ink ring-1 ring-ink/10 hover:ring-ink/25"
                  >
                    <MessageCircle size={15} className="text-[#25D366]" /> WhatsApp
                  </a>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-ink ring-1 ring-ink/10 hover:ring-ink/25"
                  >
                    <Mail size={15} className="text-coral" /> Email us
                  </a>
                </div>
              </div>
              <Link
                href={other.href}
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:text-coral"
              >
                Read our {other.label}
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Aos>
          </div>
        </div>
      </section>
    </>
  );
}
