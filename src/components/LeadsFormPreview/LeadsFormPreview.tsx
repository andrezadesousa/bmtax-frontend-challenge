import { useState } from "react";

export function LeadsFormPreview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Lead "${name}" cadastrado com sucesso!`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-4 md:p-6 bg-white w-full max-w-md space-y-3 md:space-y-4"
    >
      <h3 className="text-xs md:text-sm font-semibold text-text-dark">
        Cadastro de Lead
      </h3>

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded px-3 py-2 text-xs md:text-sm outline-none focus:border-primary-light"
      />

      <input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2 text-xs md:text-sm outline-none focus:border-primary-light"
      />

      <input
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded px-3 py-2 text-xs md:text-sm outline-none focus:border-primary-light"
      />

      <input
        placeholder="Empresa"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full border rounded px-3 py-2 text-xs md:text-sm outline-none focus:border-primary-light"
      />

      <button
        type="submit"
        className="bg-primary-light text-white px-4 py-2 rounded text-xs md:text-sm w-full hover:opacity-90 transition-opacity"
      >
        Cadastrar lead
      </button>
    </form>
  );
}
