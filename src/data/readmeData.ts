import type {
  TechItem,
  ScriptItem,
  ChallengeSection,
  FileItemProps,
} from "../types/readme";

export const technologies: TechItem[] = [
  { name: "React", version: "19.2.0" },
  { name: "TypeScript", version: "5.9.3" },
  { name: "Vite", version: "7.3.1" },
  { name: "Tailwind CSS", version: "3.4.17" },
  { name: "Lucide React", version: "0.577.0" },
  { name: "Cypress", version: "15.11.0" },
];

export const scripts: ScriptItem[] = [
  { command: "npm run dev", description: "Inicia servidor de desenvolvimento" },
  { command: "npm run build", description: "Compila TypeScript e gera build" },
  { command: "npm run preview", description: "Visualiza o build localmente" },
  { command: "npm run lint", description: "Executa ESLint" },
  { command: "npx cypress run", description: "Executa testes E2E" },
  { command: "npx cypress open", description: "Abre Cypress interativo" },
];

export const goodPractices: string[] = [
  "Componentização de UI",
  "Separação de responsabilidades",
  "Tipagem forte com TypeScript",
  "Organização por domínio",
  "Testes end-to-end",
  "Documentação técnica das soluções",
  "Uso de useMemo para otimização de renderização",
];

export const futureImprovements: string[] = [
  "implementação de React Router",
  "adição de testes unitários",
  "criação de Design System compartilhado",
  "implementação de CI/CD",
  "melhoria da cobertura de testes",
];

export const learnings: string[] = [
  "Neste projeto, meu maior desafio foi gerenciar a concorrência de requests no Desafio 4. Aprendi a utilizar promessas como cache para evitar Race Conditions no servidor — armazenando a Promise em andamento em vez de apenas o resultado — algo que não conhecia anteriormente e que mudou minha forma de pensar sobre autenticação assíncrona.",
  "useMemo na prática: entender quando e por que memoizar fez diferença real de performance no Desafio 1, não apenas como conceito teórico.",
  "Code Review com empatia: o Desafio 2 me ensinou a revisar código pensando em quem escreveu — identificar problemas sem julgamento e propor refatorações claras.",
  "Debugging sistemático: o Desafio 3 reforçou que um TypeError em produção exige leitura de stack trace linha a linha. Optional chaining (?.) virou parte permanente do meu toolkit.",
  "Documentar o raciocínio importa: escrever o porquê de cada decisão técnica me ajudou a consolidar o aprendizado e comunicar melhor minhas escolhas.",
];

export const architecturePrinciples: string[] = [
  "componentes reutilizáveis",
  "separação entre dados, tipos e interface",
  "organização clara de diretórios",
  "tipagem forte com TypeScript",
];

export const testCoverage: string[] = [
  "renderização das páginas",
  "funcionamento da sidebar",
  "navegação entre desafios",
  "comportamento do filtro de itens",
  "renderização de componentes principais",
];

export const projectObjectives: string[] = [
  "organização de arquitetura frontend",
  "componentização",
  "análise de código",
  "debugging",
  "documentação técnica",
  "boas práticas com React e TypeScript",
];

export const challenges: ChallengeSection[] = [
  {
    title: "Desafio 1 — Filtro de Itens",
    description:
      "Implementação de um sistema de busca que filtra uma lista de itens em tempo real.",
    sections: [
      {
        heading: "Principais pontos",
        items: [
          { label: "Filtro textual case-insensitive" },
          { label: "Atualização reativa a cada digitação" },
          { label: "Otimização de performance com useMemo", code: true },
          { label: "Componentização da interface" },
        ],
      },
      {
        heading: "Componentes envolvidos",
        items: [
          { label: "SearchInput", code: true },
          { label: "ItemList", code: true },
        ],
      },
    ],
  },
  {
    title: "Desafio 2 — Code Review",
    description:
      "Simulação de análise de Pull Request (feature/user-management → main) com identificação de problemas no código.",
    sections: [
      {
        heading: "Problemas encontrados",
        items: [
          { label: "Mutação direta de estado" },
          { label: "Uso de forceUpdate()", code: true },
          { label: "Falta de boas práticas do React" },
          { label: "Baixa previsibilidade de renderização" },
        ],
      },
      {
        heading: "Solução apresentada",
        items: [
          { label: "Refatoração utilizando Hooks" },
          { label: "Atualização correta de estado" },
          { label: "Código mais declarativo e previsível" },
        ],
      },
    ],
  },
  {
    title: "Desafio 3 — Debug de Erro em Produção",
    description: "Investigação de erro em produção através de stack trace.",
    sections: [
      {
        heading: "Processo de análise",
        items: [
          { label: "leitura do stack trace" },
          { label: "identificação da origem do erro" },
          { label: "análise da possível causa raiz" },
        ],
      },
      {
        heading: "Soluções apresentadas",
        items: [
          { label: "Verificação explícita da variável" },
          { label: "optional chaining (?.)", code: true },
        ],
      },
    ],
  },
  {
    title: "Desafio 4 — Fluxo de Autenticação OAuth com JWT",
    description:
      "Simulação de um fluxo de autenticação para consumo de APIs protegidas.",
    sections: [
      {
        heading: "Conceitos abordados",
        items: [
          { label: "OAuth" },
          { label: "JWT" },
          { label: "cache de token" },
          { label: "renovação automática de token" },
          { label: "suporte a requisições paralelas" },
        ],
      },
    ],
  },
];

export const projectStructure: FileItemProps[] = [
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "folder",
        name: "components",
        children: [
          { type: "folder", name: "CodeBlock" },
          { type: "folder", name: "CodeExample" },
          { type: "folder", name: "CollapsibleSection" },
          { type: "folder", name: "ConversationCard" },
          { type: "folder", name: "DocLinks" },
          { type: "folder", name: "FileTree" },
          { type: "folder", name: "FlowDiagram" },
          { type: "folder", name: "Header" },
          { type: "folder", name: "InfoCard" },
          { type: "folder", name: "ItemList" },
          { type: "folder", name: "LeadsFormPreview" },
          { type: "folder", name: "PageHeader" },
          { type: "folder", name: "Review" },
          { type: "folder", name: "SearchInput" },
          { type: "folder", name: "Sidebar" },
          { type: "folder", name: "StickyTOC" },
          { type: "folder", name: "WeatherWidget" },
        ],
      },
      { type: "folder", name: "data" },
      { type: "folder", name: "pages" },
      { type: "folder", name: "types" },
      { type: "file", name: "App.tsx" },
    ],
  },
  {
    type: "folder",
    name: "cypress",
    children: [{ type: "folder", name: "e2e" }],
  },
];
