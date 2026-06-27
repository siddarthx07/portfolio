"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const FEATURED_STACK = [
  "LangGraph",
  "GPT-4o",
  "Multi-Agent",
  "RAG Memory",
  "FastAPI",
];

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="text-white pb-0"
      style={{
        background: `
          radial-gradient(ellipse 1000px 800px at 70% 25%, rgba(249, 115, 22, 0.18) 0%, transparent 50%),
          #000000
        `,
      }}
    >
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="px-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#f97316]">
                Featured Project
              </p>
              <h2 className="mt-3 text-4xl font-bold text-white md:text-[5.5rem] md:leading-[1.05]">
                Autonomous Campaign Agent
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
                A multi-agent AI system that researches, writes, evaluates, and
                autonomously publishes social campaigns end-to-end.
              </p>
            </div>
          }
        >
          <Image
            src="/campaign-agent.png"
            alt="Autonomous Campaign Agent — published campaign with generated LinkedIn and X copy and a critic quality score"
            height={900}
            width={1400}
            className="mx-auto h-full rounded-2xl object-contain"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Tech stack + link */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pb-16 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FEATURED_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md"
              style={{
                background: "rgba(249, 115, 22, 0.04)",
                border: "1px solid rgba(249, 115, 22, 0.12)",
                color: "rgba(249, 115, 22, 0.6)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/siddarthx07/Autonomous-Ad-Campaign-Agent"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-6 py-2.5 text-sm font-bold text-white backdrop-blur-md transition hover:scale-[1.03]"
          style={{
            background: "rgba(249, 115, 22, 0.3)",
            border: "1px solid rgba(249, 115, 22, 0.5)",
          }}
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}
