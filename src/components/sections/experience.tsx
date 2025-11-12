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
    heading: "Software Engineering Intern",
    highlight:
      "Optimized Java batch processing (–25% time) and designed a reusable React library that cut reporting bugs by half.",
    bullets: [],
    stack: ["Java", "React", "Spring", "PostgreSQL"],
  },
];

function TechPills({ items }: { items: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm sm:text-base uppercase tracking-[0.25em] text-cloud/60"
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
      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/50 p-10 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur">
        <div className="space-y-3 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cloud/60 sm:text-base">
            {item.period}
          </p>
          <h3 className="text-2xl font-semibold text-cloud sm:text-3xl lg:text-4xl">
            {item.heading}
          </h3>
        </div>
        <p className="mt-6 text-xl text-cloud sm:text-2xl leading-relaxed">{item.highlight}</p>
        {item.bullets.length > 0 && (
          <ul className="mt-8 space-y-4 text-base sm:text-lg text-cloud/70">
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
