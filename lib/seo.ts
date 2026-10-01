import type { Metadata } from "next";
import { clinic, dentalTreatments, hairTreatments, skinTreatments } from "@/lib/content";

/** Live domain — change here if the site moves. */
export const SITE_URL = "https://www.indiandent.com";

export const SITE_NAME = clinic.name;

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Laser treatment at Indian Dental & Cosmetology Clinic, Vijayawada",
};

/** Builds consistent per-page metadata: title, description, canonical, Open Graph and Twitter. */
export function pageMeta({
  title,
  description,
  path,
  keywords = [],
  image,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: { url: string; width: number; height: number; alt: string };
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [image ?? DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [(image ?? DEFAULT_OG_IMAGE).url],
    },
  };
}

/** Sitewide structured data: the clinic as a local medical business (Google rich results / Maps). */
export const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalClinic"],
  "@id": `${SITE_URL}/#clinic`,
  name: clinic.name,
  alternateName: "Indian Dental Clinic Vijayawada",
  description:
    "Dental, skin, cosmetology and hair clinic in Vijayawada since 2012 — implants, laser dentistry, zirconia crowns, root canal, braces, acne & anti-aging treatments, laser hair reduction and hair transplantation.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.png`,
  image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/hospital.webp`],
  telephone: `+91${clinic.phones[0]}`,
  email: clinic.email,
  foundingDate: String(clinic.since),
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prabhas College Main Road, Kedareswararaopet",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    postalCode: "520003",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 16.5254303, longitude: 80.6263817 },
  hasMap: clinic.mapsUrl,
  areaServed: { "@type": "City", name: "Vijayawada" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:30",
    closes: "20:30",
  },
  contactPoint: clinic.phones.map((p) => ({
    "@type": "ContactPoint",
    telephone: `+91${p}`,
    contactType: "appointments",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu", "Hindi"],
  })),
  sameAs: Object.values(clinic.social),
  medicalSpecialty: ["Dentistry", "Dermatology", "PlasticSurgery"],
  availableService: [...dentalTreatments, ...skinTreatments, ...hairTreatments].map((t) => ({
    "@type": "MedicalProcedure",
    name: t.name,
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#clinic` },
};

/** Breadcrumb trail for inner pages. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

/** Renders a JSON-LD <script>. */
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
