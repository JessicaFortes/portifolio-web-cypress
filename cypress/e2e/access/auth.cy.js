/// <reference types="Cypress" />
import { accountFlow } from "../../support/flows/account.flow";

describe("Funcionalidade: Autenticacao", () => {
  let authUser;
  let userInvalido;

  before(() => {
    cy.fixture("users").then((fixtureData) => {
      authUser = fixtureData.authUser;
      userInvalido = fixtureData.userInvalido;

      if (!authUser || !userInvalido) {
        throw new Error("Massa de auth ausente. O pre-test global nao populou users.json.");
      }
    });

    cy.then(() => {
      accountFlow.ensureUserExists(authUser);
    });
  });

  it("[CT-004] Realizar login com credenciais válidas", { tags: ["@smokeTest", "@auth"] }, () => {
    accountFlow.login(authUser);
    accountFlow.logout();
  });

  it("[CT-005] Nao permitir login com credenciais inválida", { tags: ["@negative", "@auth"] }, () => {
    accountFlow.tryInvalidLogin(userInvalido);
  });

});
