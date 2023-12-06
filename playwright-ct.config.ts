import { defineConfig, devices } from '@playwright/experimental-ct-react';
import { TestOptions } from "./src/components/cube/tests/test-helpers";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { dirname } from 'node:path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const cubePath = process.env.TEST_PRODUCTION === 'true' ? resolve(__dirname, "/dist/cube-react-component") : resolve(__dirname, "/src/components/cube/cube");
console.log(cubePath);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<TestOptions>({
  testDir: './src/components/cube/tests',
  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: './__snapshots__',
  /* Maximum time one test can run for. */
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,
    ctViteConfig: {
      plugins: [react()],
      resolve: {
        alias: {
          "adaptive-cube-react-component": cubePath,
        }
      }
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], channel: "chrome" },

    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
