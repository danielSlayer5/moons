const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'y9jsnq',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
