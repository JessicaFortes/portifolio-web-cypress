/// <reference types="Cypress" />
import { productsActions } from "../../support/pages/products/products.actions";
import { productsAssertions } from "../../support/pages/products/products.assertions";

describe("Funcionalidade: Produtos", () => {
  it("[CT-007] Listar produtos e abrir detalhe", { tags: ["@smokeTest", "@products"] }, () => {
    productsActions.visitProducts();
    productsAssertions.assertProductsListVisible();
    productsActions.openFirstProductDetails();
    productsAssertions.assertOnProductDetailsPage();
  });

  it("[CT-008] Buscar produto por nome", { tags: ["@products"] }, () => {
    productsActions.visitProducts();
    productsActions.searchByName("Blue Top");
    productsAssertions.assertSearchResultsVisible();
  });
});
