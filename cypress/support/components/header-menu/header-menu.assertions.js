import { headerMenuSelectors } from "./header-menu.selectors";

function assertVisible() {
  cy.get(headerMenuSelectors.menuItem).should("be.visible");
}

function assertContainsLabel(label) {
  cy.contains(headerMenuSelectors.menuItem, label).should("be.visible");
}

export const headerMenuAssertions = {
  assertVisible,
  assertContainsLabel,
};
