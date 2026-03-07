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
    cy.contains("Cannot read properties of null").should("be.visible");
  });

  it("renders the explanation info card", () => {
    cy.contains("Andreza, por que o erro acontece?").should("be.visible");
  });

  it("renders the buggy code block", () => {
    cy.contains("Código com problema").should("be.visible");
    cy.contains("ProductDisplay.jsx").should("be.visible");
  });

  it("renders both solution sections", () => {
    cy.contains("Solução 1: Verificação explicita").should("be.visible");
    cy.contains("Solução 2: Optional Chaining").should("be.visible");
  });

  it("renders both fixed code blocks", () => {
    cy.get("code, pre").contains("ProductDisplay.tsx").should("be.visible");
  });

  it("renders the analysis summary footer", () => {
    cy.contains("Resumo da Análise").should("be.visible");
    cy.contains("Causa").should("be.visible");
    cy.contains("Impacto").should("be.visible");
    cy.contains("Correção").should("be.visible");
  });

  it("has a back button that returns to Home", () => {
    cy.contains("Voltar").click();
    cy.contains("h1", "Frontend Challenge").should("be.visible");
  });

  it("renders the github badge link", () => {
    cy.contains("Veja o código desse desafio").should("be.visible");
  });
});
