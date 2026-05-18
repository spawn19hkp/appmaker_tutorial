# PAGE_FORMAT_STYLE_GUIDE.md

## Purpose

This file is the required page format and styling guide for the Appmaker tutorial site.

Every coding agent must read this file before creating, editing, or reviewing any tutorial page. If a change modifies the page format, shared styling, lesson structure, section totals, i18n key patterns, QA expectations, analytics conventions, or metadata standards, update this file in the same change.

This guide is not optional. It is the page-level source of truth for how tutorial pages should look, behave, and remain consistent.

---

## Update rules for agents

Update this file whenever any of the following changes:

- A new tutorial section is added.
- A tutorial section is renamed.
- A lesson is added, removed, renamed, or reordered.
- A video ID, article link, form link, CTA, or lesson topic changes.
- The required structure of hub pages or lesson pages changes.
- Required CSS classes change.
- The theme, typography, spacing, layout, or responsive behavior changes.
- i18n key naming rules change.
- SEO, social preview, analytics, accessibility, or QA rules change.
- Visual smoke checks are expanded or revised.

When updating this file, also update the **Change log** at the bottom.

---

## Design principles

1. **Mobile-first.** Pages must be comfortable on mobile before desktop refinements are added.
2. **Fast learning.** Each page should quickly show what the lesson is, where the user is in the section, and what to do next.
3. **Visual consistency.** Every page should feel like part of the same Appmaker tutorial system.
4. **Low technical weight.** Use static HTML, shared CSS, and shared JavaScript. Avoid new dependencies.
5. **Accessible by default.** Keep keyboard navigation, readable contrast, semantic structure, and focus states intact.
6. **Multilingual.** Visible tutorial content should work in English, Sinhala, and Tamil through existing i18n behavior.
7. **Analytics-safe.** Keep GA4 tracking and CTA/navigation tracking intact.
8. **SEO-ready.** Each page needs accurate page-specific metadata.

---

## Current tutorial inventory

### Root hub

| File | Purpose |
|---|---|
| `index.html` | Main tutorial hub with section cards. |

### Legacy redirect pages

| Files | Purpose |
|---|---|
| `step-2.html` to `step-8.html` | Legacy redirect pages. Keep them as redirects unless explicitly asked to migrate. |

### Active lesson sections

| Section | Section slug | Badge class | i18n section keys | Total lessons |
|---|---|---|---|---:|
| Basic Lessons – Create Your First App | `basic` | `sec-1` | `section1.*` | 10 |
| Things to Do After Launch | `after-launch` | `sec-2` | `section2.*` | 4 |
| Advanced Page Creation Options | `advanced` | `sec-3` | `section3.*` | 7 |
| App Creation Using Versa AI | `versa-ai` | `sec-4` | `section4.*` | 4 |
| Other Features | `other` | `sec-5` | `section5.*` | 8 |
| Specialised Templates | `specialised-templates` | `sec-6` | `section6.*` | 3 |
| E-commerce Template | `ecommerce-template` | `sec-7` | `section7.*` | 9 |
| Web Edge | `web-edge` | `sec-8` | `section8.*` | 13 |

---

## Current lesson map

### Basic Lessons – Create Your First App

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/basic-1.html` | `basic1` | How to Register on Appmaker |
| 2 | `Tutorial_Videos/basic-2.html` | `basic2` | How to Create an App on Appmaker |
| 3 | `Tutorial_Videos/basic-3.html` | `basic3` | How to Add a New Category to Your App |
| 4 | `Tutorial_Videos/basic-4.html` | `basic4` | How to Create a New Page in Appmaker |
| 5 | `Tutorial_Videos/basic-5.html` | `basic5` | How to Manage Pages on Your Dashboard |
| 6 | `Tutorial_Videos/basic-6.html` | `basic6` | How to Use the Appmaker Text Editor |
| 7 | `Tutorial_Videos/basic-7.html` | `basic7` | How to Customize Your App's Look & Feel |
| 8 | `Tutorial_Videos/basic-8.html` | `basic8` | How to Change Your App Logo |
| 9 | `Tutorial_Videos/basic-9.html` | `basic9` | Before You Publish — Add Contact Info, Privacy Policy & About Us |
| 10 | `Tutorial_Videos/basic-10.html` | `basic10` | How to Publish Your App & Get Approval Fast |

### Things to Do After Launch

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/after-launch-1.html` | `afterlaunch1` | How to Track Your App's Success — Analytics Explained |
| 2 | `Tutorial_Videos/after-launch-2.html` | `afterlaunch2` | How to Set Up a Custom Website URL & Share Your App |
| 3 | `Tutorial_Videos/after-launch-3.html` | `afterlaunch3` | How to Send Push Notifications & Engage App Users |
| 4 | `Tutorial_Videos/after-launch-4.html` | `afterlaunch4` | How to upload your app to the google playstore |

### Advanced Page Creation Options

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/advanced-1.html` | `advanced1` | How to Create a Web Page Using an HTML Editor |
| 2 | `Tutorial_Videos/advanced-2.html` | `advanced2` | How to Add PDF Files to Your App Pages |
| 3 | `Tutorial_Videos/advanced-3.html` | `advanced3` | How to Manage Page Comments & Messages |
| 4 | `Tutorial_Videos/advanced-4.html` | `advanced4` | How to Add & Manage Custom Forms on Your Pages |
| 5 | `Tutorial_Videos/advanced-5.html` | `advanced5` | How to Auto-Update Your Page with RSS Feeds |
| 6 | `Tutorial_Videos/advanced-6.html` | `advanced6` | How to Add a Voting (Poll) Feature to Your App |
| 7 | `Tutorial_Videos/advanced-7.html` | `advanced7` | How to Create Custom Quizzes & MCQs in Your Education App! |

### App Creation Using Versa AI

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/versa-ai-1.html` | `versaai1` | Build Your Own App in Minutes with Versa AI |
| 2 | `Tutorial_Videos/versa-ai-2.html` | `versaai2` | Find App Pages & Categories in Seconds with Versa AI |
| 3 | `Tutorial_Videos/versa-ai-3.html` | `versaai3` | How to Update Your App Fast Using Versa AI |
| 4 | `Tutorial_Videos/versa-ai-4.html` | `versaai4` | How to Edit an Existing Category Using Versa AI |

### Other Features

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/other-1.html` | `other1` | Struggling to Design Your App? Let Us Do It For You |
| 2 | `Tutorial_Videos/other-2.html` | `other2` | How to Report Bugs on Appmaker |
| 3 | `Tutorial_Videos/other-3.html` | `other3` | How to Share App Access with Your Team |
| 4 | `Tutorial_Videos/other-4.html` | `other4` | How to Create an App Using the Wizard Option |
| 5 | `Tutorial_Videos/other-5.html` | `other5` | How to Change the FAV Icon in Your PWA App |
| 6 | `Tutorial_Videos/other-6.html` | `other6` | Master Your Appmaker Dashboard — Profile, AI Credits & More |
| 7 | `Tutorial_Videos/other-7.html` | `other7` | The Appmaker Store |
| 8 | `Tutorial_Videos/other-8.html` | `other8` | How to Enable Card Payments on Your App! |

### Specialised Templates

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/specialised-templates-1.html` | `specialisedtemplates1` | Specialised Templates Lesson 1 |
| 2 | `Tutorial_Videos/specialised-templates-2.html` | `specialisedtemplates2` | Specialised Templates Lesson 2 |
| 3 | `Tutorial_Videos/specialised-templates-3.html` | `specialisedtemplates3` | Specialised Templates Lesson 3 |

### E-commerce Template

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/ecommerce-template-1.html` | `ecommercetemplate1` | E-commerce Template Lesson 1 |
| 2 | `Tutorial_Videos/ecommerce-template-2.html` | `ecommercetemplate2` | E-commerce Template Lesson 2 |
| 3 | `Tutorial_Videos/ecommerce-template-3.html` | `ecommercetemplate3` | E-commerce Template Lesson 3 |
| 4 | `Tutorial_Videos/ecommerce-template-4.html` | `ecommercetemplate4` | E-commerce Template Lesson 4 |
| 5 | `Tutorial_Videos/ecommerce-template-5.html` | `ecommercetemplate5` | E-commerce Template Lesson 5 |
| 6 | `Tutorial_Videos/ecommerce-template-6.html` | `ecommercetemplate6` | E-commerce Template Lesson 6 |
| 7 | `Tutorial_Videos/ecommerce-template-7.html` | `ecommercetemplate7` | E-commerce Template Lesson 7 |
| 8 | `Tutorial_Videos/ecommerce-template-8.html` | `ecommercetemplate8` | E-commerce Template Lesson 8 |
| 9 | `Tutorial_Videos/ecommerce-template-9.html` | `ecommercetemplate9` | E-commerce Template Lesson 9 |

### Web Edge

| No. | File | i18n prefix | Current topic |
|---:|---|---|---|
| 1 | `Tutorial_Videos/web-edge-1.html` | `webedge1` | Web Edge Lesson 1 |
| 2 | `Tutorial_Videos/web-edge-2.html` | `webedge2` | Web Edge Lesson 2 |
| 3 | `Tutorial_Videos/web-edge-3.html` | `webedge3` | Web Edge Lesson 3 |
| 4 | `Tutorial_Videos/web-edge-4.html` | `webedge4` | Web Edge Lesson 4 |
| 5 | `Tutorial_Videos/web-edge-5.html` | `webedge5` | Web Edge Lesson 5 |
| 6 | `Tutorial_Videos/web-edge-6.html` | `webedge6` | Web Edge Lesson 6 |
| 7 | `Tutorial_Videos/web-edge-7.html` | `webedge7` | Web Edge Lesson 7 |
| 8 | `Tutorial_Videos/web-edge-8.html` | `webedge8` | Web Edge Lesson 8 |
| 9 | `Tutorial_Videos/web-edge-9.html` | `webedge9` | Web Edge Lesson 9 |
| 10 | `Tutorial_Videos/web-edge-10.html` | `webedge10` | Web Edge Lesson 10 |
| 11 | `Tutorial_Videos/web-edge-11.html` | `webedge11` | Web Edge Lesson 11 |
| 12 | `Tutorial_Videos/web-edge-12.html` | `webedge12` | Web Edge Lesson 12 |
| 13 | `Tutorial_Videos/web-edge-13.html` | `webedge13` | Web Edge Lesson 13 |

---

## Root hub page format

The root hub page is `index.html`.

### Required structure

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <!-- verification / ads / GA4 / meta / fonts / CSS -->
</head>
<body class="hub-page">
  <a class="skip-link" href="#content">Skip to content</a>

  <header class="topbar">
    <!-- brand + language selector + theme toggle -->
  </header>

  <main id="content" class="container hub-page">
    <section class="hero" aria-labelledby="hub-title">
      <!-- hub title + lead -->
    </section>

    <div class="section-grid" aria-label="Tutorial sections">
      <!-- one .section-card per active tutorial section -->
    </div>
  </main>

  <button class="btn totop" type="button" data-totop aria-label="Scroll to top">
    <span data-i18n="ui.scrollTop">Scroll to top</span>
  </button>

  <script src="assets/js/app.js" defer></script>
</body>
</html>
```

### Section card format

Each section card should follow this pattern:

```html
<a class="section-card" href="Tutorial_Videos/<first-lesson>.html" data-section-prog="<section-slug>" data-total="<total>">
  <div class="section-head">
    <span class="section-badge <badge-class>" data-i18n="sectionN.badge">...</span>
  </div>
  <h2 data-i18n="sectionN.title">...</h2>
  <p class="section-desc" data-i18n="sectionN.desc">...</p>
  <div class="s-meta">
    <span class="s-lessons"><total> lessons</span>
    <span class="s-prog-label">0/<total> completed</span>
  </div>
  <div class="s-prog"><span></span></div>
</a>
```

### Hub page rules

- Root asset paths must not use `../`.
- Section card links must point to the first lesson in each section.
- `data-total` must match the actual number of lessons.
- If a section total changes, update `README.md`, this file, and the hub page.

---

## Lesson page format

Every active lesson page must follow the same major structure.

### Required full-page skeleton

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <!-- GA4 -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="PAGE-SPECIFIC DESCRIPTION">
  <meta name="keywords" content="PAGE-SPECIFIC KEYWORDS">
  <meta name="i18n-title-key" content="LESSON_PREFIX.title">

  <!-- Open Graph + Twitter + canonical -->

  <link rel="icon" href="../img/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700;800;900&family=Noto+Sans+Sinhala:wght@400;600;700;800&family=Noto+Sans+Tamil:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/app.css">
  <title>Appmaker Tutorials</title>
</head>
<body>
  <a class="skip-link" href="#content">Skip to content</a>

  <header class="topbar">
    <!-- shared topbar -->
  </header>

  <main id="content" class="container">
    <section class="hero" aria-labelledby="lesson-title">
      <div class="hero-inner">
        <!-- left: breadcrumb, title, description, progress -->
        <!-- right: video card + actions -->
      </div>
    </section>

    <section class="grid" aria-label="More content">
      <!-- left: full lesson list for this section -->
      <!-- right: footer CTA card -->
    </section>

    <footer>
      <!-- shared footer text -->
    </footer>
  </main>

  <button class="btn totop" type="button" data-totop aria-label="Scroll to top">
    <span data-i18n="ui.scrollTop">Scroll to top</span>
  </button>

  <script>document.getElementById("year").textContent = new Date().getFullYear();</script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof markLessonVisited === 'function') {
        markLessonVisited('LESSON-SLUG');
      }
    });
  </script>
  <script src="../assets/js/app.js" defer></script>
</body>
</html>
```

---

## Lesson page `<head>` rules

### GA4 snippet

Keep the GA4 snippet at the top of the head unless analytics architecture changes.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H6Y99HCGTQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-H6Y99HCGTQ');
</script>
```

### Required metadata

Each page must use page-specific values:

```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="i18n-title-key" content="<prefix>.title">
<meta property="og:url" content="https://appmaker.lk/Tutorial_Videos/<file>.html">
<meta property="og:title" content="... | Appmaker Tutorial">
<meta property="og:description" content="...">
<meta property="og:image" content="https://appmaker.lk/Tutorial_Videos/img/logo.svg">
<meta name="twitter:url" content="https://appmaker.lk/Tutorial_Videos/<file>.html">
<meta name="twitter:title" content="... | Appmaker Tutorial">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://appmaker.lk/Tutorial_Videos/img/logo.svg">
<link rel="canonical" href="https://appmaker.lk/Tutorial_Videos/<file>.html">
```

### Metadata writing style

- Use clear topic-specific descriptions.
- Include Appmaker and the relevant feature keywords.
- Avoid stuffing keywords.
- Avoid promises like “guaranteed approval,” “instant revenue,” or “best app builder.”
- Keep Play Store terminology separate from Appmaker/operator approval terminology.

---

## Header/topbar format

Use the shared topbar pattern.

Nested lesson pages must use:

```html
<a class="brand" href="../index.html" aria-label="Go to tutorials start">
  <span class="logo" aria-hidden="true"><img src="../img/logo.svg" alt=""></span>
  <span class="meta">
    <span class="title" data-i18n="app.name">Appmaker Tutorials</span>
    <span class="subtitle" data-i18n="app.subtitle">Fast, step-by-step video lessons</span>
  </span>
</a>
```

The language selector must keep:

```html
<button type="button" data-lang="en" aria-pressed="true">EN</button>
<button type="button" data-lang="si" aria-pressed="false">සි</button>
<button type="button" data-lang="ta" aria-pressed="false">TA</button>
```

The theme toggle must keep:

```html
<button class="icon-btn" type="button" data-theme-toggle aria-pressed="true" aria-label="Toggle theme">
  <small data-i18n="ui.theme">Theme</small>
</button>
```

---

## Hero section format

### Breadcrumb

Use breadcrumbs on lesson pages:

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="../index.html">Tutorial Hub</a>
  <span aria-hidden="true">/</span>
  <span data-i18n="sectionN.title"></span>
  <span aria-hidden="true">/</span>
  <span data-i18n="LESSON_PREFIX.title"></span>
</nav>
```

### Title area option A: kicker style

Some lesson pages use a kicker:

```html
<div class="kicker"><span class="dot"></span><span data-i18n="LESSON_PREFIX.kicker"></span></div>
<h1 id="lesson-title" data-i18n="LESSON_PREFIX.title"></h1>
<p class="lead" data-i18n="LESSON_PREFIX.desc"></p>
```

### Title area option B: section badge style

Other section pages use a title row:

```html
<div class="title-row">
  <span class="section-badge sec-N" data-i18n="sectionN.title"></span>
  <h1 id="lesson-title" data-i18n="LESSON_PREFIX.title">Fallback title</h1>
</div>
<p class="lead" data-i18n="LESSON_PREFIX.desc">Fallback description</p>
```

### Progress badge

Use current position and section total:

```html
<div class="badges" aria-label="Quick info">
  <div class="badge">
    <strong data-i18n="ui.progress">Progress</strong>
    <span style="opacity:.85">•</span>
    <span>CURRENT/TOTAL</span>
  </div>
  <div class="badge" style="flex:1 1 220px">
    <div class="progress" style="width:100%; --progress: DECIMAL"><span></span></div>
  </div>
</div>
```

Progress decimal should be four decimal places where possible:

| Current / total | Decimal |
|---|---:|
| 1/9 | `0.1111` |
| 2/9 | `0.2222` |
| 3/9 | `0.3333` |
| 4/9 | `0.4444` |
| 5/9 | `0.5556` |
| 6/9 | `0.6667` |
| 7/9 | `0.7778` |
| 8/9 | `0.8889` |
| 9/9 | `1.0000` |
| 1/8 | `0.1250` |
| 2/8 | `0.2500` |
| 3/8 | `0.3750` |
| 4/8 | `0.5000` |
| 5/8 | `0.6250` |
| 6/8 | `0.7500` |
| 7/8 | `0.8750` |
| 8/8 | `1.0000` |
| 1/6 | `0.1667` |
| 2/6 | `0.3333` |
| 3/6 | `0.5000` |
| 4/6 | `0.6667` |
| 5/6 | `0.8333` |
| 6/6 | `1.0000` |
| 1/4 | `0.2500` |
| 2/4 | `0.5000` |
| 3/4 | `0.7500` |
| 4/4 | `1.0000` |

---

## Video card format

Use this structure exactly unless the lazy-loading system is intentionally redesigned:

```html
<div class="card">
  <div class="video-wrap">
    <div class="video" aria-label="Tutorial video">
      <div class="ratio">
        <div class="placeholder">
          <div style="font-weight:800" data-i18n="ui.playHint">Video loads when you scroll</div>
        </div>

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
          data-src="https://www.youtube.com/embed/VIDEO_ID?enablejsapi=1">
        </iframe>
      </div>
    </div>
  </div>

  <div class="actions" aria-label="Lesson actions">
    <!-- Previous / Next / Join Appmaker -->
  </div>
</div>
```

Rules:

- Use YouTube embed URLs, not watch URLs.
- Always include `enablejsapi=1`.
- Keep `data-src`, not `src`.
- Use `referrerpolicy="strict-origin-when-cross-origin"`.
- Keep the iframe title as `Appmaker tutorial video` unless there is a stronger accessibility reason to make it page-specific.

---

## Lesson actions format

### Standard actions row

```html
<div class="actions" aria-label="Lesson actions">
  <a class="btn" href="PREVIOUS.html" aria-disabled="false">
    <span data-i18n="ui.prev">Previous</span>
  </a>
  <a class="btn" href="NEXT.html" aria-disabled="false">
    <span data-i18n="ui.next">Next</span>
  </a>
  <a class="btn primary" href="https://appmaker.lk/" target="_blank" rel="noopener" data-cta="join" data-cta-loc="hero">
    <span data-i18n="ui.join">Join Appmaker</span>
  </a>
</div>
```

### First lesson in section

For the first lesson, Previous should usually point to `../index.html` and may be disabled:

```html
<a class="btn" href="../index.html" aria-disabled="true">
  <span data-i18n="ui.prev">Previous</span>
</a>
```

### Last lesson in section

For the last lesson, Next should usually point to `../index.html` unless the product owner wants cross-section progression.

---

## More-content grid format

Each lesson page must include:

1. A left card showing all lessons in the current section.
2. A right card with page-specific footer title, footer text, Join Appmaker CTA, and copyright.

### Lesson list card

```html
<div class="card lesson-list">
  <h2 data-i18n="ui.allLessons">All lessons</h2>
  <div class="lesson-items">
    <a class="lesson-item" href="LESSON_FILE.html">
      <div class="n">1</div>
      <div>
        <div class="t" data-i18n="LESSON_PREFIX.title">Fallback title</div>
        <div class="d" data-i18n="LESSON_PREFIX.desc">Fallback description</div>
      </div>
    </a>
  </div>
</div>
```

Rules:

- Every lesson in the same section must be listed.
- The list must be updated on every page in that section when the section changes.
- `.t` and `.d` must not be empty after language rendering.
- Use fallback text to reduce blank-content risk if i18n fails.

### Footer CTA card

```html
<div class="card lesson-list">
  <h2 data-i18n="LESSON_PREFIX.footerTitle">Fallback footer title</h2>
  <p class="lead" style="margin:0" data-i18n="LESSON_PREFIX.footerText">Fallback footer text</p>
  <div style="height:14px"></div>
  <a class="btn primary" href="https://appmaker.lk/" target="_blank" rel="noopener" data-cta="join" data-cta-loc="footer">
    <span data-i18n="ui.join">Join Appmaker</span>
  </a>
  <div style="height:10px"></div>
  <p style="margin:0; font-size:12px; color:var(--muted2)">
    © <span id="year"></span> Simato Solutions • <a href="https://appmaker.lk/" target="_blank" rel="noopener">appmaker.lk</a>
  </p>
</div>
```

---

## Footer format

Use the shared footer line unless a broader footer redesign is approved:

```html
<footer>
  <div style="font-size:12px">
    Built for fast learning • Mobile‑first • Accessible • Multi‑language (EN / සිංහල / தமிழ்)
  </div>
</footer>
```

---

## Required i18n keys per lesson

For each lesson prefix, include these keys in `assets/js/app.js` for `en`, `si`, and `ta`:

```text
<prefix>.kicker
<prefix>.title
<prefix>.desc
<prefix>.footerTitle
<prefix>.footerText
<prefix>.docTitle
```

Example:

```js
"other8.kicker": "Other Features — 8 of 8",
"other8.title": "How to Enable Card Payments on Your App!",
"other8.desc": "...",
"other8.footerTitle": "APPMAKER Tutorial — Enable Card Payments",
"other8.footerText": "...",
"other8.docTitle": "How to Enable Card Payments on Your App! | Appmaker",
```

---

## Section navigation rules

When editing or adding lessons, verify all affected navigation.

### First page of each section

| Section | First page | Previous target | Next target |
|---|---|---|---|
| Basic | `basic-1.html` | `../index.html` | `basic-2.html` |
| After Launch | `after-launch-1.html` | `../index.html` | `after-launch-2.html` |
| Advanced | `advanced-1.html` | `../index.html` | `advanced-2.html` |
| Versa AI | `versa-ai-1.html` | `../index.html` | `versa-ai-2.html` |
| Other Features | `other-1.html` | `../index.html` | `other-2.html` |

### Last page of each section

| Section | Last page | Previous target | Next target |
|---|---|---|---|
| Basic | `basic-10.html` | `basic-9.html` | `../index.html` |
| After Launch | `after-launch-4.html` | `after-launch-3.html` | `../index.html` |
| Advanced | `advanced-6.html` | `advanced-5.html` | `advanced-7.html` |
| Advanced | `advanced-7.html` | `advanced-6.html` | `../index.html` |
| Versa AI | `versa-ai-4.html` | `versa-ai-3.html` | `../index.html` |
| Other Features | `other-8.html` | `other-7.html` | `../index.html` |

---

## Styling standards

### CSS ownership

Shared styling belongs in:

```text
assets/css/app.css
```

Do not create page-specific CSS files unless explicitly approved.

### Theme variables

Use existing variables:

```css
--bg0
--bg1
--card
--card2
--line
--text
--muted
--muted2
--shadow
--shadow2
--radius
--radius2
--pad
--max
--accent
--accent2
--focus
--font
```

Do not hard-code a new color if a variable already fits.

### Visual style

The current style is:

- Modern mobile-first interface.
- Dark theme by default with light theme support.
- Gradient background accents using teal and orange.
- Hub background layers must render as a continuous surface (no visible tiling/repeating seams).
- Global page background must be applied on `body`/root surface, not only hero/section wrappers; avoid white gaps below card rows on long pages.
- Do not use fixed page-height wrappers for hub backgrounds (`height: 100vh`); use `min-height` so background continues while scrolling.
- Rounded cards and buttons.
- Soft shadows.
- Sticky translucent topbar.
- Clear lesson progress indicators.
- Large video-first lesson layout.

### Section colour standards

Use section badge classes consistently so each tutorial section keeps a recognizable colour direction.

| Section name | Badge class | Main colour direction |
|---|---|---|
| Basic Lessons – Create Your First App | `sec-1` | Teal to cyan |
| Things to Do After Launch | `sec-2` | Orange to amber |
| Advanced Page Creation Options | `sec-3` | Violet to purple |
| App Creation Using Versa AI | `sec-4` | Emerald to mint |
| Other Features | `sec-5` | Sky blue to indigo |
| Specialised Templates | `sec-6` | Rose to pink |
| E-commerce Template | `sec-7` | Gold to orange |
| Web Edge | `sec-8` | Indigo to blue |

### Lesson description writing style

- one clear sentence
- no fluff
- no emojis
- English length target (12–22 words)
- conversational Sinhala/Tamil
- preserve product/technical names
- preserve meaning in translation

### Layout rules

- Keep `.container` max-width behavior.
- Keep `.hero-inner` two-column layout on larger screens.
- Keep `.actions` responsive grid behavior.
- Keep `.grid` one column on mobile and two columns on larger screens.
- Keep `.section-grid` responsive card layout.
- On `index.html`, keep a visible vertical gap between the hub hero container and the first row of `.section-card` items; do not allow cards to visually touch the hero block.

### Inline style policy

Small inline styles may remain where already used, for example:

```html
style="width:100%; --progress: 0.1111"
style="margin:0"
style="height:14px"
```

For repeated new visual behavior, add or update shared CSS classes instead of adding many inline styles.

---

## Accessibility checklist

Every page must pass these checks:

- Includes `<a class="skip-link" href="#content">Skip to content</a>`.
- Includes `<main id="content">`.
- Header controls are keyboard-accessible.
- Language selector uses buttons, not links.
- Theme toggle uses a button.
- Breadcrumb uses `<nav aria-label="Breadcrumb">`.
- Hero section uses `aria-labelledby="lesson-title"`.
- Video wrapper has `aria-label="Tutorial video"`.
- Actions row has `aria-label="Lesson actions"`.
- Scroll-to-top button has an accessible label.
- External links use `target="_blank" rel="noopener"`.
- No important content is available only through color.
- Focus state remains visible.

---

## Analytics checklist

Every page should retain:

- GA4 snippet with `G-H6Y99HCGTQ`.
- `data-cta="join"` on Join Appmaker CTAs.
- `data-cta-loc="hero"` for hero CTA.
- `data-cta-loc="footer"` for footer CTA.
- `markLessonVisited('<slug>')` with the correct slug.
- Lazy-loaded YouTube embed with `enablejsapi=1`.

Do not add analytics events casually. Reuse existing event patterns from `assets/js/app.js`.

---

## SEO checklist

For each page, verify:

- Meta description is specific to the lesson.
- Keywords include Appmaker and the relevant feature.
- `i18n-title-key` matches the lesson title key.
- `og:url` matches the canonical URL.
- `twitter:url` matches the canonical URL.
- `og:title` and `twitter:title` are readable and accurate.
- `og:description` and `twitter:description` match the page topic.
- `og:image` and `twitter:image` use the logo path currently used by the site.
- Canonical link uses the exact page URL.

---

## Content style guide

### Voice

Use a friendly, practical tutorial voice.

Good:

```text
Learn how to enable card payments, submit the request form, and set subscription amounts.
```

Avoid:

```text
Unlock the ultimate payment revolution and guarantee massive growth instantly.
```

### Appmaker publishing terminology

Be precise:

- **Appmaker approval / operator approval**: submitting and approving the app on Appmaker/operator flow.
- **Google Play Store publishing**: optional separate publishing through Google Play Console.
- Do not imply that every Appmaker app must be published on Google Play Store.

### Claims

Avoid unsupported claims about:

- Guaranteed approval.
- Guaranteed revenue.
- Guaranteed user growth.
- Exact approval time unless confirmed in current documentation.
- Payment availability unless the feature is actually enabled for the relevant app/operator/payment method.

---

## External links and articles

If a page includes external links:

```html
<a href="https://example.com" target="_blank" rel="noopener">Readable link text</a>
```

Rules:

- Use clear link text where possible.
- Keep raw URLs only where the page intentionally displays a form/article link.
- Do not add third-party links unless they directly support the lesson.
- Check whether external links need to be added to the lesson description or footer text.

---

## Video descriptions and language-specific blocks

Some pages may include extra language-specific video description blocks using custom `data-*` attributes. If used, keep the behavior simple and make sure it works with the existing language selector.

When adding such blocks:

- Use `data-video-desc="en"`, `data-video-desc="si"`, or `data-video-desc="ta"`.
- Default to English if no saved language exists.
- Ensure blocks toggle when language buttons are clicked.
- Do not duplicate large content blocks unless necessary.

---

## Visual QA rules

The current visual smoke test is:

```text
tests/visual/check-pages.mjs
```

It currently checks selected high-risk pages for:

- Hero title visibility.
- Footer title visibility.
- Footer description visibility.
- Non-empty lesson list titles and descriptions for known risky pages.
- Full-page screenshots saved to `tests/visual/artifacts/`.

### When to update visual checks

Update the visual test when:

- A new page has custom layout.
- A page previously had missing i18n text.
- A new section is added.
- Lesson list rendering changes.
- Footer card rendering changes.
- A repeated regression is fixed and should be guarded.

### Recommended command

```bash
python -m http.server 4173
npx playwright install chromium
node tests/visual/check-pages.mjs
```

---

## Page creation checklist

Use this checklist when creating a new lesson page.

### Planning

- [ ] Confirm section slug.
- [ ] Confirm lesson number and section total.
- [ ] Confirm i18n prefix.
- [ ] Confirm video embed URL.
- [ ] Confirm any external article/form links.
- [ ] Confirm previous and next pages.

### HTML

- [ ] Copy the nearest existing page in the same section as the starting point.
- [ ] Update all metadata.
- [ ] Update breadcrumb keys.
- [ ] Update section badge/kicker.
- [ ] Update title and description keys.
- [ ] Update progress label and decimal.
- [ ] Update video `data-src`.
- [ ] Update Previous/Next links.
- [ ] Update lesson list for the section.
- [ ] Update footer title/text keys.
- [ ] Update `markLessonVisited()` slug.

### i18n

- [ ] Add English keys.
- [ ] Add Sinhala keys.
- [ ] Add Tamil keys.
- [ ] Verify all referenced `data-i18n` keys exist.
- [ ] Confirm no visible blank strings after rendering.

### Hub and docs

- [ ] Update `index.html` section card total if needed.
- [ ] Update README if totals/video mappings changed.
- [ ] Update this style guide.
- [ ] Update visual tests if needed.

### QA

- [ ] Run a local static server.
- [ ] Run Playwright visual check.
- [ ] Test mobile width.
- [ ] Test desktop width.
- [ ] Test language switcher.
- [ ] Test theme toggle.
- [ ] Test CTA and navigation links.

---

## Common mistakes to avoid

- Using `assets/css/app.css` instead of `../assets/css/app.css` inside `Tutorial_Videos/` pages.
- Linking nested lesson pages back to `index.html` instead of `../index.html`.
- Updating a lesson title in HTML but forgetting `assets/js/app.js`.
- Adding an English i18n key but missing Sinhala and Tamil.
- Updating a section total on the hub but not in progress labels.
- Adding a new lesson but not adding it to every lesson list in that section.
- Replacing YouTube `data-src` with `src` and breaking lazy loading.
- Removing `enablejsapi=1` from YouTube embeds.
- Forgetting `target="_blank" rel="noopener"` on external links.
- Forgetting `markLessonVisited()`.
- Leaving `.t` or `.d` lesson-list text empty.
- Confusing Appmaker approval with Google Play Store publishing.

---

## Change log

### 2026-05-13

- Added **Section colour standards** with an 8-row mapping table for section name, badge class (`sec-1` through `sec-8`), and main colour direction.
- Added **Lesson description writing style** with required rules for concise single-sentence copy, translation consistency, and language quality targets.

### 2026-05-12

- Expanded active tutorial inventory documentation to include:
  - Specialised Templates (`specialised-templates`, 3 lessons)
  - E-commerce Template (`ecommerce-template`, 9 lessons)
  - Web Edge (`web-edge`, 13 lessons)
- Added full lesson maps for all three new sections in the inventory tables.

### 2026-05-11

- Initial page format and styling guide created for the Appmaker tutorial static site.
- Documented hub page structure, lesson page structure, i18n key rules, SEO rules, analytics rules, accessibility checklist, styling standards, progress formulas, and current lesson inventory.
- Added hub visual QA/style expectations for `index.html`: keep spacing between hero and section cards, and prevent repeating background artifacts.
- Clarified full-page background coverage rules: root-level background ownership, no white gaps on scroll, and prefer `min-height` over fixed `100vh` wrappers.


## Change log
- Appmaker Text Editor lesson inserted as **Basic Lesson 6**; previous Basic lessons 6–9 were shifted to 7–10.
