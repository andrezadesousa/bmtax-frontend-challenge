import { SearchX, RefreshCcw } from "lucide-react";

type EmptyStateProps = {
  onClear: () => void;
  searchTerm: string;
};

export function EmptyState({ onClear, searchTerm }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in zoom-in duration-500">
      {/* Ícone com Efeito de Vidro e Gradiente */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-light/20 to-transparent rounded-full blur-2xl" />
        <div className="relative bg-surface-light p-6 rounded-full border border-primary-light/10 shadow-inner">
          <SearchX
            size={48}
            className="text-primary-light/40"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Mensagem Refinada */}
      <h3 className="text-xl font-bold text-text-dark mb-2">
        Nenhum resultado para "{searchTerm}"
      </h3>
      <p className="text-sm text-primary-medium/60 max-w-xs leading-relaxed mb-8">
        Não encontramos nada com esses termos. Tente revisar a ortografia ou use
        palavras-chave mais genéricas.
      </p>

      {/* Botão de Ação (Clear Search) */}
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-6 py-2.5 bg-white border border-primary-light/20 text-primary-medium text-sm font-semibold rounded-full hover:bg-primary-light hover:text-white transition-all shadow-sm active:scale-95 group"
      >
        <RefreshCcw
          size={16}
          className="group-hover:rotate-180 transition-transform duration-500"
        />
        Limpar busca
      </button>
    </div>
  );
}
