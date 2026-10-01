import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { clinic } from "@/lib/content";
import { breadcrumbJsonLd, jsonLdScript, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Indian Dental & Cosmetology Clinic, Vijayawada collects, uses and protects your personal and health information.",
  path: "/privacy",
  keywords: [],
});

const breadcrumb = breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy" }]);

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <p>
        This website is run by <strong>{clinic.name}</strong>, {clinic.address}. In this policy, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; and &ldquo;the clinic&rdquo; mean {clinic.name}. We respect your privacy and handle your
        information with the same care we give your treatment.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We only collect what we need to look after you:</p>
        <ul>
          <li>
            <strong>Appointment requests</strong> — your name, phone number, the department or treatment you are
            interested in, preferred date and any message you add in the booking or contact form.
          </li>
          <li>
            <strong>Clinical information</strong> — medical and dental history, photographs, X-rays and treatment
            notes collected when you visit the clinic.
          </li>
          <li>
            <strong>Messages you send us</strong> by phone, WhatsApp, email or social media.
          </li>
        </ul>
        <p>
          We do not use advertising or tracking cookies on this website. Your browser only remembers, for the current
          visit, that you have already seen our announcement poster so it is not shown again.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <ul>
        <li>To confirm, schedule and remind you about appointments.</li>
        <li>To diagnose, plan and provide your treatment, and for follow-up care.</li>
        <li>To answer your questions and share aftercare instructions.</li>
        <li>To process bills, insurance and government health schemes you choose to use.</li>
        <li>To meet our legal and medical record-keeping duties.</li>
      </ul>
    ),
  },
  {
    id: "whatsapp",
    title: "Booking through WhatsApp",
    body: (
      <p>
        When you submit the booking or contact form, your details are opened in WhatsApp so you can send them to our
        clinic number. That message is handled by WhatsApp (Meta) under its own privacy policy. The form itself does
        not store your details on our website.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Sharing your information",
    body: (
      <>
        <p>
          <strong>We never sell or rent your personal information.</strong> We share it only when needed:
        </p>
        <ul>
          <li>With doctors and staff involved in your care, including referral specialists and dental labs.</li>
          <li>With insurers or government schemes (such as Aarogyasri or EHS), when you ask us to.</li>
          <li>With trusted service providers who help run our website and systems, under confidentiality.</li>
          <li>When required by law, a court or a public authority.</li>
        </ul>
      </>
    ),
  },
  {
    id: "photos",
    title: "Patient photos & results",
    body: (
      <p>
        Before-and-after photos and patient images are shown on this website or our social media{" "}
        <strong>only with the patient&apos;s consent</strong>. If you would like an image of you removed, contact us
        and we will take it down promptly.
      </p>
    ),
  },
  {
    id: "security",
    title: "Storage & security",
    body: (
      <p>
        Records are kept securely and only authorised staff can access them. We keep clinical records for as long as
        medical regulations require, and other information only as long as it is useful for your care or required by
        law. No system is completely secure, but we take reasonable steps to protect your information.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <p>
        In line with India&apos;s Digital Personal Data Protection Act, 2023, you can ask to see the personal
        information we hold about you, correct it, or ask us to delete it where we are not required to keep it. You
        can also withdraw consent you have given us, for example for using your photos. Contact us using the details
        below and we will respond as soon as possible.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party sites",
    body: (
      <p>
        This website links to and embeds services such as Google Maps, Instagram, Facebook, YouTube and WhatsApp.
        These services may collect information under their own privacy policies, which we do not control.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of the page shows
        when it last changed.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your trust matters to us. This page explains, in plain words, what information we collect, why we collect it and how we keep it safe."
      updated="1 October 2026"
      sections={sections}
      other={{ href: "/terms", label: "Terms & Conditions" }}
    />
    </>
  );
}
