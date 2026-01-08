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

## Multi-language (English / Sinhala / Tamil)
- Use the language switcher in the top bar.
- Translations live inside: `assets/js/app.js` (the `i18n` object).
  You can refine Sinhala/Tamil wording there without touching HTML.

## Analytics
- Keeps your existing GA UA tag on every page.
- Keeps your Google AdSense snippet + verification meta on `index.html`.

## Notes
- Videos are lazy-loaded (iframe `data-src`) for better performance on mobile.
- Theme toggle (dark/light) is saved to localStorage.

## YouTube embed reliability
- v2 fix: iframes now use direct `src` (not JS `data-src`) and include `referrerpolicy="strict-origin-when-cross-origin"` to avoid YouTube Error 153 in some environments.
