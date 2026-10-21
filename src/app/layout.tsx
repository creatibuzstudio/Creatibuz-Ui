import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import {
  siteMetadata,
  siteViewport,
  organizationJsonLd,
} from "@/config/site";
import { CalProvider } from "@/components/providers/cal-provider";
import "./globals.css";

export const viewport: Viewport = siteViewport;
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-[#080808] text-white font-sans selection:bg-[#F85800] selection:text-white">
        <CalProvider />
        {children}
      </body>
    </html>
  );
}
