import { accountCreatedSelectors } from "./account-created.selectors";

function assertSuccess() {
  cy.url().should("include", "/account_created");
  cy.get(accountCreatedSelectors.titlePage).should("contain.text", "Account Created!");
  cy.contains("Congratulations! Your new account has been successfully created!");
}

export const accountCreatedAssertions = {
  assertSuccess,
};
