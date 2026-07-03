import { expect, test } from "@playwright/test";

test.describe("public site", () => {
  test("home renders hero, stats and footer credit", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1, name: "ELSOC" })).toBeVisible();
    await expect(page.getByText("Department of Electrical Engineering").first()).toBeVisible();
    await expect(page.getByText("Ronak Dotasara · 24BEE083")).toBeVisible();
  });

  test("navigation reaches every top-level page", async ({ page, isMobile }) => {
    await page.goto("/");
    for (const [label, heading] of [
      ["About", "Engineering minds, electric futures"],
      ["Events", "Events & Workshops"],
      ["Team", "Meet Our Team"],
    ] as const) {
      if (isMobile) {
        await page.getByRole("button", { name: "Open menu" }).click();
        await page
          .getByRole("navigation", { name: "Mobile" })
          .getByRole("link", { name: label, exact: true })
          .click();
      } else {
        await page
          .getByRole("navigation", { name: "Primary" })
          .getByRole("link", { name: label, exact: true })
          .click();
      }
      await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    }
  });

  test("sparkathon shows prize podium, countdown and problem statements", async ({ page }) => {
    await page.goto("/sparkathon");
    await expect(page.getByRole("heading", { level: 1, name: "Sparkathon" })).toBeVisible();
    await expect(page.getByText("₹10,000").first()).toBeVisible();
    await expect(page.getByText("PS-101")).toBeVisible();
    // disclosure opens a statement body
    await page.getByText("Autonomous Self-Evolving Energy Grid").first().click();
    await expect(page.getByText(/multi-agent reinforcement/)).toBeVisible();
  });

  test("project detail page serves the OJAS abstract", async ({ page }) => {
    await page.goto("/projects/ert-landslide-alert-system");
    await expect(
      page.getByRole("heading", { name: /ERT-Based Landslide Alert System/ }),
    ).toBeVisible();
    await expect(page.getByText("Dr. Katam Nishanth").first()).toBeVisible();
  });

  test("legacy problem-statements deep link redirects to /sparkathon", async ({ page }) => {
    await page.goto("/sparkathon/problemstatements");
    await expect(page).toHaveURL(/\/sparkathon#problem-statements$/);
  });

  test("chatbot round-trip works in offline mode", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("chat-launcher").click();
    const panel = page.getByTestId("chat-panel");
    await expect(panel).toBeVisible();
    await panel.getByLabel("Ask the ELSOC assistant").fill("What is Sparkathon?");
    await panel.getByRole("button", { name: "Send message" }).click();
    // Without ANTHROPIC_API_KEY the retrieval fallback must still answer.
    await expect(panel.getByText(/Sparkathon/i).nth(1)).toBeVisible({ timeout: 20_000 });
  });
});

test.describe("admin security", () => {
  test("unauthenticated /admin redirects to login", async ({ page }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/admin\/login/);
    await expect(page.getByRole("heading", { name: "ELSOC Admin" })).toBeVisible();
  });

  test("unauthenticated admin API returns 401/redirect, not data", async ({ request }) => {
    const res = await request.get("/api/admin/projects", { maxRedirects: 0 });
    expect([301, 302, 307, 308, 401]).toContain(res.status());
  });
});
