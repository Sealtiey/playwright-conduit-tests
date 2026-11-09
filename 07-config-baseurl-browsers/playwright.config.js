import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  baseURL: 'https://conduit.mate.academy',
  },

  /* Configure projects for major browsers */
  projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
  name: 'firefox',
  testDir: './tests/signIn',
  use: { ...devices['Desktop Firefox'] },
},
  {
    name: 'mobile-chrome',
    use: { ...devices['Pixel 8'] },
  },
],
});
