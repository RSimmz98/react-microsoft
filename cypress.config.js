import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'r1b3nh',
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
