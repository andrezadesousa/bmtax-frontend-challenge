import { Search } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Pesquisar...",
}: SearchInputProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-medium"
      />

      <input
        type="text"
        aria-label="Filtrar itens"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-primary-light/30 bg-surface-white py-2 pl-10 pr-4 text-sm text-text-dark outline-none focus:border-primary-light focus:ring-2 focus:ring-primary-light/20"
      />
    </div>
  );
}
