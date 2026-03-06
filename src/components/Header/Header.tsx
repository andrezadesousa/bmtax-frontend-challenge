import { Code2, Menu, X } from "lucide-react";

function getCurrentDate(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return now.toLocaleDateString("pt-BR", options);
}

type HeaderProps = {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
};

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-primary-dark text-text-white border-b border-primary-medium">
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary-medium transition-colors"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary-light">
          <Code2 size={20} className="md:w-6 md:h-6 text-text-white" />
        </div>
        <span className="text-sm md:text-lg font-semibold hidden sm:block">
          BMTax Front-End Challenge
        </span>
        <span className="text-sm font-semibold sm:hidden">Challenge</span>
      </div>

      <time className="text-xs md:text-sm text-surface-light hidden md:block">
        {getCurrentDate()}
      </time>

      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm font-medium">Andreza</span>
      </div>
    </header>
  );
}
