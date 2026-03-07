describe("Challenge 2 — Code Review", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("aside").contains("Desafio 2 - Code Review").click();
  });

  it("renders the page header with PR info", () => {
    cy.contains("h1", "Desafio 2 — Code Review de UserManagement").should(
      "be.visible",
    );
    cy.contains("Pull Request #01").should("be.visible");
  });

  it("renders the source and target branch badges", () => {
    cy.contains("feature/user-management").should("be.visible");
    cy.contains("main").should("be.visible");
  });

  it("renders the review analysis panel", () => {
    cy.contains("Análise da Pull Request do meu colega, Lucas").should(
      "be.visible",
    );
  });

  it("renders review cards with identified problems", () => {
    cy.contains("Cuidado com a mutação direta").should("be.visible");
    cy.contains("forceUpdate()").should("be.visible");
  });

  it("renders the original code block with filename", () => {
    cy.contains("UserManagement.jsx").should("be.visible");
  });

  it("renders the fixed code block with filename", () => {
    cy.contains("UserManagement.tsx").should("be.visible");
  });

  it("renders the diff legend", () => {
    cy.contains("Adições").should("be.visible");
    cy.contains("Remoções").should("be.visible");
  });

  it("has a back button that returns to Home", () => {
    cy.contains("Voltar").click();
    cy.contains("h1", "Frontend Challenge").should("be.visible");
  });

  it("renders the github badge link", () => {
    cy.contains("Veja o código desse desafio").should("be.visible");
  });
});
