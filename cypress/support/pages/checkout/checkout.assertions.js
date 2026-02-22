import { checkoutSelectors } from "./checkout.selectors";

function assertCheckoutPage() {
  cy.url().should("include", "/checkout");
  cy.contains("Address Details").should("be.visible");
  cy.contains("Review Your Order").should("be.visible");
  cy.contains(checkoutSelectors.placeOrderButton, "Place Order").should("be.visible");
}

function assertOrderPlaced() {
  cy.contains(checkoutSelectors.orderPlacedTitle, "Order Placed!").should("be.visible");
}

export const checkoutAssertions = {
  assertCheckoutPage,
  assertOrderPlaced,
};
