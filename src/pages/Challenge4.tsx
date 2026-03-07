import {
  BookOpen,
  Code2,
  FileText,
  Key,
  Lightbulb,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { CodeExample } from "../components/CodeExample/CodeExample";
import { CollapsibleSection } from "../components/CollapsibleSection/CollapsibleSection";
import { DocLinks } from "../components/DocLinks/DocLinks";
import { FlowDiagram } from "../components/FlowDiagram/FlowDiagram";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { LeadsFormPreview } from "../components/LeadsFormPreview/LeadsFormPreview";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { StickyTOC } from "../components/StickyTOC/StickyTOC";
import {
  apiClientCode,
  authServiceCode,
  documentationLinks,
  leadsFormCode,
  pseudoCode,
  toc,
} from "../data/challenge4Data";

export function Challenge4() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-10 text-text-dark space-y-4 md:space-y-6">
      <PageHeader
        title="Desafio 4 — Implementacao de Autenticação JWT"
        description="O desafio é desenvolver um componente Server Side em React que consome endpoints protegidos por token JWT. Aqui eu demonstro minha linha de raciocinio, analise da documentacao e a solução final"
        badges={
          <>
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-primary-light/10 rounded-full">
              <Key size={14} className="text-primary-light md:w-4 md:h-4" />
              <span className="text-xxs md:text-xs font-medium text-primary-dark">
                Autenticacao OAuth JWT
              </span>
            </div>
            <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-surface-light rounded-full">
              <Server
                size={12}
                className="text-primary-medium md:w-3.5 md:h-3.5"
              />
              <span className="text-xxs font-mono text-primary-medium">
                Server Side React
              </span>
            </div>
          </>
        }
      />

      <DocLinks links={documentationLinks} />

      <StickyTOC items={toc} />

      {/* 1. Pensamento inicial */}
      <CollapsibleSection
        id="sec-pensamento"
        title="1. Entendendo a documentação: Meu pensamento inicial"
        icon={<Lightbulb size={16} className="text-primary-light shrink-0" />}
      >
        <p className="text-xs md:text-sm leading-relaxed">
          Antes de começar a implementação, o primeiro passo foi entender como
          funciona a autenticação da API demonstrada no desafio. A API utiliza
          um fluxo de autenticação baseado em token. Para acessar os serviços
          transacionais, primeiro precisamos gerar um token utilizando as
          credenciais fornecidas.
        </p>

        <p className="text-xs md:text-sm leading-relaxed">
          Então, devo criar uma forma de autenticar na API usando credenciais,
          gerar um token JWT que dura 1 hora, reutilizar esse token enquanto ele
          for válido e otimizar chamadas à API quando vários endpoints forem
          necessários.
        </p>
      </CollapsibleSection>

      {/* Otimização */}
      <CollapsibleSection
        id="sec-otimizacao"
        title="Minha proposta para otimizar a performance no caso do consumo de múltiplos endpoints da API para a utilização do formulário de leads"
        icon={<Lightbulb size={16} className="text-primary-light shrink-0" />}
      >
        <p className="text-xs md:text-sm leading-relaxed">
          Uma estratégia seria reutilizar o token JWT em memória enquanto ele
          estiver válido, evitando chamadas repetidas ao endpoint de
          autenticação. Além disso, é possível realizar chamadas para diferentes
          endpoints em paralelo utilizando Promise.all, reduzindo o tempo total
          de carregamento do formulário.
        </p>

        <p className="text-xs md:text-sm leading-relaxed">
          Essa abordagem melhora a performance da aplicação e reduz o número de
          requisições desnecessárias à API.
        </p>
      </CollapsibleSection>

      {/* 2. Documentação da API */}
      <CollapsibleSection
        id="sec-documentacao"
        title="2. Analisando a documentação da API"
        icon={<FileText size={16} className="text-primary-medium shrink-0" />}
      >
        <div className="bg-surface-light border rounded-lg p-4 md:p-5 space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm">
            Autenticação para acesso aos serviços transacionais.
          </p>

          <p className="text-xs md:text-sm">
            Este serviço gera um token de acesso para utilizar às APIs
            transacionais.
          </p>

          <div className="bg-black text-white text-xxs md:text-xs px-2 md:px-3 py-1.5 md:py-2 rounded-md w-fit overflow-x-auto max-w-full">
            <code>POST https://api.acme.com/auth</code>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-xs md:text-sm">
              Credenciais necessárias
            </h3>
            <ul className="text-xs md:text-sm list-disc ml-4 md:ml-6 space-y-1">
              <li>
                <strong>access_key</strong> — string
              </li>
              <li>
                <strong>secret_key</strong> — string
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-xs md:text-sm">Exemplo</h3>
              <CodeExample
                code={`{
  "access_key": "DFt7Oqzn...",
  "secret_key": "dNiIFM34..."
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-xs md:text-sm">
                HTTP 200 — Sucesso
              </h3>
              <CodeExample
                code={`{
  "access_token": "string",
  "access_token_expires_in": 3600,
  "refresh_token": "string",
  "refresh_token_expires_in": 86400
}`}
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-xs md:text-sm">
                HTTP 401 — Erro
              </h3>
              <CodeExample
                code={`{
  "code": 401,
  "message": "Unauthenticated."
}`}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Fluxo */}
      <CollapsibleSection
        id="sec-fluxo"
        title="3. Pensando no fluxo da aplicação"
        icon={<Shield size={16} className="text-primary-light shrink-0" />}
      >
        <p className="text-xs md:text-sm">
          Com base na documentação, pensei nesse fluxo para consumir a API,
          seguindo esses passos:
        </p>
        <FlowDiagram />
      </CollapsibleSection>

      {/* 4. Pseudocódigo */}
      <CollapsibleSection
        id="sec-pseudocode"
        title="4. Pseudocódigo da solução"
        icon={<BookOpen size={16} className="text-primary-medium shrink-0" />}
      >
        <CodeExample code={pseudoCode} />
      </CollapsibleSection>

      {/* 5. Implementação */}
      <CollapsibleSection
        id="sec-implementacao"
        title="5. Implementação"
        icon={<Code2 size={16} className="text-primary-light shrink-0" />}
      >
        <p className="text-xs md:text-sm">
          Para organizar a integração com a API, separei a lógica em dois
          serviços:
        </p>

        <ul className="list-disc ml-4 md:ml-6 text-xs md:text-sm space-y-1">
          <li>
            <strong>authService</strong> — responsável por autenticação e
            geração do token JWT.
          </li>
          <li>
            <strong>apiClient</strong> — responsável por centralizar chamadas
            HTTP autenticadas.
          </li>
        </ul>

        <p className="text-xs md:text-sm">
          Acredito que essa separação ajuda a manter responsabilidades claras e
          facilita a reutilização do código.
        </p>

        <InfoCard
          icon={<Server size={16} className="text-primary-light shrink-0" />}
          title="Por que isso funciona no contexto Server Side?"
          variant="info"
        >
          <p className="leading-relaxed">
            Como a aplicação roda no servidor (Next.js Server Component ou Route
            Handler), o{" "}
            <code className="bg-surface-white px-1 rounded">process.env</code>{" "}
            nunca é enviado ao browser — as credenciais ficam protegidas no
            processo Node.js. O cache em memória do módulo (
            <code className="bg-surface-white px-1 rounded">cachedToken</code>)
            também persiste enquanto o servidor estiver rodando, o que significa
            que todos os usuários compartilham o mesmo token válido sem precisar
            gerar um novo a cada requisição.
          </p>
        </InfoCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-xs md:text-sm">
              src/services/authService.ts
            </h3>
            <pre className="bg-code-bg text-code-text text-xxs md:text-xs p-3 md:p-4 rounded-lg overflow-x-auto border border-code-border h-full">
              {authServiceCode}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-xs md:text-sm">
              src/services/apiClient.ts
            </h3>
            <pre className="bg-code-bg text-code-text text-xxs md:text-xs p-3 md:p-4 rounded-lg overflow-x-auto border border-code-border h-full">
              {apiClientCode}
            </pre>
          </div>
        </div>
      </CollapsibleSection>

      {/* 6. Preview do componente */}
      <CollapsibleSection
        id="sec-preview"
        title="6. Preview do componente"
        icon={<Server size={16} className="text-primary-medium shrink-0" />}
      >
        <p className="text-xs md:text-sm">
          Abaixo está um exemplo visual do formulário de cadastro de leads que
          consumiria a API utilizando o{" "}
          <code className="bg-surface-light px-1 rounded">apiRequest</code>.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <LeadsFormPreview />

          <pre className="bg-code-bg text-code-text text-xxs md:text-xs p-3 md:p-4 rounded-lg overflow-x-auto border border-code-border">
            {leadsFormCode}
          </pre>
        </div>
      </CollapsibleSection>

      {/* 7. Decisões técnicas */}
      <CollapsibleSection
        id="sec-decisoes"
        title="7. Decisões técnicas"
        icon={<Shield size={16} className="text-primary-light shrink-0" />}
      >
        <ul className="list-disc ml-4 md:ml-6 text-xs md:text-sm space-y-2">
          <li>
            A autenticação foi separada em um serviço dedicado (
            <code className="bg-surface-light px-1 rounded">authService</code>)
            para centralizar a geração do token JWT.
          </li>

          <li>
            O token é armazenado em memória enquanto estiver válido, evitando
            chamadas repetidas ao endpoint de autenticação.
          </li>

          <li>
            Foi criado um cliente HTTP reutilizável (
            <code className="bg-surface-light px-1 rounded">apiClient</code>)
            para centralizar requisições autenticadas.
          </li>

          <li>
            As credenciais da API são armazenadas em variáveis de ambiente para
            evitar exposição no código.
          </li>
        </ul>
      </CollapsibleSection>

      {/* 8. Otimização de performance */}
      <CollapsibleSection
        id="sec-performance"
        title="8. Otimização de performance"
        icon={<Zap size={16} className="text-primary-light shrink-0" />}
      >
        <p className="text-xs md:text-sm">
          Para otimizar o consumo de múltiplos endpoints da API, algumas
          estratégias podem ser utilizadas:
        </p>

        <ul className="list-disc ml-4 md:ml-6 text-xs md:text-sm space-y-2">
          <li>
            Reutilizar o token JWT enquanto ele estiver válido, evitando
            chamadas repetidas ao endpoint de autenticação.
          </li>

          <li>
            Realizar chamadas para diferentes endpoints em paralelo utilizando{" "}
            <code className="bg-surface-light px-1 rounded">Promise.all</code>.
          </li>

          <li>
            Centralizar requisições em um cliente de API reutilizável, reduzindo
            duplicação de código e melhorando manutenção.
          </li>
        </ul>

        <p className="text-xs md:text-sm">
          Essas estratégias reduzem o número de requisições desnecessárias e
          melhoram o tempo de carregamento do formulário de leads.
        </p>
      </CollapsibleSection>
    </div>
  );
}
