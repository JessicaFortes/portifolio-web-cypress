const { defineConfig } = require("cypress");
const grepPlugin = require("@cypress/grep/src/plugin");
const { sharedE2EConfig, registerPreTestHook, applyRuntimeSpecConfig } = require("./cypress/config/base");

module.exports = defineConfig({
  e2e: {
    ...sharedE2EConfig,
    setupNodeEvents(on, config) {
      grepPlugin(config);
      registerPreTestHook(on, config);
      return applyRuntimeSpecConfig(config);
    },
  },
});
