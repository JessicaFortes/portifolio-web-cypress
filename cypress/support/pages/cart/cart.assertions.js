import { cartSelectors } from "./cart.selectors";

function assertCartHasItems(count) {
  cy.get(cartSelectors.cartTableRows).should("have.length", count);
}

function assertProductInCart(productId) {
  cy.get(`#product-${productId}`).should("be.visible");
}

function assertProductQuantity(productId, quantity) {
  cy.get(`#product-${productId} .cart_quantity button`).should("have.text", `${quantity}`);
}

function assertProductNotInCart(productId) {
  cy.get(`#product-${productId}`).should("not.exist");
}

export const cartAssertions = {
  assertCartHasItems,
  assertProductInCart,
  assertProductQuantity,
  assertProductNotInCart,
};
