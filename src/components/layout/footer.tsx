"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Clock } from "lucide-react";
import {
  quickLinks,
  serviceLinks,
  legalLinks,
  contactDetails,
} from "@/data/footer.data";
import { FooterSocial } from "./footer/footer-social";

export function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-header-text pt-16 md:pt-20 relative overflow-hidden z-10">
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14">
          {/* Column 1: Brand Info & Social Icons */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-7">
            <Link href="/" className="inline-flex flex-row items-center gap-3.5">
              <Image
                src="/logo.png"
                alt="Creatibuz Logo"
                width={250}
                height={100}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </Link>

            <p className="text-primary-text text-[14px] md:text-base leading-relaxed max-w-[350px] font-normal">
              A full-service UI/UX and development agency helping startups and
              businesses create fast, scalable, and user-focused digital
              products.
            </p>

            <FooterSocial />
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-base md:text-[18px] font-semibold text-header-text mb-6 tracking-tight">
              Quick Link
            </h4>
            <ul className="space-y-3.5 text-[14px] md:text-base text-primary-text">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-base md:text-[18px] font-semibold text-header-text mb-6 tracking-tight">
              Service
            </h4>
            <ul className="space-y-3.5 text-[14px] md:text-base text-primary-text font-normal">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-base md:text-[18px] font-semibold text-header-text mb-6 tracking-tight">
              Contact Us
            </h4>
            <div className="space-y-5 text-[14px] md:text-base text-primary-text">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="text-header-text font-medium text-[14px] md:text-base">WhatsApp</div>
                  <div className="text-primary-text text-[14px] md:text-base">{contactDetails.whatsapp}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-header-text font-medium text-[14px] md:text-base">Email Address</div>
                  <div className="text-primary-text text-[14px] md:text-base">{contactDetails.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-header-text font-medium text-[14px] md:text-base">Working Hour :</div>
                  <div className="text-primary-text text-[14px] md:text-base whitespace-pre-line leading-relaxed">
                    {contactDetails.workingHours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] md:text-[15px] text-primary-text font-normal pt-4 pb-8">
          <p>© {new Date().getFullYear()} Copyright By - Creatibuz Studio</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Glowing Watermark */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] flex items-end justify-center select-none pointer-events-none overflow-hidden -mt-4 sm:-mt-6">
        <Image
          src="/footerOverlay.png"
          alt="Creatibuz Footer Watermark"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>
    </footer>
  );
}

export default Footer;
