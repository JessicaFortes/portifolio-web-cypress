import { accessSelectors } from "./access.selectors";

function visitHome() {
  cy.visit("/");
}

function fillSignupIdentity(name, email) {
  cy.get(accessSelectors.signupName).should("be.visible").clear().type(name);
  cy.get(accessSelectors.signupEmail).should("be.visible").clear().type(email);
}

function submitSignup() {
  cy.get(accessSelectors.signupButton).should("be.visible").click();
}

function fillLogin(email, password) {
  cy.get(accessSelectors.loginEmail).should("be.visible").clear().type(email);
  cy.get(accessSelectors.loginPassword).should("be.visible").clear().type(password);
}

function submitLogin() {
  cy.get(accessSelectors.loginButton).should("be.visible").click();
}

export const accessActions = {
  visitHome,
  fillSignupIdentity,
  submitSignup,
  fillLogin,
  submitLogin,
};
