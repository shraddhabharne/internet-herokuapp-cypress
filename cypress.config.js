const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads'); 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}"
      on('task', verifyDownloadTasks);
    },

    baseUrl: 'https://the-internet.herokuapp.com'
  },
});
