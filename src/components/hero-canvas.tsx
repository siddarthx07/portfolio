"use client";

import dynamic from "next/dynamic";

type HeroCanvasProps = {
  className?: string;
};

const Spline = dynamic(
  () =>
    import("@splinetool/react-spline").then((mod) => {
      return mod.default;
    }),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-full w-full items-center justify-center bg-night/40"
        aria-hidden
      >
        <span className="h-6 w-6 animate-ping rounded-full bg-[rgba(255,120,246,0.65)]" />
      </div>
    ),
  },
);

export function HeroCanvas({ className }: HeroCanvasProps) {
  return (
    <div className={className}>
      <Spline
        scene="https://prod.spline.design/yi0OeS3r1nXaVKWH/scene.splinecode"
        aria-label="Liquid glass hero sculpture reacting in 3D"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
