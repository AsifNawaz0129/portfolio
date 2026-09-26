import { test, expect } from '@playwright/test';

test.describe('Navigation Links & CTA Flows', () => {
	test('Header navigation links navigate correctly', async ({ page }) => {
		await page.goto('/');

		const navLinks = [
			{ name: 'about', expectedUrl: '/about' },
			{ name: 'experience', expectedUrl: '/experience' },
			{ name: 'projects', expectedUrl: '/projects' },
			{ name: 'skills', expectedUrl: '/skills' },
			{ name: 'blog', expectedUrl: '/blog' },
			{ name: 'contact', expectedUrl: '/contact' },
		];

		for (const link of navLinks) {
			const navItem = page.locator('header #desktop-nav').getByRole('link', { name: link.name, exact: true });
			await expect(navItem).toBeVisible();
			await navItem.click();
			await expect(page).toHaveURL(new RegExp(link.expectedUrl));
		}

		// Navigate back to home via AN logo
		const logo = page.locator('header').getByRole('link', { name: /Asif Nawaz - Home/i });
		await logo.click();
		await expect(page).toHaveURL(/\/$/);
	});

	test('Mobile navigation menu toggles and navigates on mobile viewport', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });
		await page.goto('/');

		const toggleBtn = page.locator('#mobile-menu-toggle');
		await expect(toggleBtn).toBeVisible();
		await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

		// Open mobile menu
		await toggleBtn.click();
		await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

		const mobileMenu = page.locator('#mobile-menu');
		await expect(mobileMenu).toBeVisible();

		// Click "skills" link in mobile menu
		const skillsLink = mobileMenu.getByRole('link', { name: 'Skills' });
		await expect(skillsLink).toBeVisible();
		await skillsLink.click();
		await expect(page).toHaveURL(/\/skills/);
	});

	test('Home Hero Action buttons navigate correctly', async ({ page }) => {
		await page.goto('/');

		// Click "About Me"
		const aboutBtn = page.getByRole('link', { name: 'About Me' });
		await expect(aboutBtn).toBeVisible();
		await aboutBtn.click();
		await expect(page).toHaveURL(/\/about/);

		await page.goto('/');
		// Click "View Work"
		const workBtn = page.getByRole('link', { name: 'View Work' });
		await expect(workBtn).toBeVisible();
		await workBtn.click();
		await expect(page).toHaveURL(/\/projects/);

		await page.goto('/');
		// Click "Get in Touch"
		const contactBtn = page.getByRole('link', { name: 'Get in Touch' });
		await expect(contactBtn).toBeVisible();
		await contactBtn.click();
		await expect(page).toHaveURL(/\/contact/);
	});

	test('Resume buttons have valid download attributes and target', async ({ page }) => {
		await page.goto('/about');
		const resumeBtn = page.getByRole('link', { name: 'Download Resume', exact: true });
		await expect(resumeBtn).toBeVisible();
		await expect(resumeBtn).toHaveAttribute('href', '/Asif-Nawaz-Resume.pdf');
		await expect(resumeBtn).toHaveAttribute('download', 'Asif-Nawaz-Resume.pdf');

		// Header navbar resume button
		const navResumeBtn = page.getByRole('link', { name: 'Download Resume PDF' });
		await expect(navResumeBtn).toBeVisible();
		await expect(navResumeBtn).toHaveAttribute('href', '/Asif-Nawaz-Resume.pdf');
		await expect(navResumeBtn).toHaveAttribute('download', 'Asif-Nawaz-Resume.pdf');

		await page.goto('/experience');
		const expResumeBtn = page.getByRole('link', { name: 'Download PDF Resume' });
		await expect(expResumeBtn).toBeVisible();
		await expect(expResumeBtn).toHaveAttribute('href', '/Asif-Nawaz-Resume.pdf');
		await expect(expResumeBtn).toHaveAttribute('download', 'Asif-Nawaz-Resume.pdf');
	});

	test('Blog article cards navigate to single post views', async ({ page }) => {
		await page.goto('/blog');
		const firstArticleLink = page.locator('article h2 a').first();
		await expect(firstArticleLink).toBeVisible();
		const href = await firstArticleLink.getAttribute('href');
		expect(href).toMatch(/\/blog\/.+/);

		await firstArticleLink.click();
		await expect(page).toHaveURL(new RegExp(href!));

		// Back to all articles link
		const backBtn = page.getByRole('link', { name: 'Back to all articles' });
		await expect(backBtn).toBeVisible();
		await backBtn.click();
		await expect(page).toHaveURL(/\/blog/);
	});
});

