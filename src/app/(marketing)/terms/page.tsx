import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal/legal-page-layout";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";

export const metadata: Metadata = {
  title: "Terms & Conditions | Creatibuz Studio",
  description:
    "Review the terms of service, intellectual property ownership, payment guidelines, and project agreements when working with Creatibuz Studio.",
};

const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "introduction",
    title: "Agreement & Acceptance of Terms",
    content: (
      <>
        <p>
          Welcome to Creatibuz Studio. These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (whether individually or on behalf of an entity, &quot;Client&quot;, &quot;you&quot;) and Creatibuz Studio (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of our design, branding, SaaS product UI/UX development, and digital marketing services.
        </p>
        <p>
          By booking a project, subscribing to our service tiers, signing a proposal, or utilizing our deliverables, you acknowledge that you have read, understood, and agreed to be bound by these Terms in full. If you do not agree with any part of these Terms, you must immediately refrain from using our services.
        </p>
      </>
    ),
  },
  {
    id: "scope-of-services",
    title: "Scope of Services & Engagement Models",
    content: (
      <>
        <p>
          Creatibuz Studio provides premium digital design and engineering services, including but not limited to UI/UX design, design systems, SaaS product architecture, brand identity creation, web development (Next.js/React/WordPress), mobile app interfaces, and conversion optimization audits.
        </p>
        <p>
          Our engagements operate either via fixed-scope project agreements or active monthly subscriptions. All deliverables, deadlines, and technical specifications are defined within the respective project statement of work (SOW) or active billing subscription.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property & 100% Client Ownership",
    content: (
      <>
        <p className="text-white font-medium">
          We pride ourselves on full creative transparency: upon complete payment of all agreed-upon project fees, 100% intellectual property ownership of all custom design deliverables and final code is assigned exclusively to the Client.
        </p>
        <p>
          This includes all final Figma design files, component libraries, typography hierarchies, custom illustrations, design tokens, and production-ready source code repositories created specifically for your project.
        </p>
        <p className="text-xs text-zinc-400">
          Creatibuz Studio retains only the limited, non-exclusive right to showcase non-confidential project visuals in our portfolio, case studies, and marketing materials, unless an explicit non-disclosure agreement (NDA) specifying white-label confidentiality has been executed.
        </p>
      </>
    ),
  },
  {
    id: "revisions-approvals",
    title: "Revisions, Iterations & Approvals",
    content: (
      <>
        <p>
          For subscription clients, we offer ongoing revisions within the active subscription period until complete satisfaction is achieved. For fixed-scope projects, each milestone includes dedicated review cycles outlined in the initial proposal.
        </p>
        <p>
          Feedback must be delivered in a clear, consolidated manner (e.g., Figma comments, loom recordings, or written reviews) within three (3) business days of milestone presentation to maintain sprint momentum and project schedules.
        </p>
      </>
    ),
  },
  {
    id: "payment-billing",
    title: "Payment Terms, Invoicing & Cancellations",
    content: (
      <>
        <p>
          Fixed-price contracts require an upfront deposit (typically 50%) prior to project kickoff, with the balance due upon milestone completion or final delivery. Subscription plans are billed monthly in advance and can be paused or canceled with seven (7) days written notice before the subsequent renewal date.
        </p>
        <p>
          Payments can be remitted securely via Stripe, bank wire transfer, Wise, or authorized payment gateways. Invoices remaining unpaid for more than fourteen (14) calendar days may result in a temporary pause of active production and withholding of final asset transfers.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality-nda",
    title: "Confidentiality & Non-Disclosure",
    content: (
      <>
        <p>
          Creatibuz Studio treats all client proprietary information, product roadmaps, technical data, business strategies, and customer metrics with the highest degree of confidentiality. We routinely sign standard mutual Non-Disclosure Agreements (NDAs) prior to project kickoff upon client request.
        </p>
        <p>
          We do not disclose, resell, or distribute client trade secrets to any third parties without explicit prior written authorization.
        </p>
      </>
    ),
  },
  {
    id: "limitation-liability",
    title: "Warranty & Limitation of Liability",
    content: (
      <>
        <p>
          Our services and deliverables are provided to the highest commercial industry standards. However, Creatibuz Studio will not be liable for indirect, incidental, punitive, or consequential damages resulting from third-party hosting failures, domain registrar issues, or API disruptions beyond our direct operational control.
        </p>
        <p>
          The total aggregate liability of Creatibuz Studio under any claim arising out of these Terms shall not exceed the total fees paid by the Client to Creatibuz Studio for the specific engagement giving rise to such claim.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-x-clip">
      <LegalPageLayout
        badge="Legal & Compliance"
        title="Terms &"
        titleAccent="Conditions"
        subtitle="Review the terms of service, intellectual property ownership rights, payment schedules, and professional guidelines when partnering with Creatibuz Studio."
        lastUpdated="October 2026"
        sections={TERMS_SECTIONS}
      />
      <FooterBoundarySparks />
    </div>
  );
}
