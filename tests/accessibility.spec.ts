import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pagesToAudit = [
	{ path: '/', name: 'Home Page' },
	{ path: '/about', name: 'About Page' },
	{ path: '/experience', name: 'Experience Page' },
	{ path: '/projects', name: 'Projects Page' },
	{ path: '/skills', name: 'Skills Page' },
	{ path: '/blog', name: 'Blog Index Page' },
	{ path: '/blog/why-we-chose-maestro-over-appium', name: 'Blog Post: Why We Chose Maestro Over Appium' },
	{ path: '/contact', name: 'Contact Page' },
];

test.describe('WCAG 2.2 AA Accessibility Audits', () => {
	for (const pageItem of pagesToAudit) {
		test(`Should have zero a11y violations on ${pageItem.name} (${pageItem.path})`, async ({ page }) => {
			await page.goto(pageItem.path, { waitUntil: 'domcontentloaded' });
			await page.waitForLoadState('load');

			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
				.analyze();

			if (accessibilityScanResults.violations.length > 0) {
				console.error(
					`A11y Violations on ${pageItem.path}:`,
					JSON.stringify(
						accessibilityScanResults.violations.map((v) => ({
							id: v.id,
							impact: v.impact,
							description: v.description,
							help: v.help,
							nodes: v.nodes.map((n) => n.html),
						})),
						null,
						2
					)
				);
			}

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	}
});

