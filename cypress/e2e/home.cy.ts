describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the hero section title and author name", () => {
    cy.contains("h1", "Frontend Challenge").should("be.visible");
    cy.contains("strong", "Andreza").should("be.visible");
  });

  it("renders all 6 technology badges", () => {
    cy.contains("React").should("be.visible");
    cy.contains("TypeScript").should("be.visible");
    cy.contains("Vite").should("be.visible");
    cy.contains("Tailwind CSS").should("be.visible");
    cy.contains("Lucide React").should("be.visible");
    cy.contains("Cypress").should("be.visible");
  });

  it("renders all 4 challenge cards", () => {
    cy.get("main").contains("Desafio 1").should("be.visible");
    cy.get("main").contains("Desafio 2").should("be.visible");
    cy.get("main").contains("Desafio 3").should("be.visible");
    cy.get("main").contains("Desafio 4").should("be.visible");
  });

  it("shows challenge subtitles", () => {
    cy.get("main").contains("Filtro de Itens").should("be.visible");
    cy.get("main").contains("Code Review").should("be.visible");
    cy.get("main").contains("Debug de Erro").should("be.visible");
    cy.get("main").contains("OAuth JWT").should("be.visible");
  });

  it("navigates to Challenge 1 when its card button is clicked", () => {
    cy.get("main").contains("button", "Desafio 1").click();
    cy.get("main").should("not.contain", "Desafios Respondidos");
  });

  it("navigates to Challenge 2 when its card button is clicked", () => {
    cy.get("main").contains("button", "Desafio 2").click();
    cy.get("main").should("not.contain", "Desafios Respondidos");
  });
});
