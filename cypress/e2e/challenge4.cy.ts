describe("Challenge 4 — JWT Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("aside").contains("Desafio 4 - OAuth JWT").click();
  });

  const SECTION_TITLE = "1. Entendendo a documentação: Meu pensamento inicial";

  // Helper: retorna o div de conteúdo da seção colapsável pelo título
  const getContentDiv = (title: string) =>
    cy.contains(title).closest("section").find("div").last();

  it("renders the page header", () => {
    cy.contains("h1", "Desafio 4 — Implementação de Autenticação JWT").should(
      "be.visible",
    );
  });

  it("collapsible sections are open by default", () => {
    // Quando aberta, o div de conteúdo tem a classe border-t (não tem hidden)
    getContentDiv(SECTION_TITLE).should("have.class", "border-t");
    getContentDiv(SECTION_TITLE).should("not.have.class", "hidden");
  });

  it("collapses a section when its header is clicked", () => {
    // Confirma que está aberta antes de clicar
    getContentDiv(SECTION_TITLE).should("not.have.class", "hidden");

    // Clica no header para fechar
    cy.contains(SECTION_TITLE).click({ force: true });

    // Confirma que o conteúdo foi ocultado (div recebe classe hidden)
    getContentDiv(SECTION_TITLE).should("have.class", "hidden");
  });

  it("expands a collapsed section when its header is clicked again", () => {
    // Fecha
    cy.contains(SECTION_TITLE).click({ force: true });
    getContentDiv(SECTION_TITLE).should("have.class", "hidden");

    // Abre novamente
    cy.contains(SECTION_TITLE).click({ force: true });
    getContentDiv(SECTION_TITLE).should("not.have.class", "hidden");
    getContentDiv(SECTION_TITLE).should("have.class", "border-t");
  });

  it("renders the API endpoint documentation", () => {
    cy.contains("POST https://api.acme.com/auth").should("exist");
  });

  it("renders authService and apiClient code blocks", () => {
    // Os títulos dos blocos de código existem no DOM (dentro de seção com overflow-hidden)
    cy.contains("src/services/authService.ts").should("exist");
    cy.contains("src/services/apiClient.ts").should("exist");
  });

  it("has a back button that returns to Home", () => {
    cy.contains("button", "Voltar").click({ force: true });
    cy.contains("h1", "Frontend Challenge").should("be.visible");
  });

  it("renders the github badge link", () => {
    cy.get('a[href*="github.com/andrezadesousa"]').should("exist");
  });
});
