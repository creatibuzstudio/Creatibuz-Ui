import {
  Bricolage_Grotesque,
  DM_Serif_Display,
  Geist,
  Geist_Mono,
  Bai_Jamjuree,
  Manrope,
} from "next/font/google";

export const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const baiJamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bai-jamjuree",
});

export const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const fontVariables = `${bricolageGrotesque.variable} ${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable} ${dmSerif.variable} ${manrope.variable}`;
