import {
  Key,
  FileText,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  FileCode,
  BookOpen,
  Zap,
  Server,
  RefreshCw,
  ExternalLink,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";

const apiDocumentation = `POST https://api.acme.com/auth

Request Body:
  access_key  - string - Ex.: DFt7Oqzn_LGyYnDGLwX7oA
  secret_key  - string - Ex.: dNiIFM34DSvKIAubw9nfJL7q...

Response (HTTP 200):
  access_token            - string  - Token de acesso
  access_token_expires_in - integer - Tempo de vida em segundos (3600)
  refresh_token           - string  - Token de atualizacao
  refresh_token_expires_in - integer - Tempo de vida em segundos`;

const authServiceCode = `// src/services/authService.ts

// Variaveis em memoria para cache do token
let cachedToken: string | null = null;
let tokenExpiration: number | null = null;

export async function getAuthToken(): Promise<string> {
  const now = Date.now();

  // Se o token ainda esta valido, reutiliza
  if (cachedToken && tokenExpiration && now < tokenExpiration) {
    return cachedToken;
  }

  // Caso contrario, gera um novo token
  const response = await fetch("https://api.acme.com/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.ACME_ACCESS_KEY,
      secret_key: process.env.ACME_SECRET_KEY,
    }),
  });

  if (!response.ok) {
    throw new Error("Falha na autenticacao");
  }

  const data = await response.json();

  // Armazena em cache com margem de seguranca (5 min antes)
  cachedToken = data.access_token;
  tokenExpiration = now + (data.access_token_expires_in - 300) * 1000;

  return cachedToken;
}`;

const apiClientCode = `// src/services/apiClient.ts
import { getAuthToken } from "./authService";

export async function apiRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: unknown
): Promise<T> {
  const token = await getAuthToken();

  const response = await fetch(\`https://api.acme.com\${endpoint}\`, {
    method,
    headers: {
      "Authorization": \`Bearer \${token}\`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(\`Erro na requisicao: \${response.status}\`);
  }

  return response.json();
}`;

const parallelRequestsCode = `// Exemplo de uso no formulario de Leads
// src/app/leads/page.tsx

import { apiRequest } from "@/services/apiClient";

export default async function LeadsPage() {
  // Requisicoes em paralelo para melhor performance
  const [leads, products, regions] = await Promise.all([
    apiRequest("/leads"),
    apiRequest("/products"),
    apiRequest("/regions"),
  ]);

  return (
    <LeadsForm
      leads={leads}
      products={products}
      regions={regions}
    />
  );
}`;

type CodeBlockProps = {
  code: string;
  filename: string;
  variant?: "neutral" | "success";
};

function CodeBlock({ code, filename, variant = "neutral" }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="border border-code-border rounded-lg overflow-hidden">
      <div
        className={`flex items-center gap-2 px-4 py-2 border-b ${
          variant === "success"
            ? "bg-diff-add-bg border-diff-add-border"
            : "bg-code-header border-code-border"
        }`}
      >
        <FileCode
          size={14}
          className={
            variant === "success"
              ? "text-diff-add-line"
              : "text-code-lineNumber"
          }
        />
        <span
          className={`text-xs font-mono ${
            variant === "success" ? "text-diff-add-line" : "text-code-text"
          }`}
        >
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

type StepCardProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

function StepCard({ number, title, children }: StepCardProps) {
  return (
    <div className="border-l-4 border-l-primary-light bg-surface-light p-4 md:p-5 rounded-r-lg">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-light text-text-white text-xs font-bold">
          {number}
        </span>
        <h3 className="text-sm font-semibold text-text-dark">{title}</h3>
      </div>
      <div className="text-sm text-primary-medium leading-relaxed">
        {children}
      </div>
    </div>
  );
}

type ThoughtBubbleProps = {
  children: React.ReactNode;
};

function ThoughtBubble({ children }: ThoughtBubbleProps) {
  return (
    <div className="bg-surface-light border border-primary-light/30 rounded-lg p-4 relative">
      <div className="absolute -left-2 top-4 w-4 h-4 bg-surface-light border-l border-b border-primary-light/30 rotate-45" />
      <p className="text-sm text-primary-medium italic leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export function Challenge4() {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      {/* Header */}
      <header className="mb-6 md:mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-light/10 rounded-full">
            <Key size={16} className="text-primary-light" />
            <span className="text-xs font-medium text-primary-dark">
              Autenticacao OAuth JWT
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-light rounded-full">
            <Server size={14} className="text-primary-medium" />
            <span className="text-xxs font-mono text-primary-medium">
              Server Side React
            </span>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
          Desafio 4 — Implementacao de Autenticacao JWT
        </h1>

        <p className="text-sm text-primary-medium max-w-3xl leading-relaxed">
          Fui designada para desenvolver um componente Server Side em React que
          consome endpoints protegidos por token JWT. Aqui documento minha linha
          de raciocinio desde a analise da documentacao ate a solucao final.
        </p>
      </header>

      <div className="space-y-6">
        {/* Meu Pensamento Inicial */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={18} className="text-primary-light" />
            <h2 className="text-sm font-semibold text-text-dark">
              Meu Pensamento Inicial
            </h2>
          </div>

          <ThoughtBubble>
            "Nunca trabalhei com autenticacao OAuth JWT antes... Vou comecar
            lendo a documentacao da API para entender o fluxo. Pelo que vi, a
            API exige um token que dura 1 hora. Preciso entender como gerar esse
            token e como reutiliza-lo de forma eficiente."
          </ThoughtBubble>
        </section>

        {/* Documentacao da API */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} className="text-primary-medium" />
            <h2 className="text-sm font-semibold text-text-dark">
              Analisando a Documentacao da API
            </h2>
          </div>

          <div className="border border-code-border rounded-lg overflow-hidden mb-4">
            <div className="bg-code-header px-4 py-2 border-b border-code-border flex items-center gap-2">
              <BookOpen size={14} className="text-code-lineNumber" />
              <span className="text-xs text-code-text font-mono">
                API Documentation
              </span>
            </div>
            <pre className="bg-code-bg text-code-text text-xs p-4 overflow-x-auto font-mono leading-relaxed">
              {apiDocumentation}
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 p-3 bg-surface-light rounded-lg">
              <Clock size={16} className="text-primary-light shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-text-dark">
                  Token Expira em 1 Hora
                </p>
                <p className="text-xxs text-primary-medium">
                  access_token_expires_in = 3600 segundos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-surface-light rounded-lg">
              <RefreshCw
                size={16}
                className="text-primary-light shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs font-medium text-text-dark">
                  Refresh Token Disponivel
                </p>
                <p className="text-xxs text-primary-medium">
                  Para renovar sem reautenticar
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pesquisa e Referencias */}
        <section className="bg-primary-dark text-text-white p-4 md:p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-primary-light" />
            <h2 className="font-semibold">Pesquisei na Documentacao Oficial</h2>
          </div>

          <p className="text-sm text-surface-light mb-4 leading-relaxed">
            Como sou junior e queria fazer da forma correta, pesquisei sobre
            boas praticas de autenticacao JWT em aplicacoes Server Side:
          </p>

          <div className="space-y-3">
            {[
              {
                title: "Next.js Docs - Server Actions",
                url: "nextjs.org/docs/app/building-your-application/data-fetching",
                desc: "Aprendi que Server Components sao ideais para guardar secrets",
              },
              {
                title: "MDN - HTTP Authentication",
                url: "developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",
                desc: "Entendi o padrao Bearer Token no header Authorization",
              },
              {
                title: "OAuth 2.0 - RFC 6749",
                url: "oauth.net/2/",
                desc: "Compreendi o fluxo Client Credentials para APIs",
              },
            ].map((ref, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-primary-medium/30 rounded-lg"
              >
                <ExternalLink
                  size={14}
                  className="text-primary-light shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs font-medium text-text-white">
                    {ref.title}
                  </p>
                  <p className="text-xxs text-surface-light">{ref.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problema Identificado */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-yellow-600" />
            <h2 className="text-sm font-semibold text-text-dark">
              Problema que Identifiquei
            </h2>
          </div>

          <div className="border-l-4 border-l-yellow-500 bg-yellow-50 p-4 md:p-5 rounded-r-lg mb-4">
            <p className="text-sm text-primary-medium leading-relaxed mb-3">
              Se eu gerar um novo token para cada requisicao, vou ter varios
              problemas:
            </p>
            <ul className="space-y-2 text-sm text-primary-medium">
              {[
                "Chamadas desnecessarias ao endpoint /auth",
                "Maior latencia em cada requisicao",
                "Risco de rate limiting pela API",
                "Desperdicio de recursos do servidor",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ThoughtBubble>
            "Entao preciso de um mecanismo de cache para reutilizar o token
            enquanto ele estiver valido. Como a aplicacao e Server Side, posso
            guardar em memoria no servidor de forma segura."
          </ThoughtBubble>
        </section>

        {/* Minha Linha de Raciocinio */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <ArrowRight size={18} className="text-primary-light" />
            <h2 className="text-sm font-semibold text-text-dark">
              Minha Linha de Raciocinio
            </h2>
          </div>

          <div className="space-y-4">
            <StepCard number={1} title="Criar um servico de autenticacao">
              <p>
                Centralizar a logica de geracao e cache do token em um unico
                arquivo. Isso facilita manutencao e evita duplicacao de codigo.
              </p>
            </StepCard>

            <StepCard number={2} title="Implementar cache em memoria">
              <p>
                Armazenar o token e sua data de expiracao em variaveis do
                modulo. Como e Server Side, essas variaveis persistem entre
                requisicoes.
              </p>
            </StepCard>

            <StepCard number={3} title="Verificar validade antes de usar">
              <p>
                Antes de cada requisicao, checar se o token ainda e valido. Se
                sim, reutiliza. Se nao, gera um novo automaticamente.
              </p>
            </StepCard>

            <StepCard number={4} title="Adicionar margem de seguranca">
              <p>
                Renovar o token 5 minutos antes de expirar para evitar erros de
                timing em requisicoes longas.
              </p>
            </StepCard>
          </div>
        </section>

        {/* Implementacao */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={18} className="text-diff-add-line" />
            <h2 className="text-sm font-semibold text-text-dark">
              Minha Implementacao
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-primary-medium mb-3">
                <strong className="text-text-dark">
                  Servico de Autenticacao:
                </strong>{" "}
                Responsavel por gerar e cachear o token JWT.
              </p>
              <CodeBlock
                code={authServiceCode}
                filename="src/services/authService.ts"
                variant="success"
              />
            </div>

            <div>
              <p className="text-sm text-primary-medium mb-3">
                <strong className="text-text-dark">Cliente da API:</strong>{" "}
                Wrapper que automaticamente inclui o token em todas as
                requisicoes.
              </p>
              <CodeBlock
                code={apiClientCode}
                filename="src/services/apiClient.ts"
                variant="success"
              />
            </div>
          </div>
        </section>

        {/* Otimizacao de Performance */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} className="text-primary-light" />
            <h2 className="text-sm font-semibold text-text-dark">
              Otimizacao para Multiplos Endpoints
            </h2>
          </div>

          <div className="border-l-4 border-l-diff-add-border bg-diff-add-bg/20 p-4 md:p-5 rounded-r-lg mb-4">
            <p className="text-sm text-primary-medium leading-relaxed">
              Para o formulario de Leads que consome multiplos endpoints, propus
              usar{" "}
              <code className="bg-surface-white px-1.5 py-0.5 rounded text-xs text-text-dark">
                Promise.all
              </code>{" "}
              para executar as requisicoes em paralelo. Isso reduz
              significativamente o tempo de carregamento da pagina.
            </p>
          </div>

          <CodeBlock
            code={parallelRequestsCode}
            filename="src/app/leads/page.tsx"
            variant="success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div className="flex items-start gap-2 p-3 border border-diff-remove-border/30 bg-diff-remove-bg/10 rounded-lg">
              <span className="text-xs font-medium text-diff-remove-line">
                Sem otimizacao:
              </span>
              <span className="text-xs text-primary-medium">
                3 requisicoes sequenciais = 900ms
              </span>
            </div>
            <div className="flex items-start gap-2 p-3 border border-diff-add-border/30 bg-diff-add-bg/10 rounded-lg">
              <span className="text-xs font-medium text-diff-add-line">
                Com Promise.all:
              </span>
              <span className="text-xs text-primary-medium">
                3 requisicoes paralelas = 300ms
              </span>
            </div>
          </div>
        </section>

        {/* Seguranca */}
        <section className="bg-surface-light p-4 md:p-5 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-primary-light" />
            <h2 className="text-sm font-semibold text-text-dark">
              Consideracoes de Seguranca
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                title: "Credenciais no Servidor",
                desc: "access_key e secret_key ficam em variaveis de ambiente, nunca expostas ao cliente",
              },
              {
                title: "Token em Memoria",
                desc: "Cache do token fica no servidor, inacessivel pelo navegador",
              },
              {
                title: "HTTPS Obrigatorio",
                desc: "Todas as requisicoes devem usar HTTPS para proteger o token em transito",
              },
              {
                title: "Margem de Seguranca",
                desc: "Renovacao 5 min antes evita tokens expirados em requisicoes longas",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  size={14}
                  className="text-diff-add-line shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs font-medium text-text-dark">
                    {item.title}
                  </p>
                  <p className="text-xxs text-primary-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusao */}
        <footer className="bg-primary-dark text-text-white p-4 md:p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Conclusao</h3>
          <p className="text-sm text-surface-light leading-relaxed mb-4">
            Mesmo sendo minha primeira implementacao de OAuth JWT, consegui
            desenvolver uma solucao que:
          </p>
          <ul className="space-y-2 text-sm text-surface-light">
            {[
              "Reutiliza o token enquanto valido (economia de recursos)",
              "Renova automaticamente quando necessario",
              "Mantem as credenciais seguras no servidor",
              "Otimiza performance com requisicoes paralelas",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2
                  size={14}
                  className="text-diff-add-border shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-xs text-surface-light mt-4 pt-4 border-t border-primary-medium">
            Desenvolvido por{" "}
            <strong className="text-text-white">Andreza</strong> — Junior
            Developer aprendendo e documentando cada passo do processo.
          </p>
        </footer>
      </div>
    </div>
  );
}
