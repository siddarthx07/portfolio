"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

type VantaEffectInstance = {
  destroy: () => void;
  pause?: () => void;
  resume?: () => void;
};

const NAV_LINKS = ["About", "Experience", "Projects", "Contact"];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const vantaContainerRef = useRef<HTMLDivElement | null>(null);
  const vantaEffectRef = useRef<VantaEffectInstance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    let mounted = true;
    let observer: IntersectionObserver | null = null;

    const initVanta = async () => {
      if (!vantaContainerRef.current || vantaEffectRef.current) {
        return;
      }

      try {
        const [{ default: VANTA }, THREE] = await Promise.all([
          import("vanta/dist/vanta.clouds.min"),
          import("three"),
        ]);

        if (!mounted || !vantaContainerRef.current) {
          return;
        }

        // Detect mobile/tablet for performance optimizations
        const isMobile = window.innerWidth < 1024;

        const effect = VANTA({
          el: vantaContainerRef.current,
          THREE,
          mouseControls: false, // Disable on mobile
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: isMobile ? 0.7 : 1.0, // Lower scale on mobile
          scaleMobile: 0.7,
          texturePath: "https://cdn.jsdelivr.net/npm/vanta/dist/",
          skyColor: 0x05080f,
          cloudColor: 0x9ca3af,
          cloudShadowColor: 0x0f172a,
          sunColor: 0xfacc15,
          sunGlareColor: 0xf97316,
          speed: isMobile ? 0.4 : 0.6, // Slower on mobile
          // Performance optimizations
          maxDistance: isMobile ? 12.0 : 20.0, // Reduce render distance
        });

        vantaEffectRef.current = effect as VantaEffectInstance;

        // Pause animation when scrolled away (HUGE performance win)
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (vantaEffectRef.current) {
                if (entry.isIntersecting) {
                  vantaEffectRef.current.resume?.();
                } else {
                  vantaEffectRef.current.pause?.();
                }
              }
            });
          },
          { threshold: 0.1 }
        );

        if (vantaContainerRef.current) {
          observer.observe(vantaContainerRef.current);
        }
      } catch (error) {
        console.error("Failed to initialize Vanta clouds", error);
      }
    };

    // Pause when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        vantaEffectRef.current?.pause?.();
      } else {
        vantaEffectRef.current?.resume?.();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    initVanta();

    return () => {
      mounted = false;
      observer?.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      vantaEffectRef.current?.destroy();
      vantaEffectRef.current = null;
    };
  }, []);

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

  return (
    <>
      <main
        id="hero"
        className="relative flex min-h-screen flex-col bg-night text-cloud"
      >
        <div
          ref={vantaContainerRef}
          className="absolute inset-0 z-0 h-full w-full"
          aria-hidden
        />

        <header className="pointer-events-none absolute left-1/2 top-4 z-20 w-full max-w-5xl -translate-x-1/2 px-4 sm:top-6 sm:px-6">
          {/* Desktop Navigation */}
          <nav className="pointer-events-auto hidden items-center justify-center gap-4 rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-6 py-3 backdrop-blur-md sm:flex md:gap-6 md:px-8">
            {NAV_LINKS.map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-[0.35em] text-cloud/70 transition hover:text-cloud md:tracking-[0.35em]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="pointer-events-auto sm:hidden">
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-md"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-cloud transition-all ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-cloud transition-all ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-cloud transition-all ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>

            {mobileMenuOpen && (
              <div className="mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md">
                <div className="flex flex-col gap-1 p-2">
                  {NAV_LINKS.map((label) => (
                    <Link
                      key={label}
                      href={`#${label.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cloud/70 transition hover:bg-white/5 hover:text-cloud"
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
          <p className="text-xl font-semibold uppercase tracking-[0.45em] text-cloud/70">
            Hey I&apos;m
          </p>
          <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-cloud sm:text-7xl lg:text-8xl">
            Siddarth Bandi
          </h1>
          <p className="mt-4 text-2xl font-semibold text-cloud sm:text-3xl">
            I&apos;m a software engineer.
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

        <div
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-night/40 via-transparent to-transparent"
          aria-hidden
        />

        <div className="sr-only">
          <h1>Hello, I&apos;m Siddarth — Software Engineer</h1>
          <p>Building scalable full-stack systems and AI-driven applications.</p>
        </div>
      </main>

      {/* About Section */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
