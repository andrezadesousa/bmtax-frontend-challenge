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
          possa seguir com o deploy para os testes em HML. Por favor, avalie a
          PR e faça as ponderações pertinentes, se necessário.
          <code className="bg-surface-light px-1 rounded">
            UserManagement
          </code>{" "}
          e encontrei alguns pontos críticos que podem causar bugs de
          renderização e performance.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna da Minha Resposta/Review */}
        <section className="space-y-6">
          <div className="bg-primary-dark text-text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-primary-light" />
              <h2 className="font-semibold">Minha code review</h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                "Então, revisei a implementação e identifiquei alguns pontos que
                podem gerar problemas de renderização e manutenção do estado no
                React. A lógica pode parecer funcional a primeira vista,
                identifiquei que está quebrando regras fundamentais da
                imutabilidade do react. Por enquanto, eu não recomendo o merge
                dessa PR sem antes corrigir como o estado está sendo manipulado,
                tá?"
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <AlertCircle size={18} className="text-orange-400 shrink-0" />
                  <p>
                    <strong className="text-orange-400">Mutação Direta:</strong>{" "}
                    Vi que você está alterando o state diretamente com{" "}
                    <code className="text-primary-light">
                      this.state.users.push()
                    </code>
                    . Isso impede que o React perceba a mudança, e usar{" "}
                    <code className="text-primary-light">forceUpdate()</code> é
                    um sinal de que algo está errado no fluxo.
                  </p>
                </div>

                <div className="flex gap-3">
                  <AlertCircle size={18} className="text-orange-400 shrink-0" />
                  <p>
                    <strong className="text-orange-400">Keys Faltando:</strong>{" "}
                    No <code className="text-primary-light">map</code> dos
                    usuários, esquecemos da prop{" "}
                    <code className="text-primary-light">key</code>. Isso vai
                    causar aquele erro clássico no console e prejudicar a
                    performance da lista.
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                  <p>
                    <strong className="text-green-400">Sugestão:</strong> Eu
                    aproveitaria para refatorar esse componente de Classe para
                    **Functional Component com Hooks**. O código ficaria muito
                    mais limpo e fácil de manter!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Melhoria */}
          <div className="border border-primary-light/20 p-6 rounded-lg bg-surface-light">
            <h3 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
              <Code2 size={18} />
              Como eu faria (Snippet)
            </h3>
            <pre className="text-xs bg-primary-dark text-text-white p-4 rounded overflow-x-auto">
              {`// Eu trocaria para isso:
const addUser = () => {
  const newUser = { id: Date.now(), name, email };
  setUsers([...users, newUser]); // Imutabilidade sempre!
  setName(''); 
  setEmail('');
};`}
            </pre>
          </div>
        </section>

        {/* Coluna do Código Original (Para Contexto) */}
        <section className="bg-gray-50 p-6 rounded-lg border border-dashed border-primary-medium/30">
          <h2 className="text-sm font-bold text-primary-medium mb-4 uppercase tracking-widest">
            Código em Revisão
          </h2>
          <div className="relative opacity-80 group hover:opacity-100 transition-opacity">
            <pre className="text-[11px] leading-tight text-primary-dark overflow-x-auto">
              {`import React from 'react';

class UserManagement extends React.Component {
  // ... constructor omitido para brevidade
  
  handleNameChange(event) {
    // ERRO: Mutação direta detectada!
    this.state.newUserName = event.target.value; 
  }

  addUser() {
    const newUser = { ... };
    // ERRO: push altera o array original
    this.state.users.push(newUser); 
    this.forceUpdate(); // Má prática
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li>{/* Faltando a Key prop */}
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
