import { contactSelectors } from "./contact.selectors";

function visitContactPage() {
  cy.get(contactSelectors.contactMenu).first().click();
}

function fillContactForm(data) {
  cy.get(contactSelectors.name).type(data.name);
  cy.get(contactSelectors.email).type(data.email);
  cy.get(contactSelectors.subject).type(data.subject);
  cy.get(contactSelectors.message).type(data.message);
}

function uploadAttachment(fileName) {
  cy.get(contactSelectors.uploadFile).selectFile(`cypress/fixtures/${fileName}`);
}

function submitFormAndAcceptAlert() {
  cy.on("window:confirm", () => true);
  cy.get(contactSelectors.submitButton).click();
}

function goBackHome() {
  cy.get(contactSelectors.homeButton).click();
}

export const contactActions = {
  visitContactPage,
  fillContactForm,
  uploadAttachment,
  submitFormAndAcceptAlert,
  goBackHome,
};
