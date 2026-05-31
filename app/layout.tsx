import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coaching für Fitness, Gesundheit & Hormone – mit Sasha Clean Fitness",
  description:
    "Mehr Gesundheit. Mehr Performance. Werde die beste Version deiner selbst – mit Sasha Clean Fitness.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${manrope.variable} ${sourceSerif.variable} h-full bg-background antialiased`}>
      <body className="min-h-full bg-background font-sans">{children}</body>
    </html>
  );
}
