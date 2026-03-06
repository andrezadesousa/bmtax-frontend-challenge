import { Code2 } from "lucide-react";

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

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-primary-dark text-text-white border-b border-primary-medium">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-light">
          <Code2 size={24} className="text-text-white" />
        </div>
        <span className="text-lg font-semibold">BMTax Front-End Challenge</span>
      </div>

      <time className="text-sm text-surface-light">{getCurrentDate()}</time>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Andreza</span>
      </div>
    </header>
  );
}
