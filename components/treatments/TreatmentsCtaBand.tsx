import BookButton from "@/components/booking/BookButton";
import { ArrowUpRight } from "lucide-react";

export default function TreatmentsCtaBand() {
  return (
    <section className="bg-white py-16 text-ink">
      <div className="container-x flex flex-wrap items-center justify-between gap-6">
        <p className="max-w-md font-display text-2xl leading-snug">
          Not sure which treatment fits? A five-minute call sorts it out.
        </p>
        <BookButton
          className="group flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-porcelain shadow-lg shadow-coral/25 transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
        >
          Book your consultation
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </BookButton>
      </div>
    </section>
  );
}
