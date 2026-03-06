import {
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  GitPullRequest,
  FileCode,
  GitBranch,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

type LineType = "add" | "remove" | "neutral";

const originalCode = `import React from 'react';

// [PROBLEMA] Class Component - padrão antigo, difícil manutenção
class UserManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
      ],
      newUserName: '',
      newUserEmail: ''
    };
  }

  handleNameChange(event) {
    // [PROBLEMA] Mutação direta do estado - quebra reatividade do React
    this.state.newUserName = event.target.value;
  }

  handleEmailChange(event) {
    this.setState({ newUserEmail: event.target.value });
  }

  addUser() {
    const newUser = {
      // [PROBLEMA] ID incremental - causa duplicação ao deletar itens
      id: this.state.users.length + 1,
      name: this.state.newUserName,
      email: this.state.newUserEmail
    };

    // [PROBLEMA] Mutação direta com .push() - não dispara re-render
    this.state.users.push(newUser);
    // [PROBLEMA] forceUpdate() - força render, ignora ciclo de vida
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h2>Gerenciamento de Usuários</h2>
        <div>
          {/* [PROBLEMA] Input sem onChange - campo fica travado */}
          <input
            type="text"
            placeholder="Nome do usuário"
            value={this.state.newUserName}
          />
          <input
            type="email"
            placeholder="Email do usuário"
            value={this.state.newUserEmail}
            onChange={(e) => this.handleEmailChange(e)}
          />
          <button onClick={() => this.addUser()}>
            Adicionar Usuário
          </button>
        </div>
        <ul>
          {this.state.users.map(user => (
            {/* [PROBLEMA] Falta key - React não consegue rastrear itens */}
            <li>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserManagement;`;

const fixedCode = `// [CORREÇÃO] Importação de hooks modernos do React
import { useState } from "react";

// [CORREÇÃO] Function Component - padrão moderno, mais limpo
export function UserManagement() {

  // [CORREÇÃO] useState para gerenciar estado de forma imutável
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ]);

  // [CORREÇÃO] Estados separados para cada campo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    // [CORREÇÃO] Validação antes de adicionar
    if (!name || !email) return;

    const newUser = {
      // [CORREÇÃO] UUID único - evita duplicação de IDs
      id: crypto.randomUUID(),
      name,
      email
    };

    // [CORREÇÃO] Spread operator - preserva imutabilidade
    setUsers(prev => [...prev, newUser]);
    // [CORREÇÃO] Limpa campos após adicionar
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Gerenciamento de Usuários</h2>
      <div>
        {/* [CORREÇÃO] Input controlado com onChange */}
        <input
          type="text"
          placeholder="Nome do usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email do usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addUser}>
          Adicionar Usuário
        </button>
      </div>
      <ul>
        {users.map(user => (
          {/* [CORREÇÃO] key única para cada item da lista */}
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}`;

function CodeBlock({
  code,
  type,
  filename,
}: {
  code: string;
  type: "original" | "fixed";
  filename: string;
}) {
  const lines = code.split("\n");

  const getLineType = (line: string): LineType => {
    if (type === "original" && line.includes("[PROBLEMA]")) return "remove";
    if (type === "fixed" && line.includes("[CORREÇÃO]")) return "add";
    return "neutral";
  };

  return (
    <div className="flex flex-col h-full border border-code-border rounded-lg overflow-hidden bg-code-bg">
      <div className="flex items-center gap-2 px-4 py-2 bg-code-header border-b border-code-border">
        <FileCode size={14} className="text-code-lineNumber" />
        <span className="text-xs text-code-text font-mono">{filename}</span>
        <span
          className={`ml-auto text-xxs px-2 py-0.5 rounded ${
            type === "original"
              ? "bg-diff-remove-bg text-diff-remove-line"
              : "bg-diff-add-bg text-diff-add-line"
          }`}
        >
          {type === "original" ? "Antes" : "Depois"}
        </span>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-xs font-mono">
          <tbody>
            {lines.map((line, idx) => {
              const lineType = getLineType(line);
              const bgClass =
                lineType === "add"
                  ? "bg-diff-add-bg/20"
                  : lineType === "remove"
                    ? "bg-diff-remove-bg/20"
                    : "";
              const borderClass =
                lineType === "add"
                  ? "border-l-2 border-l-diff-add-border"
                  : lineType === "remove"
                    ? "border-l-2 border-l-diff-remove-border"
                    : "border-l-2 border-l-transparent";

              return (
                <tr key={idx} className={`${bgClass} ${borderClass}`}>
                  <td className="w-8 px-2 py-0.5 text-right text-code-lineNumber select-none border-r border-code-border">
                    {idx + 1}
                  </td>
                  <td className="w-6 px-1 py-0.5 text-center select-none">
                    {lineType === "add" && (
                      <Plus size={12} className="text-diff-add-line inline" />
                    )}
                    {lineType === "remove" && (
                      <Minus
                        size={12}
                        className="text-diff-remove-line inline"
                      />
                    )}
                  </td>
                  <td className="px-2 py-0.5 whitespace-pre text-code-text">
                    {line || " "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Challenge2() {
  return (
    <div className="p-4 md:p-8 bg-surface-white min-h-full">
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-light/10 rounded-full">
            <GitPullRequest size={16} className="text-primary-light" />
            <span className="text-xs font-medium text-primary-dark">
              Pull Request #01
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-light rounded-full">
            <GitBranch size={14} className="text-primary-medium" />
            <span className="text-xxs font-mono text-primary-medium">
              feature/user-management
            </span>
            <span className="text-xxs text-primary-medium">
              <ArrowRight size={14} />
            </span>
            <span className="text-xxs font-mono text-primary-medium">main</span>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
          Desafio 2 — Code Review de UserManagement
        </h1>

        <p className="text-sm text-primary-medium max-w-3xl leading-relaxed">
          Seu colega solicitou a avaliação de uma Pull Request para que ele
          possa seguir com o deploy para os testes em HML. Abaixo está minha
          análise do componente{" "}
          <code className="bg-surface-light px-1 rounded">UserManagement</code>,
          destacando problemas encontrados, impactos potenciais e sugestões de
          melhoria seguindo boas práticas do React.
        </p>
      </header>

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
            {[
              {
                type: "error",
                title: "Cuidado com a mutação direta:",
                desc: (
                  <>
                    Notei que você alterou o estado usando o{" "}
                    <code className="text-primary-light">.push()</code> e
                    atribuição direta. Eu vi que o React não "percebe" a mudança
                    se a gente não criar uma cópia nova do estado. Sem o{" "}
                    <code className="text-primary-light">setState</code>, a
                    gente acaba "enganando" o motor de renderização e os
                    componentes podem não atualizar na tela como deveriam.
                  </>
                ),
              },
              {
                type: "error",
                title: "Uso de forceUpdate()",
                desc: (
                  <>
                    Eu vi que você usou o{" "}
                    <code className="text-primary-light">forceUpdate()</code>,
                    mas isso é meio que um "empurrãozinho" no React. A gente
                    acaba forçando o componente atualizar, ignorando o ciclo de
                    vida natural dele (muito importante!). Se a gente ajustar a
                    imutabilidade do estado, o React vai atualizar sozinho sem
                    precisar desse empurrãozinho manual.
                  </>
                ),
              },
              {
                type: "error",
                title: "Falta key no map",
                desc: (
                  <>
                    (já esqueci disso também hehe), mas ao renderizar listas no
                    React é necessário usar a prop{" "}
                    <code className="text-primary-light">key</code> para cada
                    elemento. Sem ela, o React se perde um pouco na hora de
                    saber qual item foi alterado ou deletado. Eu costumo colocar
                    o <code className="text-primary-light">user.id</code> como
                    chave para a performance ficar em dia!
                  </>
                ),
              },
              {
                type: "error",
                title: "Input travado",
                desc: (
                  <>
                    {" "}
                    Eu tentei digitar no campo de nome e não consegui! Como você
                    passou o<code className="text-primary-light">
                      value
                    </code>{" "}
                    mas esqueceu do
                    <code className="text-primary-light">onChange</code>, o
                    input virou "só leitura". Precisamos conectar a função de
                    mudança ali pro estado conseguir atualizar o que o usuário
                    digita.
                  </>
                ),
              },
              {
                type: "error",
                title: "Cuidado ao usar ID incremental",
                desc: (
                  <>
                    {" "}
                    Gerar o ID usando o{" "}
                    <code className="text-primary-light">length + 1</code>
                    pode dar dor de cabeça se a gente começar a deletar
                    usuários, porque os IDs vão acabar se repetindo. Eu sugiro
                    usar um{" "}
                    <code className="text-primary-light">Date.now()</code>
                    ou até o{" "}
                    <code className="text-primary-light">
                      crypto.randomUUID()
                    </code>{" "}
                    pra garantir que cada usuário tenha um RG único de verdade!
                  </>
                ),
              },
              {
                type: "success",
                title: "Sugestão de melhoria: modernizar o componente",
                desc: (
                  <>
                    {" "}
                    É interessante refatorar o componente para um Functional
                    Component utilizando Hooks como <code>useState</code>. Além
                    de estar mais alinhado com o que o React recomenda hoje, o
                    código fica bem mais enxuto: Ai não precisa do{" "}
                    <code className="text-primary-light">constructor</code> e
                    aquele monte de{" "}
                    <code className="text-primary-light">this.state</code>{" "}
                    espalhado
                  </>
                ),
              },
              {
                type: "success",
                title: "Validação de dados",
                desc: "Antes de inserir um novo usuário, seria interessante validar se nome e email estão preenchidos, pois notei que dá para salvar usuários com os campos vazios. Isso evita inserir registros inconsistentes e melhora a experiência do usuário",
              },
              {
                type: "success",
                title: "Escalabilidade/Componentização",
                desc: (
                  <>
                    {" "}
                    <strong className="text-green-400">
                      Escalabilidade:
                    </strong>{" "}
                    Caso a lista de usuários cresça, pode ser legal extrair o
                    item da lista para um componente separado, isso facilita a
                    reutilização e testes
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 p-2 rounded ${
                  item.type === "error"
                    ? "bg-diff-remove-bg/10"
                    : "bg-diff-add-bg/10"
                }`}
              >
                {item.type === "error" ? (
                  <AlertCircle
                    size={14}
                    className="text-diff-remove-border shrink-0 mt-0.5"
                  />
                ) : (
                  <CheckCircle2
                    size={14}
                    className="text-diff-add-border shrink-0 mt-0.5"
                  />
                )}
                <div>
                  <p
                    className={`text-xs font-medium ${
                      item.type === "error"
                        ? "text-diff-remove-border"
                        : "text-diff-add-border"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-xxs text-surface-light">{item.desc}</p>
                </div>
              </div>
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
