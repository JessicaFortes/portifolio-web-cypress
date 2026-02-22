import { productsSelectors } from "./products.selectors";

function assertProductsListVisible() {
  cy.get(productsSelectors.productsList).should("have.length.greaterThan", 0);
}

function assertOnProductDetailsPage() {
  cy.url().should("include", "/product_details/");
  cy.get(".product-information").should("be.visible");
}

function assertSearchResultsVisible() {
  cy.contains(productsSelectors.searchedProductsTitle, "Searched Products").should("be.visible");
  cy.get(productsSelectors.productsList).should("have.length.greaterThan", 0);
}

export const productsAssertions = {
  assertProductsListVisible,
  assertOnProductDetailsPage,
  assertSearchResultsVisible,
};
