"use client";

import { motion } from "motion/react";
import { useState } from "react";

const VALUES = [
  { id: "clear", label: "Clear", x: 20, y: 20 },
  { id: "fast", label: "Fast", x: 80, y: 20 },
  { id: "purpose", label: "Purpose", x: 50, y: 50 },
  { id: "meaningful", label: "Meaningful", x: 20, y: 80 },
  { id: "impact", label: "Impact", x: 80, y: 80 },
];

const CONNECTIONS = [
  ["clear", "fast"],
  ["clear", "purpose"],
  ["clear", "meaningful"],
  ["fast", "purpose"],
  ["fast", "impact"],
  ["purpose", "meaningful"],
  ["purpose", "impact"],
  ["meaningful", "impact"],
];

export const ValueConstellation = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const isConnected = (nodeId: string) => {
    if (!hoveredNode) return false;
    return CONNECTIONS.some(
      ([a, b]) =>
        (a === hoveredNode && b === nodeId) ||
        (b === hoveredNode && a === nodeId),
    );
  };

  const shouldHighlightConnection = ([a, b]: string[]) => {
    if (!hoveredNode) return false;
    return a === hoveredNode || b === hoveredNode;
  };

  return (
    <div
      className="relative h-48 w-full overflow-hidden sm:h-52"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <motion.svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Connection Lines */}
        {CONNECTIONS.map(([fromId, toId], idx) => {
          const from = VALUES.find((v) => v.id === fromId)!;
          const to = VALUES.find((v) => v.id === toId)!;
          const isHighlighted = shouldHighlightConnection([fromId, toId]);

          return (
            <motion.line
              key={idx}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isHighlighted ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.15)"}
              strokeWidth={isHighlighted ? "0.4" : "0.2"}
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                stroke: isHighlighted
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(255, 255, 255, 0.15)",
                strokeWidth: isHighlighted ? "0.4" : "0.2",
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}

        {/* Nodes */}
        {VALUES.map((value) => {
          const isHovered = hoveredNode === value.id;
          const isConnectedNode = isConnected(value.id);

          return (
            <g key={value.id}>
              {/* Outer glow on hover */}
              {isHovered && (
                <motion.circle
                  cx={value.x}
                  cy={value.y}
                  r={3}
                  fill="rgba(255, 255, 255, 0.2)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Main node */}
              <motion.circle
                cx={value.x}
                cy={value.y}
                r={1.5}
                fill={
                  isHovered
                    ? "rgba(255, 255, 255, 1)"
                    : isConnectedNode
                      ? "rgba(255, 255, 255, 0.7)"
                      : "rgba(255, 255, 255, 0.5)"
                }
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(value.id)}
                animate={{
                  scale: isHovered ? 1.3 : isConnectedNode ? 1.1 : 1,
                  fill: isHovered
                    ? "rgba(255, 255, 255, 1)"
                    : isConnectedNode
                      ? "rgba(255, 255, 255, 0.7)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Label on hover */}
              {isHovered && (
                <motion.text
                  x={value.x}
                  y={value.y - 5}
                  textAnchor="middle"
                  fill="rgba(255, 255, 255, 0.9)"
                  fontSize="4"
                  fontWeight="600"
                  className="pointer-events-none select-none"
                  initial={{ opacity: 0, y: value.y }}
                  animate={{ opacity: 1, y: value.y - 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.label}
                </motion.text>
              )}
            </g>
          );
        })}
      </motion.svg>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/20" />
    </div>
  );
};
