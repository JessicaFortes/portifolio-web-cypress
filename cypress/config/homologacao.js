const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    retries: {
      runMode: 3,
      openMode: 1,
    },
    setupNodeEvents(on, config) {

    },
  },
});
