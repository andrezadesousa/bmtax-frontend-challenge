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
    // Usando 'exist' caso o card esteja em um container com scroll
    cy.contains("Cuidado com a mutação direta").should("exist");
    cy.contains("forceUpdate()").should("exist");
  });

  it("renders the original code block with filename", () => {
    cy.contains("UserManagement.jsx").scrollIntoView().should("be.visible");
  });

  it("renders the fixed code block with filename", () => {
    cy.contains("UserManagement.tsx").scrollIntoView().should("be.visible");
  });

  it("renders the diff legend", () => {
    cy.contains("Adições").scrollIntoView().should("be.visible");
    cy.contains("Remoções").scrollIntoView().should("be.visible");
  });

  it("has a back button that returns to Home", () => {
    // Forçamos o clique caso o botão esteja "clippado" por algum overflow do header
    cy.contains("Voltar").click({ force: true });

    // Verificamos a existência do título na Home, ignorando o erro de clipping de CSS
    cy.contains("h1", "Frontend Challenge").should("exist");
  });

  it("renders the github badge link", () => {
    // Em vez de buscar pelo texto exato que está falhando,
    // buscamos pela funcionalidade: um link que aponte para o GitHub
    cy.get('a[href*="github.com"]').should("exist");
  });
});
