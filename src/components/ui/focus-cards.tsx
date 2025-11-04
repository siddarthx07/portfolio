"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface Card {
  title: string;
  src: string;
  description?: string | ReactNode;
  content?: ReactNode;
}

export const FocusCards = ({
  cards,
  className,
}: {
  cards: Card[];
  className?: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10 mx-auto max-w-7xl",
        className
      )}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-900/50 border border-white/10 cursor-pointer group/card"
        >
          {/* Background Image */}
          <Image
            src={card.src}
            alt={card.title}
            fill
            className="absolute inset-0 object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          {/* Blur effect for non-hovered cards */}
          <motion.div
            animate={{
              filter:
                hovered !== null && hovered !== index
                  ? "blur(10px)"
                  : "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          />

          {/* Content overlay */}
          <motion.div
            animate={{
              opacity: hovered === index ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
          />

          {/* Custom content (e.g., CodeScroll) */}
          {card.content && (
            <motion.div
              animate={{
                opacity: hovered === index ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none"
            >
              {card.content}
            </motion.div>
          )}

          {/* Content Container */}
          <motion.div
            animate={{
              y: hovered === index ? 0 : 10,
              opacity: hovered === index ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-end justify-end p-6 sm:p-8 z-10"
          >
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {card.title}
              </h2>
              {card.description && (
                <motion.div
                  animate={{
                    opacity: hovered === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-base text-cloud/90 leading-relaxed"
                >
                  {card.description}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
