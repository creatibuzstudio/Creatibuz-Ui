import type { Metadata, Viewport } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const siteViewport: Viewport = {
  themeColor: "#F85800",
  width: "device-width",
  initialScale: 1,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Creatibuz Studio | Global UI/UX Design & Web Development Agency",
    template: "%s | Creatibuz Studio - Global UI/UX Design & Web Development Agency",
  },
  description:
    "Creatibuz Studio is a premier AI-native software studio. We design, train, and ship intelligent digital products, Next.js web applications, and B2B SaaS platforms in days, not months.",
  keywords: [
    "Creatibuz Studio",
    "Creatibuz Studio Agency",
    "AI Software Company",
    "Digital Product Agency",
    "UI/UX Design Agency",
    "Next.js Software Studio",
    "B2B SaaS Engineering",
    "Custom AI Models",
    "Full-Stack Web Development",
    "Mobile App Development",
    "Automation Workflows",
  ],
  authors: [{ name: "Creatibuz Studio Engineering Team", url: siteUrl }],
  creator: "Creatibuz Studio Software Studio",
  publisher: "Creatibuz Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/fav.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/fav.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Creatibuz Studio | Global UI/UX Design & Web Development Agency",
    description:
      "Full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.",
    siteName: "Creatibuz Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Creatibuz Studio Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatibuz Studio | Global UI/UX Design & Web Development Agency",
    description:
      "Full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.",
    images: ["/logo.png"],
    creator: "@CreatibuzStudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creatibuz Studio",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Creatibuz Studio is an AI software company and digital product studio that designs, builds, and deploys scalable web, mobile, and B2B SaaS solutions.",
  sameAs: [
    "https://facebook.com/CreatibuzStudio",
    "https://linkedin.com/company/CreatibuzStudio",
    "https://twitter.com/CreatibuzStudio",
    "https://instagram.com/CreatibuzStudio",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Bengali"],
  },
};
