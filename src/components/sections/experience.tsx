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
      "Built an AI-driven precision agriculture platform that improved crop disease detection accuracy by 85%. Integrated thermal imaging, NDVI satellite data, and real-time GPS mapping for precision irrigation and targeted disease treatment.",
    bullets: [],
    stack: ["Swift", "Kotlin", "CoreML", "REST", "AWS"],
  },
  {
    period: "Aurus.ai",
    yearLabel: "MAY 2025 – JUL 2025",
    heading: "Software Engineer Intern",
    highlight:
      "Delivered an enterprise chatbot using LangChain + FAISS to help employees find compliance documents 60% faster.",
    bullets: [],
    stack: ["Python", "LangChain", "FAISS", "Firebase", "RBAC"],
  },
  {
    period: "Centre for Economic and Social Studies",
    yearLabel: "APR 2024 – JUL 2024",
    heading: "Software Engineer Intern",
    highlight:
      "Optimized Spring Boot batches with multithreading (25% faster throughput) and shipped reusable React + REST components that cut reporting bugs by 50%.",
    bullets: [],
    stack: ["Java", "React", "Spring", "REST"],
  },
];

function TechPills({ items }: { items: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cloud/60"
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
      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
        <div className="space-y-2 text-left sm:space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cloud/70 sm:text-base sm:tracking-[0.4em]">
            {item.period}
          </p>
          <h3 className="text-xl font-semibold text-cloud sm:text-2xl lg:text-3xl">
            {item.heading}
          </h3>
        </div>
        <p className="mt-4 text-base text-cloud/90 sm:mt-6 sm:text-xl lg:text-2xl leading-relaxed">{item.highlight}</p>
        {item.bullets.length > 0 && (
          <ul className="mt-6 space-y-3 text-sm sm:mt-8 sm:space-y-4 sm:text-base lg:text-lg text-cloud/80">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cloud/60 flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
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
        <div className="mb-4 text-center sm:mb-12">
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
