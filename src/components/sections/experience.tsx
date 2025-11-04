"use client";

import { LightboxImage } from "@/components/ui/lightbox-image";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

type ExperienceEntry = {
  period: string;
  yearLabel: string;
  heading: string;
  highlight: string;
  bullets: string[];
  stack: string[];
  media?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
};

const experience: ExperienceEntry[] = [
  {
    period: "Jan 2025 – Present · Virginia Tech",
    yearLabel: "2025",
    heading: "Research Assistant · Software Engineering",
    highlight:
      "Orchestrating a weather-aware farm management platform that reduces manual planning errors by 20%.",
    bullets: [
      "Built REST APIs processing 500+ cross-platform requests per day across Swift and Kotlin clients.",
      "Maintained sub-200ms CoreML inference for 43+ crop disease classes while shipping secure backend services.",
    ],
    stack: ["Swift", "Kotlin", "CoreML", "REST", "AWS"],
  },
  {
    period: "May 2025 – Jul 2025 · Aurus.ai",
    yearLabel: "2025",
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
    period: "Apr 2024 – Jul 2024 · Centre for Economic and Social Studies",
    yearLabel: "2024",
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

function MediaGallery({
  media,
}: {
  media?: ExperienceEntry["media"];
}) {
  if (!media || media.length === 0) {
    return (
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent text-center text-xs uppercase tracking-[0.3em] text-cloud/50 sm:h-56"
          >
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] tracking-[0.4em] text-cloud/60">
              WIP
            </span>
            <p className="px-6 text-[11px] font-semibold leading-relaxed text-cloud/60">
              Screenshot coming soon
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (media.length === 1) {
    const item = media[0];
    return (
      <div className="mt-8">
        <LightboxImage
          src={item.src}
          alt={item.alt}
          width={item.width ?? 1200}
          height={item.height ?? 750}
          dialogLabel={`Expand ${item.alt}`}
        />
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {media.map((item) => (
        <LightboxImage
          key={item.src}
          src={item.src}
          alt={item.alt}
          width={item.width ?? 1200}
          height={item.height ?? 750}
          dialogLabel={`Expand ${item.alt}`}
        />
      ))}
    </div>
  );
}

export default function Experience() {
  const timelineData: TimelineEntry[] = experience.map((item) => ({
    title: item.yearLabel,
    content: (
      <div className="mt-6 min-h-[420px] rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur md:min-h-[520px]">
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
        <MediaGallery media={item.media} />
      </div>
    ),
  }));

  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 text-cloud sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-3 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-cloud/60">
            Experience
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Work that blends intelligence with usability
          </h2>
          <p className="text-sm text-cloud/60 sm:text-base">
            From research labs to AI startups, here&apos;s how I built
            human-centered systems that scale.
          </p>
        </div>

        <div className="relative w-full">
          <Timeline data={timelineData} className="bg-transparent md:px-6" />
        </div>
      </div>
    </section>
  );
}
