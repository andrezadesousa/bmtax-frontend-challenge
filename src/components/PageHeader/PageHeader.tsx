import type { ReactNode } from "react";
import { ArrowLeft, Github } from "lucide-react";

type PageHeaderProps = {
  badges: ReactNode;
  title: string;
  description: ReactNode;
  onBack?: () => void;
  githubUrl?: string;
};

export function PageHeader({
  badges,
  title,
  description,
  onBack,
  githubUrl,
}: PageHeaderProps) {
  return (
    <header className="mb-6 md:mb-8">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-primary-medium hover:text-primary-dark transition-colors mb-4 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          <span>Voltar</span>
        </button>
      )}

      <div className="flex flex-wrap items-center gap-3 mb-3">
        {badges}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-surface-light rounded-full hover:bg-primary-dark hover:text-text-white transition-colors group"
          >
            <Github
              size={14}
              className="text-primary-medium group-hover:text-text-white md:w-4 md:h-4 transition-colors"
            />
            <span className="text-xxs md:text-xs font-medium text-primary-medium group-hover:text-text-white transition-colors">
              Veja o código desse desafio
            </span>
          </a>
        )}
      </div>

      <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
        {title}
      </h1>

      <p className="text-sm text-primary-medium max-w-3xl leading-relaxed">
        {description}
      </p>
    </header>
  );
}
