import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Siddarth Bandi | Software Engineer Portfolio",
  description:
    "Siddarth Bandi builds scalable full-stack systems and AI-driven applications.",
  metadataBase: new URL("https://siddarthbandi.dev"),
  openGraph: {
    title: "Siddarth Bandi | Software Engineer Portfolio",
    description:
      "Portfolio showcasing immersive 3D interfaces, scalable systems, and AI-driven experiences.",
    url: "https://siddarthbandi.dev",
    siteName: "Siddarth Bandi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-night text-cloud`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
