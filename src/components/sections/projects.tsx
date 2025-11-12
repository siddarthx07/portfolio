"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { projects } from "@/data/projects";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;

    if (!wrapper || !container) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate when section is in view
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return;
      }
      
      // Calculate scroll progress within the wrapper
      const scrollStart = 0;
      const scrollEnd = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollEnd));
      setScrollProgress(progress);
      
      // Get viewport and container dimensions
      const viewportWidth = window.innerWidth;
      const containerWidth = container.scrollWidth;
      
      // Get first card dimensions
      const firstCard = container.firstElementChild as HTMLElement;
      if (!firstCard) return;
      
      const cardWidth = firstCard.offsetWidth;
      
      // Calculate how much we need to scroll
      const maxScroll = containerWidth - viewportWidth;
      
      // Start position: first card centered
      const startOffset = (viewportWidth - cardWidth) / 2;
      
      // End position: last card centered
      // We need to calculate where the last card should end up
      const lastCardOffset = containerWidth - cardWidth - startOffset;
      
      // Calculate translation based on progress
      // At progress 0: translateX = startOffset (first card centered)
      // At progress 1: translateX = -(lastCardOffset) (last card centered)
      const translateX = startOffset - (progress * (startOffset + lastCardOffset));
      
      container.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial call with slight delay to ensure layout is ready
    requestAnimationFrame(() => {
      setTimeout(handleScroll, 100);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate wrapper height for scroll distance
  const wrapperHeight = "300vh"; // 3x viewport height for smooth scrolling

  return (
    <>
      {/* Spacer wrapper for scroll distance */}
      <div
        ref={wrapperRef}
        style={{ height: wrapperHeight }}
        className="relative"
      >
        {/* Sticky container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <section
            id="projects"
            className="relative h-full text-cloud"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, #f9731633 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, #f9731633 0%, transparent 50%),
                linear-gradient(135deg, #05080f 0%, #0f172a 50%, #9ca3af22 100%)
              `,
            }}
          >
            {/* Title Section */}
            <div className="absolute left-0 right-0 top-0 z-10 pt-8 sm:pt-10 lg:pt-12">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                  <TextGenerateEffect
                    words="Projects"
                    className="text-4xl sm:text-5xl lg:text-6xl"
                  />
                  <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-cloud/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Horizontal Scrolling Container */}
            <div className="absolute inset-0 flex items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36">
              <div
                ref={containerRef}
                className="flex gap-8 lg:gap-12 xl:gap-16"
                style={{
                  transform: "translateX(0px)",
                  willChange: "transform",
                }}
              >
                {projects.map((project, index) => {
                  const imageClass = "h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl";

                  return (
                    <div key={index} className="flex-shrink-0 flex items-center justify-center">
                      <CardContainer
                        className="inter-var"
                        containerClassName="items-start sm:items-center py-2 sm:py-4"
                      >
                        <CardBody className="group/card relative h-auto w-[28rem] min-w-[28rem] sm:w-[30rem] sm:min-w-[30rem] lg:w-[34rem] lg:min-w-[34rem] xl:w-[38rem] xl:min-w-[38rem] 2xl:w-[40rem] 2xl:min-w-[40rem] rounded-3xl border border-white/10 px-5 py-5 sm:px-6 sm:py-6">
                          <CardItem
                            translateZ="50"
                            className="text-3xl font-semibold text-cloud lg:text-4xl"
                          >
                            {project.title}
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60"
                            className="text-cloud/70 text-base max-w-2xl mt-3 leading-relaxed"
                          >
                            {project.description}
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-6 mb-2">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={1000}
                              height={600}
                              className={imageClass}
                              quality={100}
                              unoptimized
                            />
                          </CardItem>
                          <div className="flex flex-wrap gap-2 mt-6">
                            {project.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.2em] text-cloud/60"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-5">
                            {!project.nda && project.links?.github && (
                              <CardItem
                                translateZ={20}
                                as="a"
                                href={project.links.github}
                                target="_blank"
                                className="px-5 py-2 rounded-xl text-sm font-normal text-cloud hover:text-white transition"
                              >
                                GitHub →
                              </CardItem>
                            )}
                            {!project.nda && project.links?.live && (
                              <CardItem
                                translateZ={20}
                                as="a"
                                href={project.links.live}
                                target="_blank"
                                className="px-5 py-2 rounded-xl bg-white/10 text-cloud text-sm font-bold hover:bg-white/20 transition"
                              >
                                Live Demo
                              </CardItem>
                            )}
                            {project.nda && (
                              <CardItem
                                translateZ={20}
                                as="p"
                                className="px-5 py-2 rounded-xl bg-white/5 text-cloud/50 text-sm font-normal italic"
                              >
                                Code &amp; demo unavailable due to NDA
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
        </div>
      </div>
    </>
  );
}
