export const apiDocumentation = `POST https://api.acme.com/auth

Request Body:
  access_key  - string - Ex.: DFt7Oqzn_LGyYnDGLwX7oA
  secret_key  - string - Ex.: dNiIFM34DSvKIAubw9nfJL7q...

Response (HTTP 200):
  access_token            - string  - Token de acesso
  access_token_expires_in - integer - Tempo de vida em segundos (3600)
  refresh_token           - string  - Token de atualizacao
  refresh_token_expires_in - integer - Tempo de vida em segundos`;

export const authServiceCode = `// src/services/authService.ts

// Cache em memoria — persiste entre requisicoes no servidor
let cachedToken: string | null = null;
let tokenExpiration: number | null = null;
let cachedRefreshToken: string | null = null;
let refreshTokenExpiration: number | null = null;

async function authenticate(): Promise<string> {
  const response = await fetch("https://api.acme.com/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.ACME_ACCESS_KEY,
      secret_key: process.env.ACME_SECRET_KEY,
    }),
  });

  if (!response.ok) throw new Error("Falha na autenticacao");

  const data = await response.json();
  const now = Date.now();

  cachedToken = data.access_token;
  tokenExpiration = now + (data.access_token_expires_in - 300) * 1000;
  cachedRefreshToken = data.refresh_token;
  refreshTokenExpiration = now + data.refresh_token_expires_in * 1000;

  return cachedToken!;
}

async function refreshAccessToken(): Promise<string> {
  const response = await fetch("https://api.acme.com/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: cachedRefreshToken }),
  });

  // Se o refresh falhar, volta ao fluxo completo de autenticacao
  if (!response.ok) {
    cachedRefreshToken = null;
    return authenticate();
  }

  const data = await response.json();
  const now = Date.now();

  cachedToken = data.access_token;
  tokenExpiration = now + (data.access_token_expires_in - 300) * 1000;

  return cachedToken!;
}

export async function getAuthToken(): Promise<string> {
  const now = Date.now();

  // 1. Token ainda valido — reutiliza
  if (cachedToken && tokenExpiration && now < tokenExpiration) {
    return cachedToken;
  }

  // 2. Refresh token valido — renova sem reautenticar
  if (cachedRefreshToken && refreshTokenExpiration && now < refreshTokenExpiration) {
    return refreshAccessToken();
  }

  // 3. Sem tokens validos — autentica do zero
  return authenticate();
}`;

export const apiClientCode = `// src/services/apiClient.ts
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

export const hardcodedCredentialsCode = `// ERRADO — nunca faca isso
body: JSON.stringify({
  access_key: "DFt7Oqzn_LGyYnDGLwX7oA",
  secret_key: "dNiIFM34DSvKIAubw9nfJL7qrFWFoYKLSeHPVOyNcEBw-7oTROVK3mq5mbzR",
})
// Qualquer pessoa com acesso ao repositorio ve essas credenciais.
// Mesmo que voce delete depois, o git guarda o historico para sempre.`;

export const envExampleCode = `# .env  ← este arquivo fica listado no .gitignore por padrao
# Nunca e commitado — apenas existe na maquina local e no ambiente de deploy

ACME_ACCESS_KEY=DFt7Oqzn_LGyYnDGLwX7oA
ACME_SECRET_KEY=dNiIFM34DSvKIAubw9nfJL7qrFWFoYKLSeHPVOyNcEBw-7oTROVK3mq5mbzR`;

export const envUsageCode = `// CERTO — le as credenciais do ambiente, nunca do codigo
body: JSON.stringify({
  access_key: process.env.ACME_ACCESS_KEY,
  secret_key: process.env.ACME_SECRET_KEY,
})
// No servidor Node.js: lido do arquivo .env via dotenv (ou similar)
// Em producao: lido das variaveis de ambiente configuradas na plataforma de deploy`;

export const leadsPageFullCode = `// src/pages/LeadsPage.tsx
import { apiRequest } from "../services/apiClient";
import type { Lead, Product, Region } from "../types/leads";
import { LeadsForm } from "../components/LeadsForm";

// Componente renderizado no servidor — token nunca vai ao cliente
export async function LeadsPage() {
  // Uma unica chamada a getAuthToken() e compartilhada por todas
  // as requisicoes — o cache garante que nao ha re-autenticacao
  const [leads, products, regions] = await Promise.all([
    apiRequest<Lead[]>("/leads"),
    apiRequest<Product[]>("/products"),
    apiRequest<Region[]>("/regions"),
  ]);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Cadastro de Oportunidades (Leads)
      </h1>
      <LeadsForm
        leads={leads}
        products={products}
        regions={regions}
      />
    </main>
  );
}`;
