"use client";

import bookstoreProjectImage from "../../../public/bookstore-project.png";
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

        <div className="flex items-center justify-center">
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto sm:w-[30rem] rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.75)]">
              <CardItem
                translateZ="50"
                className="text-2xl font-semibold text-cloud sm:text-3xl"
              >
                Bookstore React Full Stack
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-cloud/70 text-sm max-w-sm mt-2 leading-relaxed"
              >
                End-to-end bookstore platform pairing a React + TypeScript client with a Java JAX-RS API. Supports category browsing, detailed product pages, secure checkout, and transactional order management backed by relational storage.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={bookstoreProjectImage.src}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Bookstore project"
                />
              </CardItem>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60">
                  React 18
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60">
                  TypeScript
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60">
                  Context API
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60">
                  Java (JAX-RS)
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60">
                  JDBC
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs uppercase tracking-[0.25em] text-cloud/60">
                  Gradle
                </span>
              </div>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/siddarthx07/bookstore-react-full-stack"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-cloud hover:text-white transition"
                >
                  GitHub →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white/10 text-cloud text-xs font-bold hover:bg-white/20 transition cursor-not-allowed"
                >
                  Live Demo
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
