import { headerMenuActions } from "../components/header-menu/header-menu.actions";
import { headerMenuAssertions } from "../components/header-menu/header-menu.assertions";
import { accessActions } from "../pages/access/access.actions";
import { accessAssertions } from "../pages/access/access.assertions";
import { registerActions } from "../pages/register/register.actions";
import { registerAssertions } from "../pages/register/register.assertions";
import { accountCreatedActions } from "../pages/account-created/account-created.actions";
import { accountCreatedAssertions } from "../pages/account-created/account-created.assertions";
import { accountDeletedAssertions } from "../pages/account-deleted/account-deleted.assertions";

function startSignup(user) {
  accessActions.visitHome();
  headerMenuAssertions.assertVisible();
  headerMenuActions.clickMenuByLabel("Signup / Login");
  accessActions.fillSignupIdentity(user.name, user.email);
  accessActions.submitSignup();
}

function completeRegistration(user) {
  registerAssertions.assertOnPage();
  registerAssertions.assertIdentity(user.name, user.email);
  registerActions.fillForm(user);
  registerActions.submitCreateAccount();
  accountCreatedAssertions.assertSuccess();
  accountCreatedActions.clickContinue();
}

function registerNewUser(user) {
  startSignup(user);
  completeRegistration(user);
}

function tryLoginWithoutAssert(user) {
  accessActions.visitHome();
  headerMenuAssertions.assertVisible();
  headerMenuActions.clickMenuByLabel("Signup / Login");
  accessActions.fillLogin(user.email, user.password);
  accessActions.submitLogin();
}

function ensureUserExists(user) {
  tryLoginWithoutAssert(user);

  cy.get("body").then(($body) => {
    const loggedLabel = `Logged in as ${user.name}`;
    if ($body.text().includes(loggedLabel)) {
      logout();
      return;
    }

    registerNewUser(user);
    logout();
  });
}

function login(user) {
  accessActions.visitHome();
  headerMenuAssertions.assertVisible();
  headerMenuActions.clickMenuByLabel("Signup / Login");
  accessAssertions.assertLoginForm();
  accessActions.fillLogin(user.email, user.password);
  accessActions.submitLogin();
  headerMenuAssertions.assertContainsLabel(`Logged in as ${user.name}`);
}

function tryInvalidLogin(user) {
  accessActions.visitHome();
  headerMenuActions.clickMenuByLabel("Signup / Login");
  accessActions.fillLogin(user.email, user.password);
  accessActions.submitLogin();
  accessAssertions.assertInvalidLogin();
}

function trySignupWithExistingEmail(user) {
  accessActions.visitHome();
  headerMenuActions.clickMenuByLabel("Signup / Login");
  accessActions.fillSignupIdentity(user.name, user.email);
  accessActions.submitSignup();
  accessAssertions.assertEmailAlreadyExists();
}

function logout() {
  headerMenuActions.clickMenuByLabel("Logout");
  accessAssertions.assertLoginForm();
}

function deleteCurrentUser() {
  headerMenuActions.clickMenuByLabel("Delete Account");
  accountDeletedAssertions.assertSuccess();
}

export const accountFlow = {
  registerNewUser,
  ensureUserExists,
  login,
  tryInvalidLogin,
  trySignupWithExistingEmail,
  logout,
  deleteCurrentUser,
};
