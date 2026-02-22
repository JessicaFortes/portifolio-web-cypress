import { checkoutSelectors } from "./checkout.selectors";

function placeOrder() {
  cy.contains(checkoutSelectors.placeOrderButton, "Place Order").click();
}

function fillPayment(payment) {
  cy.get(checkoutSelectors.cardName).type(payment.nameOnCard);
  cy.get(checkoutSelectors.cardNumber).type(payment.cardNumber);
  cy.get(checkoutSelectors.cvc).type(payment.cvc);
  cy.get(checkoutSelectors.expiryMonth).type(payment.expiryMonth);
  cy.get(checkoutSelectors.expiryYear).type(payment.expiryYear);
}

function submitPayment() {
  cy.get(checkoutSelectors.payButton).click();
}

function downloadInvoice() {
  cy.contains(checkoutSelectors.downloadInvoiceButton, "Download Invoice").click();
}

function continueAfterOrder() {
  cy.get(checkoutSelectors.continueButton).click();
}

export const checkoutActions = {
  placeOrder,
  fillPayment,
  submitPayment,
  downloadInvoice,
  continueAfterOrder,
};
