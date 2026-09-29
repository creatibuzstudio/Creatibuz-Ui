import React from "react";
import Link from "next/link";

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
    name: "Behance",
    href: "https://behance.net/creatibuzstudio",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M8.22 17.024c-2.22 0-3.89-.551-3.89-2.923v-4.103c0-2.217 1.62-3.045 3.73-3.045 2.11 0 3.76.818 3.76 2.946v.835H9.51v-.735c0-1.127-.58-1.428-1.39-1.428-1.03 0-1.57.51-1.57 1.543v3.834c0 1.258.64 1.57 1.65 1.57.94 0 1.58-.337 1.58-1.532h2.24c0 2.227-1.44 3.038-3.8 3.038zm3.9-10.024h4.86v1.442h-4.86V7zM18.82 17.135c-2.31 0-4.06-1.12-4.06-3.856 0-2.88 1.96-3.924 4.09-3.924 2.27 0 4.15 1.107 4.15 3.864v.538h-5.99v.15c0 1.233.6 1.768 1.93 1.768 1.09 0 1.57-.454 1.76-1.07h2.09c-.27 1.664-1.63 2.53-3.97 2.53zm-1.85-4.23h3.89v-.11c0-1.155-.54-1.65-1.93-1.65-1.32 0-1.92.515-1.96 1.76z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/creatibuzstudio",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm8.562-12.012c-.08-.035-1.85-1.07-3.96-.282.164.55.308 1.107.426 1.666 2.45.698 3.486 2.054 3.542 2.136.634-1.05.994-2.268.994-3.553 0-.022 0-.044-.002-.066l-1.002.099zm-2.025 5.534c-.056-.076-1.04-1.38-3.344-2.055-.916 2.55-1.97 4.887-2.062 5.083C14.73 20.355 16.275 19.38 17.55 17.93l.987-.408zM10.158 21.65c.092-.195 1.166-2.553 2.1-5.115-2.036-.59-4.32-.596-4.464-.595-.01.004-.02.008-.03.013C7.45 19.006 8.71 20.655 10.158 21.65zM5.586 14.398c.15-.003 2.61.002 4.757.653-.135-.615-.292-1.23-.466-1.842-3.15-.992-6.196-.92-6.39-.913-.198.795-.306 1.623-.306 2.476 0 1.545.42 3.012 1.155 4.29 0 .002.003.003.005.006 1.11-2.905 1.252-4.665 1.245-4.67zM4.17 9.873c.198-.007 3.035-.078 6.09.84-.96-1.745-2.022-3.415-2.115-3.56-2.502 1.12-4.148 3.51-4.223 6.304l.248-.052v.002l.002-.002zm5.72-4.23c.094.144 1.135 1.787 2.08 3.492 1.83-1.05 3.328-2.316 3.42-2.4-.95-1.1-2.22-1.89-3.66-2.27-.47-.123-.97-.19-1.48-.19-.125 0-.25.006-.374.016l.015.352zm6.276-.798c-.1.085-1.577 1.332-3.385 2.378 1.996.864 3.655 1.928 3.765 2 1.134-1.393 1.826-3.16 1.87-5.07l-2.25.692z" />
      </svg>
    ),
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
            {social.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}
