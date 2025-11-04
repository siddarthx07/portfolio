"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type LightboxImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  containerClassName?: string;
  dialogLabel?: string;
};

export function LightboxImage({
  containerClassName,
  dialogLabel = "Open image",
  alt,
  ...imageProps
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
          containerClassName,
        )}
        aria-label={dialogLabel}
      >
        <Image
          alt={alt}
          className={cn(
            "h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]",
            imageProps.className,
          )}
          {...imageProps}
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-xs uppercase tracking-[0.3em] text-cloud/60 opacity-0 transition group-hover:opacity-100">
          Tap to expand
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image preview"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20">
            <Image
              alt={alt}
              className="h-full w-full object-contain"
              {...imageProps}
              priority
            />
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-sm uppercase tracking-[0.3em] text-cloud transition hover:bg-black/60"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
