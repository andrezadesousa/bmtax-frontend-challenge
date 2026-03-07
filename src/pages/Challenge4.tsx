import {
  Key,
  FileText,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Zap,
  Server,
  RefreshCw,
  ExternalLink,
  Clock,
  Shield,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { StaticCodeBlock } from "../components/CodeBlock/StaticCodeBlock";
import { StepCard } from "../components/StepCard/StepCard";
import { ThoughtBubble } from "../components/ThoughtBubble/ThoughtBubble";
import {
  apiDocumentation,
  authServiceCode,
  apiClientCode,
  envExampleCode,
  hardcodedCredentialsCode,
  envUsageCode,
  leadsPageFullCode,
} from "../data/challenge4Data";

export function Challenge4() {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      <PageHeader
        title="Desafio 4 — Implementacao de Autenticacao JWT"
        description="Fui designada para desenvolver um componente Server Side em React que consome endpoints protegidos por token JWT. Aqui documento minha linha de raciocinio desde a analise da documentacao ate a solucao final."
        badges={
          <>
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
          </>
        }
      />

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
                title: "React Docs - Server Components",
                url: "react.dev/reference/rsc/server-components",
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

            <StepCard number={5} title="Usar o refresh token">
              <p>
                Quando o access_token expirar, usar o refresh_token para
                renova-lo sem precisar reautenticar com access_key e secret_key.
                So volta ao fluxo completo se o refresh_token tambem tiver
                expirado.
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
              <StaticCodeBlock
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
              <StaticCodeBlock
                code={apiClientCode}
                filename="src/services/apiClient.ts"
                variant="success"
              />
            </div>
          </div>
        </section>

        {/* Variaveis de Ambiente */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-yellow-600" />
            <h2 className="text-sm font-semibold text-text-dark">
              Variaveis de Ambiente — Sim, sao obrigatorias
            </h2>
          </div>

          <ThoughtBubble>
            "Espera — se eu preciso de access_key e secret_key no codigo, onde
            coloco esses valores? Direto no arquivo .ts? Nao, isso e perigoso.
            Aprendi que credenciais nunca devem entrar no repositorio."
          </ThoughtBubble>

          <div className="mt-4 space-y-3">
            <p className="text-xs font-medium text-diff-remove-line uppercase tracking-wide">
              Forma errada — credencial hardcoded
            </p>
            <StaticCodeBlock
              code={hardcodedCredentialsCode}
              filename="authService.ts (não fazer isso)"
              variant="error"
            />
          </div>

          <div className="mt-4 space-y-3">
            <p className="text-xs font-medium text-diff-add-line uppercase tracking-wide">
              Forma certa — ler do ambiente
            </p>
            <StaticCodeBlock
              code={envUsageCode}
              filename="authService.ts"
              variant="success"
            />
          </div>

          <div className="mt-4 border-l-4 border-l-primary-light bg-surface-light p-4 rounded-r-lg">
            <p className="text-xs font-semibold text-text-dark mb-2">
              Como configurar o .env
            </p>
            <StaticCodeBlock
              code={envExampleCode}
              filename=".env"
              variant="neutral"
            />
            <ul className="mt-3 space-y-1.5 text-xs text-primary-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={13}
                  className="text-diff-add-line shrink-0 mt-0.5"
                />
                <span>
                  No servidor Node.js, o{" "}
                  <code className="bg-surface-white px-1 rounded">
                    process.env
                  </code>{" "}
                  le as variaveis do arquivo{" "}
                  <code className="bg-surface-white px-1 rounded">.env</code>{" "}
                  via biblioteca como{" "}
                  <code className="bg-surface-white px-1 rounded">dotenv</code>{" "}
                  — as credenciais ficam somente no servidor.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={13}
                  className="text-diff-add-line shrink-0 mt-0.5"
                />
                <span>
                  O arquivo{" "}
                  <code className="bg-surface-white px-1 rounded">.env</code>{" "}
                  deve estar no{" "}
                  <code className="bg-surface-white px-1 rounded">
                    .gitignore
                  </code>{" "}
                  — as credenciais nunca entram no repositorio.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={13}
                  className="text-diff-add-line shrink-0 mt-0.5"
                />
                <span>
                  Em producao, as credenciais sao configuradas diretamente nas
                  variaveis de ambiente da plataforma de deploy — sem nenhum
                  arquivo.
                </span>
              </li>
            </ul>
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

          <StaticCodeBlock
            code={leadsPageFullCode}
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
              "Usa o refresh_token para renovar sem reautenticar",
              "Mantem as credenciais em variaveis de ambiente (.env.local)",
              "Otimiza performance com requisicoes paralelas (Promise.all)",
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
