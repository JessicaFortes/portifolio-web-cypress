import { headerMenuActions } from "../components/header-menu/header-menu.actions";
import { productsActions } from "../pages/products/products.actions";
import { cartActions } from "../pages/cart/cart.actions";
import { cartAssertions } from "../pages/cart/cart.assertions";
import { checkoutActions } from "../pages/checkout/checkout.actions";
import { checkoutAssertions } from "../pages/checkout/checkout.assertions";
import { accessActions } from "../pages/access/access.actions";

function addProductsToCart(productIds) {
  accessActions.visitHome();
  productIds.forEach((productId, index) => {
    productsActions.addProductToCartById(productId);
    if (index === productIds.length - 1) {
      productsActions.viewCartOnModal();
      return;
    }

    productsActions.continueShoppingOnModal();
  });
}

function checkoutAsLoggedUser(payment) {
  cartActions.proceedToCheckout();
  checkoutAssertions.assertCheckoutPage();
  checkoutActions.placeOrder();
  checkoutActions.fillPayment(payment);
  checkoutActions.submitPayment();
  checkoutAssertions.assertOrderPlaced();
}

function checkoutViaLoginFromCart(user, payment, expectedCartItems) {
  cartActions.proceedToCheckout();
  cartActions.goToLoginFromCheckoutModal();
  accessActions.fillLogin(user.email, user.password);
  accessActions.submitLogin();
  headerMenuActions.clickMenuByLabel("Cart");
  cartAssertions.assertCartHasItems(expectedCartItems);
  checkoutAsLoggedUser(payment);
}

export const checkoutFlow = {
  addProductsToCart,
  checkoutAsLoggedUser,
  checkoutViaLoginFromCart,
};
