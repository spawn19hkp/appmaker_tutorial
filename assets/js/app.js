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
    if (typeof window.gtag === "function") {
      window.gtag("set", "user_properties", { preferred_theme: theme });
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

      "hub.progressText": "Progress",
      "hub.completedState": "completed",
      "hub.cta.start": "Start",
      "hub.cta.continue": "Continue",
      "hub.cta.review": "Review",

      "section.basic.title": "Basic Lessons – Create Your First App",
      "section.basic.description": "Build a strong foundation and publish your first Appmaker project with confidence.",
      "section.basic.lessonCount": "9 lessons",

      "section.afterLaunch.title": "Things to Do After Launch",
      "section.afterLaunch.description": "Learn practical post-launch steps to improve your app experience and user growth.",
      "section.afterLaunch.lessonCount": "3 lessons",

      "section.advanced.title": "Advanced Page Creation Options",
      "section.advanced.description": "Explore advanced tools and page customization options for richer app workflows.",
      "section.advanced.lessonCount": "6 lessons",

      "section.versaAI.title": "App Creation Using Versa AI",
      "section.versaAI.description": "Use Versa AI to speed up setup, generate content, and automate app creation tasks.",
      "section.versaAI.lessonCount": "4 lessons",

      "section.other.title": "Other Features",
      "section.other.description": "Discover additional features that help you optimize, scale, and manage your app.",
      "section.other.lessonCount": "6 lessons",

      "lesson.basic.1.title": "Basic Lesson 1",
      "lesson.basic.1.summary": "Part 1 of 9 in Basic.",
      "lesson.basic.1.nav.next": "Next",
      "lesson.basic.2.title": "Basic Lesson 2",
      "lesson.basic.2.summary": "Part 2 of 9 in Basic.",
      "lesson.basic.2.nav.prev": "Previous",
      "lesson.basic.2.nav.next": "Next",
      "lesson.basic.3.title": "Basic Lesson 3",
      "lesson.basic.3.summary": "Part 3 of 9 in Basic.",
      "lesson.basic.3.nav.prev": "Previous",
      "lesson.basic.3.nav.next": "Next",
      "lesson.basic.4.title": "Basic Lesson 4",
      "lesson.basic.4.summary": "Part 4 of 9 in Basic.",
      "lesson.basic.4.nav.prev": "Previous",
      "lesson.basic.4.nav.next": "Next",
      "lesson.basic.5.title": "Basic Lesson 5",
      "lesson.basic.5.summary": "Part 5 of 9 in Basic.",
      "lesson.basic.5.nav.prev": "Previous",
      "lesson.basic.5.nav.next": "Next",
      "lesson.basic.6.title": "Basic Lesson 6",
      "lesson.basic.6.summary": "Part 6 of 9 in Basic.",
      "lesson.basic.6.nav.prev": "Previous",
      "lesson.basic.6.nav.next": "Next",
      "lesson.basic.7.title": "Basic Lesson 7",
      "lesson.basic.7.summary": "Part 7 of 9 in Basic.",
      "lesson.basic.7.nav.prev": "Previous",
      "lesson.basic.7.nav.next": "Next",
      "lesson.basic.8.title": "Basic Lesson 8",
      "lesson.basic.8.summary": "Part 8 of 9 in Basic.",
      "lesson.basic.8.nav.prev": "Previous",
      "lesson.basic.8.nav.next": "Next",
      "lesson.basic.9.title": "Basic Lesson 9",
      "lesson.basic.9.summary": "Part 9 of 9 in Basic.",
      "lesson.basic.9.nav.prev": "Previous",
      "lesson.basic.9.nav.review": "Review",

      "lesson.afterLaunch.1.title": "After Launch Lesson 1",
      "lesson.afterLaunch.1.summary": "Part 1 of 3 in Things to Do After Launch.",
      "lesson.afterLaunch.1.nav.next": "Next",
      "lesson.afterLaunch.2.title": "After Launch Lesson 2",
      "lesson.afterLaunch.2.summary": "Part 2 of 3 in Things to Do After Launch.",
      "lesson.afterLaunch.2.nav.prev": "Previous",
      "lesson.afterLaunch.2.nav.next": "Next",
      "lesson.afterLaunch.3.title": "After Launch Lesson 3",
      "lesson.afterLaunch.3.summary": "Part 3 of 3 in Things to Do After Launch.",
      "lesson.afterLaunch.3.nav.prev": "Previous",
      "lesson.afterLaunch.3.nav.review": "Review",

      "lesson.advanced.1.title": "Advanced Lesson 1",
      "lesson.advanced.1.summary": "Part 1 of 6 in Advanced Page Creation Options.",
      "lesson.advanced.1.nav.next": "Next",
      "lesson.advanced.2.title": "Advanced Lesson 2",
      "lesson.advanced.2.summary": "Part 2 of 6 in Advanced Page Creation Options.",
      "lesson.advanced.2.nav.prev": "Previous",
      "lesson.advanced.2.nav.next": "Next",
      "lesson.advanced.3.title": "Advanced Lesson 3",
      "lesson.advanced.3.summary": "Part 3 of 6 in Advanced Page Creation Options.",
      "lesson.advanced.3.nav.prev": "Previous",
      "lesson.advanced.3.nav.next": "Next",
      "lesson.advanced.4.title": "Advanced Lesson 4",
      "lesson.advanced.4.summary": "Part 4 of 6 in Advanced Page Creation Options.",
      "lesson.advanced.4.nav.prev": "Previous",
      "lesson.advanced.4.nav.next": "Next",
      "lesson.advanced.5.title": "Advanced Lesson 5",
      "lesson.advanced.5.summary": "Part 5 of 6 in Advanced Page Creation Options.",
      "lesson.advanced.5.nav.prev": "Previous",
      "lesson.advanced.5.nav.next": "Next",
      "lesson.advanced.6.title": "Advanced Lesson 6",
      "lesson.advanced.6.summary": "Part 6 of 6 in Advanced Page Creation Options.",
      "lesson.advanced.6.nav.prev": "Previous",
      "lesson.advanced.6.nav.review": "Review",

      "lesson.versaAI.1.title": "Versa AI Lesson 1",
      "lesson.versaAI.1.summary": "Part 1 of 4 in App Creation Using Versa AI.",
      "lesson.versaAI.1.nav.next": "Next",
      "lesson.versaAI.2.title": "Versa AI Lesson 2",
      "lesson.versaAI.2.summary": "Part 2 of 4 in App Creation Using Versa AI.",
      "lesson.versaAI.2.nav.prev": "Previous",
      "lesson.versaAI.2.nav.next": "Next",
      "lesson.versaAI.3.title": "Versa AI Lesson 3",
      "lesson.versaAI.3.summary": "Part 3 of 4 in App Creation Using Versa AI.",
      "lesson.versaAI.3.nav.prev": "Previous",
      "lesson.versaAI.3.nav.next": "Next",
      "lesson.versaAI.4.title": "Versa AI Lesson 4",
      "lesson.versaAI.4.summary": "Part 4 of 4 in App Creation Using Versa AI.",
      "lesson.versaAI.4.nav.prev": "Previous",
      "lesson.versaAI.4.nav.review": "Review",

      "lesson.other.1.title": "Other Features Lesson 1",
      "lesson.other.1.summary": "Part 1 of 6 in Other Features.",
      "lesson.other.1.nav.next": "Next",
      "lesson.other.2.title": "Other Features Lesson 2",
      "lesson.other.2.summary": "Part 2 of 6 in Other Features.",
      "lesson.other.2.nav.prev": "Previous",
      "lesson.other.2.nav.next": "Next",
      "lesson.other.3.title": "Other Features Lesson 3",
      "lesson.other.3.summary": "Part 3 of 6 in Other Features.",
      "lesson.other.3.nav.prev": "Previous",
      "lesson.other.3.nav.next": "Next",
      "lesson.other.4.title": "Other Features Lesson 4",
      "lesson.other.4.summary": "Part 4 of 6 in Other Features.",
      "lesson.other.4.nav.prev": "Previous",
      "lesson.other.4.nav.next": "Next",
      "lesson.other.5.title": "Other Features Lesson 5",
      "lesson.other.5.summary": "Part 5 of 6 in Other Features.",
      "lesson.other.5.nav.prev": "Previous",
      "lesson.other.5.nav.next": "Next",
      "lesson.other.6.title": "Other Features Lesson 6",
      "lesson.other.6.summary": "Part 6 of 6 in Other Features.",
      "lesson.other.6.nav.prev": "Previous",
      "lesson.other.6.nav.review": "Review"
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

      "hub.progressText": "ප්‍රගතිය",
      "hub.completedState": "සම්පූර්ණයි",
      "hub.cta.start": "ආරම්භ කරන්න",
      "hub.cta.continue": "ඉදිරියට යන්න",
      "hub.cta.review": "නැවත බලන්න"
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

      "hub.progressText": "முன்னேற்றம்",
      "hub.completedState": "முடிந்தது",
      "hub.cta.start": "தொடங்கு",
      "hub.cta.continue": "தொடர்க",
      "hub.cta.review": "மீண்டும் பார்க்க"
    }
  };

  const i18nParityKeys = Object.keys(i18n.en).filter(key => key.startsWith("section.") || key.startsWith("lesson.") || key.startsWith("hub."));
  Object.keys(i18n).forEach(lang => {
    if (lang === "en") return;
    i18nParityKeys.forEach(key => {
      if (!(key in i18n[lang])) i18n[lang][key] = i18n.en[key];
    });
  });

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
    if (typeof window.gtag === "function") {
      window.gtag("set", "user_properties", { preferred_language: lang });
    }
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

    document.querySelectorAll(".actions .btn:not([data-cta])").forEach(btn => {
      btn.addEventListener("click", () => {
        safeTrack("lesson_navigation", {
          direction: (btn.textContent || "").trim(),
          destination: btn.getAttribute("href") || "",
          current_lesson: document.title || ""
        });
      });
    });
  }

  function initLazyVideo(){
    const ratios = document.querySelectorAll(".video .ratio");
    if (!ratios.length) return;

    const hidePlaceholder = placeholder => {
      if (!placeholder) return;
      placeholder.classList.add("hidden");
      placeholder.style.display = "none";
    };

    const loadIframe = (iframe, placeholder) => {
      if (!iframe) return;
      iframe.addEventListener("load", () => {
        iframe.classList.add("lazyloaded");
        hidePlaceholder(placeholder);
      }, { once: true });

      const dataSrc = iframe.getAttribute("data-src");
      if (dataSrc && iframe.getAttribute("src") !== dataSrc) {
        iframe.setAttribute("src", dataSrc);
      }
    };

    if (!("IntersectionObserver" in window)) {
      ratios.forEach(ratio => {
        const iframe = ratio.querySelector("iframe");
        const placeholder = ratio.querySelector(".placeholder");
        loadIframe(iframe, placeholder);
        hidePlaceholder(placeholder);
      });
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const ratio = entry.target;
        const iframe = ratio.querySelector("iframe");
        const placeholder = ratio.querySelector(".placeholder");
        loadIframe(iframe, placeholder);
        observer.unobserve(ratio);
      });
    }, { rootMargin: "120px 0px" });

    ratios.forEach(ratio => observer.observe(ratio));
  }

  applyTheme(getPreferredTheme());
  applyLang(getLang());
  initControls();
  initToTop();
  initLazyVideo();
})();
