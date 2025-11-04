"use client";

import { motion } from "motion/react";
import { useState } from "react";

const VALUES = [
  { id: "clear", label: "Clear", initialX: 25, initialY: 30, delay: 0 },
  { id: "fast", label: "Fast", initialX: 65, initialY: 25, delay: 0.5 },
  { id: "meaningful", label: "Meaningful", initialX: 30, initialY: 65, delay: 1 },
  { id: "purpose", label: "Purpose", initialX: 70, initialY: 65, delay: 1.5 },
  { id: "impact", label: "Impact", initialX: 50, initialY: 45, delay: 0.75 },
];

export const ValueBadges = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [pinnedBadge, setPinnedBadge] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setIsHovering(true);
  };

  const calculateRepulsion = (badgeX: number, badgeY: number) => {
    if (!isHovering) return { x: 0, y: 0 };

    const dx = badgeX - mousePosition.x;
    const dy = badgeY - mousePosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const repulsionRadius = 20;

    if (distance < repulsionRadius && distance > 0) {
      const force = (repulsionRadius - distance) / repulsionRadius;
      return {
        x: (dx / distance) * force * 12,
        y: (dy / distance) * force * 12,
      };
    }
    return { x: 0, y: 0 };
  };

  const handleBadgeClick = (id: string) => {
    setPinnedBadge(pinnedBadge === id ? null : id);
  };

  return (
    <div
      className="relative h-48 w-full overflow-hidden sm:h-52"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      {VALUES.map((value, index) => {
        const isPinned = pinnedBadge === value.id;
        const repulsion = isPinned
          ? { x: 0, y: 0 }
          : calculateRepulsion(value.initialX, value.initialY);

        return (
          <motion.div
            key={value.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${value.initialX}%`,
              top: `${value.initialY}%`,
            }}
            animate={{
              x: repulsion.x,
              y: repulsion.y,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={() => handleBadgeClick(value.id)}
          >
            <motion.div
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all ${
                isPinned
                  ? "border-cloud/60 bg-cloud/20 text-cloud shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "border-cloud/30 bg-cloud/10 text-cloud/80 hover:border-cloud/50 hover:bg-cloud/15"
              }`}
              animate={{
                y: isPinned ? 0 : [-3, 3, -3],
                scale: isPinned ? 1.1 : 1,
              }}
              transition={{
                y: {
                  duration: 2 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: value.delay,
                },
                scale: {
                  duration: 0.3,
                },
              }}
              whileHover={{
                scale: isPinned ? 1.1 : 1.05,
              }}
            >
              {value.label}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/10" />
    </div>
  );
};
