import type { Item } from "../../types/item";

type ItemListProps = {
  items: Item[];
};

export function ItemList({ items }: ItemListProps) {
  /**
   * Eu adicionei esse tratamento de estado vazio para não deixar o usuário no vácuo
   * Se não encontrar o que está procurando, eu posso garantir que a interface dê um feedback claro
   */
  if (items.length === 0) {
    return (
      <p className="text-sm text-primary-medium mt-4">
        Nenhum item encontrado.
      </p>
    );
  }

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-lg border border-primary-light/20 bg-surface-light p-3 text-text-dark transition-colors hover:border-primary-light/40 hover:bg-surface-light/80"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
