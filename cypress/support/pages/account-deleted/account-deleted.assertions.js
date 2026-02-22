import { accountDeletedSelectors } from "./account-deleted.selectors";

function assertSuccess() {
  cy.url().should("include", "/delete_account");
  cy.get(accountDeletedSelectors.titlePage).should("contain.text", "Account Deleted!");
}

export const accountDeletedAssertions = {
  assertSuccess,
};
