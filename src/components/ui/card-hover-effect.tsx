"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";

export const CardHoverEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

  const getDirection = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return "";

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const top = y;
    const bottom = height - y;
    const left = x;
    const right = width - x;

    const min = Math.min(top, bottom, left, right);

    switch (min) {
      case top:
        return "top";
      case bottom:
        return "bottom";
      case left:
        return "left";
      case right:
        return "right";
      default:
        return "";
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setDirection(getDirection(e));
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setDirection(getDirection(e));
    setIsHovered(false);
  };

  const getInitialPosition = () => {
    switch (direction) {
      case "top":
        return { y: -100 };
      case "bottom":
        return { y: 100 };
      case "left":
        return { x: -100 };
      case "right":
        return { x: 100 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
          initial={getInitialPosition()}
          animate={{ x: 0, y: 0 }}
          exit={getInitialPosition()}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      )}
    </div>
  );
};
