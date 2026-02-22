import { registerSelectors } from "./register.selectors";

function assertOnPage() {
  cy.url().should("include", "/signup");
  cy.contains(registerSelectors.titleInformationAccount, "Enter Account Information");
}

function assertIdentity(name, email) {
  cy.get(registerSelectors.name).should("have.value", name);
  cy.get(registerSelectors.email).should("have.value", email);
}

export const registerAssertions = {
  assertOnPage,
  assertIdentity,
};
