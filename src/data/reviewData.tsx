import type { ReviewItem } from "../types/review";

export const originalCode = `import React from 'react';

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

export const fixedCode = `// [CORREÇÃO] Importação de hooks modernos do React
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

export const reviewItems: ReviewItem[] = [
  {
    type: "error",
    title: "Cuidado com a mutação direta:",
    desc: (
      <>
        Notei que você alterou o estado usando o{" "}
        <code className="text-primary-light">.push()</code> e atribuição direta.
        Eu vi que o React não "percebe" a mudança se a gente não criar uma cópia
        nova do estado. Sem o{" "}
        <code className="text-primary-light">setState</code>, a gente acaba
        "enganando" o motor de renderização e os componentes podem não atualizar
        na tela como deveriam.
      </>
    ),
  },
  {
    type: "error",
    title: "Uso de forceUpdate()",
    desc: (
      <>
        Eu vi que você usou o{" "}
        <code className="text-primary-light">forceUpdate()</code>, mas isso é
        meio que um "empurrãozinho" no React. A gente acaba forçando o
        componente atualizar, ignorando o ciclo de vida natural dele (muito
        importante!). Se a gente ajustar a imutabilidade do estado, o React vai
        atualizar sozinho sem precisar desse empurrãozinho manual.
      </>
    ),
  },
  {
    type: "error",
    title: "Falta key no map",
    desc: (
      <>
        (já esqueci disso também hehe), mas ao renderizar listas no React é
        necessário usar a prop <code className="text-primary-light">key</code>{" "}
        para cada elemento. Sem ela, o React se perde um pouco na hora de saber
        qual item foi alterado ou deletado. Eu costumo colocar o{" "}
        <code className="text-primary-light">user.id</code> como chave para a
        performance ficar em dia!
      </>
    ),
  },
  {
    type: "error",
    title: "Input travado",
    desc: (
      <>
        {" "}
        Eu tentei digitar no campo de nome e não consegui! Como você passou o
        <code className="text-primary-light">value</code> mas esqueceu do
        <code className="text-primary-light">onChange</code>, o input virou "só
        leitura". Precisamos conectar a função de mudança ali pro estado
        conseguir atualizar o que o usuário digita.
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
        pode dar dor de cabeça se a gente começar a deletar usuários, porque os
        IDs vão acabar se repetindo. Eu sugiro usar um{" "}
        <code className="text-primary-light">Date.now()</code>
        ou até o <code className="text-primary-light">
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
        É interessante refatorar o componente para um Functional Component
        utilizando Hooks como <code>useState</code>. Além de estar mais alinhado
        com o que o React recomenda hoje, o código fica bem mais enxuto: Ai não
        precisa do <code className="text-primary-light">constructor</code> e
        aquele monte de <code className="text-primary-light">this.state</code>{" "}
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
        <strong className="text-green-400">Escalabilidade:</strong> Caso a lista
        de usuários cresça, pode ser legal extrair o item da lista para um
        componente separado, isso facilita a reutilização e testes
      </>
    ),
  },
];
