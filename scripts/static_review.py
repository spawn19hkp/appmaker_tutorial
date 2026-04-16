#!/usr/bin/env python3
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
TUTORIAL_DIR = ROOT / "Tutorial_Videos"
ASSET_JS = ROOT / "assets/js/app.js"
ASSET_CSS = ROOT / "assets/css/app.css"

EXPECTED_RANGES = {
    "basic": range(1, 10),
    "after-launch": range(1, 4),
    "advanced": range(1, 7),
    "versa-ai": range(1, 5),
    "other": range(1, 7),
}


@dataclass
class CheckResult:
    name: str
    passed: bool
    details: list[str]


def _read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def check_filenames() -> CheckResult:
    html_names = sorted(p.name for p in TUTORIAL_DIR.glob("*.html"))
    issues: list[str] = []

    for prefix, number_range in EXPECTED_RANGES.items():
        for i in number_range:
            expected = f"{prefix}-{i}.html"
            if expected not in html_names:
                issues.append(f"Missing required lesson file: {expected}")

    for name in html_names:
        if name == "index.html":
            continue
        m = re.fullmatch(r"([a-z-]+)-(\d+)\.html", name)
        if not m:
            issues.append(f"Unexpected file naming format: {name}")
            continue
        prefix, num = m.group(1), int(m.group(2))
        if prefix not in EXPECTED_RANGES or num not in EXPECTED_RANGES[prefix]:
            issues.append(f"Out-of-range lesson file: {name}")

    return CheckResult("File naming prefixes/ranges", not issues, issues or ["All expected tutorial filenames are present and in-range."])


def check_old_chain_refs() -> CheckResult:
    issues: list[str] = []
    old_chain = re.compile(r'href="(step-[2-8]\.html)"')

    for path in sorted(TUTORIAL_DIR.glob("*.html")):
        text = _read(path)
        for match in old_chain.finditer(text):
            issues.append(f"{path.name} references legacy lesson: {match.group(1)}")

    return CheckResult("Legacy step-2..step-8 references", not issues, issues or ["No legacy step-2..step-8 links found under Tutorial_Videos/*.html."])


def check_hub_and_breadcrumb_links() -> CheckResult:
    issues: list[str] = []
    href_pattern = re.compile(r'href="([^"]+)"')

    # Hub cards
    index_path = TUTORIAL_DIR / "index.html"
    index_text = _read(index_path)
    for href in re.findall(r'<a class="section-card" href="([^"]+)"', index_text):
        if href.startswith("http"):
            continue
        if not (TUTORIAL_DIR / href).exists():
            issues.append(f"Hub card target missing: {href}")

    # Breadcrumbs
    for path in sorted(TUTORIAL_DIR.glob("*.html")):
        text = _read(path)
        if 'class="breadcrumb"' not in text:
            continue
        nav_match = re.search(r'<nav class="breadcrumb".*?</nav>', text, flags=re.S)
        if not nav_match:
            issues.append(f"Breadcrumb markup not parseable in {path.name}")
            continue
        for href in href_pattern.findall(nav_match.group(0)):
            if href.startswith("http"):
                continue
            if not (TUTORIAL_DIR / href).exists():
                issues.append(f"Broken breadcrumb link in {path.name}: {href}")

    return CheckResult("Hub cards + breadcrumb links", not issues, issues or ["All hub card and breadcrumb href targets resolve to existing files."])


def check_prev_next_boundaries() -> CheckResult:
    issues: list[str] = []

    for prefix, number_range in EXPECTED_RANGES.items():
        first = TUTORIAL_DIR / f"{prefix}-{min(number_range)}.html"
        last = TUTORIAL_DIR / f"{prefix}-{max(number_range)}.html"

        first_text = _read(first)
        last_text = _read(last)

        if not re.search(r'<a class="btn" href="#" aria-disabled="true"><span>Previous</span></a>', first_text):
            issues.append(f"{first.name}: previous button should be disabled on first lesson")
        if not re.search(r'<a class="btn" href="#" aria-disabled="true"><span>Next</span></a>', last_text):
            issues.append(f"{last.name}: next button should be disabled on last lesson")

        for i in number_range:
            path = TUTORIAL_DIR / f"{prefix}-{i}.html"
            text = _read(path)
            for label in ("Previous", "Next"):
                m = re.search(rf'<a class="btn" href="([^"]+)" aria-disabled="(true|false)"><span>{label}</span></a>', text)
                if not m:
                    issues.append(f"{path.name}: missing {label.lower()} action button")
                    continue
                href, disabled = m.groups()
                if disabled == "false" and href != "#" and not (TUTORIAL_DIR / href).exists():
                    issues.append(f"{path.name}: {label.lower()} target not found ({href})")

    return CheckResult("Prev/next boundary integrity", not issues, issues or ["Prev/next controls are valid including section boundaries."])


def _extract_locale_keys(js_text: str, locale: str) -> set[str]:
    start = re.search(rf"{locale}:\s*\{{", js_text)
    if not start:
        return set()

    i = start.end()
    depth = 1
    while i < len(js_text) and depth > 0:
        if js_text[i] == "{":
            depth += 1
        elif js_text[i] == "}":
            depth -= 1
        i += 1

    block = js_text[start.end() : i - 1]
    return set(re.findall(r'"([^"]+)"\s*:', block))


def check_i18n_keys() -> CheckResult:
    js_text = _read(ASSET_JS)
    locales = {lang: _extract_locale_keys(js_text, lang) for lang in ("en", "si", "ta")}

    referenced: set[str] = set()
    for path in sorted(TUTORIAL_DIR.glob("*.html")):
        referenced.update(re.findall(r'data-i18n="([^"]+)"', _read(path)))

    issues: list[str] = []
    for locale, keys in locales.items():
        missing = sorted(key for key in referenced if key not in keys)
        if missing:
            issues.append(f"Locale {locale} missing keys: {', '.join(missing)}")

    return CheckResult("i18n key coverage for referenced keys", not issues, issues or ["All data-i18n keys referenced in HTML are defined for en/si/ta."])


def check_css_class_parity() -> CheckResult:
    css_text = _read(ASSET_CSS)
    css_classes = set(re.findall(r"\.([a-zA-Z_][\w-]*)", css_text))

    html_classes: set[str] = set()
    for path in sorted(TUTORIAL_DIR.glob("*.html")):
        for raw in re.findall(r'class="([^"]+)"', _read(path)):
            html_classes.update(raw.split())

    # class applied by script/runtime only; intentionally excluded
    ignored = {"lazyload", "lazyloaded", "hidden", "show"}
    missing = sorted(c for c in html_classes if c not in css_classes and c not in ignored)

    details = [f"Classes used in HTML but not found in assets/css/app.css: {', '.join(missing)}"] if missing else ["All HTML classes are backed by selectors in assets/css/app.css."]
    return CheckResult("CSS selector parity for HTML classes", not missing, details)


def check_localstorage_fallback() -> CheckResult:
    js_text = _read(ASSET_JS)
    uses = re.findall(r"localStorage\.(?:getItem|setItem)", js_text)
    has_guard = bool(re.search(r"try\s*\{[^}]*localStorage", js_text, flags=re.S))

    issues: list[str] = []
    if uses and not has_guard:
        issues.append(
            "localStorage is accessed directly without a surrounding availability guard; if browser storage is disabled, initialization can throw before finishing."
        )

    return CheckResult("Progress UI resilience when localStorage unavailable", not issues, issues or ["localStorage access appears guarded/fallback-safe."])


def main() -> int:
    checks = [
        check_filenames(),
        check_old_chain_refs(),
        check_hub_and_breadcrumb_links(),
        check_prev_next_boundaries(),
        check_i18n_keys(),
        check_css_class_parity(),
        check_localstorage_fallback(),
    ]

    for idx, result in enumerate(checks, start=1):
        status = "PASS" if result.passed else "FAIL"
        print(f"{idx}. [{status}] {result.name}")
        for line in result.details:
            print(f"   - {line}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
