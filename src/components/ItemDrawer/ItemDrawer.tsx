import type { Item } from "../../types/item";
import { X, MapPin, Building2, Calendar, Briefcase, Info } from "lucide-react";

type Props = {
  item: Item | null;
  onClose: () => void;
};

export function ItemDrawer({ item, onClose }: Props) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <aside className="relative w-full max-w-[400px] bg-surface-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header Fixo */}
        <header className="flex items-center justify-between p-6 border-b border-primary-light/10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary-light">
            Detalhes do Registro
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-light rounded-full text-primary-medium transition-colors outline-none focus:ring-2 focus:ring-primary-light/20"
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <section className="text-center">
            <div className="relative inline-block mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary-light to-primary-medium rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <img
                src={item.thumbnail}
                alt={item.name}
                className="relative rounded-xl w-32 h-32 object-cover border-2 border-white shadow-sm mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-text-dark tracking-tight">
              {item.name}
            </h2>
            <span className="inline-block mt-2 px-3 py-1 bg-surface-light text-primary-medium text-xxs font-bold uppercase rounded-full border border-primary-light/10">
              {item.industry}
            </span>
          </section>

          <section className="bg-surface-light/50 p-4 rounded-xl border border-primary-light/5">
            <div className="flex items-center gap-2 mb-2 text-primary-light">
              <Info size={16} />
              <h4 className="text-xs font-bold uppercase tracking-tighter">
                Sobre
              </h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic">
              "{item.description}"
            </p>
          </section>

          <section className="grid grid-cols-1 gap-4">
            <InfoRow
              icon={<Calendar size={18} />}
              label="Fundação"
              value={item.founded}
            />
            <InfoRow
              icon={<Briefcase size={18} />}
              label="Ramo"
              value={item.industry}
            />
            <InfoRow
              icon={<Building2 size={18} />}
              label="Sede"
              value={item.headquarters}
            />
            <InfoRow
              icon={<MapPin size={18} />}
              label="Localização"
              value={item.location}
            />
          </section>
        </div>

        <footer className="p-6 border-t border-primary-light/10 bg-surface-light/30">
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary-dark text-text-white rounded-xl font-bold text-sm hover:bg-primary-medium transition-all shadow-lg shadow-primary-dark/20 active:scale-[0.98]"
          >
            Concluído
          </button>
        </footer>
      </aside>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-surface-light rounded-lg transition-colors border border-transparent hover:border-primary-light/10">
      <div className="text-primary-light bg-surface-white p-2 rounded-lg shadow-sm border border-primary-light/5">
        {icon}
      </div>
      <div>
        <p className="text-xxs uppercase font-bold text-primary-medium/50 tracking-wider">
          {label}
        </p>
        <p className="text-sm font-medium text-text-dark leading-none mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}
