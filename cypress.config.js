const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3363g",
  chromeWebSecurity: false,
  env: {
    omsDev: "https://dev-custom-payments-generator.web.app/login",
    mxQuizDev: "https://develop-moons-quiz-mx.web.app/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
