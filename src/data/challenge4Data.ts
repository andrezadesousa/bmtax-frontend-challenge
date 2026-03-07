import type { DocumentationLink, TocItem } from "../types/infoCard";

export const documentationLinks: DocumentationLink[] = [
  {
    title: "Next.js Server Components",
    url: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
    description: "Renderização server-side no Next.js",
  },
  {
    title: "MDN - HTTP Authentication",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",
    description: "Padrã Bearer Token",
  },
  {
    title: "OAuth 2.0",
    url: "https://oauth.net/2/",
    description: "Fluxo Client Credentials",
  },
  {
    title: "JWT.io",
    url: "https://jwt.io/introduction",
    description: "Introdução ao JSON Web Tokens",
  },
];

export const toc: TocItem[] = [
  { id: "sec-pensamento", label: "1. Pensamento inicial" },
  { id: "sec-otimizacao", label: "Otimização" },
  { id: "sec-documentacao", label: "2. Documentação" },
  { id: "sec-fluxo", label: "3. Fluxo" },
  { id: "sec-pseudocode", label: "4. Pseudocódigo" },
  { id: "sec-implementacao", label: "5. Implementação" },
  { id: "sec-preview", label: "6. Preview" },
  { id: "sec-decisoes", label: "7. Decisões técnicas" },
  { id: "sec-performance", label: "8. Performance" },
];

export const pseudoCode = `function authenticate() {

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
}`;

export const authServiceCode = `// src/services/authService.ts

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
}`;

export const apiClientCode =
  "// src/services/apiClient.ts\n\n" +
  'import { getAuthToken } from "./authService";\n\n' +
  'export async function apiRequest(endpoint, method = "GET", body) {\n\n' +
  "  const token = await getAuthToken();\n\n" +
  "  const response = await fetch(`https://api.acme.com${endpoint}`, {\n" +
  "    method,\n" +
  "    headers: {\n" +
  "      Authorization: `Bearer ${token}`,\n" +
  '      "Content-Type": "application/json",\n' +
  "    },\n" +
  "    body: body ? JSON.stringify(body) : undefined,\n" +
  "  });\n\n" +
  "  if (!response.ok) {\n" +
  "    throw new Error(`Erro na requisição: ${response.status}`);\n" +
  "  }\n\n" +
  "  return response.json();\n" +
  "}";

export const leadsFormCode = `// LeadsFormPreview.tsx

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
      <input placeholder="Nome" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input placeholder="E-mail" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Telefone" value={phone}
        onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Empresa" value={company}
        onChange={(e) => setCompany(e.target.value)} />
      <button type="submit">Cadastrar lead</button>
    </form>
  );
}`;
