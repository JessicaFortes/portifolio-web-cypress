/// <reference types="Cypress" />
import { contactMessage } from "../../fixtures/contact.json";
import { accessActions } from "../../support/pages/access/access.actions";
import { contactActions } from "../../support/pages/contact/contact.actions";
import { contactAssertions } from "../../support/pages/contact/contact.assertions";

describe("Funcionalidade: Contact Us", () => {
  it("[CT-014] Enviar formulario de contato com anexo", { tags: ["@contact", "@regression"] }, () => {
    accessActions.visitHome();
    contactActions.visitContactPage();
    contactActions.fillContactForm(contactMessage);
    contactActions.uploadAttachment("contact-upload.txt");
    contactActions.submitFormAndAcceptAlert();
    contactAssertions.assertSuccessMessage();
    contactActions.goBackHome();
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});
