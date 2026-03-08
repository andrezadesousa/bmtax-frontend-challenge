import type { ReactNode } from "react";
import { ArrowLeft, Github, ArrowUpRight } from "lucide-react";

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
    <header className="relative mb-12 py-10">
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary-light/50 via-surface-light to-transparent hidden md:block" />

      <div className="md:pl-8">
        <div className="flex items-center justify-between mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-medium hover:text-primary-light transition-all"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Voltar
            </button>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-text-dark text-white rounded-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/10 group"
            >
              <Github size={16} />
              <span className="text-xs font-medium">Ver o código</span>
              <ArrowUpRight
                size={14}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </a>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">{badges}</div>

          <h1 className="text-4xl md:text-5xl font-black text-text-dark tracking-tighter leading-none">
            {title}
            <span className="text-primary-light">.</span>
          </h1>

          <div className="max-w-3xl border-l-4 border-surface-light pl-6 py-1">
            <p className="text-base md:text-lg text-primary-medium/70 leading-relaxed font-medium italic">
              {description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
