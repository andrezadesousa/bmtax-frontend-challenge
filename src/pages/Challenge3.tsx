import {
  Bug,
  AlertTriangle,
  CheckCircle2,
  FileCode,
  Terminal,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const stackTrace = `TypeError: Cannot read properties of null (reading 'map')
  at ProductDisplay (http://localhost:3000/static/js/main.chunk.js:XXX:YY)
  at renderWithHooks (http://localhost:3000/static/js/vendors~main.chunk.js:AAA:BB)
  at mountComponent (http://localhost:3000/static/js/vendors~main.chunk.js:BBB:CC)
  ... outras linhas omitidas`;

const buggyCode = `function ProductDisplay({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`;

const fixedCode = `function ProductDisplay({ products }) {
  // Verifica se products existe antes de iterar
  if (!products || products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`;

const alternativeCode = `function ProductDisplay({ products }) {
  return (
    <div>
      {/* Optional chaining evita erro se products for null */}
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`;

type CodeBlockProps = {
  code: string;
  filename: string;
  variant?: "error" | "success" | "neutral";
};

function CodeBlock({ code, filename, variant = "neutral" }: CodeBlockProps) {
  const lines = code.split("\n");

  const headerColors = {
    error: "bg-diff-remove-bg border-diff-remove-border",
    success: "bg-diff-add-bg border-diff-add-border",
    neutral: "bg-code-header border-code-border",
  };

  const labelColors = {
    error: "text-diff-remove-line",
    success: "text-diff-add-line",
    neutral: "text-code-text",
  };

  return (
    <div className="border border-code-border rounded-lg overflow-hidden">
      <div
        className={`flex items-center gap-2 px-4 py-2 border-b ${headerColors[variant]}`}
      >
        <FileCode size={14} className={labelColors[variant]} />
        <span className={`text-xs font-mono ${labelColors[variant]}`}>
          {filename}
        </span>
      </div>

      <div className="bg-code-bg overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx}>
                <td className="w-8 px-2 py-0.5 text-right text-code-lineNumber select-none border-r border-code-border">
                  {idx + 1}
                </td>
                <td className="px-3 py-0.5 whitespace-pre text-code-text">
                  {line || " "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  variant?: "error" | "success" | "warning" | "info";
};

function InfoCard({ icon, title, children, variant = "info" }: InfoCardProps) {
  const colors = {
    error: "border-l-diff-remove-border bg-diff-remove-bg/10",
    success: "border-l-diff-add-border bg-diff-add-bg/10",
    warning: "border-l-yellow-500 bg-yellow-50",
    info: "border-l-primary-light bg-surface-light",
  };

  return (
    <div className={`border-l-4 ${colors[variant]} p-4 md:p-5 rounded-r-lg`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-sm font-semibold text-text-dark">{title}</h3>
      </div>
      <div className="text-sm text-primary-medium leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function Challenge3() {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-diff-remove-bg rounded-full">
            <Bug size={16} className="text-diff-remove-line" />
            <span className="text-xs font-medium text-diff-remove-line">
              Bug Report #127
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-light rounded-full">
            <span className="text-xxs font-mono text-primary-medium">
              ProductDisplay.jsx
            </span>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
          Desafio 3 — Analise de Erro em Producao
        </h1>

        <p className="text-sm text-primary-medium max-w-3xl leading-relaxed">
          O time de QA reportou uma falha na pagina de listagem de produtos. Um
          card com a stack trace foi atribuido a mim para analise. Abaixo esta a
          investigacao completa do erro, identificacao da causa raiz e a
          correcao proposta.
        </p>
      </header>

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
            <h2 className="font-semibold">Identificacao da Causa</h2>
          </div>

          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-surface-light">
              O erro{" "}
              <code className="bg-primary-medium px-1.5 py-0.5 rounded text-xs">
                Cannot read properties of null (reading 'map')
              </code>{" "}
              ocorre quando tentamos executar o metodo{" "}
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
              Isso sugere que a prop{" "}
              <code className="text-primary-light">products</code> esta chegando
              como <strong>null</strong> no primeiro render, provavelmente
              porque os dados ainda estao sendo carregados de uma API.
            </p>
          </div>
        </section>

        {/* Explicacao do Problema */}
        <InfoCard
          icon={<AlertTriangle size={18} className="text-yellow-600" />}
          title="Por que o erro acontece?"
          variant="warning"
        >
          <p>
            Quando o React tenta renderizar o componente,{" "}
            <code className="bg-surface-white px-1 py-0.5 rounded text-xs text-text-dark">
              products.map()
            </code>{" "}
            e executado imediatamente. Se{" "}
            <code className="bg-surface-white px-1 py-0.5 rounded text-xs text-text-dark">
              products
            </code>{" "}
            for <strong>null</strong>, o JavaScript lanca um{" "}
            <strong>TypeError</strong> porque <code>.map()</code> so existe em
            arrays.
          </p>
        </InfoCard>

        {/* Codigo com Problema */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-text-dark">
              Codigo com Problema
            </span>
            <ArrowRight size={14} className="text-primary-medium" />
            <span className="text-xs text-diff-remove-line font-medium">
              Causa do erro
            </span>
          </div>

          <CodeBlock
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
              Solucoes Propostas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Solucao 1 */}
            <div className="space-y-3">
              <InfoCard
                icon={<CheckCircle2 size={16} className="text-diff-add-line" />}
                title="Solucao 1: Verificacao Explicita"
                variant="success"
              >
                <p>
                  Adicionar uma verificacao antes do <code>.map()</code> para
                  garantir que a variavel existe e possui elementos. Essa
                  abordagem permite exibir um fallback quando nao ha dados.
                </p>
              </InfoCard>

              <CodeBlock
                code={fixedCode}
                filename="ProductDisplay.tsx"
                variant="success"
              />
            </div>

            {/* Solucao 2 */}
            <div className="space-y-3">
              <InfoCard
                icon={<CheckCircle2 size={16} className="text-diff-add-line" />}
                title="Solucao 2: Optional Chaining"
                variant="success"
              >
                <p>
                  Usar o operador{" "}
                  <code className="bg-surface-white px-1 py-0.5 rounded text-xs text-text-dark">
                    ?.
                  </code>{" "}
                  (optional chaining) para evitar o erro de forma concisa.
                  Simples e eficaz para casos onde nao precisa de fallback
                  visual.
                </p>
              </InfoCard>

              <CodeBlock
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
            Resumo da Analise
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
                  Pagina quebra no carregamento inicial
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2
                size={14}
                className="text-diff-add-line shrink-0 mt-0.5"
              />
              <div>
                <p className="font-medium text-text-dark">Correcao</p>
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
