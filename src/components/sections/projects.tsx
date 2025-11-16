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
      {/* Desktop: Title Section (scrolls away) */}
      <div
        className="relative hidden md:block text-white pt-8 pb-16 bg-black"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <TextGenerateEffect
              words="Projects"
              className="text-4xl sm:text-5xl lg:text-6xl"
            />
            <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal Scroll Wrapper */}
      <div
        ref={wrapperRef}
        style={{ height: wrapperHeight }}
        className="relative hidden md:block"
      >
        {/* Sticky container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <section
            id="projects"
            className="relative h-full text-white"
            style={{
              background: `
                radial-gradient(ellipse 1000px 800px at 70% 55%, rgba(249, 115, 22, 0.20) 0%, transparent 50%),
                #000000
              `,
            }}
          >
            {/* Horizontal Scrolling Container */}
            <div className="absolute inset-0 flex items-center overflow-hidden">
              <div
                ref={containerRef}
                className="flex gap-8 lg:gap-12 xl:gap-16"
                style={{
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
                        <CardBody className="group/card relative h-auto w-[28rem] min-w-[28rem] sm:w-[30rem] sm:min-w-[30rem] lg:w-[34rem] lg:min-w-[34rem] xl:w-[38rem] xl:min-w-[38rem] 2xl:w-[40rem] 2xl:min-w-[40rem] px-6 py-5 sm:px-7 sm:py-6">
                          <CardItem
                            translateZ="50"
                            className="text-3xl font-semibold text-white lg:text-4xl mt-4 mb-2"
                          >
                            {project.title}
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-base max-w-2xl mt-6 leading-relaxed"
                          >
                            {project.description}
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-6 mb-8">
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
                                className="rounded-full backdrop-blur-md px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold"
                                style={{
                                  background: 'rgba(249, 115, 22, 0.04)',
                                  border: '1px solid rgba(249, 115, 22, 0.12)',
                                  color: 'rgba(249, 115, 22, 0.6)',
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-6">
                            {!project.nda && project.links?.github && (
                              <CardItem
                                translateZ={20}
                                as="a"
                                href={project.links.github}
                                target="_blank"
                                className="px-5 py-2 rounded-xl text-sm font-normal text-white hover:text-[#f97316] transition"
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
                                className="px-5 py-2 rounded-xl text-white text-sm font-bold transition backdrop-blur-md"
                                style={{
                                  background: 'rgba(249, 115, 22, 0.3)',
                                  border: '1px solid rgba(249, 115, 22, 0.5)',
                                }}
                              >
                                Live Demo
                              </CardItem>
                            )}
                            {project.nda && (
                              <CardItem
                                translateZ={20}
                                as="p"
                                className="px-5 py-2 rounded-xl text-white text-sm font-normal italic backdrop-blur-md"
                                style={{
                                  background: 'rgba(255, 255, 255, 0.05)',
                                  border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
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
            <TextGenerateEffect
              words="Projects"
              className="text-4xl sm:text-5xl"
            />
            <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
          </div>

          {/* Vertical Stack of Cards */}
          <div className="space-y-8">
            {projects.map((project, index) => {
              const imageClass = "h-64 w-full object-contain rounded-xl";

              return (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div 
                      className="group/card relative h-auto w-full rounded-3xl backdrop-blur-xl p-5 transition duration-300 hover:transform hover:scale-[1.02]"
                      style={{
                        background: 'rgba(30, 30, 30, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
                      }}
                    >
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white">
                        {project.description}
                      </p>
                      <div className="mt-5 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1000}
                          height={600}
                          className={imageClass}
                          quality={100}
                          unoptimized
                        />
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="rounded-full backdrop-blur-md px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold"
                            style={{
                              background: 'rgba(249, 115, 22, 0.04)',
                              border: '1px solid rgba(249, 115, 22, 0.12)',
                              color: 'rgba(249, 115, 22, 0.6)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {!project.nda && project.links?.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            className="rounded-xl px-4 py-2 text-sm font-normal text-white hover:text-[#f97316] transition"
                          >
                            GitHub →
                          </a>
                        )}
                        {!project.nda && project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            className="rounded-xl px-4 py-2 text-sm font-bold text-white transition backdrop-blur-md"
                            style={{
                              background: 'rgba(249, 115, 22, 0.3)',
                              border: '1px solid rgba(249, 115, 22, 0.5)',
                            }}
                          >
                            Live Demo
                          </a>
                        )}
                        {project.nda && (
                          <p 
                            className="rounded-xl px-4 py-2 text-sm font-normal italic text-white backdrop-blur-md"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            Code &amp; demo unavailable due to NDA
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
