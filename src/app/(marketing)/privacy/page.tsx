import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal/legal-page-layout";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";

export const metadata: Metadata = {
  title: "Privacy Policy | Creatibuz Studio",
  description:
    "Learn how Creatibuz Studio collects, processes, and safeguards client and visitor data in full compliance with modern privacy standards.",
};

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Privacy Commitment & Data Controller",
    content: (
      <>
        <p>
          At Creatibuz Studio, we hold your personal and business privacy in the highest regard. This Privacy Policy details how we collect, store, process, and protect your information when you visit our website (creatibuzstudio.com), book a strategy consultation, interact with our services, or partner with us on design and development projects.
        </p>
        <p>
          Creatibuz Studio operates as the primary data controller for the information collected across our digital touchpoints. We adhere strictly to global data protection principles, ensuring transparent data minimization and robust encryption standards.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We only collect information necessary to deliver exceptional design services and seamless client communication. This includes:</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>
            <strong className="text-white">Contact &amp; Identification Data:</strong> Your name, business email address, company name, phone number, and WhatsApp handle provided when scheduling a consultation or submitting an audit inquiry.
          </li>
          <li>
            <strong className="text-white">Project &amp; Brief Information:</strong> Design specifications, brand collateral, project budgets, and target deliverables shared during onboarding.
          </li>
          <li>
            <strong className="text-white">Technical &amp; Usage Telemetry:</strong> Anonymized browser type, operating system, IP address, referral sources, and page interaction timestamps gathered via standard analytics cookies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-data",
    title: "How We Utilize Your Information",
    content: (
      <>
        <p>Your information is utilized solely for lawful business operations, specifically:</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>Delivering, personalizing, and executing contracted design sprints and development milestones.</li>
          <li>Facilitating scheduled video strategy sessions and real-time project updates via Cal.com and WhatsApp.</li>
          <li>Preparing accurate project proposals, invoices, and legal transfer documentation.</li>
          <li>Analyzing aggregate website performance to optimize site speed, UX interactions, and service clarity.</li>
        </ul>
        <p className="text-white font-medium">
          We never sell, rent, or trade your personal or business data to third-party data brokers or marketing aggregators under any circumstances.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Integrations & Sub-Processors",
    content: (
      <>
        <p>
          To maintain high operational velocity, we integrate with industry-leading cloud service providers that maintain stringent SOC 2, ISO 27001, and GDPR compliance certifications:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong className="text-white">Cal.com:</strong> For direct, privacy-centric meeting scheduling and calendar sync.</li>
          <li><strong className="text-white">Stripe &amp; Wise:</strong> For PCI-DSS Level 1 compliant financial transaction processing (we do not store raw credit card numbers on our servers).</li>
          <li><strong className="text-white">Figma &amp; GitHub:</strong> For collaborative design asset authoring and code repository version control.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention-security",
    title: "Data Security & Retention Periods",
    content: (
      <>
        <p>
          We employ multi-layered technical safeguards, including end-to-end TLS 1.3 encryption in transit, encrypted database storage at rest, restricted role-based internal access, and regular vulnerability audits.
        </p>
        <p>
          We retain client project files and correspondence for the duration of the active service relationship and up to three (3) years thereafter for accounting and warranty support purposes, after which data is securely purged or anonymized.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights & Data Portability",
    content: (
      <>
        <p>Depending on your jurisdiction (such as GDPR, CCPA, or UK DPA), you possess specific legal rights regarding your personal data:</p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>The right to request access to and receive copies of the personal data we hold about you.</li>
          <li>The right to request correction of inaccurate or incomplete personal records.</li>
          <li>The right to request complete deletion (&quot;Right to be Forgotten&quot;) of your personal data.</li>
          <li>The right to withdraw consent for direct marketing communications at any time.</li>
        </ul>
        <p>
          To exercise any of these rights, simply email us at{" "}
          <a href="mailto:Info@creatibuzstudio.com" className="text-primary hover:underline">
            Info@creatibuzstudio.com
          </a>{" "}
          with your request. We respond to all verified inquiries within thirty (30) calendar days.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-x-clip">
      <LegalPageLayout
        badge="Data Protection & Privacy"
        title="Privacy"
        titleAccent="Policy"
        subtitle="Understand how Creatibuz Studio collects, processes, and protects your information with enterprise-grade security and uncompromising transparency."
        lastUpdated="October 2026"
        sections={PRIVACY_SECTIONS}
      />
      <FooterBoundarySparks />
    </div>
  );
}
