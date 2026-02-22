import { productsSelectors } from "./products.selectors";

function visitProducts() {
  cy.visit("/products");
}

function openFirstProductDetails() {
  cy.get(productsSelectors.productDetailsButton).first().click();
}

function searchByName(name) {
  cy.get(productsSelectors.searchInput).should("be.visible").clear().type(name);
  cy.get(productsSelectors.searchButton).click();
}

function addProductToCartById(productId) {
  cy.get(`a[data-product-id="${productId}"]`).first().click({ force: true });
}

function continueShoppingOnModal() {
  cy.contains(".modal-content button", "Continue Shopping").click();
}

function viewCartOnModal() {
  cy.contains(".modal-content a", "View Cart").click();
}

export const productsActions = {
  visitProducts,
  openFirstProductDetails,
  searchByName,
  addProductToCartById,
  continueShoppingOnModal,
  viewCartOnModal,
};
