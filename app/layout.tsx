import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Serif, Manrope, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/booking/BookingModal";
import PosterPopup from "@/components/PosterPopup";
import HideOnAdmin from "@/components/HideOnAdmin";
import PageTransition from "@/components/PageTransition";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, clinicJsonLd, jsonLdScript, websiteJsonLd } from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const DEFAULT_TITLE = "Indian Dental & Cosmetology Clinic, Vijayawada | Dental, Skin & Hair Care";
const DEFAULT_DESCRIPTION =
  "Trusted dental, skin and hair clinic in Vijayawada since 2012 — dental implants, laser dentistry, root canal, braces, zirconia crowns, acne & anti-aging treatments, laser hair reduction and hair transplant. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | Indian Dental & Cosmetology Clinic" },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "dental clinic Vijayawada",
    "best dentist in Vijayawada",
    "dental implants Vijayawada",
    "root canal treatment Vijayawada",
    "braces Vijayawada",
    "cosmetology clinic Vijayawada",
    "skin clinic Vijayawada",
    "hair transplant Vijayawada",
    "laser hair removal Vijayawada",
    "Indian Dental Vijayawada",
    "Dr Durga Prasad dentist",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "health",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Vijayawada",
    "geo.position": "16.5254303;80.6263817",
    ICBM: "16.5254303, 80.6263817",
  },
};

export const viewport: Viewport = {
  themeColor: "#C1652E",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${instrumentSerif.variable} ${manrope.variable} ${outfit.variable}`}
    >
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(clinicJsonLd)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)} />
        <HideOnAdmin>
          <Navbar />
        </HideOnAdmin>
        <main>{children}</main>
        <HideOnAdmin>
          <Footer />
          <BookingModal />
          <PosterPopup />
          <PageTransition />
        </HideOnAdmin>
      </body>
    </html>
  );
}
