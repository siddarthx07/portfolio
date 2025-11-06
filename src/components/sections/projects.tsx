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
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const title = titleRef.current;
    const wrapper = container?.parentElement as HTMLElement | null;

    if (!section || !container || !title) return;

    const getViewportWidth = () =>
      wrapper?.clientWidth ?? window.innerWidth;
    const getScrollDistance = () =>
      Math.max(0, container.scrollWidth - getViewportWidth());
    const getTitleOffset = () => {
      const marginBottom =
        parseFloat(window.getComputedStyle(title).marginBottom) || 0;
      const titleRect = title.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      return titleRect.height + (titleRect.top - sectionRect.top) + marginBottom;
    };

    const getStartPosition = () => {
      const baseOffset = getTitleOffset();
      const containerHeight = container.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;
      const centerOffset = Math.max(0, (viewportHeight - containerHeight) / 2);
      const offset = baseOffset - centerOffset;
      const absoluteOffset = Math.abs(offset).toFixed(2);

      if (offset >= 0) {
        return `top+=${absoluteOffset} top`;
      }

      return `top-=${absoluteOffset} top`;
    };

    const scrollTween = gsap.to(container, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: getStartPosition,
        pin: true,
        scrub: 1,
        end: () => `+=${getScrollDistance()}`,
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
      className="relative overflow-x-hidden overflow-y-visible py-12 text-cloud sm:py-16 lg:py-20"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, #f9731633 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, #f9731633 0%, transparent 50%),
          linear-gradient(135deg, #05080f 0%, #0f172a 50%, #9ca3af22 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14" ref={titleRef}>
          <TextGenerateEffect
            words="Projects"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
        </div>

        <div
          ref={containerRef}
          className="flex gap-12 sm:gap-16 lg:gap-20 xl:gap-24 px-[6vw] sm:px-[8vw] lg:px-[9vw]"
        >
          {projects.map((project, index) => {
            const imageClass = "h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl";

            return (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <CardContainer
                  className="inter-var"
                  containerClassName="items-start sm:items-center py-4 sm:py-6 lg:py-10"
                >
                  <CardBody className="group/card relative h-auto w-[28rem] min-w-[28rem] sm:w-[30rem] sm:min-w-[30rem] lg:w-[34rem] lg:min-w-[34rem] xl:w-[38rem] xl:min-w-[38rem] 2xl:w-[40rem] 2xl:min-w-[40rem] rounded-3xl border border-white/10 px-6 py-7 sm:px-8 sm:py-8">
                    <CardItem
                      translateZ="50"
                      className="text-3xl font-semibold text-cloud lg:text-4xl"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-cloud/70 text-base max-w-2xl mt-4 leading-relaxed"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={600}
                        className={imageClass}
                        quality={100}
                      />
                    </CardItem>
                    <div className="flex flex-wrap gap-2.5 mt-8">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm uppercase tracking-[0.25em] text-cloud/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                      {project.links?.github && (
                        <CardItem
                          translateZ={20}
                          as="a"
                          href={project.links.github}
                          target="_blank"
                          className="px-6 py-3 rounded-xl text-sm font-normal text-cloud hover:text-white transition"
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
                          className="px-6 py-3 rounded-xl bg-white/10 text-cloud text-sm font-bold hover:bg-white/20 transition"
                        >
                          Live Demo
                        </CardItem>
                      ) : (
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-6 py-3 rounded-xl bg-white/10 text-cloud text-sm font-bold hover:bg-white/20 transition cursor-not-allowed"
                        >
                          Live Demo
                        </CardItem>
                      )}
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
