"use client";

import Image from "next/image";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CodeScroll } from "@/components/ui/code-scroll";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-cloud sm:py-48 lg:py-64"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, #f9731633 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, #f9731633 0%, transparent 50%),
          linear-gradient(135deg, #05080f 0%, #0f172a 50%, #9ca3af22 100%)
        `,
      }}
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
        <BentoGrid className="mx-auto max-w-7xl">
          {/* Card 1: Who Am I - Small, Top Left */}
          <BentoGridItem
            title={
              <div className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                Who Am I
              </div>
            }
            description={
              <p className="text-center text-base leading-relaxed lg:text-lg">
                I&apos;m a Software Engineer and graduate student at Virginia
                Tech, passionate about designing scalable, reliable systems. Built
                fraud-detection systems processing 100K+ transactions and AI
                dashboards serving 50+ users.
              </p>
            }
            header={
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-[2.75rem] border border-white/10 transition-transform duration-500 hover:scale-[1.05] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/halftone_1762229259.png"
                  alt="Portrait of Siddarth Bandi in halftone style"
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 16rem"
                  className="object-cover object-center"
                  priority
                  quality={100}
                  unoptimized
                />
              </div>
            }
            className="md:col-span-1 lg:col-span-2"
          />

          {/* Card 2: What I Do - Large, Top Right */}
          <BentoGridItem
            title={
              <div className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                What I Do
              </div>
            }
            description={
              <p className="text-center text-base leading-relaxed md:text-lg lg:text-lg">
                I build full-stack and AI-driven applications that combine backend
                efficiency with intuitive design — from fraud-detection systems and
                intelligent dashboards to cross-platform apps powered by cloud
                infrastructure.
              </p>
            }
            header={<CodeScroll />}
            className="md:col-span-2 lg:col-span-3"
          />

        </BentoGrid>
      </div>
    </section>
  );
}
