/// <reference types="Cypress" />
import { accountFlow } from "../../support/flows/account.flow";

describe("Pre-Testes: Massa de autenticacao", () => {
  it("[SETUP-001] Criar usuario de autenticacao", { tags: ["@setup", "@auth"] }, () => {
    cy.fixture("users").then((fixtureData) => {
      const authUser = fixtureData.authUser;

      if (!authUser) {
        throw new Error("authUser nao foi gerado. Execute o run completo para disparar o pre-test global.");
      }

      accountFlow.registerNewUser(authUser);
      accountFlow.logout();
    });
  });
});
