import {
  FileCode,
  Github,
  Linkedin,
  Home,
  X,
  GitPullRequest,
} from "lucide-react";
import { WeatherWidget } from "../WeatherWidget/WeatherWidget";

type Challenge = {
  id: number;
  title: string;
};

type SidebarProps = {
  challenges: Challenge[];
  activeChallenge: number;
  onChallengeSelect: (id: number) => void;
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({
  challenges,
  activeChallenge,
  onChallengeSelect,
  isOpen,
  onClose,
}: SidebarProps) {
  const handleSelect = (id: number) => {
    onChallengeSelect(id);
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative inset-y-0 left-0 z-50
          w-72 lg:w-64 h-full bg-primary-dark text-text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-primary-medium transition-colors"
          aria-label="Fechar menu"
        >
          <X size={20} />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center py-6 md:py-8 border-b border-primary-medium">
          <div className="w-28 h-28 md:w-44 md:h-44 rounded-full bg-surface-light flex items-center justify-center overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
              alt="Foto de perfil de Andreza"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-3 md:mt-4 font-semibold text-base md:text-lg">
            Andreza
          </span>
          <span className="text-xs md:text-sm text-surface-light">
            Desenvolvedora Front-end
          </span>
          <WeatherWidget />
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 md:py-6 overflow-y-auto">
          <p className="px-4 text-xs uppercase tracking-wider text-surface-light mb-3 md:mb-4">
            Menu
          </p>
          <ul className="space-y-1">
            {/* Home Button */}
            <li>
              <button
                onClick={() => handleSelect(0)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  activeChallenge === 0
                    ? "bg-primary-light text-text-white"
                    : "hover:bg-primary-medium text-surface-light hover:text-text-white"
                }`}
              >
                <Home size={18} />
                <span className="text-sm font-medium">Home</span>
              </button>
            </li>

            {/* Challenges */}
            {challenges.map((challenge) => {
              const Icon = challenge.id === 1 ? GitPullRequest : FileCode;
              return (
                <li key={challenge.id}>
                  <button
                    onClick={() => handleSelect(challenge.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      activeChallenge === challenge.id
                        ? "bg-primary-light text-text-white"
                        : "hover:bg-primary-medium text-surface-light hover:text-text-white"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">
                      {challenge.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-primary-medium flex flex-col items-center gap-3 md:gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/andrezadesousa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-light hover:text-text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sousa-andreza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-light hover:text-text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-xs text-surface-light uppercase tracking-tighter">
            Frontend Challenge 2026
          </p>
        </div>
      </aside>
    </>
  );
}
