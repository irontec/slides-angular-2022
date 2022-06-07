const { defineConfig } = require("cypress");

module.exports = defineConfig({
  /*   reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true
  }, */
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    reportDir: "reports",
    reportFilename: "Report",
    code: "false",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200/",
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
