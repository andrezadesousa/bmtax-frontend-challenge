import type { ReactNode } from "react";

type ThoughtBubbleProps = {
  children: ReactNode;
};

export function ThoughtBubble({ children }: ThoughtBubbleProps) {
  return (
    <div className="bg-surface-light border border-primary-light/30 rounded-lg p-4 relative">
      <div className="absolute -left-2 top-4 w-4 h-4 bg-surface-light border-l border-b border-primary-light/30 rotate-45" />
      <p className="text-sm text-primary-medium italic leading-relaxed">
        {children}
      </p>
    </div>
  );
}
