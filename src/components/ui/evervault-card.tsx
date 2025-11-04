"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState } from "react";

export const EvervaultCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <EncryptedGrid mousePosition={mousePosition} isHovered={isHovered} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const EncryptedGrid = ({
  mousePosition,
  isHovered,
}: {
  mousePosition: { x: number; y: number };
  isHovered: boolean;
}) => {
  const rows = 20;
  const cols = 20;

  return (
    <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const x = (col / cols) * 100;
        const y = (row / rows) * 100;

        const distance = isHovered
          ? Math.sqrt(
              Math.pow((x - (mousePosition.x / window.innerWidth) * 100), 2) +
                Math.pow((y - (mousePosition.y / window.innerHeight) * 100), 2),
            )
          : 100;

        const opacity = Math.max(0, 1 - distance / 50);

        return (
          <motion.div
            key={i}
            className="border-[0.5px] border-white/5"
            animate={{
              opacity: isHovered ? opacity * 0.3 : 0.05,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="h-full w-full bg-gradient-to-br from-cloud/10 to-transparent"
              animate={{
                scale: isHovered && opacity > 0.3 ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (i * 0.01) % 1,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
