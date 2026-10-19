import React from "react";
import { LegalSection } from "@/components/sections/legal/legal-page-layout";

export const COOKIES_SECTIONS: LegalSection[] = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies & Tracking Technologies?",
    content: (
      <>
        <p>
          Cookies are small text files deposited onto your computer, tablet, or mobile phone by websites you visit. They are widely utilized by web platforms to ensure website stability, remember user preferences (such as light/dark mode state or session tokens), and deliver insightful aggregate analytical telemetry to site operators.
        </p>
        <p>
          Creatibuz Studio utilizes cookies and similar local storage technologies strictly to enhance your browsing experience, optimize site performance, and monitor interface interactions.
        </p>
      </>
    ),
  },
  {
    id: "cookie-categories",
    title: "Categories of Cookies We Deploy",
    content: (
      <>
        <p>We classify the cookies utilized on creatibuzstudio.com into three straightforward categories:</p>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <h4 className="text-white font-semibold text-sm mb-1">1. Strictly Necessary Cookies (Essential)</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Essential for the core operation of our digital platform. They enable secure routing, page state persistence, and modal interaction (such as our Cal.com booking modal and video playback states). These cannot be toggled off without degrading site function.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <h4 className="text-white font-semibold text-sm mb-1">2. Performance &amp; Analytical Cookies</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Collect aggregate, non-personally identifiable metrics on page load times, scroll depth, and popular case study views. This telemetry allows our engineering team to continuously improve Core Web Vitals, reduce latency, and refine UI flows.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
            <h4 className="text-white font-semibold text-sm mb-1">3. Functionality &amp; Preference Cookies</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Allow our website to remember customized choices you make, such as search query filters on the Blog or FAQ pages, ensuring you do not need to re-enter preferences upon subsequent visits.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Service Cookies",
    content: (
      <>
        <p>
          In specific areas of our site, third-party services may deposit their own cookies on your browser. For example, when you launch our embedded Cal.com consultation scheduler or view video reels hosted on Vimeo/YouTube, those third-party services may set session cookies subject to their respective privacy policies.
        </p>
        <p>
          We do not allow any third-party behavioral advertising networks or intrusive tracker pixels to harvest cross-site profiles from visitors to creatibuzstudio.com.
        </p>
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "How to Manage & Disable Cookies",
    content: (
      <>
        <p>
          You retain full authority to accept, decline, or delete cookies at any time through your web browser configuration. Most modern browsers allow you to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-300">
          <li>View the specific cookies stored on your device and delete them individually.</li>
          <li>Block third-party cookies from being installed during your sessions.</li>
          <li>Configure notifications whenever a website attempts to write a cookie.</li>
          <li>Block all cookies completely across all websites you visit.</li>
        </ul>
        <p className="text-xs text-zinc-400">
          Please note that disabling strictly necessary cookies may impact the visual rendering and interactive features of our website (such as interactive orbit CTAs or booking modals).
        </p>
      </>
    ),
  },
  {
    id: "policy-updates",
    title: "Updates to This Cookies Policy",
    content: (
      <>
        <p>
          We may update this Cookies Policy periodically to reflect technological adjustments, new platform features, or evolving regulatory mandates. Any modifications will be published on this page with an updated &quot;Last Updated&quot; date.
        </p>
        <p>
          If you have questions regarding our use of cookies or browser storage, please contact our team at{" "}
          <a href="mailto:Info@creatibuzstudio.com" className="text-primary hover:underline">
            Info@creatibuzstudio.com
          </a>.
        </p>
      </>
    ),
  },
];

export const PRIVACY_SECTIONS: LegalSection[] = [
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

export const TERMS_SECTIONS: LegalSection[] = [
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
