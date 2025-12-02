import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-features=RendererCodeIntegrity');
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--no-sandbox');
        }

        return launchOptions;
      });

      return config;
    },
  },
});
