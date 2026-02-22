/// <reference types="Cypress" />
import { userRegister } from "../../fixtures/users.json";
import { defaultCard } from "../../fixtures/payment.json";
import { buildUser } from "../../support/factories/user.factory";
import { accountFlow } from "../../support/flows/account.flow";
import { checkoutFlow } from "../../support/flows/checkout.flow";
import { checkoutActions } from "../../support/pages/checkout/checkout.actions";

describe("Funcionalidade: Checkout", () => {
  it("[CT-011] Finalizar compra com usuario autenticado", { tags: ["@smokeTest", "@checkout"] }, () => {
    const user = buildUser(userRegister);

    accountFlow.registerNewUser(user);
    checkoutFlow.addProductsToCart([1]);
    checkoutFlow.checkoutAsLoggedUser(defaultCard);
    checkoutActions.continueAfterOrder();
    accountFlow.deleteCurrentUser();
  });

  it("[CT-012] Carrinho deve persistir apos login durante checkout", { tags: ["@checkout"] }, () => {
    const user = buildUser(userRegister);

    accountFlow.registerNewUser(user);
    accountFlow.logout();
    checkoutFlow.addProductsToCart([1, 2]);
    checkoutFlow.checkoutViaLoginFromCart(user, defaultCard, 2);
    checkoutActions.continueAfterOrder();
    accountFlow.deleteCurrentUser();
  });

  it("[CT-013] Download de invoice apos pedido", { tags: ["@checkout"] }, () => {
    const user = buildUser(userRegister);

    accountFlow.registerNewUser(user);
    checkoutFlow.addProductsToCart([1]);
    checkoutFlow.checkoutAsLoggedUser(defaultCard);
    checkoutActions.downloadInvoice();
    checkoutActions.continueAfterOrder();
    accountFlow.deleteCurrentUser();
  });
});
