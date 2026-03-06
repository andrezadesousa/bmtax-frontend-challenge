import type { ReactNode } from "react";

type PageHeaderProps = {
  badges: ReactNode;
  title: string;
  description: ReactNode;
};

export function PageHeader({ badges, title, description }: PageHeaderProps) {
  return (
    <header className="mb-6 md:mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-3">{badges}</div>

      <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
        {title}
      </h1>

      <p className="text-sm text-primary-medium max-w-3xl leading-relaxed">
        {description}
      </p>
    </header>
  );
}
