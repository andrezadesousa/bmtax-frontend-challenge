# BMTax — Frontend Challenge

Projeto desenvolvido como resposta ao processo seletivo da BMTax. Apresenta 4 desafios técnicos, cada um documentado em sua própria página com código, explicações e linha de raciocínio.

---

## Tecnologias

| Tecnologia   | Versão  |
| ------------ | ------- |
| React        | 19.2.0  |
| TypeScript   | 5.9.3   |
| Vite         | 7.3.1   |
| Tailwind CSS | 3.4.17  |
| Lucide React | 0.577.0 |
| Cypress      | 15.11.0 |

---

## Desafios

### Desafio 1 — Filtro de Itens

Sistema de busca que filtra uma lista de itens em tempo real. Utiliza `useState` para controlar o input e `useMemo` para evitar recálculos desnecessários do filtro. A busca é case-insensitive e reativa a cada tecla digitada.

### Desafio 2 — Code Review

Análise de uma Pull Request fictícia (`feature/user-management → main`) com identificação de problemas: mutação direta de estado, uso de `forceUpdate()` e ausência de boas práticas do React. Apresenta o código original com problemas e a versão refatorada com Hooks.

### Desafio 3 — Debug de Erro em Produção

Investigação de um `TypeError: Cannot read properties of null` em produção. Inclui análise do stack trace, identificação da causa raiz e duas soluções implementadas: verificação explícita e optional chaining (`?.`).

### Desafio 4 — Autenticação OAuth JWT

Implementação de um serviço de autenticação com cache de token, renovação automática e suporte a requisições paralelas. Documenta o raciocínio, pseudocódigo, fluxo da aplicação e as decisões técnicas tomadas.

---

## Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── CodeBlock/
│   ├── CollapsibleSection/
│   ├── ConversationCard/
│   ├── DocLinks/
│   ├── FlowDiagram/
│   ├── Header/
│   ├── InfoCard/
│   ├── ItemList/
│   ├── LeadsFormPreview/
│   ├── PageHeader/
│   ├── Review/
│   ├── SearchInput/
│   ├── Sidebar/
│   ├── StickyTOC/
│   └── WeatherWidget/
├── data/              # Dados e constantes de cada desafio
├── pages/             # Páginas de cada desafio + Home
├── types/             # Tipagens TypeScript
└── App.tsx            # Roteamento e controle de navegação
cypress/
└── e2e/               # Testes end-to-end por desafio
```

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar testes E2E
npx cypress run

# Abrir Cypress no modo interativo
npx cypress open
```

---

## Scripts Disponíveis

| Script            | Descrição                                     |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento          |
| `npm run build`   | Compila TypeScript e gera o build de produção |
| `npm run lint`    | Executa o ESLint no projeto                   |
| `npm run preview` | Visualiza o build de produção localmente      |

---

## Autora

**Andreza de Sousa** — Desenvolvedora Front-end Júnior

- [GitHub](https://github.com/andrezadesousa)
- [LinkedIn](https://www.linkedin.com/in/sousa-andreza/)
