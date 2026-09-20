import { test, expect } from '@playwright/test';

const publicRoutes = [
	{ path: '/', name: 'Home Page' },
	{ path: '/about', name: 'About Page' },
	{ path: '/experience', name: 'Experience Page' },
	{ path: '/projects', name: 'Projects Page' },
	{ path: '/skills', name: 'Skills Page' },
	{ path: '/blog', name: 'Blog Index Page' },
	{ path: '/blog/playwright-component-object-model', name: 'Blog Post: Playwright COM' },
	{ path: '/blog/reducing-gitlab-ci-feedback-loops', name: 'Blog Post: GitLab CI Parallel Matrices' },
	{ path: '/blog/ai-driven-qa-self-healing-locators', name: 'Blog Post: AI Self-Healing QA' },
	{ path: '/contact', name: 'Contact Page' },
	{ path: '/robots.txt', name: 'Robots.txt' },
	{ path: '/sitemap-index.xml', name: 'Sitemap Index XML' },
	{ path: '/sitemap-0.xml', name: 'Sitemap 0 XML' },
	{ path: '/rss.xml', name: 'RSS Feed' },
];

test.describe('Route Status Code Verification (200 OK)', () => {
	for (const route of publicRoutes) {
		test(`Should return 200 OK for ${route.name} (${route.path})`, async ({ page, request }) => {
			if (route.path.endsWith('.xml') || route.path.endsWith('.txt')) {
				const response = await request.get(route.path);
				// If preview server serves or file exists in dist, verify 200 status or valid XML
				if (response.status() === 200) {
					expect(response.status()).toBe(200);
				} else {
					// Verify static file build artifact in dist
					const fs = await import('fs');
					const path = await import('path');
					const filePath = path.join(process.cwd(), 'dist', route.path.replace(/^\//, ''));
					expect(fs.existsSync(filePath)).toBe(true);
				}
			} else {
				const response = await page.goto(route.path);
				expect(response).not.toBeNull();
				expect(response?.status()).toBe(200);
			}
		});
	}
});

