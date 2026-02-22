Cypress.Commands.add("getByDataQa", (value) => {
  return cy.get(`[data-qa=${value}]`);
});

Cypress.Commands.add("clickMenuByLabel", (label) => {
  return cy.contains(".shop-menu ul li a", label).should("be.visible").click();
});
