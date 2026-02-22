import { contactSelectors } from "./contact.selectors";

function assertSuccessMessage() {
  cy.contains(contactSelectors.successBanner, "Success! Your details have been submitted successfully.").should("be.visible");
}

export const contactAssertions = {
  assertSuccessMessage,
};
