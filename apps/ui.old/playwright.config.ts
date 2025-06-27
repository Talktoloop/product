import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from 'playwright-src/env.config';
import { adminPath } from 'playwright-src/test-data/user.data';

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [
    ['html'],
    ['json', { outputFile: './playwright-report/results.json' }],
    ['junit', { outputFile: './playwright-report/results.xml' }],
  ],
  use: {
    baseURL: BASE_URL,
    ignoreHTTPSErrors: true,
    actionTimeout: 0,
    trace: 'on',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium-logged-smoke',
      grep: /@smoke/,
      use: { ...devices['Desktop Chrome'], storageState: adminPath },
      dependencies: ['setup'],
    },
    {
      name: 'chromium-logged-admin',
      grep: /@admin/,
      use: { ...devices['Desktop Chrome'], storageState: adminPath },
      dependencies: ['setup', 'chromium-logged-smoke'],
    },
    {
      name: 'chromium-non-logged',
      grepInvert: /@admin|@smoke/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
