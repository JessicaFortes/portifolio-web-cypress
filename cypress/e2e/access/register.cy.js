/// <reference types="Cypress" />
import * as navigate from "../../support/actions/navigate";
import * as elements from "../../support/actions/elements";
import * as components from "../../support/pages/components";
import { login, newUser } from "../../support/pages/access";
import { register } from "../../support/pages/register";
import { accountCreated } from "../../support/pages/accountCreated";
import { userRegister } from '../../fixtures/users.json'

describe("Funcionalidade: Cadastro de usuário",
  () => {
    it("[CT-001] Cadastrar novo usuário", () => {
      //Dado que o cliente acessa o ecommerce
      navigate.toBaseUrl();
      elements.validExists(components.topMenu.optionMenu);
      //E informar um nome e um email para cadastro
      elements.clickElementContainingText(components.topMenu.optionMenu, "Signup / Login");
      elements.input(newUser.name, userRegister.name);
      elements.input(newUser.email, userRegister.email);
      elements.click(newUser.btnSignUp);
      //Quando clicar em "Signup"
      navigate.validtUrl("/signup")
      //Então é direcionado para o formulãrio de cadastro
      elements.containText(register.titleInformationAccount, "Enter Account Information")
      //Quando informar os dados para cadastro
      elements.validHaveValueText(register.name, userRegister.name)
      elements.validHaveValueText(register.email, userRegister.email)
      elements.check(register.titleMrs);
      elements.input(register.password, userRegister.password);
      elements.select(register.day, userRegister.day);
      elements.select(register.month, userRegister.month);
      elements.select(register.year, userRegister.year);
      elements.check(register.checkNewsletter);
      elements.input(register.fistName, userRegister.fistName);
      elements.input(register.lastName, userRegister.lastName);
      elements.input(register.company, userRegister.company);
      elements.input(register.address, userRegister.address);
      elements.input(register.address2, userRegister.address2);
      elements.select(register.country, userRegister.country);
      elements.input(register.state, userRegister.state);
      elements.input(register.city, userRegister.city);
      elements.input(register.zipcode, userRegister.zipCode);
      elements.input(register.number, userRegister.number);
      //E clicar em "Create Account"
      elements.click(register.btnCreateAccount);
      //Então a conta é criada com sucesso
      navigate.validtUrl("/account_created")
      elements.containText(accountCreated.titlePage, "Account Created!")
      elements.containText(accountCreated.txt1, "Congratulations! Your new account has been successfully created!")
      elements.containText(accountCreated.txt2, "You can now take advantage of member privileges to enhance your online shopping experience with us.")
    });
    it("[CT-002] Deletar usuário", () => {
      navigate.toBaseUrl();
      elements.validExists(components.topMenu.optionMenu);
      elements.clickElementContainingText(components.topMenu.optionMenu, "Signup / Login");
      elements.input(login.email, userRegister.email);
      elements.input(login.password, userRegister.password);
      elements.click(login.btnLogin);
      elements.clickElementContainingText(components.topMenu.optionMenu, "Delete Account");
    });
  }
);