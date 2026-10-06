import React from "react";
import Link from "next/link";
import Image from "next/image";

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/creatibuzstudio",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/creatibuzstudio",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/creatibuzstudio",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/creatibuzstudio",
    icon: "/x-logo.png",
  },
  {
    name: "Behance",
    href: "https://behance.net/creatibuzstudio",
    icon: "/behance-logo.png",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/creatibuzstudio",
    icon: "/dribble-logo.png",
  },
];

export function FooterSocial() {
  return (
    <div className="flex items-center gap-3 pt-1">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-white/20 hover:border-white/25 flex items-center justify-center transition-colors duration-300 shadow-sm"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-black via-[#2a0e00] to-[#FE5A00] transition-transform duration-500 ease-out group-hover:rotate-180 pointer-events-none" />
          <span className="relative z-10 text-foreground group-hover:scale-115 transition-transform duration-300 flex items-center justify-center">
            {typeof social.icon === "string" ? (
              <Image
                src={social.icon}
                alt={social.name}
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            ) : (
              social.icon
            )}
          </span>
        </Link>
      ))}
    </div>
  );
}
