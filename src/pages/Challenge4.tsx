import { FileText, Key, Lightbulb, Server, Shield } from "lucide-react";
import { CodeExample } from "../components/CodeExample/CodeExample";
import { FlowDiagram } from "../components/FlowDiagram/FlowDiagram";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { LeadsFormPreview } from "../components/LeadsFormPreview/LeadsFormPreview";

export function Challenge4() {
  return (
    <div className="max-w-5xl mx-auto p-10 text-text-dark space-y-10">
      <PageHeader
        title="Desafio 4 — Implementacao de Autenticação JWT"
        description="O desafio é desenvolver um componente Server Side em React que consome endpoints protegidos por token JWT. Aqui eu demonstro desde o entendimento documento minha linha de raciocinio desde a analise da documentacao ate a solução final"
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

      <section className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={18} className="text-primary-light" />
          <h2 className="text-sm font-semibold text-text-dark">
            1. Entendendo a documentação: Meu pensamento inicial
          </h2>
        </div>

        <p className="text-sm leading-relaxed">
          Antes de começar a implementação, o primeiro passo foi entender como
          funciona a autenticação da API demonstrada no desafio. A API utiliza
          um fluxo de autenticação baseado em token. Para acessar os serviços
          transacionais, primeiro precisamos gerar um token utilizando as
          credenciais fornecidas.
        </p>

        <p className="text-sm leading-relaxed">
          Então, devo criar uma forma de autenticar na API usando credenciais,
          gerar um token JWT que dura 1 hora, reutilizar esse token enquanto ele
          for válido e otimizar chamadas à API quando vários endpoints forem
          necessários.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={18} className="text-primary-light" />
          <h2 className="text-sm font-semibold text-text-dark">
            Minha proposta para otimizar a performance no caso do consumo de
            múltiplos endpoints da API para a utilização do formulário de leads
          </h2>
        </div>

        <p className="text-sm leading-relaxed">
          Uma estratégia seria reutilizar o token JWT em memória enquanto ele
          estiver válido, evitando chamadas repetidas ao endpoint de
          autenticação. Além disso, é possível realizar chamadas para diferentes
          endpoints em paralelo utilizando Promise.all, reduzindo o tempo total
          de carregamento do formulário.
        </p>

        <p className="text-sm leading-relaxed">
          Essa abordagem melhora a performance da aplicação e reduz o número de
          requisições desnecessárias à API.
        </p>
      </section>

      {/* DOCUMENTAÇÃO DA API */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText size={18} className="text-primary-medium" />
          <h2 className="text-sm font-semibold text-text-dark">
            2. Analisando a documentação da API
          </h2>
        </div>

        <div className="bg-surface-light border rounded-lg p-6 space-y-4">
          <p className="text-sm">
            Autenticação para acesso aos serviços transacionais.
          </p>

          <p className="text-sm">
            Este serviço gera um token de acesso para utilizar às APIs
            transacionais.
          </p>

          <div className="bg-black text-white text-xs px-3 py-2 rounded-md w-fit">
            POST https://api.acme.com/auth
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Credenciais necessárias</h3>

            <ul className="text-sm list-disc ml-6 space-y-1">
              <li>
                <strong>access_key</strong> — string
              </li>
              <li>
                <strong>secret_key</strong> — string
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Exemplo</h3>

            <CodeExample
              code={`{
  "access_key": "DFt7Oqzn_LGyYnDGLwX7oA",
  "secret_key": "dNiIFM34DSvKIAubw9nfJL7qrFWFoYKLSeHTPVOyNcEBw-7oTROVK3mq5mbzR_h_emcxZAaWyjmFsd7TVdeBmZ"
}`}
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm">
              Resposta de sucesso (HTTP 200)
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
            <h3 className="font-semibold text-sm">Possível erro (HTTP 401)</h3>

            <CodeExample
              code={`{
  "code": 401,
  "message": "Unauthenticated."
}`}
            />
          </div>
        </div>
      </section>

      {/* RACIOCÍNIO */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={18} className="text-primary-light" />
          <h2 className="text-sm font-semibold text-text-dark">
            3. Pensando no fluxo da aplicação
          </h2>
        </div>

        <p className="text-sm">
          Com base na documentação, o fluxo esperado para consumir a API deve
          seguir os seguintes passos:
        </p>

        <FlowDiagram />
      </section>

      {/* PSEUDOCODE */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Pseudocódigo da solução</h2>

        <CodeExample
          code={`function authenticate() {

  send POST request to /auth

  body = {
    access_key,
    secret_key
  }

  if response is 200:
      store access_token
      return token

  if response is 401:
      show authentication error
}

function submitLeadForm(formData) {

  token = authenticate()

  send POST request to /leads
  body = formData
  using Authorization: Bearer token
}
`}
        />
      </section>

      {/* ===================================================== */}
      {/* 5. IMPLEMENTAÇÃO */}
      {/* ===================================================== */}

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">5. Implementação</h2>

        <p className="text-sm">
          Para organizar a integração com a API, separei a lógica em dois
          serviços:
        </p>

        <ul className="list-disc ml-6 text-sm space-y-1">
          <li>
            <strong>authService</strong> — responsável por autenticação e
            geração do token JWT.
          </li>
          <li>
            <strong>apiClient</strong> — responsável por centralizar chamadas
            HTTP autenticadas.
          </li>
        </ul>

        <p className="text-sm">
          Essa separação ajuda a manter responsabilidades claras e facilita a
          reutilização do código.
        </p>

        {/* Nota Server Side */}
        <div className="bg-primary-light/10 border border-primary-light/30 rounded-lg p-4 text-sm space-y-2">
          <p className="font-semibold text-primary-dark text-xs uppercase tracking-wide">
            Por que isso funciona no contexto Server Side?
          </p>
          <p className="leading-relaxed">
            Como a aplicação roda no servidor (Next.js Server Component ou Route
            Handler), o <code>process.env</code> nunca é enviado ao browser — as
            credenciais ficam protegidas no processo Node.js. O cache em memória
            do módulo (<code>cachedToken</code>) também persiste enquanto o
            servidor estiver rodando, o que significa que todos os usuários
            compartilham o mesmo token válido sem precisar gerar um novo a cada
            requisição.
          </p>
        </div>

        {/* authService */}

        <div className="space-y-2">
          <h3 className="font-semibold text-sm">src/services/authService.ts</h3>

          <pre className="bg-code-bg text-code-text text-xs p-4 rounded-lg overflow-x-auto border border-code-border">
            {`// src/services/authService.ts

// Cache em memória (válido enquanto o servidor estiver rodando)
let cachedToken: string | null = null;
let tokenExpiration: number | null = null;

export async function getAuthToken(): Promise<string> {
  const now = Date.now();

  // reutiliza token se ainda estiver válido
  if (cachedToken && tokenExpiration && now < tokenExpiration) {
    return cachedToken;
  }

  const response = await fetch("https://api.acme.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.ACME_ACCESS_KEY,
      secret_key: process.env.ACME_SECRET_KEY,
    }),
  });

  if (!response.ok) {
    throw new Error("Falha na autenticação");
  }

  const data = await response.json();

  cachedToken = data.access_token;

  // margem de segurança antes da expiração
  tokenExpiration = now + (data.access_token_expires_in - 60) * 1000;

  return cachedToken;
}`}
          </pre>
        </div>

        {/* apiClient */}

        <div className="space-y-2">
          <h3 className="font-semibold text-sm">src/services/apiClient.ts</h3>

          <pre className="bg-code-bg text-code-text text-xs p-4 rounded-lg overflow-x-auto border border-code-border">
            {`// src/services/apiClient.ts

import { getAuthToken } from "./authService";

export async function apiRequest(endpoint, method = "GET", body) {

  const token = await getAuthToken();

  const response = await fetch(\`https://api.acme.com\${endpoint}\`, {
    method,
    headers: {
      Authorization: \`Bearer \${token}\`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(\`Erro na requisição: \${response.status}\`);
  }

  return response.json();
}`}
          </pre>
        </div>
      </section>

      {/* ===================================================== */}
      {/* 6. PREVIEW DO COMPONENTE */}
      {/* ===================================================== */}

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">6. Preview do componente</h2>

        <p className="text-sm">
          Abaixo está um exemplo visual do formulário de cadastro de leads que
          consumiria a API utilizando o <code>apiRequest</code>.
        </p>

        <LeadsFormPreview />

        <pre className="bg-code-bg text-code-text text-xs p-4 rounded-lg overflow-x-auto border border-code-border">
          {`// LeadsFormPreview.tsx

import { useState } from "react";
import { apiRequest } from "../services/apiClient";

export function LeadsFormPreview() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await apiRequest("/leads", "POST", {
        name,
        email,
        phone,
        company,
      });

      alert("Lead cadastrado com sucesso!");

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar lead");
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        placeholder="Empresa"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button type="submit">
        Cadastrar lead
      </button>

    </form>
  );
}`}
        </pre>
      </section>

      {/* ===================================================== */}
      {/* 7. DECISÕES TÉCNICAS */}
      {/* ===================================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Decisões técnicas</h2>

        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            A autenticação foi separada em um serviço dedicado (
            <code>authService</code>) para centralizar a geração do token JWT.
          </li>

          <li>
            O token é armazenado em memória enquanto estiver válido, evitando
            chamadas repetidas ao endpoint de autenticação.
          </li>

          <li>
            Foi criado um cliente HTTP reutilizável (<code>apiClient</code>)
            para centralizar requisições autenticadas.
          </li>

          <li>
            As credenciais da API são armazenadas em variáveis de ambiente para
            evitar exposição no código.
          </li>
        </ul>
      </section>

      {/* ===================================================== */}
      {/* 8. OTIMIZAÇÃO DE PERFORMANCE */}
      {/* ===================================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Otimização de performance</h2>

        <p className="text-sm">
          Para otimizar o consumo de múltiplos endpoints da API, algumas
          estratégias podem ser utilizadas:
        </p>

        <ul className="list-disc ml-6 text-sm space-y-2">
          <li>
            Reutilizar o token JWT enquanto ele estiver válido, evitando
            chamadas repetidas ao endpoint de autenticação.
          </li>

          <li>
            Realizar chamadas para diferentes endpoints em paralelo utilizando{" "}
            <code>Promise.all</code>.
          </li>

          <li>
            Centralizar requisições em um cliente de API reutilizável, reduzindo
            duplicação de código e melhorando manutenção.
          </li>
        </ul>

        <p className="text-sm">
          Essas estratégias reduzem o número de requisições desnecessárias e
          melhoram o tempo de carregamento do formulário de leads.
        </p>
      </section>
    </div>
  );
}
