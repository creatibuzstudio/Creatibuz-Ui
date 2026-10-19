import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/legal/legal-page-layout";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";
import { PRIVACY_SECTIONS } from "@/data/legal.data";

export const metadata: Metadata = {
  title: "Privacy Policy | Creatibuz Studio",
  description:
    "Learn how Creatibuz Studio collects, processes, and safeguards client and visitor data in full compliance with modern privacy standards.",
};

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
