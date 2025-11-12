"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="text-white"
      style={{
        background: `
          radial-gradient(ellipse 1000px 800px at 70% 25%, rgba(249, 115, 22, 0.18) 0%, transparent 50%),
          #000000
        `,
      }}
    >
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-[6rem] font-bold text-white">
                Featured Project
              </h2>
            </>
          }
        >
          {/* Mobile Image */}
          <Image
            src="/mobile-chat-2.png"
            alt="Enterprise ChatDoc - Internal Knowledge Management System"
            height={1200}
            width={800}
            className="mx-auto rounded-2xl object-cover h-full md:hidden"
            draggable={false}
          />
          {/* Desktop Image */}
          <Image
            src="/chatbot-2.png"
            alt="Enterprise ChatDoc - Internal Knowledge Management System"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:block"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

