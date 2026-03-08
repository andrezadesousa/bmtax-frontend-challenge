describe("Challenge 3 — Bug Analysis", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("aside").contains("Desafio 3 - Debug de erro").click();
  });

  it("renders the page header", () => {
    cy.contains("h1", "Desafio 3 — Analise de Erro em Produção").should(
      "be.visible",
    );
  });

  it("renders the stack trace section", () => {
    cy.contains("Stack Trace Reportada").should("be.visible");
    cy.contains("TypeError").should("be.visible");
  });

  it("renders the bug identification panel", () => {
    cy.contains("Identificação da causa").should("be.visible");
    // Usando regex para garantir que encontra o texto mesmo com formatação
    cy.contains(/Cannot read properties of null/i).should("be.visible");
  });

  it("renders the explanation info card", () => {
    cy.contains("Andreza, por que o erro acontece?")
      .scrollIntoView()
      .should("be.visible");
  });

  it("renders the buggy code block", () => {
    cy.contains("Código com problema").scrollIntoView().should("be.visible");
    cy.contains("ProductDisplay.jsx").scrollIntoView().should("be.visible");
  });

  it("renders both solution sections", () => {
    cy.contains("Solução 1: Verificação explicita")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("Solução 2: Optional Chaining")
      .scrollIntoView()
      .should("be.visible");
  });

  it("renders both fixed code blocks", () => {
    // Busca pelo nome do arquivo dentro dos blocos de sucesso
    cy.get("span")
      .contains("ProductDisplay.tsx")
      .should("have.length.at.least", 1);
  });

  it("renders the analysis summary footer", () => {
    cy.contains("Resumo da Análise").scrollIntoView().should("be.visible");
    cy.contains("Causa").should("exist");
    cy.contains("Impacto").should("exist");
    cy.contains("Correção").should("exist");
  });

  it("has a back button that returns to Home", () => {
    // Aqui força o clique para evitar problemas com overflow do container pai
    cy.contains("button", "Voltar").click({ force: true });

    // Aqui valido que voltamos à Home checando a existência do h1 principal
    cy.contains("h1", "Frontend Challenge").should("exist");
  });

  it("renders the github badge link", () => {
    // Busca pelo atributo href que contém a URL definida no componente
    cy.get('a[href*="github.com"]').should("exist");
  });
});
