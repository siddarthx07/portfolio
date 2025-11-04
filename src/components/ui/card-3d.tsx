"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

export const Card3D = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.2s ease-out",
      }}
    >
      {children}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-50"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x > 0 ? mousePosition.x * 5 + 50 : 50 + mousePosition.x * 5}% ${mousePosition.y > 0 ? mousePosition.y * 5 + 50 : 50 + mousePosition.y * 5}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      )}
    </div>
  );
};
