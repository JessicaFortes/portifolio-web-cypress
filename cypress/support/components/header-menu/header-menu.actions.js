import { headerMenuSelectors } from "./header-menu.selectors";

function clickMenuByLabel(label) {
  cy.contains(headerMenuSelectors.menuItem, label).should("be.visible").click();
}

export const headerMenuActions = {
  clickMenuByLabel,
};
