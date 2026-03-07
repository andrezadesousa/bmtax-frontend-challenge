import {
  Code2,
  Filter,
  GitPullRequest,
  Bug,
  Key,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";

type HomeProps = {
  onNavigate: (challengeId: number) => void;
};

const technologies = [
  { name: "React", version: "19.2.0" },
  { name: "TypeScript", version: "5.9.3" },
  { name: "Vite", version: "7.3.1" },
  { name: "Tailwind CSS", version: "3.4.17" },
  { name: "Lucide React", version: "0.577.0" },
  { name: "Cypress", version: "15.11.0" },
];

const challenges = [
  {
    id: 1,
    title: "Desafio 1",
    subtitle: "Filtro de Itens",
    description:
      "Implementação de um sistema de busca e filtragem de itens em tempo real, usando estado local e renderização condicional.",
    icon: Filter,
    color: "bg-primary-light",
  },
  {
    id: 2,
    title: "Desafio 2",
    subtitle: "Code Review",
    description:
      "Análise de uma Pull Request identificando problemas de mutação de estado, boas práticas do React e refatoração para Hooks.",
    icon: GitPullRequest,
    color: "bg-diff-add-border",
  },
  {
    id: 3,
    title: "Desafio 3",
    subtitle: "Debug de Erro",
    description:
      "Investigação de um TypeError em produção, análise de stack trace e implementação de soluções com optional chaining.",
    icon: Bug,
    color: "bg-diff-remove-border",
  },
  {
    id: 4,
    title: "Desafio 4",
    subtitle: "OAuth JWT",
    description:
      "Desenvolvimento de um serviço de autenticação com cache de token, renovação automática e requisições paralelas.",
    icon: Key,
    color: "bg-yellow-500",
  },
];

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      {/* Hero Section */}
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-light">
            <Code2 size={28} className="text-text-white" />
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-text-dark">
              Frontend Challenge
            </h1>
            <p className="text-xs md:text-sm text-primary-medium">
              BMTax Front-End Challenge
            </p>
          </div>
        </div>

        <p className="text-sm md:text-base text-primary-medium max-w-3xl leading-relaxed">
          Olá! Eu sou a <strong className="text-text-dark">Andreza</strong>,
          desenvolvedora front-end júnior. Este projeto apresenta minhas
          respostas aos 4 desafios propostos no processo seletivo, cada um
          documentado em sua própria página com código, explicações e minha
          linha de raciocínio.
        </p>
      </header>

      {/* Technologies Section */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-sm md:text-base font-semibold text-text-dark mb-4">
          Tecnologias Utilizadas
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-3 py-2 bg-surface-light rounded-lg border border-primary-light/20"
            >
              <span className="text-xs md:text-sm font-medium text-text-dark">
                {tech.name}
              </span>
              <span className="text-xxs md:text-xs text-primary-medium bg-surface-white px-1.5 py-0.5 rounded">
                v{tech.version}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-sm md:text-base font-semibold text-text-dark mb-4">
          Desafios Respondidos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <button
                key={challenge.id}
                onClick={() => onNavigate(challenge.id)}
                className="group text-left p-4 md:p-5 bg-surface-light rounded-xl border border-primary-light/20 hover:border-primary-light/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg ${challenge.color}`}
                  >
                    <Icon size={20} className="text-text-white md:w-6 md:h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm md:text-base font-semibold text-text-dark">
                        {challenge.title}
                      </h3>
                      <span className="text-xxs md:text-xs text-primary-medium">
                        — {challenge.subtitle}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-primary-medium leading-relaxed line-clamp-2">
                      {challenge.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-primary-medium group-hover:text-primary-light group-hover:translate-x-1 transition-all shrink-0 mt-1"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary-dark text-text-white p-4 md:p-6 rounded-xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
              alt="Foto de Andreza"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary-light"
            />
            <div>
              <h3 className="font-semibold text-base md:text-lg">Andreza</h3>
              <p className="text-xs md:text-sm text-surface-light">
                Desenvolvedora Front-end Júnior
              </p>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-xs md:text-sm text-surface-light leading-relaxed">
              Oiê, time BM! Agradeço a oportunidade de demonstrar meus
              conhecimentos e participar do processo seletivo. Cada desafio foi
              uma oportunidade de aprendizado e gosto muito disso. Documentei
              meu processo de raciocínio, as pesquisas que fiz e as decisões que
              tomei, mostrando como abordo problemas reais.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/andrezadesousa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-medium rounded-lg hover:bg-primary-light transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="text-xs md:text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sousa-andreza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-medium rounded-lg hover:bg-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="text-xs md:text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="mt-6 md:mt-8 text-center">
        <p className="text-xxs md:text-xs text-primary-medium">
          Navegue pelo menu lateral para visualizar cada desafio em detalhes.
        </p>
      </footer>
    </div>
  );
}
