import { MessageSquare } from "lucide-react";
import { CodeBlock } from "../components/CodeBlock/CodeBlock";
import { ReviewCard } from "../components/Review/ReviewCard";
import { PullRequestHeader } from "../components/Review/PullRequestHeader";
import { originalCode, fixedCode, reviewItems } from "../data/reviewData";

const GITHUB_URL =
  "https://github.com/andrezadesousa/bmtax-frontend-challenge/blob/main/src/pages/Challenge2.tsx";

export function Challenge2({ onBack }: { onBack?: () => void }) {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      <PullRequestHeader
        onBack={onBack}
        githubUrl={GITHUB_URL}
        prNumber="01"
        sourceBranch="feature/user-management"
        targetBranch="main"
        title="Desafio 2 — Code Review de UserManagement"
        description={
          <>
            Seu colega solicitou a avaliação de uma Pull Request para que ele
            possa seguir com o deploy para os testes em HML. Abaixo está minha
            análise do componente{" "}
            <code className="bg-surface-light px-1 rounded">
              UserManagement
            </code>
            , destacando problemas encontrados, impactos potenciais e sugestões
            de melhoria seguindo boas práticas do React.
          </>
        }
      />

      {/* Review Comments */}
      <section className="mb-6">
        <div className="bg-primary-dark text-text-white p-4 md:p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare size={18} className="text-primary-light" />
            <h2 className="text-sm font-semibold">
              Análise da Pull Request do meu colega, Lucas
            </h2>
          </div>

          <p className="text-xs md:text-sm leading-relaxed mb-4 text-surface-light">
            Então, eu revisei a implementação e identifiquei alguns pontos que
            podem gerar problemas com a renderização, manutenção do estado e
            previsibilidade do comportamento do React. A lógica até pode parecer
            funcional a primeira vista, mas identifiquei que está quebrando
            regras fundamentais da imutabilidade do react. Por enquanto, eu não
            recomendo o merge dessa PR sem antes corrigir como o estado está
            sendo manipulado, tá? Abaixo estão os principais "problemas" que eu
            encontrei
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {reviewItems.map((item, idx) => (
              <ReviewCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Code Diff - GitHub */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[600px]">
        <CodeBlock
          code={originalCode}
          type="original"
          filename="UserManagement.jsx"
        />
        <CodeBlock
          code={fixedCode}
          type="fixed"
          filename="UserManagement.tsx"
        />
      </section>

      <footer className="mt-4 flex flex-wrap items-center gap-4 text-xs text-primary-medium">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-diff-add-bg border border-diff-add-border" />
          <span>Adições</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-diff-remove-bg border border-diff-remove-border" />
          <span>Remoções</span>
        </div>
        <div className="ml-auto text-xxs">
          Revisado por <strong className="text-primary-dark">Andreza</strong>
        </div>
      </footer>
    </div>
  );
}
