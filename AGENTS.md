# AGENTS.md

## Purpose

This file gives coding agents clear, repo-specific instructions for maintaining the Appmaker tutorial website. Follow these instructions whenever you inspect, edit, generate, refactor, or review files in this repository.

The repository is a static, mobile-first tutorial site for Appmaker. It contains a root tutorial hub page and individual tutorial lesson pages. The site is intentionally lightweight: plain HTML, shared CSS, shared JavaScript, embedded YouTube videos, multilingual text managed through JavaScript, and Playwright-based visual smoke checks.

Do not treat this as a framework project unless the repository is later migrated. There is no build system required for the current static site.

---

## Repository summary

### Main purpose

Create and maintain modern tutorial pages for Appmaker users.

### Current structure

```text
/
  index.html
  step-2.html ... step-8.html
  assets/
    css/app.css
    js/app.js
  img/
    logo.svg
    favicon.ico
  Tutorial_Videos/
    basic-1.html ... basic-9.html
    after-launch-1.html ... after-launch-4.html
    advanced-1.html ... advanced-7.html
    versa-ai-1.html ... versa-ai-4.html
    other-1.html ... other-8.html
  tests/
    visual/check-pages.mjs
    visual/artifacts/
  README.md
  AGENTS.md
  PAGE_FORMAT_STYLE_GUIDE.md
```

### Active tutorial sections

| Section | Slug | Files | Current total |
|---|---|---:|---:|
| Basic Lessons – Create Your First App | `basic` | `Tutorial_Videos/basic-1.html` to `basic-9.html` | 9 |
| Things to Do After Launch | `after-launch` | `Tutorial_Videos/after-launch-1.html` to `after-launch-4.html` | 4 |
| Advanced Page Creation Options | `advanced` | `Tutorial_Videos/advanced-1.html` to `advanced-7.html` | 7 |
| App Creation Using Versa AI | `versa-ai` | `Tutorial_Videos/versa-ai-1.html` to `versa-ai-4.html` | 4 |
| Other Features | `other` | `Tutorial_Videos/other-1.html` to `other-8.html` | 8 |

### Legacy pages

`step-2.html` through `step-8.html` are legacy redirect pages. Do not convert them into primary lesson pages unless the product owner explicitly asks for a migration.

---

## Source of truth files

Agents must understand which file owns which responsibility.

| File | Responsibility |
|---|---|
| `index.html` | Root tutorial hub. Contains section cards and links to the first lesson in each section. |
| `Tutorial_Videos/*.html` | Individual lesson pages. Each page embeds one YouTube video and shows lesson navigation. |
| `assets/css/app.css` | Shared mobile-first layout, visual theme, cards, buttons, hero sections, video wrappers, lesson lists, hub cards. |
| `assets/js/app.js` | Theme toggle, language switching, i18n dictionary, analytics helper behavior, lazy video loading, progress tracking. |
| `README.md` | Human-facing project summary, deployment notes, tutorial mapping updates, QA instructions. |
| `PAGE_FORMAT_STYLE_GUIDE.md` | Agent-facing page format and visual/content style guide. Must be updated when page structure, styling rules, tutorial counts, lesson metadata, or content format changes. |
| `tests/visual/check-pages.mjs` | Playwright smoke checks for critical visual/content regressions. Update when new high-risk pages or recurring missing-text issues are added. |

---

## Non-negotiable rules for agents

1. **Do not add files to GitHub unless explicitly asked.** If the user asks for markdown content only, return the markdown content or generated downloadable files.
2. **Keep the site static.** Do not introduce React, Vue, Angular, build tooling, bundlers, CSS frameworks, npm dependencies, or server code unless explicitly requested.
3. **Preserve the existing folder structure.** The root hub is `index.html`. Active lessons live in `Tutorial_Videos/`. Shared CSS/JS live under `assets/`. Shared images live under `img/`.
4. **Preserve relative paths.** Root pages use `assets/...` and `img/...`; nested lesson pages use `../assets/...` and `../img/...`.
5. **Keep pages mobile-first and accessible.** Every page must retain skip links, semantic landmarks, visible focus styles, responsive layout, readable contrast, and keyboard-friendly controls.
6. **Keep multilingual behavior intact.** If visible lesson text is controlled by `data-i18n`, update all three language dictionaries in `assets/js/app.js`: English, Sinhala, and Tamil.
7. **Do not remove GA4 tracking.** Every current page uses GA4 Measurement ID `G-H6Y99HCGTQ`. Preserve tracking snippets unless the user specifically asks to change analytics.
8. **Do not break lazy video loading.** YouTube iframes should keep `data-src`, `class="lazyload"`, `loading="lazy"`, and `enablejsapi=1`.
9. **Use `PAGE_FORMAT_STYLE_GUIDE.md` before editing pages.** Follow its page template, styling rules, metadata rules, navigation rules, and checklist.
10. **Update `PAGE_FORMAT_STYLE_GUIDE.md` when format changes.** If you change layout, required classes, i18n key patterns, page sections, navigation logic, progress rules, section totals, or QA expectations, update the style guide in the same proposed change.

---

## Development and QA workflow

### Before editing

1. Read this file.
2. Read `PAGE_FORMAT_STYLE_GUIDE.md`.
3. Inspect the target page and its neighboring pages in the same section.
4. Inspect `assets/js/app.js` for the relevant i18n keys.
5. Inspect `assets/css/app.css` before adding new CSS.
6. Check whether the change affects README, section totals, navigation, analytics, SEO, or visual QA.

### When editing a lesson page

Follow this order:

1. Update the individual HTML page in `Tutorial_Videos/`.
2. Update matching i18n entries in `assets/js/app.js`.
3. Update section card counts and links in `index.html` if adding/removing/reordering lessons.
4. Update lesson lists on every page in the affected section, because each lesson page contains the full lesson list for that section.
5. Update previous/next navigation.
6. Update progress count and `--progress` value.
7. Update SEO and social meta tags.
8. Update README tutorial mapping notes if the change affects lesson totals, new lessons, video IDs, or important external resources.
9. Update `PAGE_FORMAT_STYLE_GUIDE.md` if the page format or styling standard changed.
10. Update visual checks if the change addresses a recurring class of regression.

### Local visual smoke check

Run from the repository root:

```bash
python -m http.server 4173
```

Then, in another terminal:

```bash
npx playwright install chromium
node tests/visual/check-pages.mjs
```

Optional base URL override:

```bash
VISUAL_BASE_URL=http://127.0.0.1:4173 node tests/visual/check-pages.mjs
```

### Manual QA checklist

For every changed page:

- Page loads without console errors.
- Run a JavaScript syntax check before publishing: `node --check assets/js/app.js`.
- If `assets/js/app.js` i18n strings were edited, verify there are no unescaped inner quotes that can break object literals (for example, `"... \"quoted text\" ..."`).
- Header brand logo loads.
- Language buttons work.
- Theme toggle works.
- Hero title is visible in English, Sinhala, and Tamil.
- Description is visible in English, Sinhala, and Tamil.
- Video placeholder appears before load.
- Video iframe loads when scrolled or when lazy-load fallback triggers.
- Previous and next buttons point to the correct files.
- Join Appmaker CTA opens `https://appmaker.lk/` in a new tab with `rel="noopener"`.
- All lesson list titles and descriptions are populated.
- Footer card title and body are populated.
- Scroll-to-top button works.
- Desktop and mobile widths look acceptable.
- Canonical, Open Graph, Twitter, and description meta tags match the page topic.

---

## Page architecture rules

### Root hub page

`index.html` should remain the main tutorial hub.

It must include:

- Site verification meta tag if still required.
- AdSense script if still required.
- GA4 script.
- SEO and social meta tags.
- Shared font imports.
- `assets/css/app.css`.
- Topbar with brand, language selector, and theme toggle.
- Hero section.
- Section cards linking to the first lesson of each active section.
- Scroll-to-top button.
- `assets/js/app.js`.

### Lesson page

Every `Tutorial_Videos/*.html` lesson page must include:

- `<!doctype html>` and `<html lang="en" data-theme="dark">`.
- GA4 snippet using `G-H6Y99HCGTQ`.
- `viewport-fit=cover` in the viewport meta tag.
- Page-specific description and keywords.
- `meta name="i18n-title-key"` matching the page title key.
- Open Graph and Twitter tags.
- Canonical link.
- Favicon path as `../img/favicon.ico`.
- Font preconnect and Noto Sans font import.
- CSS path as `../assets/css/app.css`.
- Skip link to `#content`.
- Shared topbar.
- Hero section with breadcrumb, section badge or kicker, page title, description, progress, and video card.
- Actions row with Previous, Next, and Join Appmaker.
- More-content grid with full lesson list and footer CTA card.
- Footer text.
- Scroll-to-top button.
- Year-setting script.
- `markLessonVisited('<lesson-slug>')` call.
- JS path as `../assets/js/app.js` with `defer`.

---

## Multilingual/i18n rules

### Key naming

Use this pattern:

```text
<section><number>.kicker
<section><number>.title
<section><number>.desc
<section><number>.footerTitle
<section><number>.footerText
<section><number>.docTitle
```

Examples:

```text
basic1.title
advanced4.desc
versaai3.footerText
other8.docTitle
```

For `after-launch` pages, existing keys use `afterlaunch`, not `afterLaunch` or `after-launch`:

```text
afterlaunch1.title
afterlaunch4.footerText
```

For `versa-ai` pages, existing keys use `versaai`, not `versa-ai`:

```text
versaai1.title
versaai4.desc
```

### Required languages

Every visible tutorial text added to i18n must have entries for:

- `en`
- `si`
- `ta`

### Translation style

- English: clear, practical, tutorial-friendly.
- Sinhala: conversational but professional; avoid overly formal government-document style.
- Tamil: clear, practical, and suitable for customer-facing tutorial pages.
- Do not use unsupported machine-like phrasing.
- Do not mix Sinhala and Tamil inside the same translation key unless the product owner asks for it.
- Keep titles concise enough to fit cards and mobile screens.

### Fallback text

HTML elements may include fallback text between tags, but the i18n value should be treated as the source of truth for dynamic page rendering.

---

## Analytics rules

The site currently uses GA4 Measurement ID:

```text
G-H6Y99HCGTQ
```

Preserve the global GA4 snippet on every page unless explicitly asked to change it.

Expected GA4-related behaviors include:

- Theme and language user properties.
- Theme toggle event.
- Language change event.
- Join Appmaker CTA click event.
- Lesson navigation event.
- Scroll-to-top event.
- YouTube embed support through `enablejsapi=1`.

When adding new CTAs, use existing tracking attributes where relevant:

```html
<a class="btn primary" href="https://appmaker.lk/" target="_blank" rel="noopener" data-cta="join" data-cta-loc="hero">
  <span data-i18n="ui.join">Join Appmaker</span>
</a>
```

Do not invent new event names without checking existing analytics patterns in `assets/js/app.js`.

---

## SEO and social metadata rules

Each lesson page must have page-specific metadata:

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="i18n-title-key" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://appmaker.lk/Tutorial_Videos/<file>.html">
<meta property="og:title" content="... | Appmaker Tutorial">
<meta property="og:description" content="...">
<meta property="og:image" content="https://appmaker.lk/Tutorial_Videos/img/logo.svg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://appmaker.lk/Tutorial_Videos/<file>.html">
<meta name="twitter:title" content="... | Appmaker Tutorial">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://appmaker.lk/Tutorial_Videos/img/logo.svg">
<link rel="canonical" href="https://appmaker.lk/Tutorial_Videos/<file>.html">
```

Use plain, accurate descriptions. Avoid hype such as “best,” “ultimate,” or unsupported claims.

---

## Styling rules

### Global style approach

- Use `assets/css/app.css` for shared styles.
- Do not introduce a CSS framework.
- Avoid one-off inline styles unless matching existing patterns and the change is small.
- Prefer existing classes before creating new classes.
- Keep the mobile-first approach.
- Preserve dark/light theme variables.
- Use semantic class names consistent with the current site.

### Existing class system

Important existing classes include:

```text
container
topbar
row
brand
logo
meta
title
subtitle
controls
pill
seg
icon-btn
hero
hero-inner
breadcrumb
kicker
title-row
section-badge
badges
badge
progress
card
video-wrap
video
ratio
placeholder
actions
btn
primary
grid
lesson-list
lesson-items
lesson-item
n
t
d
section-grid
section-card
totop
skip-link
```

Reuse these before adding new layout primitives.

---

## Accessibility rules

- Preserve the skip link.
- Use `main id="content"` as the skip-link target.
- Use `aria-labelledby` for hero sections where possible.
- Use descriptive `aria-label` on navigation, controls, lesson actions, progress groups, and video wrappers.
- Buttons must be real `<button>` elements when they trigger actions.
- Links must be real `<a>` elements when they navigate.
- Do not remove `:focus-visible` styles.
- Do not use color alone to communicate state.
- Keep all visible text readable on mobile.

---

## Video embed rules

YouTube iframes must follow the existing lazy-load pattern:

```html
<iframe
  title="Appmaker tutorial video"
  loading="lazy"
  class="lazyload"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  mozallowfullscreen
  data-src="https://www.youtube.com/embed/<VIDEO_ID>?enablejsapi=1">
</iframe>
```

Do not replace `data-src` with `src` unless you also update the lazy-loading code and test all video pages.

---

## Content rules for Appmaker tutorials

- Use customer-friendly language.
- Keep instructions practical and grounded.
- Distinguish Appmaker publishing from Play Store publishing.
- When saying “publish,” clarify whether it means Appmaker/operator approval or Google Play Store submission.
- Avoid making claims that are not shown in the video or supported by current Appmaker behavior.
- Avoid overpromising revenue, approvals, growth, or guaranteed outcomes.
- Keep CTA text focused on joining or using Appmaker, not aggressive sales language.

---

## Adding a new lesson

When adding a new lesson, update all affected files.

### Required updates

1. Create `Tutorial_Videos/<section>-<number>.html` using the existing lesson page structure.
2. Add i18n entries to `assets/js/app.js` in English, Sinhala, and Tamil.
3. Update the section lesson list on every page in that section.
4. Update previous/next links for neighboring pages.
5. Update progress labels and `--progress` values for the new and affected pages.
6. Update `index.html` section total if the total changed.
7. Update `README.md` tutorial structure and mapping notes.
8. Update `PAGE_FORMAT_STYLE_GUIDE.md` lesson inventory and rules if needed.
9. Add or update visual tests if the page is high-risk or uses new layout/content patterns.

### Progress formula

Use:

```text
--progress = current_lesson_number / total_lessons_in_section
```

Examples:

```text
1/9 = 0.1111
4/4 = 1.0000
8/8 = 1.0000
```

---

## Review checklist for agents

Before returning work, confirm:

- The requested output format was followed.
- The repo itself was not modified unless explicitly requested.
- `AGENTS.md` and `PAGE_FORMAT_STYLE_GUIDE.md` are consistent with each other.
- Page counts match README and current lesson pages.
- All rules preserve the static HTML/CSS/JS architecture.
- The guide tells future agents exactly when to update itself.
- No secrets, API keys, or private credentials were added.
