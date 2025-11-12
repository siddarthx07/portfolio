"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, lazy, Suspense } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DesktopBanner from "@/components/ui/desktop-banner";

// Lazy load heavy section components
const About = lazy(() => import("@/components/sections/about"));
const Experience = lazy(() => import("@/components/sections/experience"));
const FeaturedProject = lazy(() => import("@/components/sections/featured-project"));
const Projects = lazy(() => import("@/components/sections/projects"));
const Contact = lazy(() => import("@/components/sections/contact"));

const NAV_LINKS = ["About", "Experience", "Projects", "Contact"];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const roleWords = [
    {
      text: "I'm",
      className: "text-white",
    },
    {
      text: "a",
      className: "text-white",
    },
    {
      text: "software",
      className: "text-white",
    },
    {
      text: "engineer.",
      className: "text-white",
    },
  ];

  return (
    <>
      <main
        id="hero"
        className="relative flex min-h-screen flex-col bg-black text-white"
      >
        {/* Static Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          {/* Mobile Background */}
          <Image
            src="/moblie-cloud2.png"
            alt=""
            fill
            priority
            quality={100}
            unoptimized
            className="object-cover md:hidden"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            aria-hidden="true"
          />
          {/* Mobile Background Overlay - Darkens bright areas and improves text readability */}
          <div 
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-transparent md:hidden"
            aria-hidden="true"
          />
          
          {/* Desktop Background */}
          <Image
            src="/main-cloud7.png"
            alt=""
            fill
            priority
            quality={100}
            unoptimized
            className="hidden object-cover md:block"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            aria-hidden="true"
          />
          {/* Desktop Background Overlay - Subtle darkening */}
          <div 
            className="absolute inset-0 z-[1] hidden bg-gradient-to-b from-black/30 via-black/20 to-transparent md:block"
            aria-hidden="true"
          />
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 sm:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <header className="pointer-events-none absolute left-1/2 top-4 z-40 w-full max-w-5xl -translate-x-1/2 px-4 sm:top-6 sm:px-6">
          {/* Desktop Navigation - Glass Effect */}
          <nav 
            className="pointer-events-auto hidden items-center justify-center gap-5 rounded-full backdrop-blur-xl sm:flex md:gap-10 md:px-5"
            style={{
              background: 'rgba(30, 30, 30, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 16px'
            }}
          >
            {NAV_LINKS.map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:text-shadow-[0_0_8px_rgba(249,115,22,0.5)] md:tracking-[0.35em]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation - Glass Effect */}
          <div className="pointer-events-auto sm:hidden">
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-xl"
              style={{
                background: 'rgba(30, 30, 30, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-white transition-all ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-white transition-all ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-white transition-all ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>

            {mobileMenuOpen && (
              <div 
                className="mt-3 rounded-2xl backdrop-blur-xl"
                style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex flex-col gap-1 p-2">
                  {NAV_LINKS.map((label) => (
                    <Link
                      key={label}
                      href={`#${label.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="text-xl font-semibold uppercase tracking-[0.45em] text-white">
            Hey I&apos;m
          </p>
          <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Siddarth Bandi
          </h1>
          <div className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            <TypewriterEffectSmooth
              words={roleWords}
              className=""
              cursorClassName="bg-[#f97316] h-6 sm:h-8"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center sm:bottom-16">
          <div className="pointer-events-auto flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white sm:gap-3 sm:tracking-[0.4em]">
            <div 
              className="flex h-12 w-7 items-start justify-center rounded-full p-2 sm:h-14 sm:w-8 backdrop-blur-md"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span className="h-2 w-1.5 animate-mouseScroll rounded-full bg-[#f97316]" />
            </div>
          </div>
        </div>

        {/* Additional subtle vignette effect */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-radial from-transparent via-transparent to-black/20"
          aria-hidden="true"
        />

        <div className="sr-only">
          <h1>Hello, I&apos;m Siddarth — Software Engineer</h1>
          <p>Building scalable full-stack systems and AI-driven applications.</p>
        </div>
      </main>

      {/* Lazy-loaded Sections with Intersection Observer */}
      <Suspense
        fallback={
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cloud/20 border-t-cloud/60" />
          </div>
        }
      >
        <About />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Contact />
      </Suspense>

      {/* Desktop recommendation banner for mobile users */}
      <DesktopBanner />
    </>
  );
}
