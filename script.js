/* BizLab — shared site code. Rename the site or edit the sections here. */
const SITE = { first: "Biz", second: "Lab", tagline: "Business, venture capital, finance, and economics" };
const SECTIONS = [
  { id: "business", name: "Business", blurb: "How companies are built, run, and measured." },
  { id: "venture", name: "Venture capital", blurb: "How startups get funded and what investors look for." },
  { id: "finance", name: "Finance", blurb: "Money, markets, and the numbers behind decisions." },
  { id: "economy", name: "Economics", blurb: "The forces behind prices, jobs, and growth." }
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const sorted = () => [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
const sectionName = (id) => (SECTIONS.find((s) => s.id === id) || { name: id }).name;
const link = (a) => `article.html?id=${encodeURIComponent(a.id)}`;
const minutes = (a) => Math.max(1, Math.round(a.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));
const main = document.getElementById("main");

function row(a) {
  return `<article class="article-row">
    <div class="article-meta"><time datetime="${a.date}">${fmt(a.date)}</time><span>${minutes(a)} min read</span></div>
    <div><h3><a href="${link(a)}">${esc(a.title)}</a></h3><p>${esc(a.summary)}</p></div>
    <a href="${link(a)}" aria-hidden="true" tabindex="-1">→</a></article>`;
}

function renderHeader(active) {
  const items = SECTIONS.map((s) => `<a href="index.html#${s.id}"${active === s.id ? ' class="active"' : ""}>${s.name}</a>`).join("")
    + `<a href="about.html"${active === "about" ? ' class="active" aria-current="page"' : ""}>About</a>`;
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
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
  if (!all.length) { main.innerHTML = `<section class="intro"><h1>Nothing here yet.</h1><p class="dek">Add your first article in articles.js and it will show up here.</p></section>`; return; }
  const a = all[0];
  const topics = SECTIONS.map((s) => `<li><a href="#${s.id}"><span>${s.name}</span><span>${all.filter((x) => x.section === s.id).length}</span></a></li>`).join("");
  const blocks = SECTIONS.map((s) => {
    const list = all.filter((x) => x.section === s.id);
    return `<section id="${s.id}" class="topic" aria-labelledby="${s.id}-title">
      <div class="section-heading"><h2 id="${s.id}-title">${s.name}</h2><p>${s.blurb}</p></div>
      <div class="article-list">${list.length ? list.map(row).join("") : '<p class="empty">No articles in this section yet.</p>'}</div></section>`;
  }).join("");
  main.innerHTML = `
    <section class="intro"><h1>The lessons hiding in the work.</h1>
    <p class="dek">General lessons on business, venture capital, finance, and economics, with notes from my own experience along the way.</p></section>
    <section id="latest" class="feature-grid" aria-labelledby="feature-title">
      <article class="feature-story">
        <div class="story-kicker"><span>Latest article</span><time datetime="${a.date}">${fmt(a.date)}</time></div>
        <a class="feature-art" href="${link(a)}" aria-hidden="true" tabindex="-1"><div class="sun"></div><div class="horizon"></div><div class="shape shape-one"></div><div class="shape shape-two"></div><div class="shape shape-three"></div></a>
        <p class="category">${esc(sectionName(a.section))}</p>
        <h2 id="feature-title"><a href="${link(a)}">${esc(a.title)}</a></h2>
        <p class="summary">${esc(a.summary)}</p>
        <a class="text-link" href="${link(a)}">Read the article <span>→</span></a>
      </article>
      <aside class="topics"><h2 class="eyebrow">Browse by topic</h2><ul>${topics}</ul></aside>
    </section>${blocks}`;
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
      <p class="byline"><time datetime="${a.date}">${fmt(a.date)}</time><span>${minutes(a)} min read</span></p>
      <div class="prose">${a.body}</div>
      <button class="button" id="copy-link" type="button">Copy link</button>
    </article>
    ${more.length ? `<section class="more"><div class="section-heading"><h2>More in ${esc(sectionName(a.section))}</h2></div><div class="article-list">${more.map(row).join("")}</div></section>` : ""}`;
  const copy = document.getElementById("copy-link");
  copy.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); copy.textContent = "Link copied"; }
    catch { copy.textContent = "Copy the link from your address bar"; }
  });
}

const page = document.body.dataset.page;
if (page === "article") renderArticle(); else renderHeader(page === "about" ? "about" : "");
if (page === "home") renderHome();
document.getElementById("site-footer").innerHTML = `<a class="wordmark small" href="index.html">${SITE.first}<span>${SITE.second}</span></a><p>${SITE.tagline}.</p><p>© ${new Date().getFullYear()}</p>`;
