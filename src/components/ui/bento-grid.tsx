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
        "group/bento relative row-span-1 flex h-full flex-col space-y-4 overflow-hidden rounded-3xl backdrop-blur-xl p-8 lg:p-10 transition duration-300",
        className,
      )}
      style={{
        background: 'rgba(30, 30, 30, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(249, 115, 22, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(40, 40, 40, 0.8)';
        e.currentTarget.style.border = '1px solid rgba(249, 115, 22, 0.3)';
        e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(249, 115, 22, 0.2)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(30, 30, 30, 0.7)';
        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(249, 115, 22, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mb-2 mt-2 font-bold text-white">
          {title}
        </div>
        <div className="text-base font-normal leading-relaxed text-white">
          {description}
        </div>
      </div>
    </div>
  );
};
