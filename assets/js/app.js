(() => {
  const STORAGE_LANG = "am_tutorial_lang";
  const STORAGE_THEME = "am_tutorial_theme";

  function getPreferredTheme(){
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.title = theme === "dark" ? "Switch to light" : "Switch to dark";
    }
  }

  function toggleTheme(){
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_THEME, next);
    applyTheme(next);
    safeTrack("toggle_theme", { theme: next });
  }

  const i18n = {
    en: {
      "app.name": "Appmaker Tutorials",
      "app.subtitle": "Fast, step-by-step video lessons",
      "ui.language": "Language",
      "ui.theme": "Theme",
      "ui.prev": "Previous",
      "ui.next": "Next",
      "ui.backToStart": "Back to start",
      "ui.join": "Join Appmaker",
      "ui.allLessons": "All lessons",
      "ui.progress": "Progress",
      "ui.playHint": "Video loads when you scroll",
      "ui.scrollTop": "Scroll to top",

      "lesson1.kicker": "Lesson 1 of 8",
      "lesson1.title": "Registration",
      "lesson1.desc": "Step-by-step guide on how to register on the Appmaker platform.",
      "lesson1.footerTitle": "APPMAKER Tutorial — Registration",
      "lesson1.footerText": "Lesson 1 — Learn how to register and get access to Appmaker.",
      "lesson1.docTitle": "How to register | Appmaker",

      "lesson2.kicker": "Lesson 2 of 8",
      "lesson2.title": "Getting Started",
      "lesson2.desc": "Learn the basics and start creating your first apps.",
      "lesson2.footerTitle": "APPMAKER Tutorial — Getting started",
      "lesson2.footerText": "Lesson 2 — A quick guide to help you start creating apps.",
      "lesson2.docTitle": "Getting started | Appmaker",

      "lesson3.kicker": "Lesson 3 of 8",
      "lesson3.title": "Create Pages",
      "lesson3.desc": "Create pages for your app and structure content neatly.",
      "lesson3.footerTitle": "APPMAKER Tutorial — Creating pages",
      "lesson3.footerText": "Lesson 3 — Step-by-step guide to create pages on Appmaker.",
      "lesson3.docTitle": "How to create pages | Appmaker",

      "lesson4.kicker": "Lesson 4 of 8",
      "lesson4.title": "Create Forms",
      "lesson4.desc": "Build forms for feedback, lead capture, and requests.",
      "lesson4.footerTitle": "APPMAKER Tutorial — Creating forms",
      "lesson4.footerText": "Lesson 4 — Step-by-step guide to create forms on Appmaker.",
      "lesson4.docTitle": "How to create forms | Appmaker",

      "lesson5.kicker": "Lesson 5 of 8",
      "lesson5.title": "Create a Website",
      "lesson5.desc": "Create a website and publish it via your Appmaker setup.",
      "lesson5.footerTitle": "APPMAKER Tutorial — Creating websites",
      "lesson5.footerText": "Lesson 5 — Step-by-step guide to create a website on Appmaker.",
      "lesson5.docTitle": "How to create a website | Appmaker",

      "lesson6.kicker": "Lesson 6 of 8",
      "lesson6.title": "Create an E‑commerce Store",
      "lesson6.desc": "Set up products and start selling with an e-commerce store.",
      "lesson6.footerTitle": "APPMAKER Tutorial — Creating an e‑commerce store",
      "lesson6.footerText": "Lesson 6 — Step-by-step guide to create an e‑commerce store on Appmaker.",
      "lesson6.docTitle": "How to create an e-commerce store | Appmaker",

      "lesson7.kicker": "Lesson 7 of 8",
      "lesson7.title": "Create a Chat App",
      "lesson7.desc": "Create a one‑to‑one chat experience with Appmaker.",
      "lesson7.footerTitle": "APPMAKER Tutorial — Creating a chat app",
      "lesson7.footerText": "Lesson 7 — Step-by-step guide to create a chat app on Appmaker.",
      "lesson7.docTitle": "How to create a chat app | Appmaker",

      "lesson8.kicker": "Lesson 8 of 8",
      "lesson8.title": "Publish Your App",
      "lesson8.desc": "Finalize and publish your app so users can access it.",
      "lesson8.footerTitle": "APPMAKER Tutorial — Publishing your app",
      "lesson8.footerText": "Lesson 8 — Step-by-step guide to publish your Appmaker app.",
      "lesson8.docTitle": "How to publish an app | Appmaker"
    },

    si: {
      "app.name": "Appmaker පාඩම්",
      "app.subtitle": "ඉක්මන් පියවරෙන් පියවර වීඩියෝ පාඩම්",
      "ui.language": "භාෂාව",
      "ui.theme": "තේමාව",
      "ui.prev": "පෙර",
      "ui.next": "ඊළඟ",
      "ui.backToStart": "ආරම්භයට",
      "ui.join": "Appmaker එකට එක්වන්න",
      "ui.allLessons": "සියලු පාඩම්",
      "ui.progress": "ප්‍රගතිය",
      "ui.playHint": "ස්ක්‍රෝල් කළාම වීඩියෝ එක ලෝඩ් වේ",
      "ui.scrollTop": "ඉහළට යන්න",

      "lesson1.kicker": "පාඩම 1 / 8",
      "lesson1.title": "ලියාපදිංචි වීම",
      "lesson1.desc": "Appmaker වේදිකාවට ලියාපදිංචි වීමට පියවරෙන් පියවර මඟපෙන්වීම.",
      "lesson1.footerTitle": "APPMAKER පාඩම — ලියාපදිංචි වීම",
      "lesson1.footerText": "පාඩම 1 — Appmaker වෙත ලියාපදිංචි වී ප්‍රවේශය ලබාගන්න.",
      "lesson1.docTitle": "ලියාපදිංචි වීම | Appmaker",

      "lesson2.kicker": "පාඩම 2 / 8",
      "lesson2.title": "ආරම්භ කිරීම",
      "lesson2.desc": "මූලික දේවල් ඉගෙනගෙන ඔබගේ පළමු ඇප් නිර්මාණය ආරම්භ කරන්න.",
      "lesson2.footerTitle": "APPMAKER පාඩම — ආරම්භ කිරීම",
      "lesson2.footerText": "පාඩම 2 — ඇප් නිර්මාණය ආරම්භ කිරීමට ඉක්මන් මඟපෙන්වීම.",
      "lesson2.docTitle": "ආරම්භ කිරීම | Appmaker",

      "lesson3.kicker": "පාඩම 3 / 8",
      "lesson3.title": "පිටු නිර්මාණය",
      "lesson3.desc": "ඔබගේ ඇප් එකට පිටු එක්කර අන්තර්ගතය ගොඩනගන්න.",
      "lesson3.footerTitle": "APPMAKER පාඩම — පිටු නිර්මාණය",
      "lesson3.footerText": "පාඩම 3 — Appmaker හි පිටු නිර්මාණය කිරීමේ පියවරෙන් පියවර මඟපෙන්වීම.",
      "lesson3.docTitle": "පිටු නිර්මාණය | Appmaker",

      "lesson4.kicker": "පාඩම 4 / 8",
      "lesson4.title": "ෆෝම් (Forms) නිර්මාණය",
      "lesson4.desc": "ප්‍රතිචාර, ඉල්ලීම් සහ ලීඩ් එකතු කිරීම සඳහා ෆෝම් සාදන්න.",
      "lesson4.footerTitle": "APPMAKER පාඩම — ෆෝම් නිර්මාණය",
      "lesson4.footerText": "පාඩම 4 — Appmaker හි ෆෝම් නිර්මාණය කිරීමේ මඟපෙන්වීම.",
      "lesson4.docTitle": "ෆෝම් නිර්මාණය | Appmaker",

      "lesson5.kicker": "පාඩම 5 / 8",
      "lesson5.title": "වෙබ් අඩවියක් නිර්මාණය",
      "lesson5.desc": "Appmaker භාවිතයෙන් වෙබ් අඩවියක් නිර්මාණය කර ප්‍රකාශයට පත් කරන්න.",
      "lesson5.footerTitle": "APPMAKER පාඩම — වෙබ් අඩවි නිර්මාණය",
      "lesson5.footerText": "පාඩම 5 — Appmaker හි වෙබ් අඩවියක් නිර්මාණය කිරීමේ මඟපෙන්වීම.",
      "lesson5.docTitle": "වෙබ් අඩවියක් නිර්මාණය | Appmaker",

      "lesson6.kicker": "පාඩම 6 / 8",
      "lesson6.title": "ඊ-වාණිජය වෙළඳසැලක් නිර්මාණය",
      "lesson6.desc": "නිෂ්පාදන එකතු කර අන්තර්ජාලයෙන් විකුණුම් ආරම්භ කරන්න.",
      "lesson6.footerTitle": "APPMAKER පාඩම — ඊ-වාණිජය වෙළඳසැල",
      "lesson6.footerText": "පාඩම 6 — Appmaker හි ඊ-වාණිජය වෙළඳසැලක් නිර්මාණය කිරීමේ මඟපෙන්වීම.",
      "lesson6.docTitle": "ඊ-වාණිජය වෙළඳසැල | Appmaker",

      "lesson7.kicker": "පාඩම 7 / 8",
      "lesson7.title": "චැට් ඇප් එකක් නිර්මාණය",
      "lesson7.desc": "Appmaker භාවිතයෙන් 1-ට-1 චැට් අත්දැකීමක් සාදන්න.",
      "lesson7.footerTitle": "APPMAKER පාඩම — චැට් ඇප්",
      "lesson7.footerText": "පාඩම 7 — Appmaker හි චැට් ඇප් එකක් නිර්මාණය කිරීමේ මඟපෙන්වීම.",
      "lesson7.docTitle": "චැට් ඇප් | Appmaker",

      "lesson8.kicker": "පාඩම 8 / 8",
      "lesson8.title": "ඔබගේ ඇප් එක ප්‍රකාශයට පත් කරන්න",
      "lesson8.desc": "අවසන් කර ඔබගේ ඇප් එක ප්‍රකාශයට පත් කරන්න.",
      "lesson8.footerTitle": "APPMAKER පාඩම — ඇප් ප්‍රකාශනය",
      "lesson8.footerText": "පාඩම 8 — Appmaker ඇප් එක ප්‍රකාශයට පත් කිරීමේ මඟපෙන්වීම.",
      "lesson8.docTitle": "ඇප් ප්‍රකාශනය | Appmaker"
    },

    ta: {
      "app.name": "Appmaker பயிற்சிகள்",
      "app.subtitle": "விரைவான படிப்படி வீடியோ பாடங்கள்",
      "ui.language": "மொழி",
      "ui.theme": "தீம்",
      "ui.prev": "முந்தையது",
      "ui.next": "அடுத்தது",
      "ui.backToStart": "தொடக்கத்திற்கு",
      "ui.join": "Appmaker-ல் சேருங்கள்",
      "ui.allLessons": "அனைத்து பாடங்கள்",
      "ui.progress": "முன்னேற்றம்",
      "ui.playHint": "ஸ்க்ரோல் செய்ததும் வீடியோ லோடு ஆகும்",
      "ui.scrollTop": "மேலே செல்ல",

      "lesson1.kicker": "பாடம் 1 / 8",
      "lesson1.title": "பதிவு செய்தல்",
      "lesson1.desc": "Appmaker தளத்தில் பதிவு செய்வதற்கான படிப்படி வழிகாட்டி.",
      "lesson1.footerTitle": "APPMAKER பயிற்சி — பதிவு செய்தல்",
      "lesson1.footerText": "பாடம் 1 — Appmaker-ல் பதிவு செய்து அணுகலைப் பெறுங்கள்.",
      "lesson1.docTitle": "பதிவு செய்தல் | Appmaker",

      "lesson2.kicker": "பாடம் 2 / 8",
      "lesson2.title": "தொடங்குவது",
      "lesson2.desc": "அடிப்படைகளை கற்று உங்கள் முதல் ஆப்பை உருவாக்கத் தொடங்குங்கள்.",
      "lesson2.footerTitle": "APPMAKER பயிற்சி — தொடங்குவது",
      "lesson2.footerText": "பாடம் 2 — ஆப் உருவாக்கத் தொடங்க விரைவான வழிகாட்டி.",
      "lesson2.docTitle": "தொடங்குவது | Appmaker",

      "lesson3.kicker": "பாடம் 3 / 8",
      "lesson3.title": "பக்கங்களை உருவாக்குதல்",
      "lesson3.desc": "உங்கள் ஆப்பில் பக்கங்களை உருவாக்கி உள்ளடக்கத்தை ஒழுங்குபடுத்துங்கள்.",
      "lesson3.footerTitle": "APPMAKER பயிற்சி — பக்கங்கள்",
      "lesson3.footerText": "பாடம் 3 — Appmaker-ல் பக்கங்களை உருவாக்க படிப்படி வழிகாட்டி.",
      "lesson3.docTitle": "பக்கங்களை உருவாக்குதல் | Appmaker",

      "lesson4.kicker": "பாடம் 4 / 8",
      "lesson4.title": "படிவங்களை உருவாக்குதல்",
      "lesson4.desc": "கருத்துக்கள், கோரிக்கைகள், lead capture க்காக படிவங்களை உருவாக்குங்கள்.",
      "lesson4.footerTitle": "APPMAKER பயிற்சி — படிவங்கள்",
      "lesson4.footerText": "பாடம் 4 — Appmaker-ல் படிவங்களை உருவாக்க படிப்படி வழிகாட்டி.",
      "lesson4.docTitle": "படிவங்களை உருவாக்குதல் | Appmaker",

      "lesson5.kicker": "பாடம் 5 / 8",
      "lesson5.title": "ஒரு வலைத்தளத்தை உருவாக்குதல்",
      "lesson5.desc": "Appmaker மூலம் ஒரு வலைத்தளத்தை உருவாக்கி வெளியிடுங்கள்.",
      "lesson5.footerTitle": "APPMAKER பயிற்சி — வலைத்தளம்",
      "lesson5.footerText": "பாடம் 5 — Appmaker-ல் வலைத்தளத்தை உருவாக்க படிப்படி வழிகாட்டி.",
      "lesson5.docTitle": "வலைத்தளம் உருவாக்குதல் | Appmaker",

      "lesson6.kicker": "பாடம் 6 / 8",
      "lesson6.title": "இ‑காமர்ஸ் கடையை உருவாக்குதல்",
      "lesson6.desc": "பொருட்களை அமைத்து இ‑காமர்ஸ் கடையில் விற்பனை செய்யத் தொடங்குங்கள்.",
      "lesson6.footerTitle": "APPMAKER பயிற்சி — இ‑காமர்ஸ்",
      "lesson6.footerText": "பாடம் 6 — Appmaker-ல் இ‑காமர்ஸ் கடையை உருவாக்க படிப்படி வழிகாட்டி.",
      "lesson6.docTitle": "இ‑காமர்ஸ் கடை | Appmaker",

      "lesson7.kicker": "பாடம் 7 / 8",
      "lesson7.title": "சாட் ஆப்பை உருவாக்குதல்",
      "lesson7.desc": "Appmaker மூலம் 1‑to‑1 சாட் அனுபவத்தை உருவாக்குங்கள்.",
      "lesson7.footerTitle": "APPMAKER பயிற்சி — சாட் ஆப்",
      "lesson7.footerText": "பாடம் 7 — Appmaker-ல் சாட் ஆப்பை உருவாக்க படிப்படி வழிகாட்டி.",
      "lesson7.docTitle": "சாட் ஆப் | Appmaker",

      "lesson8.kicker": "பாடம் 8 / 8",
      "lesson8.title": "உங்கள் ஆப்பை வெளியிடுங்கள்",
      "lesson8.desc": "இறுதிப்படுத்து உங்கள் ஆப்பை வெளியிடுங்கள்.",
      "lesson8.footerTitle": "APPMAKER பயிற்சி — வெளியிடுதல்",
      "lesson8.footerText": "பாடம் 8 — Appmaker ஆப்பை வெளியிட படிப்படி வழிகாட்டி.",
      "lesson8.docTitle": "ஆப் வெளியிடுதல் | Appmaker"
    }
  };

  function getLang(){
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved && i18n[saved]) return saved;
    return "en";
  }

  function t(lang, key){
    return (i18n[lang] && i18n[lang][key]) || (i18n.en && i18n.en[key]) || "";
  }

  function applyLang(lang){
    document.documentElement.lang = lang === "si" ? "si" : (lang === "ta" ? "ta" : "en");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = t(lang, key);
      if (val) el.textContent = val;
    });

    const titleKey = document.querySelector('meta[name="i18n-title-key"]')?.getAttribute("content");
    if (titleKey) {
      const newTitle = t(lang, titleKey);
      if (newTitle) document.title = newTitle;
    }

    document.querySelectorAll("[data-lang]").forEach(btn => {
      const isOn = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isOn ? "true" : "false");
    });
  }

  function setLang(lang){
    if (!i18n[lang]) lang = "en";
    localStorage.setItem(STORAGE_LANG, lang);
    applyLang(lang);
    safeTrack("change_language", { language: lang });
  }

  function safeTrack(eventName, params){
    try{
      if (typeof window.gtag === "function") window.gtag("event", eventName, params || {});
    }catch(_e){}
  }
  window.__amSafeTrack = safeTrack;

  function initToTop(){
    const btn = document.querySelector("[data-totop]");
    if (!btn) return;

    const onScroll = () => btn.classList.toggle("show", window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      safeTrack("scroll_top", {});
    });
  }

  function initControls(){
    document.querySelectorAll("[data-lang]").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });

    const themeBtn = document.querySelector("[data-theme-toggle]");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    document.querySelectorAll('[data-cta="join"]').forEach(a => {
      a.addEventListener("click", () => {
        safeTrack("join_appmaker_click", { location: a.getAttribute("data-cta-loc") || "unknown" });
      });
    });
  }

  applyTheme(getPreferredTheme());
  applyLang(getLang());
  initControls();
  initToTop();
})();
