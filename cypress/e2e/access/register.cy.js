/// <reference types="Cypress" />
import * as navigate from "../../support/actions/navigate";
import * as elements from "../../support/actions/elements";
import * as components from "../../support/pages/components"
import { newUser } from "../../support/pages/access"; "../../support/pages/access"

describe("Funcionalidade: Cadastro de usuário",
  () => {
    it("[CT-001] Cadastrar novo usuário", () => {
      //Dado que o usuário acessa a home da automatiom Exercici
      navigate.toBaseUrl();
      elements.validExists(components.topMenu.optionMenu);
      //Quando clicar em na opção "Signup / Login" no menu
      elements.clickElementContainingText(components.topMenu.optionMenu, "Signup / Login");
      //E informar um nome e email não cadastrado
      elements.input(newUser.name, "Maria Bonita");
      elements.input(newUser.email, "mariabonita@teste.com.br");
    });
  }
);