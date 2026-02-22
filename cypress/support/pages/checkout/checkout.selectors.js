const checkoutSelectors = Object.freeze({
  addressDetailsTitle: ".checkout-information h2",
  placeOrderButton: "a.check_out",
  cardName: "[data-qa=name-on-card]",
  cardNumber: "[data-qa=card-number]",
  cvc: "[data-qa=cvc]",
  expiryMonth: "[data-qa=expiry-month]",
  expiryYear: "[data-qa=expiry-year]",
  payButton: "[data-qa=pay-button]",
  orderPlacedTitle: "[data-qa=order-placed]",
  downloadInvoiceButton: "a.check_out",
  continueButton: "[data-qa=continue-button]",
});

export { checkoutSelectors };
