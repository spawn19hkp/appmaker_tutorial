# Appmaker Tutorial Pages (Modernized)

This package contains modern, mobile-first versions of:
- index.html (Lesson 1)
- step-2.html ... step-8.html (Lessons 2–8)

## Folder structure
Keep the folder structure exactly as-is:

appmaker_tutorial_modern/
  index.html
  step-2.html
  ...
  step-8.html
  assets/
    css/app.css
    js/app.js
  img/
    logo.svg
    favicon.ico

## Deploy
Deploy with `index.html` at your deployment root as the primary tutorial hub page.  
That root hub contains the lesson cards and those cards should link to pages inside `Tutorial_Videos/*.html`.

Inside each `Tutorial_Videos/*.html` lesson page, keep relative references intact:
- shared CSS/JS assets should use `../assets/...`
- shared images should use `../img/...`

Expected path examples (to validate your deploy):
- Root hub page: `/index.html`
- Nested lesson page: `/Tutorial_Videos/basic-1.html`
- Shared asset references from a lesson page: `../assets/css/app.css`, `../assets/js/app.js`, `../img/logo.svg`  
  (which resolve to `/assets/css/app.css`, `/assets/js/app.js`, and `/img/logo.svg`)


## Production package contents

### Included in production artifact (must be deployable)
- `index.html`
- `step-2.html` … `step-8.html` (legacy redirect pages)
- `Tutorial_Videos/**/*.html`
- `assets/**`
- `img/**`

### Excluded from production artifact
- Markdown docs: `*.md`
- Test and visual QA files: `tests/**`
- CI/repository metadata: `.github/**`
- Review/report directories: `reports/**`, `review-reports/**`
- Local/editor artifacts: `.DS_Store`, `.vscode/**`, `.idea/**`, swap/temp files
- Non-runtime tooling files: `package.json`, `package-lock.json`, `node_modules/**`

### Canonical packaging command
Run this command before a production push:

```bash
mkdir -p dist && zip -r dist/appmaker-production.zip index.html step-2.html step-3.html step-4.html step-5.html step-6.html step-7.html step-8.html Tutorial_Videos assets img -x "*.md" "tests/*" "tests/**" ".github/*" ".github/**" "reports/*" "reports/**" "review-reports/*" "review-reports/**" ".DS_Store" ".vscode/*" ".vscode/**" ".idea/*" ".idea/**" "*~" "*.swp" "*.swo"
```

This creates `dist/appmaker-production.zip` containing only deployable static site files.

## Tutorial structure
The primary lesson content is organized under `Tutorial_Videos/` into eight active sections (**58 total lessons**):
- Basic: 10 lessons (`basic-1.html` to `basic-10.html`)
- After Launch: 4 lessons (`after-launch-1.html` to `after-launch-4.html`)
- Advanced: 7 lessons (`advanced-1.html` to `advanced-7.html`)
- Versa AI: 4 lessons (`versa-ai-1.html` to `versa-ai-4.html`)
- Other Features: 8 lessons (`other-1.html` to `other-8.html`)
- Specialised Templates: 3 lessons (`specialised-templates-1.html` to `specialised-templates-3.html`)
- E-commerce Template: 9 lessons (`ecommerce-template-1.html` to `ecommerce-template-9.html`)
- Web Edge: 13 lessons (`web-edge-1.html` to `web-edge-13.html`)

Top-level `step-2.html` through `step-8.html` are legacy redirect pages, not the primary lesson content.

## Tutorial mapping updates (April 2026)

### Replaced YouTube embeds (Other Features 2–6)
The following lesson pages now use these YouTube video IDs/URLs:

- `other-2.html` → `https://www.youtube.com/embed/3Cfxd7PA7Jg?enablejsapi=1`
- `other-3.html` → `https://www.youtube.com/embed/U3A8nEtWLOA?enablejsapi=1`
- `other-4.html` → `https://www.youtube.com/embed/mlqRaI1au2c?enablejsapi=1`
- `other-5.html` → `https://www.youtube.com/embed/e_nPPj_6C9I?enablejsapi=1`
- `other-6.html` → `https://www.youtube.com/embed/CAQzusL8_rI?enablejsapi=1`

### New lesson: After Launch 4 (`after-launch-4`)
- **Topic:** How to upload your app to the google playstore
- **Video:** `https://www.youtube.com/embed/KzWFNvFCVb8?enablejsapi=1`
- **Articles:**
  - `https://simato-appmaker.medium.com/how-to-navigate-the-new-google-developer-console-layout-3977b047beb9`
  - `https://simato-appmaker.medium.com/changes-to-google-playstore-publishing-flow-38352b560fbd`

### New lesson: Other Features 7 (`other-7`)
- **Topic:** The Appmaker Store
- **Video:** `https://www.youtube.com/embed/h7LfXv0tEfg?enablejsapi=1`
- **Articles:** none currently linked on the lesson page


### New lesson: Other Features 8 (`other-8`)
- **Topic:** How to Enable Card Payments on Your App!
- **Video:** `https://www.youtube.com/embed/YXCEloHonO0?enablejsapi=1`
- **Link:** `https://forms.gle/NDnoVWWFhDGfyae67`

### New sections added (Specialised Templates, E-commerce Template, Web Edge)
These sections are now active and included in the tutorial hub structure.

#### Section summary: lesson count + purpose
- **Specialised Templates (3 lessons):** Covers specialized template setup flows for focused app scenarios.
- **E-commerce Template (9 lessons):** Covers store-ready setup, catalog flow, and e-commerce template implementation.
- **Web Edge (13 lessons):** Covers Web Edge page setup and configuration patterns across the full lesson path.

#### New section video mapping (EN titles + YouTube URLs)

**Specialised Templates**
- Specialised Template Lesson 1 — `https://www.youtube.com/embed/8eUfN802Zwo?enablejsapi=1`
- Specialised Template Lesson 2 — `https://www.youtube.com/embed/yCK-89ZMrfM?enablejsapi=1`
- Specialised Template Lesson 3 — `https://www.youtube.com/embed/1Hy0hjBIRWI?enablejsapi=1`

**E-commerce Template**
- E-commerce Template Lesson 1 — `https://www.youtube.com/embed/J4x81AbkQb4?enablejsapi=1`
- E-commerce Template Lesson 2 — `https://www.youtube.com/embed/gJztEWetJ_c?enablejsapi=1`
- E-commerce Template Lesson 3 — `https://www.youtube.com/embed/OQ1NSZypLxE?enablejsapi=1`
- E-commerce Template Lesson 4 — `https://www.youtube.com/embed/CsD_XpVwv8E?enablejsapi=1`
- E-commerce Template Lesson 5 — `https://www.youtube.com/embed/ajQDt7Bvo0Y?enablejsapi=1`
- E-commerce Template Lesson 6 — `https://www.youtube.com/embed/zoVJgMvUlxc?enablejsapi=1`
- E-commerce Template Lesson 7 — `https://www.youtube.com/embed/_ZSfeQpk9ds?enablejsapi=1`
- E-commerce Template Lesson 8 — `https://www.youtube.com/embed/YhOQ7EbwJ-E?enablejsapi=1`
- E-commerce Template Lesson 9 — `https://www.youtube.com/embed/UPmyhW9ETT8?enablejsapi=1`

**Web Edge**
- Web Edge Lesson 1 — `https://www.youtube.com/embed/DyrnN-S7aJ8?enablejsapi=1`
- Web Edge Lesson 2 — `https://www.youtube.com/embed/kCQxE-MFgbo?enablejsapi=1`
- Web Edge Lesson 3 — `https://www.youtube.com/embed/drriPdIrkuI?enablejsapi=1`
- Web Edge Lesson 4 — `https://www.youtube.com/embed/b0rEnO_I6ng?enablejsapi=1`
- Web Edge Lesson 5 — `https://www.youtube.com/embed/Kb1kZjqIoDw?enablejsapi=1`
- Web Edge Lesson 6 — `https://www.youtube.com/embed/3W7316qbuoU?enablejsapi=1`
- Web Edge Lesson 7 — `https://www.youtube.com/embed/_i3raE14XuQ?enablejsapi=1`
- Web Edge Lesson 8 — `https://www.youtube.com/embed/ZsFL52DXNsM?enablejsapi=1`
- Web Edge Lesson 9 — `https://www.youtube.com/embed/KPRrA6BQaR8?enablejsapi=1`
- Web Edge Lesson 10 — `https://www.youtube.com/embed/bd73cR9QCAA?enablejsapi=1`
- Web Edge Lesson 11 — `https://www.youtube.com/embed/YjBZOtJM8aU?enablejsapi=1`
- Web Edge Lesson 12 — `https://www.youtube.com/embed/2fOk8xeW9Tk?enablejsapi=1`
- Web Edge Lesson 13 — `https://www.youtube.com/embed/m8RK6HYwYwU?enablejsapi=1`

#### Localization sync requirement (EN / SI / TA)
Localized lesson titles are supported in English, Sinhala, and Tamil. Keep all title keys synchronized in `assets/js/app.js` whenever lesson titles are changed.

## Migration notes
- Legacy top-level tutorial pages `step-2.html` through `step-8.html` are redirect pages and should continue to 0-second refresh to `index.html`.
- Any old bookmarks or shared links to `step-2.html` ... `step-8.html` now resolve to the main hub, then users continue from `Tutorial_Videos/*.html` lesson pages.
- If maintainers add/remove lessons, update both section totals in this README and hub/lesson navigation counts to keep redirects and progression labels consistent.


## Multi-language (English / Sinhala / Tamil)
- Use the language switcher in the top bar.
- Translations live inside: `assets/js/app.js` (the `i18n` object).
  You can refine Sinhala/Tamil wording there without touching HTML.

## Analytics (GA4)
- Uses GA4 with Measurement ID `G-H6Y99HCGTQ` on every page.
- Theme and language are stored as GA4 user properties (`preferred_theme`, `preferred_language`).
- Interaction events sent to GA4:
  - `toggle_theme` (theme toggles)
  - `change_language` (language switch)
  - `join_appmaker_click` (CTA clicks)
  - `lesson_navigation` (prev/next/all lessons navigation)
  - `scroll_top` (scroll-to-top button)
- YouTube embeds include `enablejsapi=1` for player event tracking support.

### GA4 configuration notes
- In GA4 Admin → Data Streams → Web, make sure Enhanced Measurement is enabled to capture page views, scrolls, and outbound clicks.
- If you want to analyze theme/language values in reports, register them as custom user properties in GA4.
- Register `lesson_navigation`, `toggle_theme`, `change_language`, and `join_appmaker_click` as custom events if you want them surfaced in GA4 event reports.

## SEO + social meta
- Every lesson page includes title/description/keywords meta tags.
- Open Graph and Twitter card tags are included for consistent previews.
- `index.html` also includes the verification meta tag for site validation.

## Notes
- Videos are lazy-loaded (iframe `data-src`) for better performance on mobile.
- Theme toggle (dark/light) is saved to localStorage.
- Hub/background rendering standard: the dark gradient must remain continuous for the full page height (no white area after first card row), including while scrolling on mobile/tablet/desktop.

## YouTube embed reliability
- v2 fix: iframes keep `data-src` and are promoted to `src` via `initLazyVideo` (IntersectionObserver + fallback), while still including `referrerpolicy="strict-origin-when-cross-origin"` to avoid YouTube Error 153 in some environments.


## Visual QA checks (AI-friendly)
A Playwright visual smoke check is included to catch console/runtime issues and blank/missing lesson text like the issues in `other-7`, `other-8`, and `after-launch-4`. The pass now starts from `index.html` and then checks targeted lesson pages.

### What it checks
- Captures console errors and page errors for every page in the list
- Hero title exists
- Footer title + footer description exist on the right card
- For Other Features pages, lesson list items 7 and 8 have non-empty title/description
- Saves full-page screenshots to `tests/visual/artifacts/`

### Run locally
1. Start a static server from repo root:
   - `python -m http.server 4173`
2. In another terminal run:
   - `npx playwright install chromium`
   - `node tests/visual/check-pages.mjs`

Optional base URL override:
- `VISUAL_BASE_URL=http://127.0.0.1:4173 node tests/visual/check-pages.mjs`

## QA / Validation checklist

Use this quick validation flow after any content, metadata, or lesson-order update.

### 1) Exact YouTube URL matching
- Validate each edited lesson page keeps the intended `data-src` as the **exact embed URL** (including `?enablejsapi=1`).
- Do not rewrite or normalize YouTube links (for example, into short links or ID-only values) unless the current renderer explicitly requires ID extraction.
- Confirm lazy-load attributes are preserved: `data-src`, `class="lazyload"`, and `loading="lazy"`.

### 2) Section and video count validation
- Confirm README section totals match `index.html` section cards and actual files in `Tutorial_Videos/`.
- Confirm lesson numbering is continuous per section (no missing or duplicate lesson numbers).
- Confirm each lesson page in a section is represented in that section's lesson list UI.

### 3) Language switch checks (EN / SI / TA)
- Open the hub and at least one lesson from each edited section.
- Switch language to English, Sinhala, and Tamil.
- Confirm hero title, description, lesson list text, and footer CTA text render in all three languages.

### 4) Mobile and desktop layout checks
- Validate at a mobile width (e.g., 390px) and a desktop width (e.g., 1366px).
- Confirm no overlapping controls, clipped text, or broken card grids.
- Confirm previous/next buttons, Join Appmaker CTA, and scroll-to-top button remain visible and usable.

### 5) Browser console error check
- Load hub + edited lesson pages and verify browser console has no JavaScript errors.
- Pay special attention to i18n missing-key errors, failed iframe loading, and broken relative asset paths.

### Quick validation for new sections
Use this concise list specifically for the newer sections (**Specialised Templates**, **E-commerce Template**, **Web Edge**):

- Verify section card links from `index.html` open the first lesson of each section.
- Verify declared totals remain correct: `3` (Specialised Templates), `9` (E-commerce Template), `13` (Web Edge).
- Verify first, middle, and last lesson pages in each of the three sections:
  - correct YouTube `data-src`,
  - correct previous/next navigation,
  - correct progress label and bar value,
  - populated EN/SI/TA text blocks.


## Change log
- Inserted **How to Use the Appmaker Text Editor** as **Basic Lesson 6**, shifting previous Basic lessons 6–9 to 7–10.
