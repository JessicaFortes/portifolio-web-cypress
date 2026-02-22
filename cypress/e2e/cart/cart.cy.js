/// <reference types="Cypress" />
import { checkoutFlow } from "../../support/flows/checkout.flow";
import { cartActions } from "../../support/pages/cart/cart.actions";
import { cartAssertions } from "../../support/pages/cart/cart.assertions";

describe("Funcionalidade: Carrinho", () => {
  it("[CT-009] Adicionar multiplos produtos no carrinho", { tags: ["@smokeTest", "@cart"] }, () => {
    checkoutFlow.addProductsToCart([1, 2]);
    cartAssertions.assertCartHasItems(2);
    cartAssertions.assertProductInCart(1);
    cartAssertions.assertProductInCart(2);
    cartAssertions.assertProductQuantity(1, 1);
    cartAssertions.assertProductQuantity(2, 1);
  });

  it("[CT-010] Remover item do carrinho", { tags: ["@cart"] }, () => {
    checkoutFlow.addProductsToCart([1, 2]);
    cartAssertions.assertCartHasItems(2);
    cartActions.removeProduct(1);
    cartAssertions.assertProductNotInCart(1);
  });
});
