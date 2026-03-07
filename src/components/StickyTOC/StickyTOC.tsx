import type { TocItem } from "../../types/challenge4";

interface Props {
  items: TocItem[];
  title?: string;
}

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function StickyTOC({ items, title = "Índice" }: Props) {
  return (
    <nav className="sticky top-0 z-10 bg-surface-white border border-primary-light/20 rounded-lg px-3 py-2 shadow-sm">
      <p className="text-xxs font-semibold text-primary-dark mb-2 hidden sm:block">
        {title}
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="shrink-0 px-2 py-1 text-xxs font-medium rounded-full bg-surface-light hover:bg-primary-light/10 text-primary-dark hover:text-primary-light transition-colors whitespace-nowrap"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
