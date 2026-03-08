# 🚀 BMTax Frontend Challenge — React + TypeScript

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Cypress](https://img.shields.io/badge/Cypress-15-17202C?logo=cypress)

Projeto desenvolvido como resposta ao desafio técnico da **BMTax**. A aplicação apresenta **quatro desafios de engenharia frontend**, cada um documentado com análises profundas, códigos e linhas de raciocínio.

O objetivo foi demonstrar competências em:

- 🏗️ **Arquitetura:** Organização escalável e componentização.
- 🔍 **Análise:** Code review e identificação de más práticas.
- 🐞 **Debugging:** Investigação de erros em produção e análise de stack trace.
- 🔐 **Segurança:** Implementação de fluxos OAuth JWT com cache.

---

## 🔗 Demo

A aplicação pode ser acessada online:  
👉 [**Visualizar Projeto Live**](https://bmtax-front-end-challenge.web.app/)

---

## 🛠️ Tecnologias e Versões

| Tecnologia     | Versão  |
| :------------- | :------ |
| **React**      | 19.2.0  |
| **TypeScript** | 5.9.3   |
| **Vite**       | 7.3.1   |
| **Tailwind**   | 3.4.17  |
| **Lucide**     | 0.577.0 |
| **Cypress**    | 15.11.0 |

---

## 🧩 Desafios Implementados

### 1. Filtro de Itens

Sistema de busca em tempo real com foco em performance.

- Filtro **case-insensitive**.
- Otimização com `useMemo` para evitar recálculos desnecessários do filtro a cada renderização.

### 2. Code Review

Análise crítica de uma Pull Request simulada.

- Identificação de **mutação direta de estado** e uso indevido de `forceUpdate()`.
- Refatoração completa para **Hooks modernos** e lógica declarativa.

### 3. Debug de Erro em Produção

Investigação de um `TypeError` real através de stack trace.

- Diagnóstico de falha em variáveis nulas/undefined.
- Implementação de defesa com **Optional Chaining (`?.`)** e Nullish Coalescing.

### 4. Fluxo de Autenticação OAuth JWT

Desenvolvimento de um serviço de autenticação _Server-Side_.

- **Cache de Token:** Evita múltiplas chamadas desnecessárias ao `/auth`.
- **Proteção de Race Condition:** Sincronização de requests paralelos.
- **Auto-renew:** Renovação automática 5 minutos antes da expiração.

---

## 📂 Estrutura do Projeto

O projeto utiliza uma abordagem **Component-Driven**:

```text
src/
├── components/    # Componentes modulares e reutilizáveis
├── data/          # Mock data e constantes dos desafios
├── pages/         # Views principais de cada desafio
├── types/         # Definições globais de TypeScript
└── App.tsx        # Orquestração de navegação
```

## 🧪 Testes E2E (Cypress)

Foram implementados testes para garantir a integridade dos fluxos principais:

- Navegação entre desafios via Sidebar.
- Funcionamento do filtro de busca.
- Responsividade e renderização de componentes críticos.

Para rodar os testes:

```bash
# Modo Headless
npx cypress run

# Modo Interativo (Interface)
npx cypress open
```

## 🚀 Como Rodar o Projeto

1. Clonar e Instalar:

```bash
git clone https://github.com/andrezadesousa/bmtax-frontend-challenge
npm install
```

2. Desenvolvimento:

```bash
npm run dev
```

3. Build para Produção:

```bash
npm run build
```

## 🌟 Boas Práticas Aplicadas

- [x] Strong Typing: TypeScript em 100% do código.
- [x] Performance: Memoização em cálculos custosos.
- [x] Clean Code: Nomenclatura semântica e funções puras.
- [x] Segurança: Secrets protegidos por variáveis de ambiente.

---

## 📖 Aprendizados Principais

> "Neste projeto, meu maior desafio foi o Desafio 4, lembrei da pergunta do Lucas na entrevista! Mas gostei, pois aprendi a usar promises como cache para evitar Race Conditions no servidor, armazenando a `Promise` em andamento em vez de apenas o resultado, algo que já conhecia por projetos anteriormente, mas que com estudos mais afundo, mudou minha forma de pensar sobre autenticação assíncrona."

Outros aprendizados que curti ao longo do projeto:

- **Code Review com empatia:** Outro aprendizado que curti bastante foi o Desafio 2, onde tive que analisar uma PR com más práticas, e isso me fez refletir sobre a importância de manter o código limpo e aderente às melhores práticas, mesmo em projetos pequenos.:
- **Debugging sistemático:** O Desafio 3 reforçou que um `TypeError` em produção exige leitura de stack trace linha a linha, não apenas tentativa e erro. Optional chaining (`?.`) virou parte permanente do meu toolkit.
- **Documentar o raciocínio importa:** Escrever o _porquê_ de cada decisão técnica me ajudou a consolidar o aprendizado e comunicar melhor minhas escolhas.
