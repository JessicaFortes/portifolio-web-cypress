/// <reference types="Cypress" />
import { userRegister } from "../../fixtures/users.json";
import { accountFlow } from "../../support/flows/account.flow";
import { buildUser } from "../../support/factories/user.factory";

describe("Funcionalidade: Cadastro de usuario", () => {
  let authUser;

  before(() => {
    cy.fixture("users").then((fixtureData) => {
      authUser = fixtureData.authUser;

      if (!authUser) {
        throw new Error("authUser ausente. O pre-test global nao populou users.json.");
      }
    });

    cy.then(() => {
      accountFlow.ensureUserExists(authUser);
    });
  });

  it(
    "[CT-001] Cadastrar novo usuario",
    { tags: ["@smokeTest", "@access"] },
    () => {
      const user = buildUser(userRegister);

      accountFlow.registerNewUser(user);
      accountFlow.deleteCurrentUser();
    }
  );

  it("[CT-002] Deletar usuario apos login", { tags: ["@access"] }, () => {
    const user = buildUser(userRegister);

    accountFlow.registerNewUser(user);
    accountFlow.logout();
    accountFlow.login(user);
    accountFlow.deleteCurrentUser();
  });

  it("[CT-003] Nao permitir cadastro com email existente", { tags: ["@negative", "@access"] }, () => {
    accountFlow.trySignupWithExistingEmail(authUser);
  });
});
