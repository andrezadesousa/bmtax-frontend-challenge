import { FileText, Key, Lightbulb, Server, Shield } from "lucide-react";
import { CodeExample } from "../components/CodeExample/CodeExample";
import { FlowDiagram } from "../components/FlowDiagram/FlowDiagram";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { UploadComponentPreview } from "../components/UploadComponentPreview/UploadComponentPreview";

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

function uploadFile(file) {

  token = authenticate()

  send file to API
  using Authorization: Bearer token
}
`}
        />
      </section>

      {/* IMPLEMENTAÇÃO */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Implementação</h2>

        <p className="text-sm">
          Após entender a autenticação da API, o próximo passo foi criar o
          componente de interface responsável pelo upload de arquivos.
        </p>

        <UploadComponentPreview />
      </section>
    </div>
  );
}
