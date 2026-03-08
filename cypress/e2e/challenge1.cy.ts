describe("Challenge 1 — Item Filter", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("aside").contains("Desafio 1 - Filtro").click();
  });

  // Helper para pegar apenas os itens da lista principal e evitar o menu lateral
  const getListItems = () => cy.get("main").find("ul li");

  it("renders the page header", () => {
    cy.contains("h1", "Desafio 1 — Filtro de Itens").should("be.visible");
  });

  it("renders all items on load", () => {
    getListItems().should("have.length", 11);
  });

  it("filters items by name in real time", () => {
    cy.get('input[placeholder*="Digite para filtrar"]').type("novatech");
    getListItems().should("have.length", 1);
    cy.contains("NovaTech Solutions").should("be.visible");
  });

  it("filter is case insensitive", () => {
    cy.get('input[placeholder*="Digite para filtrar"]').type("NOVA");
    cy.contains("NovaTech Solutions").should("be.visible");
  });

  it("shows no items when search has no match", () => {
    cy.get('input[placeholder*="Digite para filtrar"]').type("zzznomatch");
    getListItems().should("have.length", 0);
  });

  it("restores all items after clearing the search", () => {
    cy.get('input[placeholder*="Digite para filtrar"]').type("novatech");
    getListItems().should("have.length", 1);
    cy.get('input[placeholder*="Digite para filtrar"]').clear();
    getListItems().should("have.length", 11);
  });

  it("filters by partial name match", () => {
    cy.get('input[placeholder*="Digite para filtrar"]').type("systems");
    cy.contains("BlueWave Systems").should("be.visible");
    cy.contains("IronPeak Systems").should("be.visible");
    getListItems().should("have.length", 2);
  });

  it("has a back button that returns to Home", () => {
    cy.contains("button", "Voltar").click();
    cy.contains("h1", "Frontend Challenge").should("exist");
  });

  it("renders the github badge link", () => {
    cy.get('a[href*="github.com"]').should("exist");
  });
});
