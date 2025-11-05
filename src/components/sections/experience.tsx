"use client";

import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

type ExperienceEntry = {
  period: string;
  yearLabel: string;
  heading: string;
  highlight: string;
  bullets: string[];
  stack: string[];
};

const experience: ExperienceEntry[] = [
  {
    period: "Virginia Tech",
    yearLabel: "JAN 2025 – PRESENT",
    heading: "Research Assistant · Software Engineering",
    highlight:
      "Orchestrated a precision agriculture platform that reduces crop stress detection errors by 85% through AI-powered disease identification and thermal imaging.",
    bullets: [
      "Real-time satellite monitoring of 10m-resolution NDVI data across unlimited field boundaries for precision irrigation management",
      "43+ disease classes detected across 8 crop types with real-time GPS mapping and treatment recommendations",
    ],
    stack: ["Swift", "Kotlin", "CoreML", "REST", "AWS"],
  },
  {
    period: "Aurus.ai",
    yearLabel: "MAY 2025 – JUL 2025",
    heading: "Software Engineer Intern",
    highlight:
      "Delivered a compliance-ready enterprise chatbot that cut PDF search time for finance teams by 60%.",
    bullets: [
      "Integrated LangChain + FAISS pipelines with RBAC and audit logging for zero data policy violations.",
      "Scaled Firebase ingestion to 1,000+ documents while sustaining low-latency responses for concurrent teams.",
    ],
    stack: ["Python", "LangChain", "FAISS", "Firebase", "RBAC"],
  },
  {
    period: "Centre for Economic and Social Studies",
    yearLabel: "APR 2024 – JUL 2024",
    heading: "Software Engineering Intern",
    highlight:
      "Modernized research workflows with faster batch processing and reusable UI patterns.",
    bullets: [
      "Optimized Java workflows with multithreading to accelerate data processing by 25%.",
      "Delivered React component library that cut reporting defects by 50%.",
    ],
    stack: ["Java", "React", "Spring", "PostgreSQL"],
  },
];

function TechPills({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  const timelineData: TimelineEntry[] = experience.map((item) => ({
    title: item.yearLabel,
    content: (
      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
        <div className="space-y-2 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cloud/60 sm:text-sm">
            {item.period}
          </p>
          <h3 className="text-xl font-semibold text-cloud sm:text-2xl">
            {item.heading}
          </h3>
        </div>
        <p className="mt-4 text-lg font-semibold text-cloud">{item.highlight}</p>
        <ul className="mt-5 space-y-2 text-sm text-cloud/70">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cloud/60" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <TechPills items={item.stack} />
      </div>
    ),
  }));

  return (
    <section
      id="experience"
      className="relative py-24 text-cloud sm:py-32"
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
            words="Experience"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
        </div>

        <div className="relative w-full">
          <Timeline data={timelineData} className="bg-transparent md:px-6" />
        </div>
      </div>
    </section>
  );
}
