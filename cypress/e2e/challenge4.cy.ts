describe("Challenge 4 — JWT Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("aside").contains("Desafio 4 - OAuth JWT").click();
  });

  it("renders the page header", () => {
    cy.contains("h1", "Desafio 4 — Implementação de Autenticação JWT").should(
      "be.visible",
    );
  });

  it("renders all collapsible section titles", () => {
    cy.contains("1. Entendendo a documentação: Meu pensamento inicial")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("2. Analisando a documentação da API")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("3. Pensando no fluxo da aplicação")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("4. Pseudocódigo da solução")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("5. Implementação").scrollIntoView().should("be.visible");
    cy.contains("6. Preview do componente")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("7. Decisões técnicas").scrollIntoView().should("be.visible");
  });

  it("collapsible sections are open by default", () => {
    cy.contains("1. Entendendo a documentação: Meu pensamento inicial")
      .closest("section")
      .find("p")
      .should("be.visible");
  });

  it("collapses a section when its header is clicked", () => {
    cy.contains("1. Entendendo a documentação: Meu pensamento inicial")
      .closest("button")
      .click();
    cy.contains(
      "primeiro passo foi entender como funciona a autenticação",
    ).should("not.exist");
  });

  it("expands a collapsed section when its header is clicked again", () => {
    cy.contains("1. Entendendo a documentação: Meu pensamento inicial")
      .closest("button")
      .click();
    cy.contains("1. Entendendo a documentação: Meu pensamento inicial")
      .closest("button")
      .click();
    cy.contains(
      "primeiro passo foi entender como funciona a autenticação",
    ).should("be.visible");
  });

  it("renders the API endpoint documentation", () => {
    cy.contains("POST https://api.acme.com/auth")
      .scrollIntoView()
      .should("be.visible");
  });

  it("renders authService and apiClient code blocks", () => {
    cy.contains("src/services/authService.ts")
      .scrollIntoView()
      .should("be.visible");
    cy.contains("src/services/apiClient.ts")
      .scrollIntoView()
      .should("be.visible");
  });

  it("renders the sticky table of contents", () => {
    cy.contains("Pensamento inicial").should("be.visible");
  });

  it("has a back button that returns to Home", () => {
    cy.contains("Voltar").click();
    cy.contains("h1", "Frontend Challenge").should("be.visible");
  });

  it("renders the github badge link", () => {
    cy.contains("Veja o código desse desafio").should("be.visible");
  });
});
