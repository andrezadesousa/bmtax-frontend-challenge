import { FileCode, Github, Linkedin } from "lucide-react";

type Challenge = {
  id: number;
  title: string;
};

type SidebarProps = {
  challenges: Challenge[];
  activeChallenge: number;
  onChallengeSelect: (id: number) => void;
};

export function Sidebar({
  challenges,
  activeChallenge,
  onChallengeSelect,
}: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-primary-dark text-text-white flex flex-col">
      <div className="flex flex-col items-center py-8 border-b border-primary-medium">
        <div className="w-44 h-44 rounded-full bg-surface-light flex items-center justify-center overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
            alt="Foto de perfil de Andreza"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="mt-4 font-semibold text-lg">Andreza</span>
        <span className="text-sm text-surface-light">
          Desenvolvedora Front-end
        </span>
      </div>

      <nav className="flex-1 py-6">
        <p className="px-4 text-xs uppercase tracking-wider text-surface-light mb-4">
          Desafios
        </p>
        <ul className="space-y-1">
          {challenges.map((challenge) => (
            <li key={challenge.id}>
              <button
                onClick={() => onChallengeSelect(challenge.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  activeChallenge === challenge.id
                    ? "bg-primary-light text-text-white"
                    : "hover:bg-primary-medium text-surface-light hover:text-text-white"
                }`}
              >
                <FileCode size={18} />
                <span className="text-sm font-medium">{challenge.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-primary-medium flex flex-col items-center gap-4">
        {/* Container dos Ícones */}
        <div className="flex gap-4">
          <a
            href="https://github.com/andrezadesousa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-light hover:text-text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sousa-andreza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-light hover:text-text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Texto de Copyright */}
        <p className="text-xs text-surface-light uppercase tracking-tighter">
          Frontend Challenge 2026
        </p>
      </div>
    </aside>
  );
}
