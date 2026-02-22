import { cartSelectors } from "./cart.selectors";

function openCartFromMenu() {
  cy.get(cartSelectors.cartMenu).first().click();
}

function removeProduct(productId) {
  cy.get(`#product-${productId} .cart_delete a`).click();
}

function proceedToCheckout() {
  cy.contains(cartSelectors.proceedToCheckout, "Proceed To Checkout").click();
}

function goToLoginFromCheckoutModal() {
  cy.get(cartSelectors.registerLoginLink).click();
}

export const cartActions = {
  openCartFromMenu,
  removeProduct,
  proceedToCheckout,
  goToLoginFromCheckoutModal,
};
