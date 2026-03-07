import type { ReactNode } from "react";

type StepCardProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export function StepCard({ number, title, children }: StepCardProps) {
  return (
    <div className="border-l-4 border-l-primary-light bg-surface-light p-4 md:p-5 rounded-r-lg">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-light text-text-white text-xs font-bold">
          {number}
        </span>
        <h3 className="text-sm font-semibold text-text-dark">{title}</h3>
      </div>
      <div className="text-sm text-primary-medium leading-relaxed">
        {children}
      </div>
    </div>
  );
}
