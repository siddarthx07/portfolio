"use client";

import Link from "next/link";

import { projects } from "@/data/projects";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-slate-950 py-24 text-cloud sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <TextGenerateEffect
            words="Projects"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <CardContainer
              key={project.title}
              className="w-full"
              containerClassName="!py-0"
            >
              <CardBody className="group/card relative h-auto w-auto rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left shadow-[0_25px_70px_-30px_rgba(15,23,42,0.75)] backdrop-blur">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-semibold text-cloud sm:text-3xl"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 text-sm leading-relaxed text-cloud/70 sm:text-base"
                >
                  {project.description}
                </CardItem>

                <CardItem translateZ="100" className="mt-4 w-full">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={
                        typeof project.image === "string"
                          ? project.image
                          : project.image.src
                      }
                      height="1000"
                      width="1000"
                      alt={`${project.title} preview`}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  ) : (
                    <div className="flex h-60 w-full items-center justify-center rounded-xl bg-night/40 text-sm uppercase tracking-[0.3em] text-cloud/30">
                      Preview Coming Soon
                    </div>
                  )}
                </CardItem>

                <CardItem translateZ="30" className="mt-20">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardItem>

                <div className="flex items-center justify-between mt-20">
                  <CardItem translateZ={20} as={Link} href={project.links?.github || "#"} target={project.links?.github ? "_blank" : undefined} rel={project.links?.github ? "noopener noreferrer" : undefined} className={project.links?.github ? "rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cloud transition hover:border-white/40 hover:text-white" : "cursor-not-allowed rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cloud/40"}>
                    {project.links?.github ? "GitHub ↗" : "GitHub · Coming Soon"}
                  </CardItem>
                  <CardItem translateZ={20} as={Link} href={project.links?.live || "#"} target={project.links?.live ? "_blank" : undefined} rel={project.links?.live ? "noopener noreferrer" : undefined} className={project.links?.live ? "rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cloud transition hover:border-white/40 hover:text-white" : "cursor-not-allowed rounded-full border border-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cloud/40"}>
                    {project.links?.live ? "Live Demo ↗" : "Live Demo · Coming Soon"}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
