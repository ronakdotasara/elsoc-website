import { defineConfig, devices } from "@playwright/test";

/**
 * Critical-path E2E. Runs against a production build:
 *   npm run build && npm run test:e2e
 * (CI restores the build artifact and sets PLAYWRIGHT_SKIP_BUILD=1.)
 * Port 3005 avoids clashing with local dev (3000/3010).
 */
const PORT = process.env.PLAYWRIGHT_PORT ?? "3005";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["html"]] : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: process.env.PLAYWRIGHT_SKIP_BUILD
      ? `npm run start -- -p ${PORT}`
      : `npm run build && npm run start -- -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: false,
    timeout: 240_000,
    env: {
      // E2E runs against seed-content fallback: no DB/AI keys on purpose, so
      // the suite also proves the zero-services degradation path.
      DATABASE_URL: "",
      ANTHROPIC_API_KEY: "",
      AUTH_SECRET: "playwright-only-secret",
      // Pin the auth origin to this server — a developer's .env may point at
      // a different port and would bounce middleware redirects off-origin.
      AUTH_URL: `http://localhost:${PORT}`,
      AUTH_TRUST_HOST: "true",
    },
  },
});
