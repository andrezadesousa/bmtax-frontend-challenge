import type { Item } from "../../types/item";
import { EmptyState } from "../EmptyState/EmptyState";

type ItemListProps = {
  items: Item[];
  onSelect: (item: Item) => void;
  searchTerm: string;
  onClear: () => void;
};

export function ItemList({
  items,
  onSelect,
  searchTerm,
  onClear,
}: ItemListProps) {
  if (items.length === 0) {
    /**
     * Eu adicionei esse tratamento de estado vazio para não deixar o usuário no vácuo
     * Se não encontrar o que está procurando, eu posso garantir que a interface dê um feedback claro
     */
    return <EmptyState searchTerm={searchTerm} onClear={onClear} />;
  }

  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onSelect(item)}
          className="group cursor-pointer rounded-xl border border-primary-light/10 bg-white p-4 
                     transition-all hover:border-primary-light/40 hover:shadow-md hover:shadow-primary-light/5
                     flex justify-between items-center"
        >
          <span className="font-medium text-text-dark">{item.name}</span>
          <span className="text-xxs font-bold uppercase tracking-widest text-primary-light/40 group-hover:text-primary-light transition-colors">
            Ver detalhes →
          </span>
        </li>
      ))}
    </ul>
  );
}
