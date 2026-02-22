import { accessSelectors } from "./access.selectors";

function assertLoginForm() {
  cy.contains(accessSelectors.loginFormTitle, "Login to your account").should("be.visible");
}

function assertInvalidLogin() {
  cy.contains(accessSelectors.loginError, "Your email or password is incorrect!").should("be.visible");
}

function assertEmailAlreadyExists() {
  cy.contains(accessSelectors.signupError, "Email Address already exist!").should("be.visible");
  cy.url().should("include", "/signup");
}

export const accessAssertions = {
  assertLoginForm,
  assertInvalidLogin,
  assertEmailAlreadyExists,
};
