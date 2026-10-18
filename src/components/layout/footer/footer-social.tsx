import React from "react";
import Link from "next/link";
import Image from "next/image";

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594366565881",
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/uidesignerhakim",
    icon: (
      <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/abdulhakim.292",
    icon: (
      <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/abdulhakim292",
    icon: "/x-logo.png",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/uidesignerhakim",
    icon: "/behance-logo.png",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/uidesignerhakim",
    icon: "/dribble-logo.png",
  },
];

interface FooterSocialProps {
  className?: string;
}

export function FooterSocial({ className = "" }: FooterSocialProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 flex-wrap ${className}`}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[#23252B] border border-white/10 text-white flex items-center justify-center transition-all duration-300 ease-out hover:bg-primary hover:border-primary shadow-sm hover:shadow-[0_4px_18px_rgba(254,90,0,0.38)] hover:-translate-y-0.5 select-none shrink-0"
        >
          {typeof social.icon === "string" ? (
            <Image
              src={social.icon}
              alt={social.name}
              width={20}
              height={20}
              className="w-5 h-5 object-contain brightness-0 invert"
            />
          ) : (
            social.icon
          )}
        </Link>
      ))}
    </div>
  );
}

export default FooterSocial;
