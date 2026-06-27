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
    period: "Virginia Tech – Tidewater AREC",
    yearLabel: "MAR 2025 – MAY 2026",
    heading: "Software Engineer",
    highlight:
      "Built a full-stack AI agriculture platform with a RAG pipeline (GPT-4o, LangChain, vector embeddings) at 90%+ relevance and sub-500ms responses, a YOLOv8/PyTorch disease classifier at 85% accuracy across 20k+ images, and a Spring Boot REST API deployed on AWS with GitHub Actions CI/CD.",
    bullets: [],
    stack: ["Python", "LangChain", "GPT-4o", "PyTorch", "AWS"],
  },
  {
    period: "Aurus.ai",
    yearLabel: "MAY 2025 – JUL 2025",
    heading: "Software Engineer Intern",
    highlight:
      "Built a secure enterprise RAG chatbot (FastAPI, LangChain, LangGraph, FAISS) for real-time PDF Q&A, cutting document search time by 60%. Integrated a Scikit-learn query classifier with RBAC and audit logging, blocking 92% of unauthorized access attempts. Deployed LLM services on Azure OpenAI and AWS Bedrock, using Databricks to orchestrate data pipelines and benchmark model quality.",
    bullets: [],
    stack: ["Python", "LangChain", "FastAPI", "Azure OpenAI", "AWS Bedrock"],
  },
  {
    period: "Marine Corps Community Services",
    yearLabel: "SEP 2024 – FEB 2025",
    heading: "Software Engineer",
    highlight:
      "Developed and integrated 15+ REST APIs into a fraud detection platform, provisioned ML model artifact infrastructure on AWS achieving a 30% reduction in data retrieval time, and implemented secure JWT-based authentication with sub-500ms OTP delivery.",
    bullets: [],
    stack: ["React", "Node.js", "MongoDB", "AWS", "Jenkins"],
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
          className="rounded-full backdrop-blur-md px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold"
          style={{
            background: 'rgba(249, 115, 22, 0.04)',
            border: '1px solid rgba(249, 115, 22, 0.12)',
            color: 'rgba(249, 115, 22, 0.6)',
          }}
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
      <div 
        className="mt-6 rounded-3xl backdrop-blur-xl p-6 sm:p-10 lg:p-12 transition duration-300 hover:transform hover:scale-[1.02]"
        style={{
          background: 'rgba(30, 30, 30, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
        }}
      >
        <div className="space-y-2 text-left sm:space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white sm:text-base sm:tracking-[0.4em]">
            {item.period}
          </p>
          <h3 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
            {item.heading}
          </h3>
        </div>
        <p className="mt-4 text-base text-white sm:mt-6 sm:text-xl lg:text-2xl leading-relaxed">{item.highlight}</p>
        {item.bullets.length > 0 && (
          <ul className="mt-6 space-y-3 text-sm sm:mt-8 sm:space-y-4 sm:text-base lg:text-lg text-white">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#f97316] flex-shrink-0" />
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
      className="relative py-24 text-white sm:py-32"
      style={{
        background: `
          radial-gradient(ellipse 1000px 800px at 75% 30%, rgba(249, 115, 22, 0.18) 0%, transparent 50%),
          #000000
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
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
        </div>

        <div className="relative w-full">
          <Timeline data={timelineData} className="bg-transparent md:px-6" />
        </div>
      </div>
    </section>
  );
}
