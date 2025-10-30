"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

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
  return (
    <main
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-night text-cloud"
    >
      <header className="pointer-events-none absolute left-1/2 top-6 z-20 w-full max-w-5xl -translate-x-1/2 px-6">
        <nav className="pointer-events-auto flex items-center justify-center gap-6 rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-8 py-3 backdrop-blur-md">
          {["About", "Experience", "Projects", "Skills", "Contact"].map(
            (label) => (
              <Link
                key={label}
                href="#"
                className="text-xs font-semibold uppercase tracking-[0.35em] text-cloud/70 transition hover:text-cloud"
              >
                {label}
              </Link>
            ),
          )}
        </nav>
      </header>

      <Spline scene="https://prod.spline.design/yi0OeS3r1nXaVKWH/scene.splinecode" />

      <div className="pointer-events-none absolute inset-x-0 bottom-16 flex justify-center">
        <div className="pointer-events-auto flex flex-col items-center gap-3 text-xs uppercase tracking-[0.4em] text-cloud/70">
          <span className="text-cloud/60">Scroll Down</span>
          <div className="flex h-14 w-8 items-start justify-center rounded-full border border-white/20 p-2">
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
