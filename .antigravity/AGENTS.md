# AI Rules for This Project

This is the personal portfolio site of a Senior SDET / QA Automation Engineer.
The site itself is a demonstration of engineering quality: fast, accessible,
deterministic, tested, and low-maintenance.

Read this file fully before making any change.

---

Core Stack
Framework: Astro 7

Styling: Tailwind CSS v4

Language: TypeScript (Strict mode)

Content: Markdown / MDX via Astro Content Layer

Testing: Playwright + @axe-core/playwright

Deployment: Cloudflare Pages

## 1. Stack (do not change without asking)

- **Framework:** Astro (latest, static output). Do NOT assume older Astro APIs.
- **Styling:** Tailwind CSS v4 via the `@tailwindcss/vite` plugin.
  - There is NO `tailwind.config.js`. Do not create one.
  - Do NOT use the old `@astrojs/tailwind` integration.
  - The theme lives in `src/styles/global.css` inside an `@theme { ... }` block.
- **Content:** Markdown / MDX files in `src/content/`, loaded with Astro content collections.
- **Fonts:** `@fontsource-variable/inter` (text) and `@fontsource-variable/jetbrains-mono` (code), imported in `global.css`.
- **Language:** TypeScript, strict mode.
- **Hosting:** Cloudflare Pages (static build, output folder `dist`).
- **Testing (to be added):** Playwright + `@axe-core/playwright`, run in GitHub Actions.

## 2. Hard rules (never break these)

1. **Zero client-side JavaScript by default.**
   - Do NOT add React, Vue, Svelte, or any UI framework.
   - Do NOT use `client:load`, `client:idle`, `client:visible`, or any `client:*` directive.
   - Do NOT add `<script>` tags unless I explicitly ask, and explain why first.
2. **Do NOT install new npm packages** without asking me first. Say what the package is and why it is needed.
3. **Only edit the files I name.** If another file needs to change, tell me and wait.
4. **Do NOT invent facts.** Never make up job titles, employers, dates, metrics, project results, quotes, or certifications. If information is missing, leave a clear `TODO:` placeholder for me to fill in.
5. **Do NOT put a physical address or phone number anywhere on the site.** Contact is limited to LinkedIn and email.
6. **Do NOT suppress accessibility rules or lint errors** to make something pass. Fix the underlying problem.
7. **Do NOT downgrade versions** or replace modern syntax with older syntax you are more familiar with.

## 3. Design system

Style: **warm technical editorial**. Warm cream/off-white background, deep ink black typography, rich terracotta/rust accent, monospace structural tags, pill CTAs, and structured metrics alignment.

**Allowed colors** (defined in `@theme`, use only these):

| Token | Value | Use |
|---|---|---|
| `paper` | `#f8f6f0` | Warm cream page background |
| `paper-card` | `#ffffff` | Clean white card background |
| `ink` | `#141413` | Deep black main text & dark CTA buttons |
| `muted` | `#787570` | Secondary text, descriptors, and subtle metadata |
| `line` | `#e5e1d8` | Subtle warm dividers and borders |
| `accent` | `#c84b26` | Terracotta / rust orange accent (highlights, active links, brand accents) |
| `accent-hover` | `#b03e1c` | Darker terracotta for hover states |
| `accent-subtle` | `#faeee9` | Soft terracotta tint for pill tags |

Use them as Tailwind classes: `text-ink`, `bg-paper`, `bg-paper-card`, `text-muted`, `border-line`, `text-accent`, `bg-accent`, `bg-accent-subtle`.

**Fonts:** `font-sans` (Inter) for body & headings, `font-mono` (JetBrains Mono) for tags, code, labels, and bracketed cues `( hello, i'm )`.

**Layout:** content column around `max-w-3xl` / `max-w-4xl`, generous whitespace, mobile-first. Every page must work at 375px width without horizontal scrolling.

## 4. Code conventions

- Components go in `src/components/` as `.astro` files, named in PascalCase (`ProjectCard.astro`).
- Pages go in `src/pages/`, layouts in `src/layouts/`.
- Type component props with an `interface Props` in the frontmatter.
- Use Tailwind utility classes directly. Do not add new global CSS unless necessary.
- Do not leave dead code, unused imports, or commented-out blocks.
- Keep components small and single-purpose.
- Use the **`astro/zod`** import for schemas, exactly as in the existing `src/content.config.ts`.

## 5. Content collections

Defined in `src/content.config.ts`. Do not change schemas without asking.

- **blog:** `title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `tags` (string array, defaults to empty)
- **projects:** `title`, `summary`, `tools` (string array), `date`, `link?` (valid URL), `featured` (boolean, default false)

Frontmatter must match the schema. A schema error at build time is a bug to fix in the content, not a reason to loosen the schema.

## 6. Accessibility (target: WCAG 2.2 AA)

- Use semantic HTML: `header`, `nav`, `main`, `footer`, `article`, `section`.
- One `<h1>` per page, and headings must not skip levels.
- Every image needs meaningful `alt` text (or `alt=""` if purely decorative).
- Links and buttons must have visible focus styles and descriptive text (no "click here").
- Text contrast must meet AA. Do not use `muted` for essential small text on `paper` if contrast is low.
- Navigation must work without JavaScript.

## 7. SEO

- Every page has a unique `<title>` and meta description.
- Every page has a `<link rel="canonical">`.
- Homepage includes `schema.org/Person` JSON-LD. Blog posts include `schema.org/TechArticle` JSON-LD.
- The sitemap comes from `@astrojs/sitemap`. The `site` value in `astro.config.mjs` must be the real domain before launch (currently a placeholder).

## 8. Resume and ATS

- The `/resume` page is an HTML version for human readers.
- The downloadable resume is a **separate ATS-friendly PDF** (single column, real text layer, exported from Word or Google Docs). Never generate it from a design tool. Do not replace it with an image.

## 9. Workflow rules for the AI

1. Before large changes, briefly state your plan and wait for approval.
2. Work on **one file or one small task at a time**.
3. After changes, list exactly which files you edited and why.
4. Tell me how to verify the change (for example, "run `npm run dev` and open `/projects`").
5. If a request conflicts with this file, say so and ask instead of guessing.
6. If you are unsure about the current Astro or Tailwind API, say so. Do not guess.

## 10. Useful commands

```
npm run dev        # start the local dev server
npm run build      # production build (must pass with no errors)
npm run preview    # preview the production build
npx astro check    # type and content checks
```

A change is only "done" when `npm run build` succeeds and the page looks correct on desktop and phone widths.

## 11. Git habits

- Commit before starting any AI-assisted task, so it can be undone.
- Small commits with clear messages, for example `Add Header component`.
- Never commit secrets, API keys, or `.env` files.

## 12. Definition of done for any page or component

- [ ] Builds with no errors or warnings
- [ ] No `client:*` directives, no `<script>` tags, no new packages
- [ ] Uses only the defined colors and fonts
- [ ] Works at 375px width
- [ ] Keyboard navigable, with visible focus
- [ ] Semantic headings and landmarks
- [ ] No invented facts

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
