function click(selector) {
    cy.get(selector).click();
}

function clickElementContainingText(selector, value) {
    cy.get(selector).contains(value).should("be.visible").click();
  }

function input(selector, value) {
    cy.get(selector).should("be.visible").type(value);
}

function containText(selector, value) {
    cy.get(selector).contains(value);
}

function validExists(selector) {
    return cy.get(selector).should("be.visible", { multiple: true });
  }

module.exports = {
    click: click,
    input: input,
    containText: containText,
    validExists: validExists,
    clickElementContainingText: clickElementContainingText
};
