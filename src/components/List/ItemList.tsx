import type { Item } from "../../types/item";

type ItemListProps = {
  items: Item[];
};

export function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-500 mt-4">Nenhum item encontrado.</p>
    );
  }

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
