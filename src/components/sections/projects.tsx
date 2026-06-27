"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { projects, type Project } from "@/data/projects";
import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      {!project.nda && project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-5 py-2 text-sm font-normal text-white transition hover:text-[#f97316]"
        >
          GitHub →
        </a>
      )}
      {!project.nda && project.links?.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-5 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:scale-[1.03]"
          style={{
            background: "rgba(249, 115, 22, 0.3)",
            border: "1px solid rgba(249, 115, 22, 0.5)",
          }}
        >
          Live Demo
        </a>
      )}
      {project.nda && (
        <p
          className="rounded-xl px-5 py-2 text-sm font-normal italic text-white backdrop-blur-md"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          Code &amp; demo unavailable due to NDA
        </p>
      )}
    </div>
  );
}

function SkillPills({ skills }: { skills: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md"
          style={{
            background: "rgba(249, 115, 22, 0.04)",
            border: "1px solid rgba(249, 115, 22, 0.12)",
            color: "rgba(249, 115, 22, 0.6)",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

const PROJECTS_HEADER_OFFSET = "10.5rem";

function DesktopCard({
  project,
  index,
  total,
  cardRef,
}: {
  project: Project;
  index: number;
  total: number;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      className="sticky flex items-center justify-center"
      style={{
        top: PROJECTS_HEADER_OFFSET,
        height: `calc(100vh - ${PROJECTS_HEADER_OFFSET})`,
      }}
    >
      <div
        ref={cardRef}
        data-index={index}
        style={{ transformOrigin: "top center", willChange: "transform" }}
        className="relative mx-auto flex w-[90%] max-w-6xl overflow-hidden rounded-[2rem]"
      >
        {/* Glass surface */}
        <div
          className="absolute inset-0 -z-10 rounded-[2rem]"
          style={{
            background: "rgb(18, 18, 18)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 24px 60px 0 rgba(249, 115, 22, 0.12)",
          }}
        />
        {/* Orange accent glow on the image side (right) */}
        <div
          className="pointer-events-none absolute -z-10 right-0 top-0 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "rgba(249, 115, 22, 0.18)" }}
          aria-hidden="true"
        />

        <div className="flex h-[32rem] w-full flex-col lg:flex-row">
          {/* Text side (left) */}
          <div className="flex h-1/2 w-full flex-col justify-center p-7 sm:p-9 lg:h-full lg:w-[45%] lg:p-12">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tracking-[0.3em] text-[#f97316]">
                {cardNumber}
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-[#f97316] to-transparent" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                {`/ ${String(total).padStart(2, "0")}`}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {project.description}
            </p>
            <SkillPills skills={project.skills} />
            <ProjectLinks project={project} />
          </div>

          {/* Image side (right) */}
          <div className="relative h-1/2 w-full overflow-hidden lg:h-full lg:w-[55%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-contain p-4 lg:p-6"
              quality={75}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardEls = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const total = projects.length;
    // Release title near the end of the last card's scroll
    const titleReleaseProgress = (total - 0.35) / total;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const scrollable = container.offsetHeight - vh;
      if (scrollable <= 0) return;

      const globalProgress = clamp(
        (window.scrollY - containerTop) / scrollable,
        0,
        1,
      );

      const title = titleRef.current;
      if (title) {
        title.style.position =
          globalProgress >= titleReleaseProgress ? "relative" : "sticky";
      }

      cardEls.current.forEach((card, i) => {
        if (!card) return;

        // Covered cards shrink as the next card slides over them.
        const start = i / total;
        const targetScale = 1 - (total - i) * 0.04;
        const coverProgress = clamp((globalProgress - start) / (1 - start), 0, 1);
        const scale = 1 - (1 - targetScale) * coverProgress;
        const offsetY = i * 28;
        card.style.transform = `translateY(${offsetY}px) scale(${scale})`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Desktop: Sticky Stack of Cards */}
      <div
        id="projects"
        className="relative hidden md:block"
        style={{
          background: `
            radial-gradient(ellipse 1000px 800px at 70% 30%, rgba(249, 115, 22, 0.16) 0%, transparent 50%),
            #000000
          `,
        }}
      >
        {/* Sticky boundary: title unsticks once card stack scroll is done */}
        <div className="relative">
          <div
            ref={titleRef}
            className="sticky top-0 z-30 bg-black px-6 pb-5 pt-16 text-white lg:px-8"
          >
            <div className="mx-auto max-w-7xl text-center">
              <TextGenerateEffect
                words="Projects"
                className="text-4xl sm:text-5xl lg:text-6xl"
              />
              <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
            </div>
          </div>

          {/* Stacking container */}
          <div ref={containerRef} className="relative">
            {projects.map((project, index) => (
              <DesktopCard
                key={index}
                project={project}
                index={index}
                total={projects.length}
                cardRef={(el) => {
                  cardEls.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>

        {/* Outside sticky boundary — title scrolls away before this */}
        <div className="h-[15vh]" aria-hidden="true" />
      </div>

      {/* Mobile: Vertical Stack */}
      <section
        id="projects-mobile"
        className="relative block overflow-hidden py-12 text-white md:hidden"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 70% 55%, rgba(249, 115, 22, 0.20) 0%, transparent 50%),
            #000000
          `,
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-8 text-center">
            <TextGenerateEffect words="Projects" className="text-4xl sm:text-5xl" />
            <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
          </div>

          {/* Vertical Stack of Cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div
                    className="group/card relative h-auto w-full rounded-3xl p-5 backdrop-blur-xl transition duration-300 hover:scale-[1.02]"
                    style={{
                      background: "rgb(18, 18, 18)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 8px 32px 0 rgba(249, 115, 22, 0.1)",
                    }}
                  >
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white">
                      {project.description}
                    </p>
                    <div className="relative mt-5 h-60 w-full overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 28rem"
                        className="object-contain"
                        quality={75}
                        unoptimized
                      />
                    </div>
                    <SkillPills skills={project.skills} />
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
