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
If your pages live at:
https://appmaker.lk/Tutorial_Videos/

Upload everything inside `appmaker_tutorial_modern/` into your `Tutorial_Videos/` folder so paths like:
- /Tutorial_Videos/assets/css/app.css
- /Tutorial_Videos/assets/js/app.js
- /Tutorial_Videos/img/logo.svg
exist.

## Tutorial structure
- Lesson 1: Registration (index.html)
- Lesson 2: Getting Started (step-2.html)
- Lesson 3: Create Pages (step-3.html)
- Lesson 4: Create Forms (step-4.html)
- Lesson 5: Create a Website (step-5.html)
- Lesson 6: Create an E-commerce Store (step-6.html)
- Lesson 7: Create a Chat App (step-7.html)
- Lesson 8: Publish Your App (step-8.html)

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
