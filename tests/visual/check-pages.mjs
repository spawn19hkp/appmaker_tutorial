import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const PAGES = [
  'index.html',
  'Tutorial_Videos/other-7.html',
  'Tutorial_Videos/other-8.html',
  'Tutorial_Videos/after-launch-4.html'
];

const VIEWPORTS = [
  { name: 'desktop', viewport: { width: 1365, height: 768 } },
  { name: 'mobile-iphone', viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
];

const BASE_URL = process.env.VISUAL_BASE_URL || 'http://127.0.0.1:4173';
const OUT_DIR = path.resolve('tests/visual/artifacts');
fs.mkdirSync(OUT_DIR, { recursive: true });

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exitCode = 1;
}

const browser = await chromium.launch({ headless: true });

for (const view of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: view.viewport,
    deviceScaleFactor: view.deviceScaleFactor,
    isMobile: view.isMobile,
    hasTouch: view.hasTouch
  });

  for (const rel of PAGES) {
    const page = await context.newPage();
    const url = `${BASE_URL}/${rel}`;
    console.log(`\nChecking [${view.name}] ${url}`);

    const errors = [];
    page.on('console', msg => {
      if (msg.type() !== 'error') return;
      const text = msg.text();
      const isExternalResourceFailure = text.includes('Failed to load resource:') && (
        text.includes('ERR_TUNNEL_CONNECTION_FAILED') ||
        text.includes('ERR_CERT_AUTHORITY_INVALID')
      );
      if (!isExternalResourceFailure) errors.push(`console: ${text}`);
    });
    page.on('pageerror', err => errors.push(`pageerror: ${err.message}`));

    await page.goto(url, { waitUntil: 'networkidle' });

    const checks = await page.evaluate(() => {
      const q = s => document.querySelector(s);
      const txt = s => (q(s)?.textContent || '').trim();

      const allLessonItems = [...document.querySelectorAll('.lesson-item')];
      const emptyTitles = allLessonItems
        .map((item, idx) => ({ idx: idx + 1, text: (item.querySelector('.t')?.textContent || '').trim() }))
        .filter(x => !x.text)
        .map(x => x.idx);

      const emptyDescs = allLessonItems
        .map((item, idx) => ({ idx: idx + 1, text: (item.querySelector('.d')?.textContent || '').trim() }))
        .filter(x => !x.text)
        .map(x => x.idx);

      const footerHeading = txt('.grid .card.lesson-list:nth-of-type(2) h2');
      const footerBody = txt('.grid .card.lesson-list:nth-of-type(2) .lead');

      return {
        h1: txt('#lesson-title'),
        footerHeading,
        footerBody,
        emptyTitles,
        emptyDescs
      };
    });

    const isLessonPage = rel.startsWith('Tutorial_Videos/');
    if (isLessonPage && !checks.h1) errors.push('Missing hero lesson title (#lesson-title)');
    if (isLessonPage && !checks.footerHeading) errors.push('Missing footer heading text on right card');
    if (isLessonPage && !checks.footerBody) errors.push('Missing footer body text on right card');

    if (rel.includes('other-7') || rel.includes('other-8')) {
      if (checks.emptyTitles.includes(7) || checks.emptyTitles.includes(8)) {
        errors.push(`Lesson list has empty title(s) at position(s): ${checks.emptyTitles.join(', ')}`);
      }
      if (checks.emptyDescs.includes(7) || checks.emptyDescs.includes(8)) {
        errors.push(`Lesson list has empty description(s) at position(s): ${checks.emptyDescs.join(', ')}`);
      }
    }

    const shot = path.join(OUT_DIR, `${view.name}__${rel.replace(/[/.]/g, '_')}.png`);
    await page.screenshot({ path: shot, fullPage: true });
    console.log(`Saved screenshot: ${shot}`);

    if (errors.length) {
      errors.forEach(msg => fail(`[${view.name}] ${rel}: ${msg}`));
    } else {
      console.log(`✅ [${view.name}] Visual content checks passed`);
    }

    await page.close();
  }

  await context.close();
}

await browser.close();
if (process.exitCode) process.exit(process.exitCode);
