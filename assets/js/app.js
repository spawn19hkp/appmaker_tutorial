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

      "section1.badge": "S1",
      "section1.title": "Basic Lessons – Create Your First App",
      "section1.desc": "Build a strong foundation and publish your first Appmaker project with confidence.",
      "section1.lessonCount": "9 lessons",

      "section2.badge": "S2",
      "section2.title": "Things to Do After Launch",
      "section2.desc": "Learn practical post-launch steps to improve your app experience and user growth.",
      "section2.lessonCount": "3 lessons",

      "section3.badge": "S3",
      "section3.title": "Advanced Page Creation Options",
      "section3.desc": "Explore advanced tools and page customization options for richer app workflows.",
      "section3.lessonCount": "6 lessons",

      "section4.badge": "S4",
      "section4.title": "App Creation Using Versa AI",
      "section4.desc": "Use Versa AI to speed up setup, generate content, and automate app creation tasks.",
      "section4.lessonCount": "4 lessons",

      "section5.badge": "S5",
      "section5.title": "Other Features",
      "section5.desc": "Discover additional features that help you optimize, scale, and manage your app.",
      "section5.lessonCount": "6 lessons",

      "basic1.kicker": "Basic • Lesson 1 of 9",
      "basic1.title": "Basic Lesson 1",
      "basic1.desc": "Part 1 of 9 in Basic Lessons.",
      "basic1.footerTitle": "Keep learning Basic Lessons",
      "basic1.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic1.docTitle": "Basic Lesson 1 | Appmaker Tutorials",
      "basic2.kicker": "Basic • Lesson 2 of 9",
      "basic2.title": "Basic Lesson 2",
      "basic2.desc": "Part 2 of 9 in Basic Lessons.",
      "basic2.footerTitle": "Keep learning Basic Lessons",
      "basic2.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic2.docTitle": "Basic Lesson 2 | Appmaker Tutorials",
      "basic3.kicker": "Basic • Lesson 3 of 9",
      "basic3.title": "Basic Lesson 3",
      "basic3.desc": "Part 3 of 9 in Basic Lessons.",
      "basic3.footerTitle": "Keep learning Basic Lessons",
      "basic3.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic3.docTitle": "Basic Lesson 3 | Appmaker Tutorials",
      "basic4.kicker": "Basic • Lesson 4 of 9",
      "basic4.title": "Basic Lesson 4",
      "basic4.desc": "Part 4 of 9 in Basic Lessons.",
      "basic4.footerTitle": "Keep learning Basic Lessons",
      "basic4.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic4.docTitle": "Basic Lesson 4 | Appmaker Tutorials",
      "basic5.kicker": "Basic • Lesson 5 of 9",
      "basic5.title": "Basic Lesson 5",
      "basic5.desc": "Part 5 of 9 in Basic Lessons.",
      "basic5.footerTitle": "Keep learning Basic Lessons",
      "basic5.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic5.docTitle": "Basic Lesson 5 | Appmaker Tutorials",
      "basic6.kicker": "Basic • Lesson 6 of 9",
      "basic6.title": "Basic Lesson 6",
      "basic6.desc": "Part 6 of 9 in Basic Lessons.",
      "basic6.footerTitle": "Keep learning Basic Lessons",
      "basic6.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic6.docTitle": "Basic Lesson 6 | Appmaker Tutorials",
      "basic7.kicker": "Basic • Lesson 7 of 9",
      "basic7.title": "Basic Lesson 7",
      "basic7.desc": "Part 7 of 9 in Basic Lessons.",
      "basic7.footerTitle": "Keep learning Basic Lessons",
      "basic7.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic7.docTitle": "Basic Lesson 7 | Appmaker Tutorials",
      "basic8.kicker": "Basic • Lesson 8 of 9",
      "basic8.title": "Basic Lesson 8",
      "basic8.desc": "Part 8 of 9 in Basic Lessons.",
      "basic8.footerTitle": "Keep learning Basic Lessons",
      "basic8.footerText": "Continue to the next basic lesson and strengthen your app foundation.",
      "basic8.docTitle": "Basic Lesson 8 | Appmaker Tutorials",
      "basic9.kicker": "Basic • Lesson 9 of 9",
      "basic9.title": "Basic Lesson 9",
      "basic9.desc": "Part 9 of 9 in Basic Lessons.",
      "basic9.footerTitle": "You completed Basic Lessons",
      "basic9.footerText": "Review this section or move to the next learning path.",
      "basic9.docTitle": "Basic Lesson 9 | Appmaker Tutorials",

      "afterLaunch1.kicker": "After Launch • Lesson 1 of 3",
      "afterLaunch1.title": "After Launch Lesson 1",
      "afterLaunch1.desc": "Part 1 of 3 in Things to Do After Launch.",
      "afterLaunch1.footerTitle": "Keep improving after launch",
      "afterLaunch1.footerText": "Continue through post-launch lessons to grow and optimize your app.",
      "afterLaunch1.docTitle": "After Launch Lesson 1 | Appmaker Tutorials",
      "afterLaunch2.kicker": "After Launch • Lesson 2 of 3",
      "afterLaunch2.title": "After Launch Lesson 2",
      "afterLaunch2.desc": "Part 2 of 3 in Things to Do After Launch.",
      "afterLaunch2.footerTitle": "Keep improving after launch",
      "afterLaunch2.footerText": "Continue through post-launch lessons to grow and optimize your app.",
      "afterLaunch2.docTitle": "After Launch Lesson 2 | Appmaker Tutorials",
      "afterLaunch3.kicker": "After Launch • Lesson 3 of 3",
      "afterLaunch3.title": "After Launch Lesson 3",
      "afterLaunch3.desc": "Part 3 of 3 in Things to Do After Launch.",
      "afterLaunch3.footerTitle": "You completed After Launch",
      "afterLaunch3.footerText": "Review this section or move to the next learning path.",
      "afterLaunch3.docTitle": "After Launch Lesson 3 | Appmaker Tutorials",

      "advanced1.kicker": "Advanced • Lesson 1 of 6",
      "advanced1.title": "Advanced Lesson 1",
      "advanced1.desc": "Part 1 of 6 in Advanced Page Creation Options.",
      "advanced1.footerTitle": "Keep building advanced pages",
      "advanced1.footerText": "Continue exploring advanced tools for richer app workflows.",
      "advanced1.docTitle": "Advanced Lesson 1 | Appmaker Tutorials",
      "advanced2.kicker": "Advanced • Lesson 2 of 6",
      "advanced2.title": "Advanced Lesson 2",
      "advanced2.desc": "Part 2 of 6 in Advanced Page Creation Options.",
      "advanced2.footerTitle": "Keep building advanced pages",
      "advanced2.footerText": "Continue exploring advanced tools for richer app workflows.",
      "advanced2.docTitle": "Advanced Lesson 2 | Appmaker Tutorials",
      "advanced3.kicker": "Advanced • Lesson 3 of 6",
      "advanced3.title": "Advanced Lesson 3",
      "advanced3.desc": "Part 3 of 6 in Advanced Page Creation Options.",
      "advanced3.footerTitle": "Keep building advanced pages",
      "advanced3.footerText": "Continue exploring advanced tools for richer app workflows.",
      "advanced3.docTitle": "Advanced Lesson 3 | Appmaker Tutorials",
      "advanced4.kicker": "Advanced • Lesson 4 of 6",
      "advanced4.title": "Advanced Lesson 4",
      "advanced4.desc": "Part 4 of 6 in Advanced Page Creation Options.",
      "advanced4.footerTitle": "Keep building advanced pages",
      "advanced4.footerText": "Continue exploring advanced tools for richer app workflows.",
      "advanced4.docTitle": "Advanced Lesson 4 | Appmaker Tutorials",
      "advanced5.kicker": "Advanced • Lesson 5 of 6",
      "advanced5.title": "Advanced Lesson 5",
      "advanced5.desc": "Part 5 of 6 in Advanced Page Creation Options.",
      "advanced5.footerTitle": "Keep building advanced pages",
      "advanced5.footerText": "Continue exploring advanced tools for richer app workflows.",
      "advanced5.docTitle": "Advanced Lesson 5 | Appmaker Tutorials",
      "advanced6.kicker": "Advanced • Lesson 6 of 6",
      "advanced6.title": "Advanced Lesson 6",
      "advanced6.desc": "Part 6 of 6 in Advanced Page Creation Options.",
      "advanced6.footerTitle": "You completed Advanced Lessons",
      "advanced6.footerText": "Review this section or move to the next learning path.",
      "advanced6.docTitle": "Advanced Lesson 6 | Appmaker Tutorials",

      "versaAi1.kicker": "Versa AI • Lesson 1 of 4",
      "versaAi1.title": "Versa AI Lesson 1",
      "versaAi1.desc": "Part 1 of 4 in App Creation Using Versa AI.",
      "versaAi1.footerTitle": "Keep creating with Versa AI",
      "versaAi1.footerText": "Continue using Versa AI to speed up app setup and content creation.",
      "versaAi1.docTitle": "Versa AI Lesson 1 | Appmaker Tutorials",
      "versaAi2.kicker": "Versa AI • Lesson 2 of 4",
      "versaAi2.title": "Versa AI Lesson 2",
      "versaAi2.desc": "Part 2 of 4 in App Creation Using Versa AI.",
      "versaAi2.footerTitle": "Keep creating with Versa AI",
      "versaAi2.footerText": "Continue using Versa AI to speed up app setup and content creation.",
      "versaAi2.docTitle": "Versa AI Lesson 2 | Appmaker Tutorials",
      "versaAi3.kicker": "Versa AI • Lesson 3 of 4",
      "versaAi3.title": "Versa AI Lesson 3",
      "versaAi3.desc": "Part 3 of 4 in App Creation Using Versa AI.",
      "versaAi3.footerTitle": "Keep creating with Versa AI",
      "versaAi3.footerText": "Continue using Versa AI to speed up app setup and content creation.",
      "versaAi3.docTitle": "Versa AI Lesson 3 | Appmaker Tutorials",
      "versaAi4.kicker": "Versa AI • Lesson 4 of 4",
      "versaAi4.title": "Versa AI Lesson 4",
      "versaAi4.desc": "Part 4 of 4 in App Creation Using Versa AI.",
      "versaAi4.footerTitle": "You completed Versa AI Lessons",
      "versaAi4.footerText": "Review this section or move to the next learning path.",
      "versaAi4.docTitle": "Versa AI Lesson 4 | Appmaker Tutorials",

      "other1.kicker": "Other Features • Lesson 1 of 6",
      "other1.title": "Other Features Lesson 1",
      "other1.desc": "Part 1 of 6 in Other Features.",
      "other1.footerTitle": "Keep exploring features",
      "other1.footerText": "Continue discovering additional Appmaker features.",
      "other1.docTitle": "Other Features Lesson 1 | Appmaker Tutorials",
      "other2.kicker": "Other Features • Lesson 2 of 6",
      "other2.title": "Other Features Lesson 2",
      "other2.desc": "Part 2 of 6 in Other Features.",
      "other2.footerTitle": "Keep exploring features",
      "other2.footerText": "Continue discovering additional Appmaker features.",
      "other2.docTitle": "Other Features Lesson 2 | Appmaker Tutorials",
      "other3.kicker": "Other Features • Lesson 3 of 6",
      "other3.title": "Other Features Lesson 3",
      "other3.desc": "Part 3 of 6 in Other Features.",
      "other3.footerTitle": "Keep exploring features",
      "other3.footerText": "Continue discovering additional Appmaker features.",
      "other3.docTitle": "Other Features Lesson 3 | Appmaker Tutorials",
      "other4.kicker": "Other Features • Lesson 4 of 6",
      "other4.title": "Other Features Lesson 4",
      "other4.desc": "Part 4 of 6 in Other Features.",
      "other4.footerTitle": "Keep exploring features",
      "other4.footerText": "Continue discovering additional Appmaker features.",
      "other4.docTitle": "Other Features Lesson 4 | Appmaker Tutorials",
      "other5.kicker": "Other Features • Lesson 5 of 6",
      "other5.title": "Other Features Lesson 5",
      "other5.desc": "Part 5 of 6 in Other Features.",
      "other5.footerTitle": "Keep exploring features",
      "other5.footerText": "Continue discovering additional Appmaker features.",
      "other5.docTitle": "Other Features Lesson 5 | Appmaker Tutorials",
      "other6.kicker": "Other Features • Lesson 6 of 6",
      "other6.title": "Other Features Lesson 6",
      "other6.desc": "Part 6 of 6 in Other Features.",
      "other6.footerTitle": "You completed Other Features",
      "other6.footerText": "Review this section or move to the next learning path.",
      "other6.docTitle": "Other Features Lesson 6 | Appmaker Tutorials"
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
      "ui.scrollTop": "ඉහළට යන්න"
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
      "ui.scrollTop": "மேலே செல்ல"
    }
  };

  const i18nParityKeys = Object.keys(i18n.en).filter(key => key.startsWith("hub.") || /^section\d+\./.test(key) || key.startsWith("basic") || key.startsWith("afterLaunch") || key.startsWith("advanced") || key.startsWith("versaAi") || key.startsWith("other"));
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
