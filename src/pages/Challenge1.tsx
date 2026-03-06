import { useState, useMemo } from "react";
import { items } from "../data/items";
import { ItemList } from "../components/List/ItemList";
import { SearchInput } from "../components/Input/SearchInput";

export function Challenge1() {
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
      <h1 className="text-2xl font-bold text-text-dark mb-2">
        Desafio 1 — Filtro de Itens
      </h1>

      <p className="text-primary-medium mb-6 max-w-2xl leading-relaxed">
        Oie, pessoa! Nesta página, eu criei um sistema de busca que filtra os
        itens em tempo real. Enquanto você digita no campo de pesquisa, eu
        atualizo a lista dinamicamente para exibir apenas o que você procura.
        Além disso, configurei o filtro para ignorar letras maiúsculas ou
        minúsculas, facilitando a sua busca, chique!
      </p>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Digite para filtrar os itens..."
      />

      <ItemList items={filteredItems} />
    </div>
  );
}
