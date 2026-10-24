"""Fetches headlines from public RSS feeds and writes headlines.json (titles and links only)."""
import html, json, re, sys, urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime

# category id: (tab name, [(source name, feed url), ...]). Edit freely.
FEEDS = {
    "top": ("Top stories", [("NPR", "https://feeds.npr.org/1001/rss.xml"), ("BBC", "https://feeds.bbci.co.uk/news/rss.xml"), ("CNBC", "https://www.cnbc.com/id/100003114/device/rss/rss.html")]),
    "politics": ("Politics", [("NPR", "https://feeds.npr.org/1014/rss.xml"), ("The Guardian", "https://www.theguardian.com/us-news/us-politics/rss"), ("CNBC", "https://www.cnbc.com/id/10000113/device/rss/rss.html")]),
    "world": ("World & government", [("BBC", "https://feeds.bbci.co.uk/news/world/rss.xml"), ("NPR", "https://feeds.npr.org/1004/rss.xml"), ("The Guardian", "https://www.theguardian.com/world/rss")]),
    "business": ("Business", [("NPR", "https://feeds.npr.org/1006/rss.xml"), ("BBC", "https://feeds.bbci.co.uk/news/business/rss.xml"), ("CNBC", "https://www.cnbc.com/id/10001147/device/rss/rss.html")]),
    "finance": ("Finance", [("CNBC", "https://www.cnbc.com/id/10000664/device/rss/rss.html"), ("MarketWatch", "https://feeds.content.dowjones.io/public/rss/mw_topstories"), ("The Guardian", "https://www.theguardian.com/business/rss")]),
    "economy": ("Economy", [("NPR", "https://feeds.npr.org/1017/rss.xml"), ("CNBC", "https://www.cnbc.com/id/20910258/device/rss/rss.html"), ("Federal Reserve", "https://www.federalreserve.gov/feeds/press_all.xml")]),
    "startups": ("Startups", [("TechCrunch", "https://techcrunch.com/category/startups/feed/"), ("Crunchbase News", "https://news.crunchbase.com/feed/")]),
}

def tag(e): return e.tag.split("}")[-1]

def child(e, name):
    for c in e:
        if tag(c) == name: return (c.text or "").strip()
    return ""

def parse(xml):
    out = []
    for e in ET.fromstring(xml).iter():
        if tag(e) in ("item", "entry"):
            link = child(e, "link")
            if not link:
                link = next((c.get("href") for c in e if tag(c) == "link" and c.get("href")), "")
            date = child(e, "pubDate") or child(e, "published") or child(e, "updated") or child(e, "date")
            out.append((html.unescape(child(e, "title")), link, date))
    return out

def when(s):
    try: dt = parsedate_to_datetime(s)
    except Exception:
        try: dt = datetime.fromisoformat(s.replace("Z", "+00:00"))
        except Exception: return ""
    if dt.tzinfo is None: dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc).isoformat()

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (BizLab headlines)"})
    with urllib.request.urlopen(req, timeout=20) as r: return r.read()

if __name__ == "__main__":
    result = {}
    for cid, (name, feeds) in FEEDS.items():
        items = []
        for source, url in feeds:
            try:
                for title, link, d in parse(get(url))[:12]:
                    if title and link.startswith("http"):
                        items.append({"title": title, "link": link, "source": source, "date": when(d)})
            except Exception as e:
                print("FAILED", source, url, e, file=sys.stderr)
        seen, uniq = set(), []
        for it in sorted(items, key=lambda x: x["date"], reverse=True):
            key = re.sub(r"\W+", "", it["title"].lower())
            if key not in seen:
                seen.add(key); uniq.append(it)
        result[cid] = {"name": name, "items": uniq[:10]}
        print(cid, len(uniq), "headlines")
    if not any(v["items"] for v in result.values()):
        sys.exit("No headlines fetched; keeping the previous file.")
    with open("headlines.json", "w", encoding="utf-8") as f:
        json.dump({"updated": datetime.now(timezone.utc).isoformat(), "categories": result}, f, indent=1, ensure_ascii=False)
