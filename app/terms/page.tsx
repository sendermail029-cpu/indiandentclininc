import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { clinic } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Terms for using the Indian Dental & Cosmetology Clinic website, booking appointments and receiving treatment in Vijayawada.",
  path: "/terms",
  keywords: [],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Terms & Conditions", path: "/terms" }]);

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <p>
        These terms apply to your use of this website and to appointments booked with{" "}
        <strong>{clinic.name}</strong>, {clinic.address}. By using the website or booking a visit, you agree to them.
      </p>
    ),
  },
  {
    id: "medical-info",
    title: "Medical information",
    body: (
      <p>
        The information on this website is for general awareness only. It is <strong>not medical advice</strong> and
        does not replace a consultation with our doctors. Every patient is different — please visit us for a proper
        examination before starting any treatment. In an emergency, contact the nearest hospital.
      </p>
    ),
  },
  {
    id: "appointments",
    title: "Appointments",
    body: (
      <ul>
        <li>
          A booking request sent through the website or WhatsApp is <strong>confirmed only once our team replies</strong>{" "}
          with a time.
        </li>
        <li>Please arrive a few minutes early and bring any previous reports, X-rays or prescriptions.</li>
        <li>
          If you need to cancel or reschedule, let us know as early as possible on +91 {clinic.phones[0]} or
          WhatsApp.
        </li>
        <li>Waiting times may vary if an earlier patient needs urgent or extended care.</li>
      </ul>
    ),
  },
  {
    id: "treatment",
    title: "Treatment & consent",
    body: (
      <ul>
        <li>Your doctor will explain the diagnosis, treatment options, risks and expected results before you begin.</li>
        <li>Certain procedures need your written consent, and you are free to ask questions at any stage.</li>
        <li>
          Results differ from person to person. Before-and-after photos show individual patients and are not a
          guarantee of the same result.
        </li>
        <li>Following aftercare advice and attending follow-up visits is important for the best outcome.</li>
      </ul>
    ),
  },
  {
    id: "fees",
    title: "Fees & payments",
    body: (
      <ul>
        <li>Treatment costs are shared after consultation. Estimates may change if the treatment plan changes.</li>
        <li>Payment is due as advised by the clinic, usually at each visit or stage of treatment.</li>
        <li>
          Government schemes such as Aarogyasri and EHS are subject to eligibility, approval and the scheme&apos;s own
          rules.
        </li>
      </ul>
    ),
  },
  {
    id: "website-content",
    title: "Website content",
    body: (
      <p>
        All text, photos, videos, logos and designs on this website belong to the clinic or are used with permission.
        Please do not copy or reuse them without our written consent.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Links to other sites",
    body: (
      <p>
        Our website links to services such as Google Maps, WhatsApp, Instagram, Facebook and YouTube. We are not
        responsible for the content or practices of those sites.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        We work hard to keep the information on this website accurate and up to date, but we cannot guarantee it is
        always complete or error-free. To the extent allowed by law, the clinic is not liable for any loss arising
        from the use of this website.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of the courts in
        Vijayawada, Andhra Pradesh.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the top of the page shows
        when they last changed.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Simple, clear terms for using our website, booking an appointment and receiving care at our clinic."
      updated="1 October 2026"
      sections={sections}
      other={{ href: "/privacy", label: "Privacy Policy" }}
    />
    </>
  );
}
