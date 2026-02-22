import { accountCreatedSelectors } from "./account-created.selectors";

function clickContinue() {
  cy.get(accountCreatedSelectors.continueButton).should("be.visible").click();
}

export const accountCreatedActions = {
  clickContinue,
};
