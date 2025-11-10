"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface SectionLoaderProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
}

/**
 * Lazy loads a section component when it's about to enter the viewport.
 * Uses Intersection Observer for optimal performance.
 */
export function SectionLoader({
  children,
  fallback,
  rootMargin = "200px",
}: SectionLoaderProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            setIsVisible(true);
            // Once loaded, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={containerRef} className="w-full">
      {shouldLoad ? (
        <div className={isVisible ? "animate-in fade-in duration-700" : ""}>
          {children}
        </div>
      ) : (
        fallback || (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cloud/20 border-t-cloud/60" />
          </div>
        )
      )}
    </div>
  );
}

