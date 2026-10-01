import Hero from "@/components/home/Hero";
import DepartmentsAccordion from "@/components/about/DepartmentsAccordion";
import FounderSpotlight from "@/components/home/FounderSpotlight";
import Doctors from "@/components/home/Doctors";
import ResultsPreview from "@/components/home/ResultsPreview";
import SchemesBand from "@/components/home/SchemesBand";
import CtaBand from "@/components/home/CtaBand";
import TreatmentTicker from "@/components/treatments/TreatmentTicker";
import { dentalTreatments, hairTreatments, skinTreatments } from "@/lib/content";
import GlobeSection from "@/components/GlobeSection";

// Dental, skin and hair treatments interleaved for the ribbon under the hero
const ALL_TREATMENTS = Array.from(
  { length: Math.max(dentalTreatments.length, skinTreatments.length, hairTreatments.length) },
  (_, i) => [dentalTreatments[i], skinTreatments[i], hairTreatments[i]]
)
  .flat()
  .filter(Boolean)
  .map((t) => t!.name.replace(/^Dental /, ""));

export default function HomePage() {
  return (
    <>
      <Hero />
      <TreatmentTicker label="Our treatments" items={ALL_TREATMENTS} />
      <FounderSpotlight />
      <Doctors />
      <DepartmentsAccordion variant="home" />
      <ResultsPreview />
      <SchemesBand />
      <GlobeSection banner={false} />
      <CtaBand />
    </>
  );
}
