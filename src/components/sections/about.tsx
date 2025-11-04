"use client";

import Image from "next/image";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

const LightBulbIcon = () => (
  <svg
    className="h-10 w-10 text-cloud/70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    className="h-8 w-8 text-cloud/70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-cloud sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <TextGenerateEffect
            words="About Me"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mx-auto max-w-6xl">
          {/* Card 1: Who Am I - Small, Top Left */}
          <BentoGridItem
            title={
              <div className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl">
                Who Am I
              </div>
            }
            description={
              <p className="text-center text-base leading-relaxed">
                I&apos;m a Software Engineer and graduate student at Virginia
                Tech, passionate about designing scalable, reliable systems that
                connect data, intelligence, and user experience.
              </p>
            }
            header={
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-[2.75rem] border border-white/10 transition-transform duration-500 hover:scale-[1.05] sm:h-52 sm:w-52">
                <Image
                  src="/halftone_1762229259.png"
                  alt="Portrait of Siddarth Bandi in halftone style"
                  fill
                  sizes="(min-width: 640px) 13rem, 12rem"
                  className="object-cover object-center"
                  priority
                />
              </div>
            }
            className="md:col-span-1"
          />

          {/* Card 2: What I Do - Large, Top Right */}
          <BentoGridItem
            title={
              <div className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                What I Do
              </div>
            }
            description={
              <p className="text-base leading-relaxed md:text-lg">
                I build full-stack and AI-driven applications that combine backend
                efficiency with intuitive design — from fraud-detection systems and
                intelligent dashboards to cross-platform apps powered by cloud
                infrastructure.
              </p>
            }
            header={
              <TextRevealCard>
                <div className="flex h-20 items-center justify-center">
                  <LightBulbIcon />
                </div>
              </TextRevealCard>
            }
            className="md:col-span-2"
          />

          {/* Card 3: What I Value - Small, Bottom Left */}
          <BentoGridItem
            title={
              <div className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                What I Value
              </div>
            }
            description={
              <p className="text-base leading-relaxed">
                I focus on creating software that is{" "}
                <span className="font-semibold text-cloud">robust</span>,{" "}
                <span className="font-semibold text-cloud">fast</span>, and{" "}
                <span className="font-semibold text-cloud">purposeful</span> —
                engineered for clarity, performance, and real-world impact.
              </p>
            }
            header={
              <EvervaultCard>
                <div className="flex h-20 items-center justify-center">
                  <StarIcon />
                </div>
              </EvervaultCard>
            }
            className="md:col-span-1"
          />

          {/* Card 4: What I'm Doing Now - Large, Bottom Right */}
          <BentoGridItem
            title={
              <div className="mb-2 flex items-center gap-2 text-2xl font-bold tracking-tight md:text-3xl">
                What I&apos;m Doing Now
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
              </div>
            }
            description={
              <p className="text-base leading-relaxed md:text-lg">
                At Virginia Tech, I&apos;m advancing work in applied AI and
                software systems, developing cloud-based tools that integrate
                computer vision and deep learning for agriculture and
                sustainability.
              </p>
            }
            header={
              <CardHoverEffect>
                <div className="h-20" />
              </CardHoverEffect>
            }
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
