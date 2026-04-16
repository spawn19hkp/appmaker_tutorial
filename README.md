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

## Tutorial structure
The primary lesson content is organized under `Tutorial_Videos/` into five active sections:
- Basic: 9 lessons (`basic-1.html` to `basic-9.html`)
- After Launch: 3 lessons (`after-launch-1.html` to `after-launch-3.html`)
- Advanced: 6 lessons (`advanced-1.html` to `advanced-6.html`)
- Versa AI: 4 lessons (`versa-ai-1.html` to `versa-ai-4.html`)
- Other Features: 6 lessons (`other-1.html` to `other-6.html`)

Top-level `step-2.html` through `step-8.html` are legacy redirect pages, not the primary lesson content.

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

## YouTube embed reliability
- v2 fix: iframes keep `data-src` and are promoted to `src` via `initLazyVideo` (IntersectionObserver + fallback), while still including `referrerpolicy="strict-origin-when-cross-origin"` to avoid YouTube Error 153 in some environments.
