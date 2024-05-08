
function toBaseUrl() {
    cy.visit("");
}

function getUrl() {
    return cy.url();
}

function validtUrl(url) {
    return cy.url().should("be.include", url);
}

function waitForMethodReturn(metodo, url, code) {
    cy.intercept(metodo, url, {
        statusCode: code,
    });
}

function reloadPage() {
    cy.reload();
}


module.exports = {
    toBaseUrl: toBaseUrl,
    getUrl: getUrl,
    waitForMethodReturn: waitForMethodReturn,
    waitForMethodReturn: waitForMethodReturn,
    reloadPage: reloadPage,
    validtUrl: validtUrl
};
