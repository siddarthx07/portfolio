import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex h-full flex-col space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm transition duration-200 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mb-2 mt-2 font-bold text-cloud">
          {title}
        </div>
        <div className="text-base font-normal leading-relaxed text-cloud/70">
          {description}
        </div>
      </div>
    </div>
  );
};
