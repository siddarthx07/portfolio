import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
    "Siddarth Bandi builds scalable full-stack systems and AI-driven applications. Computer Science graduate student at Virginia Tech specializing in backend systems, RESTful APIs, and AI-powered software.",
  keywords: [
    "Siddarth Bandi",
    "Software Engineer",
    "Full Stack Developer",
    "Virginia Tech",
    "Computer Science",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Java",
    "REST API",
    "AI Applications",
    "LangChain",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Siddarth Bandi" }],
  creator: "Siddarth Bandi",
  metadataBase: new URL("https://siddarthbandi.vercel.app"),
  alternates: {
    canonical: "https://siddarthbandi.vercel.app",
  },
  openGraph: {
    title: "Siddarth Bandi | Software Engineer Portfolio",
    description:
      "Portfolio highlighting full-stack engineering, scalable systems, and AI-driven experiences.",
    url: "https://siddarthbandi.vercel.app",
    siteName: "Siddarth Bandi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://siddarthbandi.vercel.app/og-card.png",
        width: 1200,
        height: 630,
        alt: "Siddarth Bandi portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddarth Bandi | Software Engineer Portfolio",
    description:
      "Software Engineer building scalable full-stack systems and AI-driven applications.",
    creator: "@siddarthbandi",
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
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Siddarth Bandi",
      givenName: "Siddarth",
      familyName: "Bandi",
      url: "https://siddarthbandi.vercel.app",
      image: "https://siddarthbandi.vercel.app/halftone_1762229259.png",
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Virginia Tech",
        sameAs: "https://www.vt.edu",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Virginia Tech",
          sameAs: "https://www.vt.edu",
        },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "Master's Degree",
        about: "Computer Science",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Virginia Tech",
        },
        startDate: "2024",
        endDate: "2026",
      },
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Java",
        "REST APIs",
        "LangChain",
        "RAG",
        "AI Applications",
        "AWS",
        "Firebase",
        "Spring Boot",
        "Node.js",
      ],
      sameAs: [
        "https://github.com/siddarthx07",
        "https://www.linkedin.com/in/siddarthbandi/",
      ],
      email: "siddarthbandi2025@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Blacksburg",
        addressRegion: "VA",
        addressCountry: "US",
      },
      seeks: {
        "@type": "JobPosting",
        jobTitle: "Software Engineer",
        employmentType: "FULL_TIME",
        jobStartDate: "2026-05",
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
        },
      },
    }),
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
