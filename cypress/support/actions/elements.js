function click(selector) {
    cy.get(selector).click();
}

function clickElementContainingText(selector, value) {
    cy.get(selector).contains(value).should("be.visible").click();
}

function check(selector) {
    cy.get(selector).check();
}

function select(selector, option) {
    cy.get(selector).select(option);
}

function input(selector, value) {
    cy.get(selector).should("be.visible").type(value);
}

function containText(selector, texto) {
    cy.get(selector).contains(texto);
}

function validHaveValueText(selector, texto) {
    cy.get(selector).should("have.value", texto);
}

function validExists(selector) {
    return cy.get(selector).should("be.visible", { multiple: true });
}

module.exports = {
    click: click,
    input: input,
    containText: containText,
    validExists: validExists,
    clickElementContainingText: clickElementContainingText,
    validHaveValueText: validHaveValueText,
    check: check,
    select:select
};
