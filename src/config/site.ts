import type { Metadata, Viewport } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.creatibuzstudio.com";

export const siteViewport: Viewport = {
  themeColor: "#F85800",
  width: "device-width",
  initialScale: 1,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Creatibuz Studio | Global UI/UX Design & Web Development Agency",
    template: "%s | Creatibuz Studio",
  },
  description:
    "Creatibuz Studio is a premier global UI/UX design, mobile app, and full-stack software development studio. We design and build high-converting digital products, Next.js web applications, and B2B SaaS platforms.",
  keywords: [
    "Creatibuz Studio",
    "Creatibuz",
    "UI/UX Design Agency",
    "Web Development Agency",
    "Product Design Studio",
    "Full-Stack Web Development",
    "Mobile App UI/UX",
    "Next.js Development Agency",
    "B2B SaaS Design",
    "Branding & Design System",
    "Digital Product Studio",
  ],
  authors: [{ name: "Creatibuz Studio", url: siteUrl }],
  creator: "Creatibuz Studio",
  publisher: "Creatibuz Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Creatibuz Studio | Global UI/UX Design & Web Development Agency",
    description:
      "Full-service UI/UX design and full-stack web development agency helping startups and global businesses create scalable, high-converting digital products.",
    siteName: "Creatibuz Studio",
    images: [
      {
        url: "/creatibuz-symbol.png",
        width: 1242,
        height: 1242,
        alt: "Creatibuz Studio - UI/UX & Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatibuz Studio | Global UI/UX Design & Web Development Agency",
    description:
      "Full-service UI/UX design and full-stack web development agency helping startups and global businesses create scalable, high-converting digital products.",
    images: ["/creatibuz-symbol.png"],
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Creatibuz Studio",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/creatibuz-symbol.png`,
        caption: "Creatibuz Studio Logo",
        width: 1242,
        height: 1242,
      },
      image: `${siteUrl}/creatibuz-symbol.png`,
      description:
        "Creatibuz Studio is a premier global UI/UX design and full-stack software development agency.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61594366565881",
        "https://www.linkedin.com/company/creatibuzstudio",
        "https://twitter.com/CreatibuzStudio",
        "https://www.instagram.com/creatibuzstudio",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@creatibuz.com",
        availableLanguage: ["English", "Bengali"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Creatibuz Studio",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};
