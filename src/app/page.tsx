"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const Spline = dynamic(
  () =>
    import("@splinetool/react-spline").then((mod) => {
      return mod.default;
    }),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen flex-1 items-center justify-center bg-night">
        <span className="h-6 w-6 animate-ping rounded-full bg-cloud/70" />
      </div>
    ),
  },
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-night text-cloud"
    >
      <header className="pointer-events-none absolute left-1/2 top-4 z-20 w-full max-w-5xl -translate-x-1/2 px-4 sm:top-6 sm:px-6">
        {/* Desktop Navigation */}
        <nav className="pointer-events-auto hidden items-center justify-center gap-4 rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-6 py-3 backdrop-blur-md sm:flex md:gap-6 md:px-8">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (label) => (
              <Link
                key={label}
                href="#"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-cloud/70 transition hover:text-cloud md:tracking-[0.35em]"
              >
                {label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="pointer-events-auto sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-md"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 bg-cloud transition-all ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-cloud transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-cloud transition-all ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md">
              <div className="flex flex-col gap-1 p-2">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (label) => (
                    <Link
                      key={label}
                      href="#"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cloud/70 transition hover:bg-white/5 hover:text-cloud"
                    >
                      {label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spline 3D Scene - Hidden on mobile for better performance */}
      <div className="absolute inset-0 hidden h-full w-full md:block">
        <Spline scene="https://prod.spline.design/yi0OeS3r1nXaVKWH/scene.splinecode" />
      </div>

      {/* Mobile gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-night via-night/95 to-night md:hidden" />

      {/* Mobile hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center md:hidden">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-cloud">
          Siddarth Bandi
        </h1>
        <p className="mb-2 text-lg font-medium text-cloud/90">
          Software Engineer
        </p>
        <p className="max-w-md text-sm leading-relaxed text-cloud/70">
          Building scalable full-stack systems and AI-driven applications
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center sm:bottom-16">
        <div className="pointer-events-auto flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-cloud/70 sm:gap-3 sm:tracking-[0.4em]">
          <span className="hidden text-cloud/60 sm:inline">Scroll Down</span>
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 p-2 sm:h-14 sm:w-8">
            <span className="h-2 w-1.5 animate-mouseScroll rounded-full bg-cloud/80" />
          </div>
        </div>
      </div>

      <div className="sr-only">
        <h1>Hello, I&apos;m Siddarth — Software Engineer</h1>
        <p>Building scalable full-stack systems and AI-driven applications.</p>
      </div>
    </main>
  );
}
