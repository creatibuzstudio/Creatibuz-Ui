"use client";

import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { CAL_CONFIG } from "@/config/cal.config";
import { openCalModal } from "@/components/providers/cal-provider";

export function FaqSidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col space-y-6 lg:sticky lg:top-28 self-start">
      {/* Contact Card */}
      <div
        className="w-full rounded-2xl p-6 sm:p-7 relative overflow-hidden bg-[#181A1E] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
        style={{
          background:
            "linear-gradient(var(--card, #181A1E), var(--card, #181A1E)) padding-box, linear-gradient(135deg, rgba(254, 90, 0, 0.4) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(254, 90, 0, 0.2) 100%) border-box",
          border: "1.5px solid transparent",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4">
          <HelpCircle className="w-5 h-5" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          Have a Question?
        </h3>
        <p className="text-primary-text text-sm leading-relaxed mb-6 font-normal">
          Can&apos;t find what you&apos;re looking for? Reach out directly to
          our creative team. We typically respond within 2 hours.
        </p>

        {/* Direct Action Links */}
        <div className="flex flex-col space-y-3">
          <button
            type="button"
            onClick={() => openCalModal(CAL_CONFIG.calLink)}
            data-cal-link={CAL_CONFIG.calLink}
            data-cal-namespace={CAL_CONFIG.calLink}
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-primary shadow-[0_0_30px_rgba(248,88,0,0.75)] hover:shadow-[0_0_30px_rgba(248,88,1)] text-white font-medium text-sm transition-all duration-200 group cursor-pointer text-left"
          >
            <span className="flex items-center gap-2">
              Schedule Free 30-Min Call
            </span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
          </button>

          <Link
            href="https://wa.me/+8801968657353"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 group"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#25D366] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Direct WhatsApp Chat
            </span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
          </Link>

          <Link
            href="mailto:Info@creatibuzstudio.com?subject=Project%20Inquiry%20from%20FAQ"
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 group"
          >
            <span>Email: Info@creatibuzstudio.com</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-[#181A1E] border border-white/10 rounded-2xl p-6 flex flex-col space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold">
              Fast 24-48h Kickoff
            </h4>
            <p className="text-xs text-primary-text">
              We get right to work upon contract finalization.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold">
              Direct Senior Designers
            </h4>
            <p className="text-xs text-primary-text">
              No middle managers. You collaborate with the experts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold">
              100% IP Ownership
            </h4>
            <p className="text-xs text-primary-text">
              All Figma files, assets & code are completely yours.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default FaqSidebar;
