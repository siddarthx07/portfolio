"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Monitor, X } from "lucide-react";

export default function DesktopBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if user is on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check if banner was dismissed in this session
    const wasDismissed = sessionStorage.getItem("desktopBannerDismissed");
    
    if (!wasDismissed && window.innerWidth < 768) {
      // Show banner after 1 second
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("desktopBannerDismissed", "true");
  };

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-lg">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative flex items-center gap-3">
              {/* Icon */}
              <motion.div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Monitor className="h-5 w-5 text-cloud" />
              </motion.div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-cloud">
                  Best viewed on desktop
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-cloud/70 transition hover:bg-white/20 hover:text-cloud"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

