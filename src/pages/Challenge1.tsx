import { useState } from "react";
import { items } from "../data/items";
import { ItemList } from "../components/List/ItemList";
import { SearchInput } from "../components/Input/SearchInput";

export function Challenge1() {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-8 bg-surface-white min-h-full">
      <h1 className="text-2xl font-bold text-text-dark mb-2">
        Desafio 1 — Filtro de Itens
      </h1>

      <p className="text-primary-medium mb-6 max-w-2xl leading-relaxed">
        Esta página demonstra a funcionalidade de filtro de itens por texto. À
        medida que o usuário digita no campo de busca, a lista é filtrada
        dinamicamente exibindo apenas os itens cujo nome contenha o texto
        digitado. A filtragem ignora maiúsculas e minúsculas.
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
