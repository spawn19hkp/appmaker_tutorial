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
      "section1.title": "Basic Lessons – Create Your First App",
      "section1.desc": "Learn the fundamentals of Appmaker from registration all the way to publishing your first app.",
      "section1.badge": "Basic",
      "section2.title": "Things to Do After Launch",
      "section2.desc": "Once your app is live, learn how to track performance, manage your URL, and keep users engaged with push notifications.",
      "section2.badge": "After Launch",
      "section3.title": "Advanced Page Creation Options",
      "section3.desc": "Go beyond the basics — add HTML pages, PDFs, forms, polls, RSS feeds and more to supercharge your app content.",
      "section3.badge": "Advanced",
      "section4.title": "App Creation Using Versa AI",
      "section4.desc": "Use the power of AI to build, update, and manage your app content with nothing but simple text prompts.",
      "section4.badge": "Versa AI",
      "section5.title": "Other Features",
      "section5.desc": "Explore additional tools like the Design service, bug reporting, team access, the Wizard builder, FAV icons, and your profile dashboard.",
      "section5.badge": "Other Features",
      "basic1.kicker": "Basic Lesson 1 of 9",
      "basic1.title": "How to Register on Appmaker",
      "basic1.desc": "Learn how to create your account, verify your mobile number, and set up a password to get started on Appmaker.",
      "basic1.footerTitle": "APPMAKER Tutorial — Registration",
      "basic1.footerText": "Basic Lesson 1 — Create your account and verify your mobile number to start building on Appmaker.",
      "basic1.docTitle": "How to Register on Appmaker | Appmaker",
      "basic2.kicker": "Basic Lesson 2 of 9",
      "basic2.title": "How to Create an App on Appmaker",
      "basic2.desc": "Pick a template, name your app, and create your very first application on the Appmaker platform.",
      "basic2.footerTitle": "APPMAKER Tutorial — Create an App",
      "basic2.footerText": "Basic Lesson 2 — Pick a template and create your first application on Appmaker.",
      "basic2.docTitle": "How to Create an App on Appmaker | Appmaker",
      "basic3.kicker": "Basic Lesson 3 of 9",
      "basic3.title": "How to Add a New Category to Your App",
      "basic3.desc": "Navigate the dashboard, add a new category, set up subscription options, and upload a banner image.",
      "basic3.footerTitle": "APPMAKER Tutorial — Add a Category",
      "basic3.footerText": "Basic Lesson 3 — Add categories to organize your app content.",
      "basic3.docTitle": "How to Add a New Category to Your App | Appmaker",
      "basic4.kicker": "Basic Lesson 4 of 9",
      "basic4.title": "How to Create a New Page in Appmaker",
      "basic4.desc": "Add a page title, schedule publish dates, set rankings, and add images, text and YouTube videos using the editor.",
      "basic4.footerTitle": "APPMAKER Tutorial — Create a Page",
      "basic4.footerText": "Basic Lesson 4 — Add pages with rich content to your app.",
      "basic4.docTitle": "How to Create a New Page in Appmaker | Appmaker",
      "basic5.kicker": "Basic Lesson 5 of 9",
      "basic5.title": "How to Manage Pages on Your Dashboard",
      "basic5.desc": "View, edit, duplicate, and delete pages from your app's dashboard with ease.",
      "basic5.footerTitle": "APPMAKER Tutorial — Manage Pages",
      "basic5.footerText": "Basic Lesson 5 — Keep your pages organised with the dashboard management tools.",
      "basic5.docTitle": "How to Manage Pages on Your Dashboard | Appmaker",
      "basic6.kicker": "Basic Lesson 6 of 9",
      "basic6.title": "How to Customize Your App's Look & Feel",
      "basic6.desc": "Change background colors, navigation bar colors, and font styles to match your brand perfectly.",
      "basic6.footerTitle": "APPMAKER Tutorial — Look & Feel",
      "basic6.footerText": "Basic Lesson 6 — Give your app a unique look by customizing colors and fonts.",
      "basic6.docTitle": "How to Customize Your App's Look & Feel | Appmaker",
      "basic7.kicker": "Basic Lesson 7 of 9",
      "basic7.title": "How to Change Your App Logo",
      "basic7.desc": "Update your app's logo quickly — learn the correct image size and how to upload it without needing a new approval.",
      "basic7.footerTitle": "APPMAKER Tutorial — Change Logo",
      "basic7.footerText": "Basic Lesson 7 — Update your logo at any time without resubmitting for approval.",
      "basic7.docTitle": "How to Change Your App Logo | Appmaker",
      "basic8.kicker": "Basic Lesson 8 of 9",
      "basic8.title": "Before You Publish — Add Contact Info, Privacy Policy & About Us",
      "basic8.desc": "Make sure your app is ready with contact details, terms & conditions, a privacy policy, and an About Us section before submitting.",
      "basic8.footerTitle": "APPMAKER Tutorial — Pre-publish Checklist",
      "basic8.footerText": "Basic Lesson 8 — Complete all required app details before submitting for approval.",
      "basic8.docTitle": "Before You Publish — Add Contact Info, Privacy Policy & About Us | Appmaker",
      "basic9.kicker": "Basic Lesson 9 of 9",
      "basic9.title": "How to Publish Your App & Get Approval Fast",
      "basic9.desc": "Submit your app for approval, add descriptions and logos, configure SMS keywords and operator billing, and check your approval status.",
      "basic9.footerTitle": "APPMAKER Tutorial — Publish Your App",
      "basic9.footerText": "Basic Lesson 9 — The final step: submit your app and get it live for users.",
      "basic9.docTitle": "How to Publish Your App & Get Approval Fast | Appmaker",
      "afterlaunch1.kicker": "After Launch — Lesson 1 of 4",
      "afterlaunch1.title": "How to Track Your App's Success — Analytics Explained",
      "afterlaunch1.desc": "Understand your active subscribers, page views, dormant users, and unique visitor counts to improve your app.",
      "afterlaunch1.footerTitle": "APPMAKER Tutorial — Analytics",
      "afterlaunch1.footerText": "After Launch Lesson 1 — Use analytics to understand how users interact with your app.",
      "afterlaunch1.docTitle": "How to Track Your App's Success — Analytics Explained | Appmaker",
      "afterlaunch2.kicker": "After Launch — Lesson 2 of 4",
      "afterlaunch2.title": "How to Set Up a Custom Website URL & Share Your App",
      "afterlaunch2.desc": "Manage your app's web URL, list it on the Appmaker store, and set up your own custom domain for a professional look.",
      "afterlaunch2.footerTitle": "APPMAKER Tutorial — Custom URL",
      "afterlaunch2.footerText": "After Launch Lesson 2 — Give your app a professional identity with a custom website URL.",
      "afterlaunch2.docTitle": "How to Set Up a Custom Website URL & Share Your App | Appmaker",
      "afterlaunch3.kicker": "After Launch — Lesson 3 of 4",
      "afterlaunch3.title": "How to Send Push Notifications & Engage App Users",
      "afterlaunch3.desc": "Send instant or scheduled push notifications, target specific user groups, and add links to drive users back to your app.",
      "afterlaunch3.footerTitle": "APPMAKER Tutorial — Push Notifications",
      "afterlaunch3.footerText": "After Launch Lesson 3 — Re-engage your users and drive traffic with targeted push notifications.",
      "afterlaunch3.docTitle": "How to Send Push Notifications & Engage App Users | Appmaker",
      "afterlaunch4.kicker": "After Launch — Lesson 4 of 4",
      "afterlaunch4.title": "How to upload your app to the google playstore",
      "afterlaunch4.desc": "Upload your app to the Google Play Store and follow the latest publishing flow in the Google Play Console.",
      "afterlaunch4.footerTitle": "APPMAKER Tutorial — Google Playstore Upload",
      "afterlaunch4.footerText": "After Launch Lesson 4 — Publish your app to Google Playstore with the updated console steps.",
      "afterlaunch4.docTitle": "How to upload your app to the google playstore | Appmaker",
      "advanced1.kicker": "Advanced — Lesson 1 of 6",
      "advanced1.title": "How to Create a Web Page Using an HTML Editor",
      "advanced1.desc": "Use the HTML editor to add and format content directly with code, upload banner images, and publish your page.",
      "advanced1.footerTitle": "APPMAKER Tutorial — HTML Editor",
      "advanced1.footerText": "Advanced Lesson 1 — Create fully custom pages using the built-in HTML editor.",
      "advanced1.docTitle": "How to Create a Web Page Using an HTML Editor | Appmaker",
      "advanced2.kicker": "Advanced — Lesson 2 of 6",
      "advanced2.title": "How to Add PDF Files to Your App Pages",
      "advanced2.desc": "Upload PDFs to your app pages, set cover images, and control whether users can download the file or only read it.",
      "advanced2.footerTitle": "APPMAKER Tutorial — PDF Pages",
      "advanced2.footerText": "Advanced Lesson 2 — Enrich your app with downloadable or read-only PDF content.",
      "advanced2.docTitle": "How to Add PDF Files to Your App Pages | Appmaker",
      "advanced3.kicker": "Advanced — Lesson 3 of 6",
      "advanced3.title": "How to Manage Page Comments & Messages",
      "advanced3.desc": "Enable comments and messages on your pages, reply to users, send bulk messages, and schedule your responses.",
      "advanced3.footerTitle": "APPMAKER Tutorial — Comments & Messages",
      "advanced3.footerText": "Advanced Lesson 3 — Build community and boost user engagement through comments and messages.",
      "advanced3.docTitle": "How to Manage Page Comments & Messages | Appmaker",
      "advanced4.kicker": "Advanced — Lesson 4 of 6",
      "advanced4.title": "How to Add & Manage Custom Forms on Your Pages",
      "advanced4.desc": "Create surveys, feedback forms, and MCQ quizzes; set time limits, and download user responses.",
      "advanced4.footerTitle": "APPMAKER Tutorial — Custom Forms",
      "advanced4.footerText": "Advanced Lesson 4 — Collect valuable data from users through custom forms and quizzes.",
      "advanced4.docTitle": "How to Add & Manage Custom Forms on Your Pages | Appmaker",
      "advanced5.kicker": "Advanced — Lesson 5 of 6",
      "advanced5.title": "How to Auto-Update Your Page with RSS Feeds",
      "advanced5.desc": "Link an RSS feed to your app page so content updates automatically — set it up once and let it run.",
      "advanced5.footerTitle": "APPMAKER Tutorial — RSS Feeds",
      "advanced5.footerText": "Advanced Lesson 5 — Save time with RSS feeds that keep your app content fresh automatically.",
      "advanced5.docTitle": "How to Auto-Update Your Page with RSS Feeds | Appmaker",
      "advanced6.kicker": "Advanced — Lesson 6 of 6",
      "advanced6.title": "How to Add a Voting (Poll) Feature to Your App",
      "advanced6.desc": "Enable voting polls, set start and end dates, add questions with image answers, and check live results.",
      "advanced6.footerTitle": "APPMAKER Tutorial — Polls & Voting",
      "advanced6.footerText": "Advanced Lesson 6 — Engage your audience with interactive polls and collect real-time votes.",
      "advanced6.docTitle": "How to Add a Voting (Poll) Feature to Your App | Appmaker",
      "versaai1.kicker": "Versa AI — Lesson 1 of 4",
      "versaai1.title": "Build Your Own App in Minutes with Versa AI",
      "versaai1.desc": "Use Versa AI to automatically generate your app's categories, content, and images — just describe your idea and let the AI do the work.",
      "versaai1.footerTitle": "APPMAKER Tutorial — Build with Versa AI",
      "versaai1.footerText": "Versa AI Lesson 1 — Describe your app idea and watch Versa AI build it for you automatically.",
      "versaai1.docTitle": "Build Your Own App in Minutes with Versa AI | Appmaker",
      "versaai2.kicker": "Versa AI — Lesson 2 of 4",
      "versaai2.title": "Find App Pages & Categories in Seconds with Versa AI",
      "versaai2.desc": "Quickly list all your app's pages and categories using simple Versa AI prompts — no searching needed.",
      "versaai2.footerTitle": "APPMAKER Tutorial — Versa AI Search",
      "versaai2.footerText": "Versa AI Lesson 2 — Instantly find any page or category in your app using AI-powered prompts.",
      "versaai2.docTitle": "Find App Pages & Categories in Seconds with Versa AI | Appmaker",
      "versaai3.kicker": "Versa AI — Lesson 3 of 4",
      "versaai3.title": "How to Update Your App Fast Using Versa AI",
      "versaai3.desc": "Add new categories and pages to your existing app using text prompts — no coding required.",
      "versaai3.footerTitle": "APPMAKER Tutorial — Update with Versa AI",
      "versaai3.footerText": "Versa AI Lesson 3 — Keep your app fresh and growing by updating it instantly with Versa AI prompts.",
      "versaai3.docTitle": "How to Update Your App Fast Using Versa AI | Appmaker",
      "versaai4.kicker": "Versa AI — Lesson 4 of 4",
      "versaai4.title": "How to Edit an Existing Category Using Versa AI",
      "versaai4.desc": "Edit your existing categories instantly with simple text prompts — change names, payment options, and more with no code.",
      "versaai4.footerTitle": "APPMAKER Tutorial — Edit Category with Versa AI",
      "versaai4.footerText": "Versa AI Lesson 4 — Master Versa AI by editing categories with just a sentence.",
      "versaai4.docTitle": "How to Edit an Existing Category Using Versa AI | Appmaker",
      "other1.kicker": "Other Features — 1 of 7",
      "other1.title": "Struggling to Design Your App? Let Us Do It For You",
      "other1.desc": "Use the 'Design My App' feature to get the Appmaker expert team to design your app based on your exact requirements.",
      "other1.footerTitle": "APPMAKER Tutorial — Design My App",
      "other1.footerText": "Other Features 1 — Let the Appmaker team handle the design so you can focus on your content.",
      "other1.docTitle": "Struggling to Design Your App? Let Us Do It For You | Appmaker",
      "other2.kicker": "Other Features — 2 of 7",
      "other2.title": "How to Report Bugs on Appmaker",
      "other2.desc": "Use the 'Report Bug' feature to submit technical issues with screenshots directly to the Appmaker team for quick support.",
      "other2.footerTitle": "APPMAKER Tutorial — Report a Bug",
      "other2.footerText": "Other Features 2 — Get fast help from the Appmaker team by submitting detailed bug reports.",
      "other2.docTitle": "How to Report Bugs on Appmaker | Appmaker",
      "other3.kicker": "Other Features — 3 of 7",
      "other3.title": "How to Share App Access with Your Team",
      "other3.desc": "Safely share your app dashboard with team members, grant specific permissions, and manage or remove access at any time.",
      "other3.footerTitle": "APPMAKER Tutorial — Team Access",
      "other3.footerText": "Other Features 3 — Collaborate efficiently by sharing controlled access with your team.",
      "other3.docTitle": "How to Share App Access with Your Team | Appmaker",
      "other4.kicker": "Other Features — 4 of 7",
      "other4.title": "How to Create an App Using the Wizard Option",
      "other4.desc": "Use the Wizard to create an app step-by-step — select templates, upload a logo, add categories, and publish pages in one guided flow.",
      "other4.footerTitle": "APPMAKER Tutorial — Wizard Builder",
      "other4.footerText": "Other Features 4 — The Wizard option walks beginners through the entire app creation process.",
      "other4.docTitle": "How to Create an App Using the Wizard Option | Appmaker",
      "other5.kicker": "Other Features — 5 of 7",
      "other5.title": "How to Change the FAV Icon in Your PWA App",
      "other5.desc": "Customize your PWA with your own favicon — learn how to generate a 32x32 icon and upload it through your app's design settings.",
      "other5.footerTitle": "APPMAKER Tutorial — FAV Icon",
      "other5.footerText": "Other Features 5 — Give your PWA a polished, branded look with a custom FAV icon.",
      "other5.docTitle": "How to Change the FAV Icon in Your PWA App | Appmaker",
      "other6.kicker": "Other Features — 6 of 7",
      "other6.title": "Master Your Appmaker Dashboard — Profile, AI Credits & More",
      "other6.desc": "Manage your Appmaker profile, check Versa AI credits, handle payments, review billing history, and track your achievements.",
      "other6.footerTitle": "APPMAKER Tutorial — Profile Dashboard",
      "other6.footerText": "Other Features 6 — Everything you need to know about mastering your Appmaker dashboard account settings.",
      "other6.docTitle": "Master Your Appmaker Dashboard — Profile, AI Credits & More | Appmaker",
      "other7.kicker": "Other Features — 7 of 7",
      "other7.title": "The Appmaker Store",
      "other7.desc": "Learn how to use the Appmaker Store to discover and access tools that help you build and scale your app.",
      "other7.footerTitle": "APPMAKER Tutorial — The Appmaker Store",
      "other7.footerText": "Other Features 7 — Explore the Appmaker Store and find powerful add-ons for your app journey.",
      "other7.docTitle": "The Appmaker Store | Appmaker",
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
      "ui.playHint": "ස්ක්‍රෝල් කළාම වීඩියෝ ලෝඩ් වේ",
      "ui.scrollTop": "ඉහළට යන්න",
      "section1.title": "මූලික පාඩම් – ඔබේ පළමු ඇප් එක සාදන්න",
      "section1.desc": "ලියාපදිංචි වීමේ සිට ඔබේ පළමු ඇප් ප්‍රකාශ කිරීම දක්වා Appmaker හි මූලිකාංග ඉගෙන ගන්න.",
      "section1.badge": "මූලික",
      "section2.title": "එළියට දැමීමෙන් පසු කළ යුතු දේ",
      "section2.desc": "ඔබේ ඇප් සජීව වූ පසු, කාර්යසාධනය නිරීක්ෂණය කිරීමට, URL කළමනාකරණය කිරීමට සහ push notifications සමඟ පරිශීලකයන් ආකර්ෂණය කිරීමට ඉගෙන ගන්න.",
      "section2.badge": "ප්‍රකාශනයෙන් පසු",
      "section3.title": "උසස් පිටු නිර්මාණ විකල්ප",
      "section3.desc": "මූලිකාංගයෙන් ඔබ්බට යන්න — ඔබේ ඇප් අන්තර්ගතය ශක්තිමත් කිරීමට HTML පිටු, PDFs, ෆෝම්, ඡන්ද, RSS feeds සහ තවත් දේ එකතු කරන්න.",
      "section3.badge": "උසස්",
      "section4.title": "Versa AI භාවිතයෙන් ඇප් නිර්මාණය",
      "section4.desc": "සරල පෙළ ප්‍රොම්ප්ට් පමණක් භාවිතා කර ඔබේ ඇප් අන්තර්ගතය ගොඩ නැගීමට, යාවත්කාලීන කිරීමට සහ කළමනාකරණය කිරීමට AI බලය භාවිතා කරන්න.",
      "section4.badge": "Versa AI",
      "section5.title": "අනෙකුත් විශේෂාංග",
      "section5.desc": "Design සේවාව, දෝෂ වාර්තා කිරීම, කණ්ඩායම් ප්‍රවේශය, Wizard ගොඩ නැගිල්ල, FAV Icons සහ ඔබේ Profile ඩෑෂ්බෝඩ් වැනි අමතර මෙවලම් ගවේෂණය කරන්න.",
      "section5.badge": "අනෙකුත්",
      "basic1.kicker": "මූලික පාඩම 1/9",
      "basic1.title": "Appmaker හි ලියාපදිංචි වන ආකාරය",
      "basic1.desc": "ඔබේ ගිණුම සාදා ගැනීමට, ජංගම අංකය තහවුරු කිරීමට සහ Appmaker ආරම්භ කිරීමට මුරපදයක් සැකසීමට ඉගෙන ගන්න.",
      "basic1.footerTitle": "APPMAKER පාඩම — ලියාපදිංචි වීම",
      "basic1.footerText": "මූලික පාඩම 1 — Appmaker හි ගොඩනැගීම ආරම්භ කිරීමට ඔබේ ගිණුම සාදා ජංගම අංකය තහවුරු කරන්න.",
      "basic1.docTitle": "ලියාපදිංචි වීම | Appmaker",
      "basic2.kicker": "මූලික පාඩම 2/9",
      "basic2.title": "Appmaker හි ඇප් එකක් සාදන ආකාරය",
      "basic2.desc": "සැකිල්ලක් තෝරා, ඔබේ ඇප් නම් කර, Appmaker හි ඔබේ පළමු යෙදුම සාදන්න.",
      "basic2.footerTitle": "APPMAKER පාඩම — ඇප් සාදන්න",
      "basic2.footerText": "මූලික පාඩම 2 — Appmaker හි ඔබේ පළමු ඇප් සාදන සැකිල්ලක් තෝරන්න.",
      "basic2.docTitle": "ඇප් සාදන ආකාරය | Appmaker",
      "basic3.kicker": "මූලික පාඩම 3/9",
      "basic3.title": "ඔබේ ඇප් එකට නව කාණ්ඩයක් එකතු කරන ආකාරය",
      "basic3.desc": "ඩෑෂ්බෝඩ් හරහා ගමන් කර, නව කාණ්ඩයක් එකතු කර, දායකත්ව විකල්ප සකස් කර, බැනර් රූපයක් උඩුගත කරන්න.",
      "basic3.footerTitle": "APPMAKER පාඩම — කාණ්ඩය එකතු කිරීම",
      "basic3.footerText": "මූලික පාඩම 3 — ඔබේ ඇප් අන්තර්ගතය සංවිධානය කිරීමට කාණ්ඩ එකතු කරන්න.",
      "basic3.docTitle": "කාණ්ඩය එකතු කිරීම | Appmaker",
      "basic4.kicker": "මූලික පාඩම 4/9",
      "basic4.title": "Appmaker හි නව පිටුවක් සාදන ආකාරය",
      "basic4.desc": "පිටු මාතෘකාව එකතු කර, ප්‍රකාශන දිනයන් කාලසටහන් ගෙඩා, ශ්‍රේණිගත කිරීම් සකසා, රූප, පෙළ සහ YouTube වීඩියෝ එකතු කරන්න.",
      "basic4.footerTitle": "APPMAKER පාඩම — පිටුවක් සාදන්න",
      "basic4.footerText": "මූලික පාඩම 4 — ඔබේ ඇප් එකට රිච් කන්ටෙන්ට් සහිත පිටු එකතු කරන්න.",
      "basic4.docTitle": "පිටුවක් සාදන ආකාරය | Appmaker",
      "basic5.kicker": "මූලික පාඩම 5/9",
      "basic5.title": "ඩෑෂ්බෝඩ් හරහා පිටු කළමනාකරණය කරන ආකාරය",
      "basic5.desc": "ඔබේ ඇප් ඩෑෂ්බෝඩ් එකෙන් පිටු බලා, සංස්කරණය කර, අනුරූ කර, ඉවත් කරන ආකාරය ඉගෙන ගන්න.",
      "basic5.footerTitle": "APPMAKER පාඩම — පිටු කළමනාකරණය",
      "basic5.footerText": "මූලික පාඩම 5 — ඩෑෂ්බෝඩ් කළමනාකරණ මෙවලම් සමඟ ඔබේ පිටු සංවිධානය කරන්න.",
      "basic5.docTitle": "පිටු කළමනාකරණය | Appmaker",
      "basic6.kicker": "මූලික පාඩම 6/9",
      "basic6.title": "ඔබේ ඇප් එකේ පෙනුම සහ හැඟීම අභිරුචිකරණය කරන ආකාරය",
      "basic6.desc": "ඔබේ වෙළඳ නාමයට ගැලපෙන ලෙස පසුබිම් වර්ණ, නාවිගේෂන් බාර් වර්ණ සහ අකුරු ශෛලීන් වෙනස් කරන්න.",
      "basic6.footerTitle": "APPMAKER පාඩම — පෙනුම සහ හැඟීම",
      "basic6.footerText": "මූලික පාඩම 6 — වර්ණ සහ අකුරු අභිරුචිකරණය කිරීමෙන් ඔබේ ඇප් එකට අද්විතීය පෙනුමක් ලබා දෙන්න.",
      "basic6.docTitle": "පෙනුම අභිරුචිකරණය | Appmaker",
      "basic7.kicker": "මූලික පාඩම 7/9",
      "basic7.title": "ඔබේ ඇප් ලෝගෝ වෙනස් කරන ආකාරය",
      "basic7.desc": "ඔබේ ඇප් ලෝගෝව ඉක්මනින් යාවත්කාලීන කරන්න — නිවැරදි රූප ප්‍රමාණය සහ නව අනුමැතියකින් තොරව එය උඩුගත කරන ආකාරය ඉගෙන ගන්න.",
      "basic7.footerTitle": "APPMAKER පාඩම — ලෝගෝ වෙනස් කිරීම",
      "basic7.footerText": "මූලික පාඩම 7 — නැවත අනුමැතිය ලබා ගැනීමකින් තොරව ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ",
      "basic7.docTitle": "ලෝගෝ වෙනස් කිරීම | Appmaker",
      "basic8.kicker": "මූලික පාඩම 8/9",
      "basic8.title": "ප්‍රකාශ කිරීමට පෙර — සම්බන්ධතා තොරතුරු, රහස්‍යතා ප්‍රතිපත්තිය සහ \"අප ගැන\" එකතු කරන්න",
      "basic8.desc": "ඉදිරිපත් කිරීමට පෙර සම්බන්ධතා විස්තර, නියම සහ කොන්දේසි, රහස්‍යතා ප්‍රතිපත්තිය සහ \"අප ගැන\" කොටසකින් ඔබේ ඇප් සූදානම් බව සහතික කරන්න.",
      "basic8.footerTitle": "APPMAKER පාඩම — ප්‍රකාශනයට පෙර පිරික්සුම",
      "basic8.footerText": "මූලික පාඩම 8 — අනුමැතිය ඉදිරිපත් කිරීමට පෙර සියලු ඇප් විස්තර සම්පූර්ණ කරන්න.",
      "basic8.docTitle": "ප්‍රකාශනයට පෙර | Appmaker",
      "basic9.kicker": "මූලික පාඩම 9/9",
      "basic9.title": "ඔබේ ඇප් ප්‍රකාශ කර ඉක්මනින් අනුමැතිය ලබා ගන්නේ කෙසේද",
      "basic9.desc": "ඔබේ ඇප් අනුමැතිය සඳහා ඉදිරිපත් කර, විස්තර සහ ලෝගෝ එකතු කර, SMS මූල පද සහ ක්‍රියාකරු බිල්පත් සකස් කර, ඔබේ අනුමැතිය තත්ත්වය පරීක්ෂා කරන්න.",
      "basic9.footerTitle": "APPMAKER පාඩම — ඇප් ප්‍රකාශනය",
      "basic9.footerText": "මූලික පාඩම 9 — අවසාන පියවර: ඔබේ ඇප් ඉදිරිපත් කර පරිශීලකයන් සඳහා සජීව කරන්න.",
      "basic9.docTitle": "ඇප් ප්‍රකාශ කරන ආකාරය | Appmaker",
      "afterlaunch1.kicker": "ප්‍රකාශනයෙන් පසු — පාඩම 1/4",
      "afterlaunch1.title": "ඔබේ ඇප් සාර්ථකත්වය නිරීක්ෂණය කරන ආකාරය — Analytics පැහැදිලි කිරීම",
      "afterlaunch1.desc": "ඔබේ ඇප් වැඩිදියුණු කිරීමට ක්‍රියාකාරී දායකයන්, පිටු දර්ශන, අක්‍රිය පරිශීලකයන් සහ අද්විතීය නරඹන්නන් ගැන දැනුවත් වන්න.",
      "afterlaunch1.footerTitle": "APPMAKER පාඩම — Analytics",
      "afterlaunch1.footerText": "ප්‍රකාශනයෙන් පසු පාඩම 1 — ඔබේ ඇප් සමඟ පරිශීලකයන් ක්‍රියා කරන ආකාරය Analytics සමඟ තේරුම් ගන්න.",
      "afterlaunch1.docTitle": "App Analytics | Appmaker",
      "afterlaunch2.kicker": "ප්‍රකාශනයෙන් පසු — පාඩම 2/4",
      "afterlaunch2.title": "ඔබේ ඇප් සඳහා අභිරුචි Website URL සකස් කරන ආකාරය",
      "afterlaunch2.desc": "ඔබේ ඇප් URL කළමනාකරණය කර, Appmaker ගබඩාවේ ලැයිස්තු ගත කර, වෘත්තීය පෙනුමක් සඳහා ඔබේ අභිරුචි ඩොමේන් සකස් කරන්න.",
      "afterlaunch2.footerTitle": "APPMAKER පාඩම — අභිරුචි URL",
      "afterlaunch2.footerText": "ප්‍රකාශනයෙන් පසු පාඩම 2 — අභිරුචි Website URL සමඟ ඔබේ ඇප් එකට වෘත්තීය අනන්‍යතාවක් ලබා දෙන්න.",
      "afterlaunch2.docTitle": "අභිරුචි URL | Appmaker",
      "afterlaunch3.kicker": "ප්‍රකාශනයෙන් පසු — පාඩම 3/4",
      "afterlaunch3.title": "Push Notifications යවා ඇප් පරිශීලකයන් ආකර්ෂණය කරන ආකාරය",
      "afterlaunch3.desc": "ක්ෂණික හෝ කාලසටහන් ගත Push Notifications යවා, විශේෂිත පරිශීලක කණ්ඩායම් ඉලක්ක කර, ඔබේ ඇප් වෙත නැවත යොමු කිරීමට සබැඳි එකතු කරන්න.",
      "afterlaunch3.footerTitle": "APPMAKER පාඩම — Push Notifications",
      "afterlaunch3.footerText": "ප්‍රකාශනයෙන් පසු පාඩම 3 — ඉලක්කගත Push Notifications සමඟ ඔබේ පරිශීලකයන් නැවත ආකර්ෂණය කරන්න.",
      "afterlaunch3.docTitle": "Push Notifications | Appmaker",
      "afterlaunch4.kicker": "ප්‍රකාශනයෙන් පසු — පාඩම 4/4",
      "afterlaunch4.title": "How to upload your app to the google playstore",
      "afterlaunch4.desc": "Google Play Console නව ප්‍රකාශන ප්‍රවාහය අනුගමනය කර ඔබේ ඇප් එක Playstore වෙත upload කරන්න.",
      "afterlaunch4.footerTitle": "APPMAKER පාඩම — Google Playstore Upload",
      "afterlaunch4.footerText": "ප්‍රකාශනයෙන් පසු පාඩම 4 — නව console පියවර සමඟ ඔබේ ඇප් එක Google Playstore වෙත ප්‍රකාශ කරන්න.",
      "afterlaunch4.docTitle": "How to upload your app to the google playstore | Appmaker",
      "advanced1.kicker": "උසස් — පාඩම 1/6",
      "advanced1.title": "HTML සංස්කාරකයක් භාවිතයෙන් වෙබ් පිටුවක් සාදන ආකාරය",
      "advanced1.desc": "HTML සංස්කාරකය භාවිතා කර කේතය සමඟ අන්තර්ගතය එකතු කර, බැනර් රූප උඩුගත කර, ඔබේ පිටුව ප්‍රකාශ කරන්න.",
      "advanced1.footerTitle": "APPMAKER පාඩම — HTML සංස්කාරකය",
      "advanced1.footerText": "උසස් පාඩම 1 — ඇතුළත HTML සංස්කාරකය භාවිතා කර සම්පූර්ණ අභිරුචි පිටු සාදන්න.",
      "advanced1.docTitle": "HTML Editor | Appmaker",
      "advanced2.kicker": "උසස් — පාඩම 2/6",
      "advanced2.title": "ඔබේ ඇප් පිටු වලට PDF ගොනු එකතු කරන ආකාරය",
      "advanced2.desc": "ඔබේ ඇප් පිටු වෙත PDFs උඩුගත කර, කවර රූප සකස් කර, පරිශීලකයන්ට ගොනුව බාගත හෝ කියවීමට ලබා දිය හැකිද යන්න පාලනය කරන්න.",
      "advanced2.footerTitle": "APPMAKER පාඩම — PDF පිටු",
      "advanced2.footerText": "උසස් පාඩම 2 — බාගත කළ හැකි හෝ කියවීමට ලෙස PDF අන්තර්ගතයෙන් ඔබේ ඇප් පොහොසත් කරන්න.",
      "advanced2.docTitle": "PDF පිටු | Appmaker",
      "advanced3.kicker": "උසස් — පාඩම 3/6",
      "advanced3.title": "පිටු අදහස් සහ පණිවිඩ කළමනාකරණය කරන ආකාරය",
      "advanced3.desc": "ඔබේ පිටු වල අදහස් සහ පණිවිඩ සක්‍රිය කර, පරිශීලකයන්ට පිළිතුරු දී, ගොන්න පණිවිඩ යවා, ඔබේ ප්‍රතිචාර කාලසටහන් ගත කරන්න.",
      "advanced3.footerTitle": "APPMAKER පාඩම — අදහස් සහ පණිවිඩ",
      "advanced3.footerText": "උසස් පාඩම 3 — අදහස් සහ පණිවිඩ හරහා ප්‍රජාව ගොඩ නගා පරිශීලක ආකර්ෂණය වැඩිදියුණු කරන්න.",
      "advanced3.docTitle": "අදහස් සහ පණිවිඩ | Appmaker",
      "advanced4.kicker": "උසස් — පාඩම 4/6",
      "advanced4.title": "ඔබේ පිටු වල අභිරුචි ෆෝම් එකතු කර කළමනාකරණය කරන ආකාරය",
      "advanced4.desc": "සමීක්ෂා, ප්‍රතිපෝෂණ ෆෝම් සහ MCQ ප්‍රශ්නාවලිය සාදා, කාල සීමා සකස් කර, පරිශීලක ප්‍රතිචාර බාගත කරන්න.",
      "advanced4.footerTitle": "APPMAKER පාඩම — අභිරුචි ෆෝම්",
      "advanced4.footerText": "උසස් පාඩම 4 — අභිරුචි ෆෝම් සහ ප්‍රශ්නාවලිය හරහා පරිශීලකයන්ගෙන් වටිනා දත්ත සේකරණය කරන්න.",
      "advanced4.docTitle": "අභිරුචි ෆෝම් | Appmaker",
      "advanced5.kicker": "උසස් — පාඩම 5/6",
      "advanced5.title": "RSS Feeds භාවිතයෙන් ඔබේ පිටුව ස්වයංක්‍රීයව යාවත්කාලීන කරන ආකාරය",
      "advanced5.desc": "ඔබේ ඇප් පිටුවට RSS feed සම්බන්ධ කර, අන්තර්ගතය ස්වයංක්‍රීයව යාවත්කාලීන වන ලෙස කළමනාකරණය කරන්න — එක් වරක් සකසා, ඉදිරියට ධාවනය කරන්න.",
      "advanced5.footerTitle": "APPMAKER පාඩම — RSS Feeds",
      "advanced5.footerText": "උසස් පාඩම 5 — ඔබේ ඇප් අන්තර්ගතය ස්වයංක්‍රීයව නැවුම්ව තබා ගන්නා RSS feeds සමඟ කාලය ඉතිරි කරන්න.",
      "advanced5.docTitle": "RSS Feeds | Appmaker",
      "advanced6.kicker": "උසස් — පාඩම 6/6",
      "advanced6.title": "ඔබේ ඇප් එකට ඡන්ද (Poll) විශේෂාංගය එකතු කරන ආකාරය",
      "advanced6.desc": "ඡන්ද ශිල්පිය සක්‍රිය කර, ආරම්භ සහ අවසන් දිනයන් සකස් කර, රූප සහිත ප්‍රශ්න එකතු කර, සජීව ප්‍රතිඵල පරීක්ෂා කරන්න.",
      "advanced6.footerTitle": "APPMAKER පාඩම — ඡන්ද (Poll)",
      "advanced6.footerText": "උසස් පාඩම 6 — අන්තර්ක්‍රියාකාරී Polls සමඟ ඔබේ ප්‍රේක්ෂකයන් ආකර්ෂණය කර ඡන්ද රේඛී කාල ප්‍රතිඵල ලබා ගන්න.",
      "advanced6.docTitle": "Polls සහ ඡන්ද | Appmaker",
      "versaai1.kicker": "Versa AI — පාඩම 1/4",
      "versaai1.title": "Versa AI සමඟ මිනිත්තු කිහිපයකින් ඔබේ ඇප් ගොඩ නගන්න",
      "versaai1.desc": "ඔබේ ඇප් කාණ්ඩ, අන්තර්ගතය සහ රූප ස්වයංක්‍රීයව සාදා ගැනීමට Versa AI භාවිතා කරන්න — ඔබේ අදහස විස්තර කර AI ට වැඩ කිරීමට ඉඩ දෙන්න.",
      "versaai1.footerTitle": "APPMAKER පාඩම — Versa AI සමඟ ගොඩ නගන්න",
      "versaai1.footerText": "Versa AI පාඩම 1 — ඔබේ ඇප් අදහස විස්තර කර Versa AI ස්වයංක්‍රීයව ගොඩ නගනු බලන්න.",
      "versaai1.docTitle": "Versa AI සමඟ ඇප් | Appmaker",
      "versaai2.kicker": "Versa AI — පාඩම 2/4",
      "versaai2.title": "Versa AI සමඟ තත්පර කිහිපයකින් ඇප් පිටු සහ කාණ්ඩ සොයා ගන්න",
      "versaai2.desc": "සරල Versa AI ප්‍රොම්ප්ට් භාවිතා කර ඔබේ ඇප් සියලු පිටු සහ කාණ්ඩ ඉක්මනින් ලැයිස්තු ගත කරන්න.",
      "versaai2.footerTitle": "APPMAKER පාඩම — Versa AI සෙවීම",
      "versaai2.footerText": "Versa AI පාඩම 2 — AI-ශක්‍ය ප්‍රොම්ප්ට් භාවිතා කර ඔබේ ඇප් ඕනෑම පිටුවක් හෝ කාණ්ඩයක් ක්ෂණිකව සොයා ගන්න.",
      "versaai2.docTitle": "Versa AI සමඟ පිටු සොයා ගන්න | Appmaker",
      "versaai3.kicker": "Versa AI — පාඩම 3/4",
      "versaai3.title": "Versa AI භාවිතයෙන් ඔබේ ඇප් ඉක්මනින් යාවත්කාලීන කරන ආකාරය",
      "versaai3.desc": "කේත ලිවීමකින් තොරව පෙළ ප්‍රොම්ප්ට් භාවිතා කර ඔබේ ඇප් එකට නව කාණ්ඩ සහ පිටු එකතු කරන්න.",
      "versaai3.footerTitle": "APPMAKER පාඩම — Versa AI සමඟ යාවත්කාලීන",
      "versaai3.footerText": "Versa AI පාඩම 3 — Versa AI ප්‍රොම්ප්ට් සමඟ ඔබේ ඇප් ක්ෂණිකව යාවත්කාලීන කිරීමෙන් නැවුම්ව හා ක්‍රවර්ධනය කරන්න.",
      "versaai3.docTitle": "Versa AI සමඟ ඇප් යාවත්කාලීන | Appmaker",
      "versaai4.kicker": "Versa AI — පාඩම 4/4",
      "versaai4.title": "Versa AI භාවිතයෙන් පවත්නා කාණ්ඩයක් සංස්කරණය කරන ආකාරය",
      "versaai4.desc": "සරල පෙළ ප්‍රොම්ප්ට් සමඟ ඔබේ ඇප් කාණ්ඩ ක්ෂණිකව සංස්කරණය කරන්න — කේතයකින් තොරව නම්, ගෙවීම් විකල්ප සහ තවත් දේ වෙනස් කරන්න.",
      "versaai4.footerTitle": "APPMAKER පාඩම — Versa AI සමඟ කාණ්ඩ සංස්කරණය",
      "versaai4.footerText": "Versa AI පාඩම 4 — එක් වාක්‍යයකින් කාණ්ඩ සංස්කරණය කිරීමෙන් Versa AI ප්‍රගුණ කරන්න.",
      "versaai4.docTitle": "Versa AI සමඟ කාණ්ඩ සංස්කරණය | Appmaker",
      "other1.kicker": "අනෙකුත් විශේෂාංග — 1/7",
      "other1.title": "ඔබේ ඇප් නිර්මාණය කිරීමේ ගැටලු ද? අපිට කරන්න ඉඩ දෙන්න",
      "other1.desc": "ඔබේ නිශ්චිත අවශ්‍යතා මත ඔබේ ඇප් නිර්මාණය කිරීමට Appmaker විශේෂඥ කණ්ඩායමට ලබා දිය හැකි 'Design My App' විශේෂාංගය භාවිතා කරන්න.",
      "other1.footerTitle": "APPMAKER පාඩම — Design My App",
      "other1.footerText": "අනෙකුත් විශේෂාංග 1 — ඔබේ අන්තර්ගතය කෙරෙහි අවධානය යොමු කිරීමට Appmaker කණ්ඩායමට නිර්මාණය සිදු කිරීමට ඉඩ දෙන්න.",
      "other1.docTitle": "Design My App | Appmaker",
      "other2.kicker": "අනෙකුත් විශේෂාංග — 2/7",
      "other2.title": "Appmaker හි දෝෂ වාර්තා කරන ආකාරය",
      "other2.desc": "ඉක්මන් සහාය සඳහා 'Report Bug' විශේෂාංගය භාවිතා කර Screenshots සමඟ තාක්ෂණික ගැටලු Appmaker කණ්ඩායමට ඉදිරිපත් කරන්න.",
      "other2.footerTitle": "APPMAKER පාඩම — දෝෂ වාර්තා කිරීම",
      "other2.footerText": "අනෙකුත් විශේෂාංග 2 — විස්තරාත්මක දෝෂ වාර්තා ඉදිරිපත් කිරීමෙන් Appmaker කණ්ඩායමෙන් ඉක්මන් සහාය ලබා ගන්න.",
      "other2.docTitle": "දෝෂ වාර්තා | Appmaker",
      "other3.kicker": "අනෙකුත් විශේෂාංග — 3/7",
      "other3.title": "ඔබේ කණ්ඩායම සමඟ ඇප් ප්‍රවේශය බෙදාගන්නේ කෙසේද",
      "other3.desc": "ඔබේ ඇප් ඩෑෂ්බෝඩ් කණ්ඩායම් සාමාජිකයන් සමඟ ආරක්ෂිතව බෙදාගෙන, නිශ්චිත අවසර ලබා දී, ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ ඕනෑ",
      "other3.footerTitle": "APPMAKER පාඩම — කණ්ඩායම් ප්‍රවේශය",
      "other3.footerText": "අනෙකුත් විශේෂාංග 3 — ඔබේ කණ්ඩායම සමඟ පාලිත ප්‍රවේශය බෙදාගැනීමෙන් කාර්යක්ෂමව සහයෝගීතාව දක්වන්න.",
      "other3.docTitle": "කණ්ඩායම් ප්‍රවේශය | Appmaker",
      "other4.kicker": "අනෙකුත් විශේෂාංග — 4/7",
      "other4.title": "Wizard විකල්පය භාවිතයෙන් ඇප් නිර්මාණය කරන ආකාරය",
      "other4.desc": "ක්‍රමානුකූලව ඇප් නිර්මාණය කිරීමට Wizard භාවිතා කරන්න — සැකිලි තෝරා, ලෝගෝ උඩුගත කර, කාණ්ඩ එකතු කර, කළමනාකාරි ක්‍රමවේදයකින් පිටු ප්‍රකාශ කරන්න.",
      "other4.footerTitle": "APPMAKER පාඩම — Wizard ගොඩ නැගිල්ල",
      "other4.footerText": "අනෙකුත් විශේෂාංග 4 — Wizard විකල්පය ආරම්භකයන් සම්පූර්ණ ඇප් නිර්මාණ ක්‍රියාවලිය හරහා ගෙන යයි.",
      "other4.docTitle": "Wizard ගොඩ නැගිල්ල | Appmaker",
      "other5.kicker": "අනෙකුත් විශේෂාංග — 5/7",
      "other5.title": "ඔබේ PWA ඇප් හි FAV Icon වෙනස් කරන ආකාරය",
      "other5.desc": "ඔබේ PWA ස්වකීය favicon සමඟ අභිරුචිකරණය කරන්න — 32x32 Icon සාදා ඔබේ ඇප් නිර්මාණ සැකසුම් හරහා එය උඩුගත කරන ආකාරය ඉගෙන ගන්න.",
      "other5.footerTitle": "APPMAKER පාඩම — FAV Icon",
      "other5.footerText": "අනෙකුත් විශේෂාංග 5 — අභිරුචි FAV icon සමඟ ඔබේ PWA නිමවූ, බ්‍රෑන්ඩ් කළ පෙනුමක් ලබා දෙන්න.",
      "other5.docTitle": "FAV Icon | Appmaker",
      "other6.kicker": "අනෙකුත් විශේෂාංග — 6/7",
      "other6.title": "ඔබේ App Maker ඩෑෂ්බෝඩ් ප්‍රගුණ කරන්න — Profile, AI Credits සහ තවත්",
      "other6.desc": "ඔබේ Profile කළමනාකරණය කර, Versa AI Credits පරීක්ෂා කර, ගෙවීම් හසුරවා, බිල්පත් ඉතිහාසය සමාලෝචනය කර, ඔබේ ජයග්‍රහණ නිරීක්ෂණය කරන්න.",
      "other6.footerTitle": "APPMAKER පාඩම — Profile ඩෑෂ්බෝඩ්",
      "other6.footerText": "අනෙකුත් විශේෂාංග 6 — ඔබේ Appmaker ගිණුම කළමනාකරණය කිරීම ගැන දැන ගත යුතු සෑම දෙයක්ම.",
      "other6.docTitle": "Profile ඩෑෂ්බෝඩ් | Appmaker",
      "other7.kicker": "අනෙකුත් විශේෂාංග — 7/7",
      "other7.title": "The Appmaker Store",
      "other7.desc": "ඔබේ ඇප් එක ගොඩනඟා වර්ධනය කිරීමට උපකාර වන මෙවලම් සොයාගෙන භාවිතා කරන ලෙස Appmaker Store භාවිතා කරන ආකාරය ඉගෙන ගන්න.",
      "other7.footerTitle": "APPMAKER පාඩම — The Appmaker Store",
      "other7.footerText": "අනෙකුත් විශේෂාංග 7 — Appmaker Store ගවේෂණය කර ඔබේ ඇප් ගමනට බලවත් add-ons සොයා ගන්න.",
      "other7.docTitle": "The Appmaker Store | Appmaker",
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
      "section1.title": "அடிப்படை பாடங்கள் – உங்கள் முதல் ஆப்பை உருவாக்குங்கள்",
      "section1.desc": "பதிவு செய்வதிலிருந்து உங்கள் முதல் ஆப்பை வெளியிடுவது வரை Appmaker இன் அடிப்படைகளை கற்றுக்கொள்ளுங்கள்.",
      "section1.badge": "அடிப்படை",
      "section2.title": "வெளியீட்டிற்கு பிறகு செய்ய வேண்டியவை",
      "section2.desc": "உங்கள் ஆப் நேரடியாக இருக்கும்போது, செயல்திறனை கண்காணித்து, URL நிர்வகித்து, push notifications மூலம் பயனர்களை ஈர்க்க கற்றுக்கொள்ளுங்கள்.",
      "section2.badge": "வெளியீட்டிற்கு பிறகு",
      "section3.title": "மேம்பட்ட பக்க உருவாக்க விருப்பங்கள்",
      "section3.desc": "அடிப்படையை தாண்டி செல்லுங்கள் — உங்கள் ஆப் உள்ளடக்கத்தை மேம்படுத்த HTML பக்கங்கள், PDFகள், படிவங்கள், வாக்கெடுப்புகள், RSS feeds மற்றும் பலவற்றை சேர்க்கவும்.",
      "section3.badge": "மேம்பட்ட",
      "section4.title": "Versa AI மூலம் ஆப் உருவாக்கம்",
      "section4.desc": "எளிய உரை ப்ராம்ப்ட்கள் மட்டும் பயன்படுத்தி உங்கள் ஆப் உள்ளடக்கத்தை கட்டமைக்க, புதுப்பிக்க மற்றும் நிர்வகிக்க AI சக்தியை பயன்படுத்துங்கள்.",
      "section4.badge": "Versa AI",
      "section5.title": "மற்ற அம்சங்கள்",
      "section5.desc": "Design சேவை, பிழை அறிக்கை, குழு அணுகல், Wizard builder, FAV icons மற்றும் உங்கள் Profile dashboard போன்ற கூடுதல் கருவிகளை ஆராயுங்கள்.",
      "section5.badge": "மற்றவை",
      "basic1.kicker": "அடிப்படை பாடம் 1/9",
      "basic1.title": "Appmaker இல் பதிவு செய்வது எப்படி",
      "basic1.desc": "உங்கள் கணக்கை உருவாக்கி, மொபைல் எண்ணை சரிபார்த்து, Appmaker இல் தொடங்க கடவுச்சொல் அமைக்கக் கற்றுக்கொள்ளுங்கள்.",
      "basic1.footerTitle": "APPMAKER பயிற்சி — பதிவு செய்தல்",
      "basic1.footerText": "அடிப்படை பாடம் 1 — Appmaker இல் கட்டமைக்கத் தொடங்க உங்கள் கணக்கை உருவாக்கி மொபைல் எண்ணை சரிபாருங்கள்.",
      "basic1.docTitle": "பதிவு செய்வது எப்படி | Appmaker",
      "basic2.kicker": "அடிப்படை பாடம் 2/9",
      "basic2.title": "Appmaker இல் ஆப் ஒன்றை உருவாக்குவது எப்படி",
      "basic2.desc": "ஒரு டெம்ப்ளேட்டை தேர்ந்தெடுத்து, உங்கள் ஆப்பிற்கு பெயரிட்டு, Appmaker இல் முதல் பயன்பாட்டை உருவாக்குங்கள்.",
      "basic2.footerTitle": "APPMAKER பயிற்சி — ஆப் உருவாக்கம்",
      "basic2.footerText": "அடிப்படை பாடம் 2 — Appmaker இல் முதல் ஆப் உருவாக்க டெம்ப்ளேட் தேர்ந்தெடுக்கவும்.",
      "basic2.docTitle": "ஆப் உருவாக்குவது எப்படி | Appmaker",
      "basic3.kicker": "அடிப்படை பாடம் 3/9",
      "basic3.title": "உங்கள் ஆப்பில் புதிய வகையை சேர்ப்பது எப்படி",
      "basic3.desc": "டாஷ்போர்டில் செல்லி, புதிய வகையை சேர்த்து, சந்தா விருப்பங்களை அமைத்து, பேனர் படம் பதிவேற்றுங்கள்.",
      "basic3.footerTitle": "APPMAKER பயிற்சி — வகை சேர்க்கவும்",
      "basic3.footerText": "அடிப்படை பாடம் 3 — உங்கள் ஆப் உள்ளடக்கத்தை ஒழுங்கமைக்க வகைகள் சேர்க்கவும்.",
      "basic3.docTitle": "வகை சேர்ப்பது எப்படி | Appmaker",
      "basic4.kicker": "அடிப்படை பாடம் 4/9",
      "basic4.title": "Appmaker இல் புதிய பக்கம் உருவாக்குவது எப்படி",
      "basic4.desc": "பக்க தலைப்பு சேர்த்து, வெளியிடும் தேதிகளை திட்டமிட்டு, தரவரிசை அமைத்து, படங்கள், உரை மற்றும் YouTube வீடியோக்கள் சேர்க்கவும்.",
      "basic4.footerTitle": "APPMAKER பயிற்சி — பக்கம் உருவாக்கம்",
      "basic4.footerText": "அடிப்படை பாடம் 4 — உங்கள் ஆப்பில் செழுமையான உள்ளடக்கத்துடன் பக்கங்கள் சேர்க்கவும்.",
      "basic4.docTitle": "பக்கம் உருவாக்குவது எப்படி | Appmaker",
      "basic5.kicker": "அடிப்படை பாடம் 5/9",
      "basic5.title": "உங்கள் டாஷ்போர்டில் பக்கங்களை நிர்வகிப்பது எப்படி",
      "basic5.desc": "உங்கள் ஆப் டாஷ்போர்டிலிருந்து பக்கங்களை பார்க்கவும், திருத்தவும், நகலெடுக்கவும், நீக்கவும் கற்றுக்கொள்ளுங்கள்.",
      "basic5.footerTitle": "APPMAKER பயிற்சி — பக்கங்களை நிர்வகி",
      "basic5.footerText": "அடிப்படை பாடம் 5 — டாஷ்போர்ட் நிர்வாக கருவிகளுடன் உங்கள் பக்கங்களை ஒழுங்கமைக்கவும்.",
      "basic5.docTitle": "பக்கங்களை நிர்வகிப்பது எப்படி | Appmaker",
      "basic6.kicker": "அடிப்படை பாடம் 6/9",
      "basic6.title": "உங்கள் ஆப்பின் தோற்றத்தை தனிப்பயனாக்குவது எப்படி",
      "basic6.desc": "உங்கள் பிராண்டிற்கு ஏற்ப பின்னணி நிறங்கள், வழிசெலுத்தல் பட்டி நிறங்கள் மற்றும் எழுத்துரு பாணிகளை மாற்றுங்கள்.",
      "basic6.footerTitle": "APPMAKER பயிற்சி — தோற்றம் மாற்றம்",
      "basic6.footerText": "அடிப்படை பாடம் 6 — நிறங்கள் மற்றும் எழுத்துருக்களை தனிப்பயனாக்கி உங்கள் ஆப்பிற்கு தனித்துவமான தோற்றம் கொடுங்கள்.",
      "basic6.docTitle": "தோற்றம் தனிப்பயனாக்கம் | Appmaker",
      "basic7.kicker": "அடிப்படை பாடம் 7/9",
      "basic7.title": "உங்கள் ஆப் லோகோவை மாற்றுவது எப்படி",
      "basic7.desc": "உங்கள் ஆப் லோகோவை விரைவாக புதுப்பிக்கவும் — சரியான படத்தின் அளவு மற்றும் புதிய அனுமோதன தேவையின்றி பதிவேற்றுவது எப்படி என்று கற்றுக்கொள்ளுங்கள்.",
      "basic7.footerTitle": "APPMAKER பயிற்சி — லோகோ மாற்றம்",
      "basic7.footerText": "அடிப்படை பாடம் 7 — மீண்டும் அனுமோதன சமர்ப்பிக்காமல் எந்த நேரத்திலும் லோகோவை புதுப்பிக்கவும்.",
      "basic7.docTitle": "ஆப் லோகோ மாற்றுவது எப்படி | Appmaker",
      "basic8.kicker": "அடிப்படை பாடம் 8/9",
      "basic8.title": "வெளியிடுவதற்கு முன் — தொடர்பு தகவல், தனியுரிமைக் கொள்கை மற்றும் எங்களை பற்றி சேர்க்கவும்",
      "basic8.desc": "சமர்ப்பிக்கும் முன் தொடர்பு விவரங்கள், விதிமுறைகள், தனியுரிமைக் கொள்கை மற்றும் எங்களை பற்றி பகுதியுடன் உங்கள் ஆப் தயாராக இருப்பதை உறுதி செய்யுங்கள்.",
      "basic8.footerTitle": "APPMAKER பயிற்சி — வெளியீட்டிற்கு முன் சரிபார்ப்பு",
      "basic8.footerText": "அடிப்படை பாடம் 8 — அனுமோதனத்திற்கு சமர்ப்பிக்கும் முன் அனைத்து ஆப் விவரங்களையும் பூர்த்தி செய்யுங்கள்.",
      "basic8.docTitle": "வெளியீட்டிற்கு முன் | Appmaker",
      "basic9.kicker": "அடிப்படை பாடம் 9/9",
      "basic9.title": "உங்கள் ஆப்பை வெளியிட்டு விரைவில் அனுமதி பெறுவது எப்படி",
      "basic9.desc": "உங்கள் ஆப்பை அனுமோதனத்திற்கு சமர்ப்பித்து, விவரங்களும் லோகோவும் சேர்த்து, SMS முக்கிய வார்த்தைகள் மற்றும் ஆபரேட்டர் பில்லிங் அமைத்து, உங்கள் அனுமோதன நிலையை சரிபாருங்கள்.",
      "basic9.footerTitle": "APPMAKER பயிற்சி — ஆப் வெளியீடு",
      "basic9.footerText": "அடிப்படை பாடம் 9 — இறுதி படி: உங்கள் ஆப்பை சமர்ப்பித்து பயனர்களுக்கு நேரடியாக்குங்கள்.",
      "basic9.docTitle": "ஆப் வெளியிடுவது எப்படி | Appmaker",
      "afterlaunch1.kicker": "வெளியீட்டிற்கு பிறகு — பாடம் 1/4",
      "afterlaunch1.title": "உங்கள் ஆப்பின் வெற்றியை கண்காணிப்பது எப்படி — Analytics விளக்கம்",
      "afterlaunch1.desc": "உங்கள் ஆப்பை மேம்படுத்த செயலில் உள்ள சந்தாதாரர்கள், பக்க காட்சிகள், செயலற்ற பயனர்கள் மற்றும் தனிப்பட்ட பார்வையாளர் எண்ணிக்கையை புரிந்துகொள்ளுங்கள்.",
      "afterlaunch1.footerTitle": "APPMAKER பயிற்சி — Analytics",
      "afterlaunch1.footerText": "வெளியீட்டிற்கு பிறகு பாடம் 1 — Analytics மூலம் பயனர்கள் உங்கள் ஆப்புடன் எவ்வாறு தொடர்பு கொள்கிறார்கள் என்பதை புரிந்துகொள்ளுங்கள்.",
      "afterlaunch1.docTitle": "App Analytics | Appmaker",
      "afterlaunch2.kicker": "வெளியீட்டிற்கு பிறகு — பாடம் 2/4",
      "afterlaunch2.title": "உங்கள் ஆப்பிற்கு தனிப்பயன் Website URL அமைப்பது எப்படி",
      "afterlaunch2.desc": "உங்கள் ஆப் URL நிர்வகித்து, Appmaker ஸ்டோரில் பட்டியலிட்டு, தொழில்முறை தோற்றத்திற்காக உங்கள் சொந்த டொமைன் அமைக்கவும்.",
      "afterlaunch2.footerTitle": "APPMAKER பயிற்சி — தனிப்பயன் URL",
      "afterlaunch2.footerText": "வெளியீட்டிற்கு பிறகு பாடம் 2 — தனிப்பயன் Website URL மூலம் உங்கள் ஆப்பிற்கு தொழில்முறை அடையாளம் கொடுங்கள்.",
      "afterlaunch2.docTitle": "தனிப்பயன் URL | Appmaker",
      "afterlaunch3.kicker": "வெளியீட்டிற்கு பிறகு — பாடம் 3/4",
      "afterlaunch3.title": "Push Notifications அனுப்பி ஆப் பயனர்களை ஈர்ப்பது எப்படி",
      "afterlaunch3.desc": "உடனடி அல்லது திட்டமிட்ட Push Notifications அனுப்பி, குறிப்பிட்ட பயனர் குழுக்களை இலக்கு வைத்து, ஆப்பிற்கு திரும்ப அழைக்கும் இணைப்புகள் சேர்க்கவும்.",
      "afterlaunch3.footerTitle": "APPMAKER பயிற்சி — Push Notifications",
      "afterlaunch3.footerText": "வெளியீட்டிற்கு பிறகு பாடம் 3 — இலக்கு Push Notifications மூலம் உங்கள் பயனர்களை மீண்டும் ஈர்க்கவும்.",
      "afterlaunch3.docTitle": "Push Notifications | Appmaker",
      "afterlaunch4.kicker": "வெளியீட்டிற்கு பிறகு — பாடம் 4/4",
      "afterlaunch4.title": "How to upload your app to the google playstore",
      "afterlaunch4.desc": "Google Play Console இன் புதிய வெளியீட்டு செயல்முறையை பின்பற்றி உங்கள் ஆப்பை Playstore இல் பதிவேற்றவும்.",
      "afterlaunch4.footerTitle": "APPMAKER பயிற்சி — Google Playstore Upload",
      "afterlaunch4.footerText": "வெளியீட்டிற்கு பிறகு பாடம் 4 — புதுப்பிக்கப்பட்ட console படிகளுடன் உங்கள் ஆப்பை Google Playstore இல் வெளியிடுங்கள்.",
      "afterlaunch4.docTitle": "How to upload your app to the google playstore | Appmaker",
      "advanced1.kicker": "மேம்பட்ட — பாடம் 1/6",
      "advanced1.title": "HTML ஆசிரியர் மூலம் வலை பக்கம் உருவாக்குவது எப்படி",
      "advanced1.desc": "HTML ஆசிரியரைப் பயன்படுத்தி குறியீட்டுடன் உள்ளடக்கம் சேர்த்து வடிவமைத்து, பேனர் படங்கள் பதிவேற்றி, பக்கத்தை வெளியிடுங்கள்.",
      "advanced1.footerTitle": "APPMAKER பயிற்சி — HTML ஆசிரியர்",
      "advanced1.footerText": "மேம்பட்ட பாடம் 1 — உள்ளமைக்கப்பட்ட HTML ஆசிரியர் மூலம் முழுமையான தனிப்பயன் பக்கங்களை உருவாக்குங்கள்.",
      "advanced1.docTitle": "HTML Editor | Appmaker",
      "advanced2.kicker": "மேம்பட்ட — பாடம் 2/6",
      "advanced2.title": "உங்கள் ஆப் பக்கங்களில் PDF கோப்புகளை சேர்ப்பது எப்படி",
      "advanced2.desc": "உங்கள் ஆப் பக்கங்களில் PDFகளை பதிவேற்றி, கவர் படங்கள் அமைத்து, பயனர்கள் கோப்பை பதிவிறக்கலாமா அல்லது படிக்கலாமா என்று கட்டுப்படுத்துங்கள்.",
      "advanced2.footerTitle": "APPMAKER பயிற்சி — PDF பக்கங்கள்",
      "advanced2.footerText": "மேம்பட்ட பாடம் 2 — பதிவிறக்கக்கூடிய அல்லது படிக்க மட்டுமான PDF உள்ளடக்கத்துடன் உங்கள் ஆப்பை மேம்படுத்துங்கள்.",
      "advanced2.docTitle": "PDF பக்கங்கள் | Appmaker",
      "advanced3.kicker": "மேம்பட்ட — பாடம் 3/6",
      "advanced3.title": "பக்க கருத்துகள் மற்றும் செய்திகளை நிர்வகிப்பது எப்படி",
      "advanced3.desc": "உங்கள் பக்கங்களில் கருத்துகள் மற்றும் செய்திகளை இயக்கி, பயனர்களுக்கு பதிலளித்து, மொத்த செய்திகள் அனுப்பி, பதில்களை திட்டமிடுங்கள்.",
      "advanced3.footerTitle": "APPMAKER பயிற்சி — கருத்துகள் & செய்திகள்",
      "advanced3.footerText": "மேம்பட்ட பாடம் 3 — கருத்துகள் மற்றும் செய்திகள் மூலம் சமூகம் கட்டி பயனர் ஈடுபாட்டை அதிகரிக்கவும்.",
      "advanced3.docTitle": "கருத்துகள் & செய்திகள் | Appmaker",
      "advanced4.kicker": "மேம்பட்ட — பாடம் 4/6",
      "advanced4.title": "உங்கள் பக்கங்களில் தனிப்பயன் படிவங்களை சேர்த்து நிர்வகிப்பது எப்படி",
      "advanced4.desc": "கணக்கெடுப்புகள், கருத்து படிவங்கள் மற்றும் MCQ வினாடிவினா உருவாக்கி, நேர வரம்புகள் அமைத்து, பயனர் பதில்களை பதிவிறக்குங்கள்.",
      "advanced4.footerTitle": "APPMAKER பயிற்சி — தனிப்பயன் படிவங்கள்",
      "advanced4.footerText": "மேம்பட்ட பாடம் 4 — தனிப்பயன் படிவங்கள் மற்றும் வினாடிவினா மூலம் பயனர்களிடமிருந்து மதிப்புமிக்க தரவு சேகரிக்கவும்.",
      "advanced4.docTitle": "தனிப்பயன் படிவங்கள் | Appmaker",
      "advanced5.kicker": "மேம்பட்ட — பாடம் 5/6",
      "advanced5.title": "RSS Feeds மூலம் உங்கள் பக்கத்தை தானாக புதுப்பிப்பது எப்படி",
      "advanced5.desc": "உங்கள் ஆப் பக்கத்தில் RSS feed இணைத்து, உள்ளடக்கம் தானாக புதுப்பிக்கப்படுமாறு அமைக்கவும் — ஒரு முறை அமைத்து இயங்கட்டும்.",
      "advanced5.footerTitle": "APPMAKER பயிற்சி — RSS Feeds",
      "advanced5.footerText": "மேம்பட்ட பாடம் 5 — உங்கள் ஆப் உள்ளடக்கத்தை தானாக புதுமையாக வைக்கும் RSS feeds மூலம் நேரம் மிச்சப்படுத்துங்கள்.",
      "advanced5.docTitle": "RSS Feeds | Appmaker",
      "advanced6.kicker": "மேம்பட்ட — பாடம் 6/6",
      "advanced6.title": "உங்கள் ஆப்பில் வாக்கெடுப்பு (Poll) அம்சம் சேர்ப்பது எப்படி",
      "advanced6.desc": "வாக்கெடுப்புகளை இயக்கி, தொடக்க மற்றும் முடிவு தேதிகள் அமைத்து, படங்களுடன் கேள்விகள் சேர்த்து, நேரடி முடிவுகளை சரிபாருங்கள்.",
      "advanced6.footerTitle": "APPMAKER பயிற்சி — வாக்கெடுப்புகள்",
      "advanced6.footerText": "மேம்பட்ட பாடம் 6 — ஊடாடும் வாக்கெடுப்புகள் மூலம் உங்கள் பார்வையாளர்களை ஈர்த்து நேரடி வாக்குகளை சேகரிக்கவும்.",
      "advanced6.docTitle": "வாக்கெடுப்புகள் | Appmaker",
      "versaai1.kicker": "Versa AI — பாடம் 1/4",
      "versaai1.title": "Versa AI மூலம் நிமிடங்களில் உங்கள் ஆப்பை கட்டமைக்கவும்",
      "versaai1.desc": "உங்கள் ஆப்பின் வகைகள், உள்ளடக்கம் மற்றும் படங்களை தானாக உருவாக்க Versa AI பயன்படுத்துங்கள் — உங்கள் யோசனையை விவரித்து AI வேலை செய்யட்டும்.",
      "versaai1.footerTitle": "APPMAKER பயிற்சி — Versa AI மூலம் கட்டமைக்கவும்",
      "versaai1.footerText": "Versa AI பாடம் 1 — உங்கள் ஆப் யோசனையை விவரித்து Versa AI தானாக கட்டமைப்பதை பாருங்கள்.",
      "versaai1.docTitle": "Versa AI மூலம் ஆப் | Appmaker",
      "versaai2.kicker": "Versa AI — பாடம் 2/4",
      "versaai2.title": "Versa AI மூலம் வினாடிகளில் ஆப் பக்கங்கள் மற்றும் வகைகளை கண்டறியவும்",
      "versaai2.desc": "எளிய Versa AI ப்ராம்ப்ட்கள் மூலம் உங்கள் ஆப்பின் அனைத்து பக்கங்கள் மற்றும் வகைகளை விரைவாக பட்டியலிடுங்கள்.",
      "versaai2.footerTitle": "APPMAKER பயிற்சி — Versa AI தேடல்",
      "versaai2.footerText": "Versa AI பாடம் 2 — AI-இயக்கப்பட்ட ப்ராம்ப்ட்கள் மூலம் உங்கள் ஆப்பில் எந்த பக்கம் அல்லது வகையையும் உடனடியாக கண்டறியுங்கள்.",
      "versaai2.docTitle": "Versa AI மூலம் பக்கங்கள் | Appmaker",
      "versaai3.kicker": "Versa AI — பாடம் 3/4",
      "versaai3.title": "Versa AI பயன்படுத்தி உங்கள் ஆப்பை விரைவாக புதுப்பிப்பது எப்படி",
      "versaai3.desc": "குறியீடு தேவையின்றி உரை ப்ராம்ப்ட்கள் மூலம் உங்கள் ஏற்கனவே உள்ள ஆப்பில் புதிய வகைகள் மற்றும் பக்கங்களை சேர்க்கவும்.",
      "versaai3.footerTitle": "APPMAKER பயிற்சி — Versa AI மூலம் புதுப்பிப்பு",
      "versaai3.footerText": "Versa AI பாடம் 3 — Versa AI ப்ராம்ப்ட்களுடன் உங்கள் ஆப்பை உடனடியாக புதுப்பித்து புதுமையாகவும் வளர்ந்து கொண்டிருக்கவும்.",
      "versaai3.docTitle": "Versa AI மூலம் ஆப் புதுப்பிப்பு | Appmaker",
      "versaai4.kicker": "Versa AI — பாடம் 4/4",
      "versaai4.title": "Versa AI மூலம் ஏற்கனவே உள்ள வகையை திருத்துவது எப்படி",
      "versaai4.desc": "எளிய உரை ப்ராம்ப்ட்களுடன் உங்கள் ஆப்பின் வகைகளை உடனடியாக திருத்துங்கள் — குறியீடின்றி பெயர்கள், கட்டண விருப்பங்கள் மற்றும் பலவற்றை மாற்றுங்கள்.",
      "versaai4.footerTitle": "APPMAKER பயிற்சி — Versa AI மூலம் வகை திருத்தம்",
      "versaai4.footerText": "Versa AI பாடம் 4 — ஒரு வாக்கியத்தில் வகைகளை திருத்துவதன் மூலம் Versa AI ஐ தேர்ச்சி பெறுங்கள்.",
      "versaai4.docTitle": "Versa AI மூலம் வகை திருத்தம் | Appmaker",
      "other1.kicker": "மற்ற அம்சங்கள் — 1/7",
      "other1.title": "உங்கள் ஆப்பை வடிவமைக்க சிரமப்படுகிறீர்களா? நாங்கள் செய்கிறோம்",
      "other1.desc": "உங்கள் சரியான தேவைகளின் படி உங்கள் ஆப்பை வடிவமைக்க Appmaker நிபுணர் குழுவை பெற 'Design My App' அம்சத்தை பயன்படுத்துங்கள்.",
      "other1.footerTitle": "APPMAKER பயிற்சி — Design My App",
      "other1.footerText": "மற்ற அம்சங்கள் 1 — உங்கள் உள்ளடக்கத்தில் கவனம் செலுத்த Appmaker குழு வடிவமைப்பை கவனிக்கட்டும்.",
      "other1.docTitle": "Design My App | Appmaker",
      "other2.kicker": "மற்ற அம்சங்கள் — 2/7",
      "other2.title": "Appmaker இல் பிழைகளை அறிக்கையிடுவது எப்படி",
      "other2.desc": "விரைவான ஆதரவிற்காக 'Report Bug' அம்சம் பயன்படுத்தி screenshots உடன் தொழில்நுட்ப சிக்கல்களை Appmaker குழுவிடம் நேரடியாக சமர்ப்பிக்கவும்.",
      "other2.footerTitle": "APPMAKER பயிற்சி — பிழை அறிக்கை",
      "other2.footerText": "மற்ற அம்சங்கள் 2 — விரிவான பிழை அறிக்கைகளை சமர்ப்பித்து Appmaker குழுவிடம் விரைவான உதவி பெறுங்கள்.",
      "other2.docTitle": "பிழை அறிக்கை | Appmaker",
      "other3.kicker": "மற்ற அம்சங்கள் — 3/7",
      "other3.title": "உங்கள் குழுவுடன் ஆப் அணுகலை பகிர்வது எப்படி",
      "other3.desc": "உங்கள் ஆப் டாஷ்போர்டை குழு உறுப்பினர்களுடன் பாதுகாப்பாக பகிர்ந்து, குறிப்பிட்ட அனுமதிகள் வழங்கி, எந்த நேரத்திலும் அணுகலை நிர்வகிக்கவும் அல்லது அகற்றவும்.",
      "other3.footerTitle": "APPMAKER பயிற்சி — குழு அணுகல்",
      "other3.footerText": "மற்ற அம்சங்கள் 3 — உங்கள் குழுவுடன் கட்டுப்படுத்தப்பட்ட அணுகலை பகிர்வதன் மூலம் திறமையாக ஒத்துழையுங்கள்.",
      "other3.docTitle": "குழு அணுகல் | Appmaker",
      "other4.kicker": "மற்ற அம்சங்கள் — 4/7",
      "other4.title": "Wizard விருப்பம் மூலம் ஆப் உருவாக்குவது எப்படி",
      "other4.desc": "படிப்படியாக ஆப் உருவாக்க Wizard பயன்படுத்துங்கள் — டெம்ப்ளேட்டுகள் தேர்ந்தெடுத்து, லோகோ பதிவேற்றி, வகைகள் சேர்த்து, வழிகாட்டப்பட்ட ஓட்டத்தில் பக்கங்கள் வெளியிடுங்கள்.",
      "other4.footerTitle": "APPMAKER பயிற்சி — Wizard Builder",
      "other4.footerText": "மற்ற அம்சங்கள் 4 — Wizard விருப்பம் தொடக்கநிலையினரை முழு ஆப் உருவாக்க செயல்முறையிலும் வழிகாட்டுகிறது.",
      "other4.docTitle": "Wizard Builder | Appmaker",
      "other5.kicker": "மற்ற அம்சங்கள் — 5/7",
      "other5.title": "உங்கள் PWA ஆப்பில் FAV Icon மாற்றுவது எப்படி",
      "other5.desc": "உங்கள் சொந்த favicon உடன் PWA ஐ தனிப்பயனாக்குங்கள் — 32x32 Icon உருவாக்கி உங்கள் ஆப் வடிவமைப்பு அமைப்புகள் மூலம் பதிவேற்றுவது எப்படி என்று கற்றுக்கொள்ளுங்கள்.",
      "other5.footerTitle": "APPMAKER பயிற்சி — FAV Icon",
      "other5.footerText": "மற்ற அம்சங்கள் 5 — தனிப்பயன் FAV icon மூலம் உங்கள் PWA க்கு செம்மையான, பிராண்டட் தோற்றம் கொடுங்கள்.",
      "other5.docTitle": "FAV Icon | Appmaker",
      "other6.kicker": "மற்ற அம்சங்கள் — 6/7",
      "other6.title": "உங்கள் App Maker Dashboard மாஸ்டர் செய்யுங்கள் — Profile, AI Credits மற்றும் மேலும்",
      "other6.desc": "உங்கள் Profile நிர்வகித்து, Versa AI Credits சரிபார்த்து, கொடுப்பனவுகளை கையாண்டு, பில்லிங் வரலாறு மதிப்பாய்வு செய்து, சாதனைகளை கண்காணிக்கவும்.",
      "other6.footerTitle": "APPMAKER பயிற்சி — Profile Dashboard",
      "other6.footerText": "மற்ற அம்சங்கள் 6 — உங்கள் Appmaker கணக்கை நிர்வகிப்பது பற்றி தெரிந்துகொள்ள வேண்டிய அனைத்தும்.",
      "other6.docTitle": "Profile Dashboard | Appmaker",
      "other7.kicker": "மற்ற அம்சங்கள் — 7/7",
      "other7.title": "The Appmaker Store",
      "other7.desc": "உங்கள் ஆப்பை உருவாக்கவும் வளர்க்கவும் உதவும் கருவிகளை கண்டறிந்து அணுக Appmaker Store-ஐ பயன்படுத்துவது எப்படி என்பதை அறிக.",
      "other7.footerTitle": "APPMAKER பயிற்சி — The Appmaker Store",
      "other7.footerText": "மற்ற அம்சங்கள் 7 — Appmaker Store-ஐ ஆராய்ந்து உங்கள் ஆப் பயணத்திற்கான சக்திவாய்ந்த add-ons-ஐ கண்டுபிடிக்கவும்.",
      "other7.docTitle": "The Appmaker Store | Appmaker",
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

  function setMetaContent(selector, content){
    if (!content) return;
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", content);
  }

  function syncUrlMetadata(){
    const path = window.location.pathname || "/";
    const lessonPathMatch = path.match(/\/(?:Tutorial_Videos\/)?((?:basic|after-launch|advanced|versa-ai|other)-\d+\.html)$/);
    if (!lessonPathMatch) return;

    const canonicalPath = `/Tutorial_Videos/${lessonPathMatch[1]}`;
    const canonicalUrl = `https://appmaker.lk${canonicalPath}`;

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute("href", canonicalUrl);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:url"]', canonicalUrl);
  }

  function syncLocalizedHeadMetadata(lang){
    const titleKey = document.querySelector('meta[name="i18n-title-key"]')?.getAttribute("content");
    if (titleKey) {
      const newTitle = t(lang, titleKey);
      if (newTitle) {
        document.title = newTitle;
        setMetaContent('meta[property="og:title"]', newTitle);
        setMetaContent('meta[name="twitter:title"]', newTitle);
      }

      const descKey = titleKey.replace(/\.(?:docTitle|title)$/, ".desc");
      if (descKey !== titleKey) {
        const newDesc = t(lang, descKey);
        if (newDesc) {
          setMetaContent('meta[name="description"]', newDesc);
          setMetaContent('meta[property="og:description"]', newDesc);
          setMetaContent('meta[name="twitter:description"]', newDesc);
        }
      }
    }
  }

  function applyLang(lang){
    document.documentElement.lang = lang === "si" ? "si" : (lang === "ta" ? "ta" : "en");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = t(lang, key);
      if (val) el.textContent = val;
    });

    syncLocalizedHeadMetadata(lang);
    syncUrlMetadata();

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

  const PROGRESS_KEY = 'am_visited_lessons';

  function markLessonVisited(lessonKey){
    if (!lessonKey) return;

    let visited = {};
    try{
      visited = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}") || {};
    }catch(_e){
      visited = {};
    }

    visited[lessonKey] = true;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(visited));
  }

  function getSectionProgress(prefix, total){
    let visited = {};
    try{
      visited = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}") || {};
    }catch(_e){
      visited = {};
    }

    const done = Object.keys(visited).filter(key => key.startsWith(prefix)).length;
    return { done, total };
  }

  function renderHubProgress(){
    const sections = [
      { prefix: "basic-", total: 9 },
      { prefix: "after-launch-", total: 4 },
      { prefix: "advanced-", total: 6 },
      { prefix: "versa-ai-", total: 4 },
      { prefix: "other-", total: 7 }
    ];

    const cards = document.querySelectorAll(".section-card");
    cards.forEach((card, idx) => {
      const config = sections[idx];
      if (!config) return;

      const { done, total } = getSectionProgress(config.prefix, config.total);
      const pct = total > 0 ? Math.min(100, (done / total) * 100) : 0;

      const progBar = card.querySelector(".s-prog span");
      if (progBar) progBar.style.width = `${pct}%`;

      const label = card.querySelector(".s-prog-label");
      if (label) label.textContent = `${done}/${total} completed`;
    });
  }

  applyTheme(getPreferredTheme());
  applyLang(getLang());
  initControls();
  initToTop();
  initLazyVideo();
  const match = window.location.pathname.match(/(basic|after-launch|advanced|versa-ai|other)-(\d+)\.html$/);
  if (match) markLessonVisited(`${match[1]}-${match[2]}`);
  if (document.body.classList.contains("hub-page")) renderHubProgress();
})();
