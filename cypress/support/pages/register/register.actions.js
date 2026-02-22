import { registerSelectors } from "./register.selectors";

function fillForm(user) {
  cy.get(registerSelectors.titleMrs).check();
  cy.get(registerSelectors.password).type(user.password);
  cy.get(registerSelectors.day).select(user.day);
  cy.get(registerSelectors.month).select(user.month);
  cy.get(registerSelectors.year).select(user.year);
  cy.get(registerSelectors.checkNewsletter).check();
  cy.get(registerSelectors.firstName).type(user.firstName);
  cy.get(registerSelectors.lastName).type(user.lastName);
  cy.get(registerSelectors.company).type(user.company);
  cy.get(registerSelectors.address).type(user.address);
  cy.get(registerSelectors.address2).type(user.address2);
  cy.get(registerSelectors.country).select(user.country);
  cy.get(registerSelectors.state).type(user.state);
  cy.get(registerSelectors.city).type(user.city);
  cy.get(registerSelectors.zipcode).type(user.zipCode);
  cy.get(registerSelectors.number).type(user.number);
}

function submitCreateAccount() {
  cy.get(registerSelectors.btnCreateAccount).click();
}

export const registerActions = {
  fillForm,
  submitCreateAccount,
};
