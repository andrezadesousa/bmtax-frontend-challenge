import {
  Bug,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { StaticCodeBlock } from "../components/CodeBlock/StaticCodeBlock";
import { PageHeader } from "../components/PageHeader/PageHeader";
import {
  stackTrace,
  buggyCode,
  fixedCode,
  alternativeCode,
} from "../data/challenge3Data";

export function Challenge3() {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      <PageHeader
        title="Desafio 3 — Analise de Erro em Producao"
        description="Nossos analistas de qualidade reportaram uma falha na página de listagem de produtos. Um card reportando o bug foi atribuído a mim com a *Stack Trace* a seguir."
        badges={
          <>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-diff-remove-bg rounded-full">
              <Bug size={16} className="text-diff-remove-line" />
              <span className="text-xs font-medium text-diff-remove-line">
                Bug Report #2
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-light rounded-full">
              <span className="text-xxs font-mono text-primary-medium">
                ProductDisplay.jsx
              </span>
            </div>
          </>
        }
      />

      <div className="space-y-6">
        {/* Stack Trace */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Terminal size={18} className="text-diff-remove-line" />
            <h2 className="text-sm font-semibold text-text-dark">
              Stack Trace Reportada
            </h2>
          </div>

          <div className="border border-diff-remove-border rounded-lg overflow-hidden">
            <div className="bg-diff-remove-bg px-4 py-2 border-b border-diff-remove-border">
              <span className="text-xs font-mono text-diff-remove-line">
                TypeError
              </span>
            </div>
            <pre className="bg-code-bg text-code-text text-xs p-4 overflow-x-auto font-mono leading-relaxed">
              {stackTrace}
            </pre>
          </div>
        </section>

        {/* Identificacao do Problema */}
        <section className="bg-primary-dark text-text-white p-4 md:p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Bug size={20} className="text-primary-light" />
            <h2 className="font-semibold">Identificação da causa</h2>
          </div>

          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-surface-light">
              O erro{" "}
              <code className="bg-primary-medium px-1.5 py-0.5 rounded text-xs">
                Cannot read properties of null (reading 'map')
              </code>{" "}
              acontece quando tentamos executar o metodo{" "}
              <code className="text-primary-light">.map()</code> em uma variavel
              com valor <strong>null</strong> ou <strong>undefined</strong>.
            </p>

            <p className="text-surface-light">
              A stack trace indica que o erro acontece no componente{" "}
              <strong className="text-text-white">ProductDisplay</strong>,
              durante o ciclo de renderizacao (
              <code className="text-primary-light">renderWithHooks</code> e{" "}
              <code className="text-primary-light">mountComponent</code>).
            </p>

            <p className="text-surface-light">
              Ou seja, isso sugere que a prop{" "}
              <code className="text-primary-light">products</code> esta chegando
              como <strong>null</strong> no primeiro render, talvez porque os
              dados ainda estão sendo carregados de uma API.
            </p>
          </div>
        </section>

        {/* Explicacao do Problema */}
        <InfoCard
          icon={<AlertTriangle size={18} className="text-yellow-600" />}
          title="Andreza, por que o erro acontece?"
          variant="warning"
        >
          <p>
            Acontece porque quando o React tenta renderizar o componente,{" "}
            <code className="bg-surface-white px-1 py-0.5 rounded text-xs text-text-dark">
              products.map()
            </code>{" "}
            é executado imediatamente. Se{" "}
            <code className="bg-surface-white px-1 py-0.5 rounded text-xs text-text-dark">
              products
            </code>{" "}
            for <strong>null</strong>, o JavaScript lança um{" "}
            <strong>TypeError</strong> porque <code>.map()</code> só existe em
            arrays.
          </p>
        </InfoCard>

        {/* Codigo com Problema */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-text-dark">
              Código com problema
            </span>
            <ArrowRight size={14} className="text-primary-medium" />
            <span className="text-xs text-diff-remove-line font-medium">
              Causa do erro
            </span>
          </div>

          <StaticCodeBlock
            code={buggyCode}
            filename="ProductDisplay.jsx"
            variant="error"
          />
        </section>

        {/* Solucoes */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={18} className="text-diff-add-line" />
            <h2 className="text-sm font-semibold text-text-dark">
              Minhas soluçõess propostas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Solução 1 */}
            <div className="space-y-3">
              <InfoCard
                icon={<CheckCircle2 size={16} className="text-diff-add-line" />}
                title="Solução 1: Verificação explicita"
                variant="success"
              >
                <p>
                  Adicionar uma verificação antes do <code>.map()</code> assim,
                  podemos garantir que a variável existe e possui elementos.
                  Essa abordagem permite exibir um fallback quando não tem
                  dados.
                </p>
              </InfoCard>

              <StaticCodeBlock
                code={fixedCode}
                filename="ProductDisplay.tsx"
                variant="success"
              />
            </div>

            {/* Solução 2 */}
            <div className="space-y-3">
              <InfoCard
                icon={<CheckCircle2 size={16} className="text-diff-add-line" />}
                title="Solução 2: Optional Chaining"
                variant="success"
              >
                <p className="leading-relaxed">
                  Usar o operador{" "}
                  <code className="bg-surface-white px-1 py-0.5 rounded text-xs font-mono text-text-dark border border-gray-100">
                    ?.
                  </code>{" "}
                  (Optional Chaining) para evitar o erro de forma concisa. É uma
                  abordagem simples e eficaz para casos onde não é necessário um
                  fallback visual imediato, garantindo que o código não "quebre"
                  se os dados forem nulos, uso bastante comum em renderizações
                  condicionais.
                </p>
              </InfoCard>

              <StaticCodeBlock
                code={alternativeCode}
                filename="ProductDisplay.tsx"
                variant="success"
              />
            </div>
          </div>
        </section>

        {/* Resumo */}
        <footer className="bg-surface-light p-4 md:p-5 rounded-lg">
          <h3 className="text-sm font-semibold text-text-dark mb-3">
            Resumo da Análise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start gap-2">
              <Bug
                size={14}
                className="text-diff-remove-line shrink-0 mt-0.5"
              />
              <div>
                <p className="font-medium text-text-dark">Causa</p>
                <p className="text-primary-medium">
                  Chamada de .map() em valor null
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <AlertTriangle
                size={14}
                className="text-yellow-600 shrink-0 mt-0.5"
              />
              <div>
                <p className="font-medium text-text-dark">Impacto</p>
                <p className="text-primary-medium">
                  Página quebra no carregamento inicial
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2
                size={14}
                className="text-diff-add-line shrink-0 mt-0.5"
              />
              <div>
                <p className="font-medium text-text-dark">Correção</p>
                <p className="text-primary-medium">
                  Validar array antes de iterar
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
