import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, type ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  icon?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function CollapsibleSection({
  id,
  title,
  icon,
  defaultOpen = true,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section
      id={id}
      className="border border-primary-light/20 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-3 md:p-4 bg-surface-light hover:bg-primary-light/10 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-xs md:text-sm font-semibold text-text-dark">
            {title}
          </span>
        </div>
        {open ? (
          <ChevronUp size={16} className="text-primary-medium shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-primary-medium shrink-0" />
        )}
      </button>

      {open && (
        <div className="p-3 md:p-5 space-y-3 md:space-y-4 border-t border-primary-light/20">
          {children}
        </div>
      )}
    </section>
  );
}
