"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Calculate the total scroll distance needed
    const scrollWidth = container.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(container, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-24 text-cloud sm:py-32"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, #f9731633 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, #f9731633 0%, transparent 50%),
          linear-gradient(135deg, #05080f 0%, #0f172a 50%, #9ca3af22 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <TextGenerateEffect
            words="Projects"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
        </div>

        <div ref={containerRef} className="flex gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center">
              <CardContainer className="inter-var">
                <CardBody className="group/card relative h-auto w-[30rem] min-w-[30rem] rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.75)]">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-semibold text-cloud sm:text-3xl"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-cloud/70 text-sm max-w-sm mt-2 leading-relaxed"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={600}
                      className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      quality={100}
                    />
                  </CardItem>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    {project.links?.github && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.links.github}
                        target="_blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-cloud hover:text-white transition"
                      >
                        GitHub →
                      </CardItem>
                    )}
                    {project.links?.live ? (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.links.live}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-white/10 text-cloud text-xs font-bold hover:bg-white/20 transition"
                      >
                        Live Demo
                      </CardItem>
                    ) : (
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white/10 text-cloud text-xs font-bold hover:bg-white/20 transition cursor-not-allowed"
                      >
                        Live Demo
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
