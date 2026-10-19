import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal/legal-page-layout";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";

export const metadata: Metadata = {
  title: "Cookies Policy | Creatibuz Studio",
  description:
    "Learn how Creatibuz Studio uses cookies and browser tracking technologies to deliver smooth UI interactions, perform site analytics, and improve user experiences.",
};

const COOKIES_SECTIONS: LegalSection[] = [
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

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-x-clip">
      <LegalPageLayout
        badge="Cookies & Analytics Policy"
        title="Cookies"
        titleAccent="Policy"
        subtitle="Learn how Creatibuz Studio utilizes browser cookies and analytical technologies to optimize page speeds, safeguard sessions, and deliver seamless digital experiences."
        lastUpdated="October 2026"
        sections={COOKIES_SECTIONS}
      />
      <FooterBoundarySparks />
    </div>
  );
}
