"use client";

import { useEffect, useRef } from "react";

type VantaEffectInstance = {
  destroy: () => void;
  pause?: () => void;
  resume?: () => void;
};

export default function BackgroundOnly() {
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
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: isMobile ? 0.7 : 1.0,
          scaleMobile: 1.0,
          texturePath: "https://cdn.jsdelivr.net/npm/vanta/dist/",
          skyColor: 0x05080f,
          cloudColor: 0x9ca3af,
          cloudShadowColor: 0x0f172a,
          sunColor: 0xfacc15,
          sunGlareColor: 0xf97316,
          speed: isMobile ? 0.4 : 0.6,
          // Cloud density and uniformity controls
          quantity: isMobile ? 2 : 3, // Reduced from default (~8) for less density
          resolution: 0.5, // Lower resolution for simpler clouds
          yOffset: 0.4, // Position clouds at the bottom (0 = center, negative = top, positive = bottom)
          spacing: 25, // Increased spacing between clouds for uniform distribution
          flatness: 0.8, // Higher value (0-1) makes clouds flatter/more horizontal
        });

        vantaEffectRef.current = effect as VantaEffectInstance;
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
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      vantaEffectRef.current?.destroy();
      vantaEffectRef.current = null;
    };
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-night">
      <div
        ref={vantaContainerRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      />
    </main>
  );
}

