const fs = require("fs");
const path = require("path");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");

let hasPopulatedUsersFixtureInThisRun = false;

const sharedE2EConfig = Object.freeze({
  baseUrl: "https://automationexercise.com",
  specPattern: "cypress/e2e/**/*.cy.js",
  excludeSpecPattern: ["cypress/e2e/00-setup/**/*.cy.js"],
  supportFile: "cypress/support/e2e.js",
  screenshotOnRunFailure: true,
  video: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
  },
});

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomDigits(size) {
  return `${Math.floor(Math.random() * 10 ** size)}`.padStart(size, "0");
}

function buildFakeAuthUser() {
  const firstNames = ["Maria", "Ana", "Joana", "Clara", "Julia", "Livia"];
  const lastNames = ["Souza", "Caldas", "Almeida", "Lopes", "Oliveira", "Moraes"];
  const companies = ["QA Labs", "Quality Hub", "Test Works", "Automation BR"];
  const streets = ["Rua das Flores", "Rua Aurora", "Rua do Sol", "Rua Primavera"];
  const states = ["Sao Paulo", "Rio de Janeiro", "Minas Gerais", "Parana"];
  const cities = ["Sao Paulo", "Campinas", "Curitiba", "Belo Horizonte"];
  const countries = ["Canada", "United States", "India", "Australia"];

  const firstName = randomFrom(firstNames);
  const lastName = randomFrom(lastNames);
  const emailDigits = randomDigits(6);

  return {
    email: `user-${emailDigits}@qa.com.br`,
    password: "123456",
    name: `${firstName} ${lastName}`,
    day: `${Math.floor(Math.random() * 28) + 1}`,
    month: randomFrom([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]),
    year: `${Math.floor(Math.random() * 18) + 1980}`,
    firstName,
    lastName,
    company: randomFrom(companies),
    address: randomFrom(streets),
    address2: `Apto ${Math.floor(Math.random() * 900) + 100}`,
    country: randomFrom(countries),
    state: randomFrom(states),
    city: randomFrom(cities),
    zipCode: randomDigits(8),
    number: `21${randomDigits(9)}`,
  };
}

function updateUsersFixtureWithPreTestData(projectRoot) {
  const usersFixturePath = path.resolve(projectRoot, "cypress/fixtures/users.json");

  if (!fs.existsSync(usersFixturePath)) {
    throw new Error(`Fixture nao encontrada em: ${usersFixturePath}`);
  }

  const currentData = JSON.parse(fs.readFileSync(usersFixturePath, "utf-8"));
  const authUser = buildFakeAuthUser();
  const userInvalido = {
    email: authUser.email,
    password: `${authUser.password}99`,
  };

  const nextData = {
    ...currentData,
    authUser,
    userInvalido,
  };

  fs.writeFileSync(usersFixturePath, `${JSON.stringify(nextData, null, 2)}\n`, "utf-8");
}

function registerPreTestHook(on, config) {
  on("before:run", async (runDetails) => {
    await beforeRunHook(runDetails);

    if (hasPopulatedUsersFixtureInThisRun) {
      return;
    }

    updateUsersFixtureWithPreTestData(config.projectRoot);
    hasPopulatedUsersFixtureInThisRun = true;
  });

  on("after:run", async (results) => {
    await afterRunHook(results);
  });
}

function applyRuntimeSpecConfig(config) {
  if (config.env && config.env.includeSetup) {
    config.excludeSpecPattern = [];
  }

  return config;
}

module.exports = {
  sharedE2EConfig,
  registerPreTestHook,
  applyRuntimeSpecConfig,
};
