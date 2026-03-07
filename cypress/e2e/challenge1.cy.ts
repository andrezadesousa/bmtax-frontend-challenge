describe("Challenge 1 — Item Filter", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("aside").contains("Desafio 1 - Filtro").click();
  });

  it("renders the page header", () => {
    cy.contains("h1", "Desafio 1 — Filtro de Itens").should("be.visible");
  });

  it("renders all 10 items on load", () => {
    cy.get("ul li").should("have.length", 10);
  });

  it("filters items by name in real time", () => {
    cy.get('input[placeholder="Digite para filtrar os itens..."]').type("nova");
    cy.get("ul li").should("have.length", 1);
    cy.contains("NovaTech Solutions").should("be.visible");
  });

  it("filter is case insensitive", () => {
    cy.get('input[placeholder="Digite para filtrar os itens..."]').type("NOVA");
    cy.contains("NovaTech Solutions").should("be.visible");
  });

  it("shows no items when search has no match", () => {
    cy.get('input[placeholder="Digite para filtrar os itens..."]').type(
      "zzznomatch",
    );
    cy.get("ul li").should("have.length", 0);
  });

  it("restores all items after clearing the search", () => {
    cy.get('input[placeholder="Digite para filtrar os itens..."]').type("nova");
    cy.get("ul li").should("have.length", 1);
    cy.get('input[placeholder="Digite para filtrar os itens..."]').clear();
    cy.get("ul li").should("have.length", 10);
  });

  it("filters by partial name match", () => {
    cy.get('input[placeholder="Digite para filtrar os itens..."]').type(
      "systems",
    );
    cy.contains("BlueWave Systems").should("be.visible");
    cy.contains("IronPeak Systems").should("be.visible");
    cy.get("ul li").should("have.length", 2);
  });

  it("has a back button that returns to Home", () => {
    cy.contains("Voltar").click();
    cy.contains("h1", "Frontend Challenge").should("be.visible");
  });

  it("renders the github badge link", () => {
    cy.contains("Veja o código desse desafio").should("be.visible");
  });
});
