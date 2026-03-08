import {
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Star,
  GitFork,
  Eye,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { FileTreeItem } from "../components/FileTree/FileTree";
import {
  technologies,
  scripts,
  goodPractices,
  futureImprovements,
  learnings,
  architecturePrinciples,
  testCoverage,
  projectObjectives,
  challenges,
  projectStructure,
} from "../data/readmeData";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg md:text-xl font-semibold text-text-dark border-b border-primary-light/20 pb-2 mb-4 mt-8">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-semibold text-text-dark mb-2">{children}</h4>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside text-sm text-primary-medium space-y-1 mb-6 ml-4">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return <code className="bg-surface-light px-1 rounded">{children}</code>;
}

function CodeCommand({ command }: { command: string }) {
  return (
    <div className="bg-code-bg text-code-text p-3 rounded-lg font-mono text-xs mb-4 overflow-x-auto">
      <code>{command}</code>
    </div>
  );
}

export function Readme() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-surface-white min-h-full">
      {/* GitHub-style Header */}
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-primary-medium" />
            <h1 className="text-lg md:text-xl font-semibold text-text-dark">
              README.md
            </h1>
          </div>
          <div className="flex items-center gap-4 ml-auto text-xs text-primary-medium">
            <span className="flex items-center gap-1">
              <Star size={14} />
              <span>Star</span>
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={14} />
              <span>Fork</span>
            </span>
            <span className="flex items-center gap-1">
              <Eye size={14} />
              <span>Watch</span>
            </span>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-xs text-primary-medium mb-4">
          <a href="#" className="hover:text-primary-light hover:underline">
            andrezadesousa
          </a>
          <ChevronRight size={12} />
          <a
            href="#"
            className="hover:text-primary-light hover:underline font-medium text-text-dark"
          >
            bmtax-frontend-challenge
          </a>
        </div>
      </header>

      {/* README Content */}
      <article className="border border-primary-light/20 rounded-lg overflow-hidden">
        {/* File Header */}
        <div className="bg-surface-light px-4 py-3 border-b border-primary-light/20 flex items-center gap-2">
          <FileText size={16} className="text-primary-medium" />
          <span className="text-sm font-medium text-text-dark">README.md</span>
          <span className="text-xs text-primary-medium ml-auto">12 KB</span>
        </div>

        <div className="p-4 md:p-6 lg:p-8 prose prose-sm max-w-none">
          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold text-text-dark border-b border-primary-light/20 pb-4 mb-6">
            BMTax Frontend Challenge - React + TypeScript
          </h1>

          <p className="text-sm md:text-base text-primary-medium leading-relaxed mb-6">
            Projeto desenvolvido como resposta ao desafio técnico da{" "}
            <strong className="text-text-dark">BMTax</strong>. A aplicação
            apresenta{" "}
            <strong className="text-text-dark">
              quatro desafios de engenharia frontend
            </strong>
            , cada um documentado em sua própria página com explicações, código
            e análise da solução proposta.
          </p>

          <p className="text-sm md:text-base text-primary-medium leading-relaxed mb-4">
            O objetivo foi demonstrar não apenas a implementação das
            funcionalidades solicitadas, mas também:
          </p>
          <SimpleList items={projectObjectives} />

          {/* Demo */}
          <SectionHeading>Demo</SectionHeading>
          <p className="text-sm text-primary-medium mb-4">
            A aplicação pode ser acessada online:
          </p>
          <a
            href="https://bmtax-front-end-challenge.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-text-white rounded-lg hover:bg-primary-medium transition-colors text-sm"
          >
            <ExternalLink size={16} />
            bmtax-front-end-challenge.web.app
          </a>

          {/* Tecnologias */}
          <SectionHeading>Tecnologias</SectionHeading>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-primary-light/20 rounded-lg overflow-hidden">
              <thead className="bg-surface-light">
                <tr>
                  <th className="text-left px-4 py-2 font-medium text-text-dark border-b border-primary-light/20">
                    Tecnologia
                  </th>
                  <th className="text-left px-4 py-2 font-medium text-text-dark border-b border-primary-light/20">
                    Versão
                  </th>
                </tr>
              </thead>
              <tbody>
                {technologies.map((tech) => (
                  <tr
                    key={tech.name}
                    className="border-b border-primary-light/10 last:border-b-0"
                  >
                    <td className="px-4 py-2 text-text-dark">{tech.name}</td>
                    <td className="px-4 py-2 text-primary-medium">
                      {tech.version}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Desafios */}
          <SectionHeading>Desafios</SectionHeading>
          {challenges.map((challenge) => (
            <div key={challenge.title}>
              <h3 className="text-base md:text-lg font-semibold text-text-dark mb-3 mt-6">
                {challenge.title}
              </h3>
              <p className="text-sm text-primary-medium mb-3">
                {challenge.description}
              </p>
              {challenge.sections.map((section) => (
                <div key={section.heading}>
                  <SubHeading>{section.heading}</SubHeading>
                  <ul className="list-disc list-inside text-sm text-primary-medium space-y-1 mb-4 ml-4">
                    {section.items.map((item, idx) => (
                      <li key={idx}>
                        {item.code ? (
                          <InlineCode>{item.label}</InlineCode>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {/* Arquitetura */}
          <SectionHeading>Arquitetura do Projeto</SectionHeading>
          <p className="text-sm text-primary-medium mb-4">
            O projeto foi estruturado utilizando uma abordagem{" "}
            <strong>component-driven</strong>, priorizando reutilização e
            separação de responsabilidades.
          </p>
          <p className="text-sm text-primary-medium mb-4">
            Principais principios adotados:
          </p>
          <SimpleList items={architecturePrinciples} />

          {/* Estrutura */}
          <SectionHeading>Estrutura do Projeto</SectionHeading>
          <div className="border border-primary-light/20 rounded-lg p-4 bg-surface-light/50 mb-6 overflow-x-auto">
            {projectStructure.map((item, idx) => (
              <FileTreeItem key={idx} {...item} />
            ))}
          </div>

          {/* Testes */}
          <SectionHeading>Testes</SectionHeading>
          <p className="text-sm text-primary-medium mb-4">
            Foram implementados <strong>testes E2E utilizando Cypress</strong>.
            Os testes validam:
          </p>
          <SimpleList items={testCoverage} />
          <SubHeading>Rodar testes</SubHeading>
          <CodeCommand command="npx cypress run" />
          <p className="text-sm text-primary-medium mb-2">Modo interativo:</p>
          <CodeCommand command="npx cypress open" />

          {/* Como Rodar */}
          <SectionHeading>Como Rodar o Projeto</SectionHeading>
          <SubHeading>Instalar dependências</SubHeading>
          <CodeCommand command="npm install" />
          <SubHeading>Rodar ambiente de desenvolvimento</SubHeading>
          <CodeCommand command="npm run dev" />
          <SubHeading>Gerar build de produção</SubHeading>
          <CodeCommand command="npm run build" />

          {/* Scripts */}
          <SectionHeading>Scripts Disponíveis</SectionHeading>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-primary-light/20 rounded-lg overflow-hidden">
              <thead className="bg-surface-light">
                <tr>
                  <th className="text-left px-4 py-2 font-medium text-text-dark border-b border-primary-light/20">
                    Script
                  </th>
                  <th className="text-left px-4 py-2 font-medium text-text-dark border-b border-primary-light/20">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody>
                {scripts.map((script, idx) => (
                  <tr
                    key={script.command}
                    className={
                      idx < scripts.length - 1
                        ? "border-b border-primary-light/10"
                        : ""
                    }
                  >
                    <td className="px-4 py-2">
                      <InlineCode>{script.command}</InlineCode>
                    </td>
                    <td className="px-4 py-2 text-primary-medium">
                      {script.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Boas Praticas */}
          <SectionHeading>Boas Praticas Aplicadas</SectionHeading>
          <SimpleList items={goodPractices} />

          {/* Melhorias Futuras */}
          <SectionHeading>Possiveis Melhorias Futuras</SectionHeading>
          <p className="text-sm text-primary-medium mb-4">
            Algumas evoluçõess que poderiam ser aplicadas em um cenário de
            produção:
          </p>
          <SimpleList items={futureImprovements} />

          {/* Autora */}
          <SectionHeading>Autora</SectionHeading>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-surface-light rounded-lg mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/62725350?s=400&u=9d835449a30bc547b5e04d6b949296c42cdc7733&v=4"
              alt="Andreza de Sousa"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-text-dark">Andreza de Sousa</h3>
              <p className="text-sm text-primary-medium">Frontend Developer</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/andrezadesousa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-text-dark text-text-white rounded-lg hover:bg-primary-dark transition-colors text-xs"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sousa-andreza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-primary-light text-text-white rounded-lg hover:bg-primary-medium transition-colors text-xs"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Aprendizados */}
          <SectionHeading>Aprendizados Principais</SectionHeading>
          <blockquote className="border-l-4 border-primary-light pl-4 italic text-sm text-primary-medium mb-6">
            {learnings[0]}
          </blockquote>
          <ul className="list-disc list-inside text-sm text-primary-medium space-y-2 mb-8 ml-4">
            {learnings.slice(1).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
