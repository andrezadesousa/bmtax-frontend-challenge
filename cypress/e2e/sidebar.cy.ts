describe("Sidebar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders sidebar with navigation links", () => {
    cy.get("aside").contains("Home").should("be.visible");
    cy.get("aside").contains("Desafio 1 - Filtro").should("be.visible");
    cy.get("aside").contains("Desafio 2 - Code Review").should("be.visible");
    cy.get("aside").contains("Desafio 3 - Debug de erro").should("be.visible");
    cy.get("aside").contains("Desafio 4 - OAuth JWT").should("be.visible");
  });

  it("renders profile section with name and role", () => {
    cy.get("aside").contains("Andreza").should("be.visible");
    cy.get("aside").contains("Desenvolvedora Front-end").should("be.visible");
  });

  it("renders GitHub and LinkedIn links", () => {
    cy.get("aside").find('a[aria-label="GitHub"]').should("be.visible");
    cy.get("aside").find('a[aria-label="LinkedIn"]').should("be.visible");
  });

  it("navigates to Challenge 1 when sidebar link is clicked", () => {
    cy.get("aside").contains("Desafio 1 - Filtro").click();
    cy.get("main").contains("h1", "Desafio 1").should("be.visible");
  });

  it("navigates to Challenge 2 when sidebar link is clicked", () => {
    cy.get("aside").contains("Desafio 2 - Code Review").click();
    cy.get("main").contains("h1", "Desafio 2").should("be.visible");
  });

  it("navigates to Challenge 3 when sidebar link is clicked", () => {
    cy.get("aside").contains("Desafio 3 - Debug de erro").click();
    cy.get("main").contains("h1", "Desafio 3").should("be.visible");
  });

  it("navigates to Challenge 4 when sidebar link is clicked", () => {
    cy.get("aside").contains("Desafio 4 - OAuth JWT").click();
    cy.get("main").contains("h1", "Desafio 4").should("be.visible");
  });

  it("navigates back to Home when Home link is clicked", () => {
    cy.get("aside").contains("Desafio 1 - Filtro").click();
    cy.get("aside").contains("Home").click();
    cy.get("main").contains("h1", "Frontend Challenge").should("be.visible");
  });

  it("highlights the active sidebar item", () => {
    cy.get("aside").contains("Desafio 1 - Filtro").click();
    cy.get("aside")
      .contains("button", "Desafio 1 - Filtro")
      .should("have.class", "bg-primary-light");
  });
});
