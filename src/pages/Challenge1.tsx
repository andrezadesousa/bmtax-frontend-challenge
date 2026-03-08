import { useState, useMemo } from "react";
import { items } from "../data/items";
import { ItemList } from "../components/ItemList/ItemList";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Filter } from "lucide-react";

const GITHUB_URL =
  "https://github.com/andrezadesousa/bmtax-frontend-challenge/blob/main/src/pages/Challenge1.tsx";

export function Challenge1({ onBack }: { onBack?: () => void }) {
  const [search, setSearch] = useState("");

  /**
   * Decidi usar o useMemo para evitar que o filtro seja recalculado em renderizações desnecessárias.
   * Assim, posso garantir que a lógica só será disparada quando o valor de search realmente mudar.
   */
  const filteredItems = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    if (!normalizedSearch) {
      return items;
    }

    return items.filter((item) =>
      item.name.toLowerCase().includes(normalizedSearch),
    );
  }, [search]);

  return (
    <div className="p-8 bg-surface-white min-h-full">
      <PageHeader
        onBack={onBack}
        githubUrl={GITHUB_URL}
        title="Desafio 1 — Filtro de Itens"
        description="Oie, pessoa! Nesta página, eu criei um sistema de busca que filtra os
        itens em tempo real. Enquanto você digita no campo de pesquisa, a lista atualiza dinamicamente para exibir apenas o que você procura.
        Além disso, configurei o filtro para ignorar letras maiúsculas ou
        minúsculas, facilitando a sua busca, chique!"
        badges={
          <>
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-primary-light/10 rounded-full">
              <Filter size={14} className="text-primary-light md:w-4 md:h-4" />
              <span className="text-xxs md:text-xs font-medium text-primary-dark">
                Filtro/Search
              </span>
            </div>
          </>
        }
      />

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Digite para filtrar os itens..."
      />

      <ItemList items={filteredItems} />
    </div>
  );
}
