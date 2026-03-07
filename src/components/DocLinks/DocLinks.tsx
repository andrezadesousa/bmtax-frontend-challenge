import { ExternalLink } from "lucide-react";
import type { DocumentationLink } from "../../types/challenge4";

interface Props {
  links: DocumentationLink[];
  title?: string;
}

export function DocLinks({
  links,
  title = "Documentações de referência",
}: Props) {
  return (
    <section className="bg-surface-light border border-primary-light/20 rounded-lg p-3 md:p-4">
      <p className="text-xxs md:text-xs font-semibold text-primary-dark mb-3">
        {title}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 p-2 md:p-3 bg-surface-white rounded-lg border border-primary-light/10 hover:border-primary-light/40 transition-colors group"
          >
            <ExternalLink
              size={12}
              className="text-primary-light shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
            />
            <div className="min-w-0">
              <p className="text-xxs md:text-xs font-medium text-text-dark truncate">
                {link.title}
              </p>
              <p className="text-xxs text-primary-medium truncate">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
