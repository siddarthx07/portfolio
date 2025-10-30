import { HeroCanvas } from "@/components/hero-canvas";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-night">
      <HeroCanvas className="h-dvh w-full" />

      {/* Accessible heading content kept for semantics without duplicating visible hero copy */}
      <div className="sr-only">
        <h1>Hello, I&apos;m Siddarth — Software Engineer</h1>
        <p>Building scalable full-stack systems and AI-driven applications.</p>
      </div>
    </main>
  );
}
