import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const testBaseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4321';

test.describe('portfolio experience', () => {
  test('renders the complete professional narrative and resolves navigation', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Andriy Moiseyenko — QA Automation Engineer');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      'https://anmo.dev/social-card.png'
    );
    await expect(page.getByText('QA Automation Engineer · Ottawa')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'I know where systems break.'
    );
    await expect(page.locator('.case-study')).toHaveCount(2);
    await expect(page.locator('.product-card')).toHaveCount(3);

    for (const href of ['#work', '#products', '#about', '#contact']) {
      await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible();
      await expect(page.locator(href)).toHaveCount(1);
    }

    await page.locator('a[href="#work"]').first().click();
    await expect(page.locator('#work')).toBeInViewport();
  });

  test('publishes safe contact and project paths', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('a[href="mailto:amoiseyenko@ukr.net"]')).toHaveCount(2);
    await expect(page.locator('a[href="/resume/Andriy-Moiseyenko-Resume.pdf"]')).toHaveCount(2);

    const externalLinks = page.locator('a[target="_blank"]');
    await expect(externalLinks).toHaveCount(5);

    for (let index = 0; index < (await externalLinks.count()); index += 1) {
      const link = externalLinks.nth(index);
      await expect(link).toHaveAttribute('href', /^https:\/\//);
      await expect(link).toHaveAttribute('rel', /noreferrer/);
    }

    await expect(page.getByText('View source')).toHaveCount(0);
    await expect(page.locator('a[href="https://young-mystic.com"]')).toHaveCount(1);
    await expect(page.locator('a[href="https://anna-home-five.vercel.app"]')).toHaveCount(1);
    await expect(page.locator('a[href="https://alexhealing.com"]')).toHaveCount(1);
  });

  test('has no serious or critical automated accessibility violations', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter(
      ({ impact }) => impact === 'serious' || impact === 'critical'
    );

    expect(blocking).toEqual([]);
  });

  test('honours reduced motion without hiding content', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    await expect(page.locator('html')).not.toHaveClass(/motion-ready/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('.case-study').last()).toBeAttached();
  });

  for (const width of [360, 390, 430, 768]) {
    test(`does not overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto('/');

      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth
      }));

      expect(dimensions.content).toBe(dimensions.viewport);
    });
  }
});

test('keeps the full narrative readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(testBaseUrl);

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('.case-study')).toHaveCount(2);
  await expect(page.locator('.product-card')).toHaveCount(3);
  await expect(page.getByText('Curious by default. Precise on purpose.')).toBeVisible();

  await context.close();
});
