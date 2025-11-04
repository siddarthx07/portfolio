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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3",
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
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-night/80 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm transition duration-200 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]",
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
