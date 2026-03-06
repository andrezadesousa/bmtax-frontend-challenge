import { MessageSquare, AlertCircle, CheckCircle2, Code2 } from "lucide-react";

export function Challenge2() {
  return (
    <div className="p-8 bg-surface-white min-h-full">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-text-dark mb-2">
          Desafio 2 — Code Review de UserManagement
        </h1>

        <p className="text-primary-medium max-w-3xl leading-relaxed">
          Seu colega solicitou a avaliação de uma Pull Request para que ele
          possa seguir com o deploy para os testes em HML. Abaixo está minha
          análise do componente{" "}
          <code className="bg-surface-light px-1 rounded">UserManagement</code>,
          destacando problemas encontrados, impactos potenciais e sugestões de
          melhoria seguindo boas práticas do React.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div className="bg-primary-dark text-text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-primary-light" />
              <h2 className="font-semibold">
                Análise da Pull Request do meu colega, Lucas
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Então, eu revisei a implementação e identifiquei alguns pontos
                que podem gerar problemas com a renderização, manutenção do
                estado e previsibilidade do comportamento do React. A lógica até
                pode parecer funcional a primeira vista, mas identifiquei que
                está quebrando regras fundamentais da imutabilidade do react.
                Por enquanto, eu não recomendo o merge dessa PR sem antes
                corrigir como o estado está sendo manipulado, tá? Abaixo estão
                os principais "problemas" que eu encontrei
              </p>

              {/* Problema 1 */}
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-orange-400 shrink-0" />
                <p>
                  <strong className="text-orange-400">
                    Cuidado com a mutação direta:
                  </strong>{" "}
                  Notei que você alterou o estado usando o{" "}
                  <code className="text-primary-light">.push()</code> e
                  atribuição direta. Eu vi que o React não "percebe" a mudança
                  se a gente não criar uma cópia nova do estado. Sem o{" "}
                  <code className="text-primary-light">setState</code>, a gente
                  acaba "enganando" o motor de renderização e os componentes
                  podem não atualizar na tela como deveriam.
                </p>
              </div>

              {/* Problema 2 */}
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-orange-400 shrink-0" />
                <p>
                  <strong className="text-orange-400">
                    Usando o forceUpdate():
                  </strong>{" "}
                  Eu vi que você usou o{" "}
                  <code className="text-primary-light">forceUpdate()</code>, mas
                  isso é meio que um "empurrãozinho" no React. A gente acaba
                  forçando o componente atualizar, ignorando o ciclo de vida
                  natural dele (muito importante!). Se a gente ajustar a
                  imutabilidade do estado, o React vai atualizar sozinho sem
                  precisar desse empurrãozinho manual.
                </p>
              </div>

              {/* Problema 3 */}
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-orange-400 shrink-0" />
                <p>
                  <strong className="text-orange-400">
                    Faltou usar a key no map:
                  </strong>{" "}
                  (já esqueci disso também hehe), mas ao renderizar listas no
                  React é necessário usar a prop{" "}
                  <code className="text-primary-light">key</code> para cada
                  elemento. Sem ela, o React se perde um pouco na hora de saber
                  qual item foi alterado ou deletado. Eu costumo colocar o{" "}
                  <code className="text-primary-light">user.id</code> como chave
                  para a performance ficar em dia!
                </p>
              </div>

              {/* Problema 4 */}
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-orange-400 shrink-0" />
                <p>
                  <strong className="text-orange-400">
                    O input de nome está travado:
                  </strong>{" "}
                  Eu tentei digitar no campo de nome e não consegui! Como você
                  passou o<code className="text-primary-light">value</code> mas
                  esqueceu do
                  <code className="text-primary-light">onChange</code>, o input
                  virou "só leitura". Precisamos conectar a função de mudança
                  ali pro estado conseguir atualizar o que o usuário digita.
                </p>
              </div>

              {/* Problema 5 */}
              <div className="flex gap-3">
                <AlertCircle size={18} className="text-orange-400 shrink-0" />
                <p>
                  <strong className="text-orange-400">
                    Cuidado ao usar ID incremental:
                  </strong>{" "}
                  Gerar o ID usando o{" "}
                  <code className="text-primary-light">length + 1</code>
                  pode dar dor de cabeça se a gente começar a deletar usuários,
                  porque os IDs vão acabar se repetindo. Eu sugiro usar um{" "}
                  <code className="text-primary-light">Date.now()</code>
                  ou até o{" "}
                  <code className="text-primary-light">
                    crypto.randomUUID()
                  </code>{" "}
                  pra garantir que cada usuário tenha um RG único de verdade!
                </p>
              </div>

              {/* Sugestão */}
              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                <p>
                  <strong className="text-green-400">
                    Que tal darmos um upgrade?
                  </strong>{" "}
                  Eu sugiro refatorar esse componente para **Functional
                  Component**. Usando o hook{" "}
                  <code className="text-primary-light">useState</code>, a gente
                  consegue matar esse{" "}
                  <code className="text-primary-light">constructor</code>e o{" "}
                  <code className="text-primary-light">this</code>, que sempre
                  dão confusão. O código vai ficar bem mais limpo, moderno e
                  muito mais fácil de ler e testar!
                </p>
              </div>
            </div>
          </div>

          {/* MELHORIA */}
          <div className="border border-primary-light/20 p-6 rounded-lg bg-surface-light">
            <h3 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
              <Code2 size={18} />
              Exemplo de implementação corrigida
            </h3>

            <pre className="text-xs bg-primary-dark text-text-white p-4 rounded overflow-x-auto">
              {`import { useState } from "react";

export function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name,
      email
    };

    setUsers((prev) => [...prev, newUser]);

    setName("");
    setEmail("");
  };

  return (
    <div>
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

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}`}
            </pre>
          </div>
        </section>

        {/* CÓDIGO ORIGINAL */}
        <section className="bg-gray-50 p-6 rounded-lg border border-dashed border-primary-medium/30">
          <h2 className="text-sm font-bold text-primary-medium mb-4 uppercase tracking-widest">
            Código em Revisão
          </h2>

          <div className="relative opacity-80 group hover:opacity-100 transition-opacity">
            <pre className="text-[11px] leading-tight text-primary-dark overflow-x-auto">
              {`class UserManagement extends React.Component {

handleNameChange(event) {
  this.state.newUserName = event.target.value; // mutação direta
}

addUser() {
  const newUser = { ... };

  this.state.users.push(newUser); // mutação
  this.forceUpdate(); // má prática
}

render() {
  return (
    <ul>
      {this.state.users.map(user => (
        <li>
          {user.name}
        </li>
      ))}
    </ul>
  );
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
