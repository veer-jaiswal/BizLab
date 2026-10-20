/* BizLab shared site code. Site name, author, sections, and contact email are set at the top. */
const SITE = { first: "Biz", second: "Lab", tagline: "Business, venture capital, finance, and economics", author: "Veer Jaiswal" };
const CONTACT_EMAIL = "hridayveer.3@gmail.com";
const SECTIONS = [
  { id: "business", name: "Business", blurb: "How companies are built, run, and measured." },
  { id: "venture", name: "Venture capital", blurb: "How startups get funded and what investors look for." },
  { id: "finance", name: "Finance", blurb: "Money, markets, and the numbers behind decisions." },
  { id: "economy", name: "Economics", blurb: "The forces behind prices, jobs, and growth." }
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const day = (d) => new Date(d.length > 10 ? d : d + "T12:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const clock = (d) => new Date(d).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
const stamp = (d) => `${day(d)} at ${clock(d)}`;
const sorted = () => [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
const sectionName = (id) => (SECTIONS.find((s) => s.id === id) || { name: id }).name;
const link = (a) => `article.html?id=${encodeURIComponent(a.id)}`;
const minutes = (a) => Math.max(1, Math.round(a.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));
const main = document.getElementById("main");

function row(a) {
  return `<article class="article-row">
    <div class="article-meta"><time datetime="${a.date}">${day(a.date)}</time><span>${minutes(a)} min read</span></div>
    <div><h3><a href="${link(a)}">${esc(a.title)}</a></h3><p>${esc(a.summary)}</p><p class="by">By ${SITE.author}</p></div>
    <a href="${link(a)}" aria-hidden="true" tabindex="-1">→</a></article>`;
}

function renderHeader(active) {
  const items = SECTIONS.map((s) => `<a href="index.html#${s.id}"${active === s.id ? ' class="active"' : ""}>${s.name}</a>`).join("")
    + ["about", "contact"].map((p) => `<a href="${p}.html"${active === p ? ' class="active" aria-current="page"' : ""}>${p[0].toUpperCase() + p.slice(1)}</a>`).join("");
  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  document.getElementById("site-header").innerHTML = `
    <div class="topline"><p>${SITE.tagline}</p><p>${today}</p></div>
    <div class="masthead"><a class="wordmark" href="index.html" aria-label="${SITE.first}${SITE.second} home">${SITE.first}<span>${SITE.second}</span></a>
    <button class="menu-button" aria-expanded="false" aria-controls="site-nav">Menu <span></span></button></div>
    <nav id="site-nav" class="site-nav" aria-label="Primary">${items}</nav>`;
  const btn = document.querySelector(".menu-button"), nav = document.getElementById("site-nav");
  btn.addEventListener("click", () => btn.setAttribute("aria-expanded", String(nav.classList.toggle("open"))));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }));
}

function renderHome() {
  const all = sorted();
  if (!all.length) { main.innerHTML = `<section class="intro"><h1>Nothing here yet.</h1><p class="dek">Add your first article in articles.js.</p></section>`; return; }
  const a = all[0];
  const topics = SECTIONS.map((s) => `<li><a href="#${s.id}"><span>${s.name}</span><span>${all.filter((x) => x.section === s.id).length}</span></a></li>`).join("");
  const news = typeof NEWS !== "undefined" && NEWS.length ? `<section id="news" class="topic" aria-labelledby="news-title">
      <div class="section-heading"><h2 id="news-title">In the news</h2><p>Stories worth reading, with a one-line take.</p></div>
      <div class="article-list">${NEWS.map((n) => `<article class="article-row"><div class="article-meta"><time datetime="${n.date}">${day(n.date)}</time><span>${esc(n.source)}</span></div>
      <div><h3><a href="${esc(n.url)}" target="_blank" rel="noopener">${esc(n.title)}</a></h3><p>${esc(n.note)}</p></div><a href="${esc(n.url)}" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">↗</a></article>`).join("")}</div></section>` : "";
  const blocks = SECTIONS.map((s) => {
    const list = all.filter((x) => x.section === s.id);
    return `<section id="${s.id}" class="topic" aria-labelledby="${s.id}-title">
      <div class="section-heading"><h2 id="${s.id}-title">${s.name}</h2><p>${s.blurb}</p></div>
      <div class="article-list">${list.length ? list.map(row).join("") : '<p class="empty">No articles in this section yet.</p>'}</div></section>`;
  }).join("");
  main.innerHTML = `
    <section class="intro"><h1>The lessons hiding in the work.</h1>
    <p class="dek">BizLab is an independent publication on business, venture capital, finance, and economics. It explains how these fields really work in plain language, with worked examples and the occasional lesson from hands-on experience.</p>
    <p class="intro-links"><a class="text-link" href="#latest">Read the latest</a><a class="text-link" href="about.html">About the author</a></p></section>
    <section id="latest" class="feature-grid" aria-labelledby="feature-title">
      <article class="feature-story">
        <div class="story-kicker"><span>Latest article</span><time datetime="${a.date}">${stamp(a.date)}</time></div>
        <a class="feature-art" href="${link(a)}" aria-hidden="true" tabindex="-1"><div class="sun"></div><div class="horizon"></div><div class="shape shape-one"></div><div class="shape shape-two"></div><div class="shape shape-three"></div></a>
        <p class="category">${esc(sectionName(a.section))}</p>
        <h2 id="feature-title"><a href="${link(a)}">${esc(a.title)}</a></h2>
        <p class="summary">${esc(a.summary)}</p>
        <p class="by">By ${SITE.author} · ${minutes(a)} min read</p>
        <a class="text-link" href="${link(a)}">Read the article <span>→</span></a>
      </article>
      <aside class="topics"><h2 class="eyebrow">Browse by topic</h2><ul>${topics}</ul></aside>
    </section>${news}${blocks}`;
}

function renderArticle() {
  const a = ARTICLES.find((x) => x.id === new URLSearchParams(location.search).get("id"));
  renderHeader(a && a.section);
  if (!a) { document.title = "Not found — " + SITE.first + SITE.second; main.innerHTML = `<section class="article"><h1>Article not found</h1><p class="prose"><a href="index.html">Back to all articles</a></p></section>`; return; }
  document.title = `${a.title} — ${SITE.first}${SITE.second}`;
  document.querySelector('meta[name="description"]').content = a.summary;
  const more = sorted().filter((x) => x.section === a.section && x.id !== a.id).slice(0, 3);
  main.innerHTML = `<article class="article">
      <a class="back" href="index.html#${a.section}">← ${esc(sectionName(a.section))}</a>
      <h1>${esc(a.title)}</h1>
      <p class="dek-article">${esc(a.summary)}</p>
      <p class="byline"><span>By ${SITE.author}</span><time datetime="${a.date}">${stamp(a.date)}</time><span>${minutes(a)} min read</span></p>
      <div class="prose">${a.body}</div>
      <p class="disclaimer">BizLab articles are for general education and are not financial, legal, or tax advice.</p>
      <button class="button" id="copy-link" type="button">Copy link</button>
    </article>
    ${more.length ? `<section class="more"><div class="section-heading"><h2>More in ${esc(sectionName(a.section))}</h2></div><div class="article-list">${more.map(row).join("")}</div></section>` : ""}`;
  const copy = document.getElementById("copy-link");
  copy.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); copy.textContent = "Link copied"; }
    catch { copy.textContent = "Copy the link from your address bar"; }
  });
}

function initContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  if (new URLSearchParams(location.search).get("sent")) { form.outerHTML = '<p class="lead">Thanks, your message was sent. I\'ll reply by email.</p>'; return; }
  document.getElementById("next-url").value = location.origin + location.pathname + "?sent=1";
}

const page = document.body.dataset.page;
if (page === "article") renderArticle(); else renderHeader(page === "about" || page === "contact" ? page : "");
if (page === "home") renderHome();
if (page === "contact") initContact();
document.getElementById("site-footer").innerHTML = `<a class="wordmark small" href="index.html">${SITE.first}<span>${SITE.second}</span></a><p>${SITE.tagline}.</p><p>© ${new Date().getFullYear()} ${SITE.author}</p>`;
