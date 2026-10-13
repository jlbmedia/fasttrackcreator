# Project Instructions: Fast Track Creator & Compact Keyword Network

This project adheres to the **Master Specification: Compact Keyword Authority Site Architecture**.

## Non-Negotiable Core Rules:
1. **Isolated Repositories:** Keep this site in its own `.git` repository, independent of parent workspace.
2. **Compact Keyword Hierarchy:** Target low-competition, high-intent buyer keywords with Click Depth $\le 2$ from the homepage.
3. **Defensive SEO:** Exactly 1 `<h1>` per page, meta descriptions strictly between 120 and 158 characters, absolute canonical tags, Schema.org JSON-LD, zero broken links, and true 404 HTTP status responses.
4. **Affiliate Cloaking & Shielding:** Outbound affiliate links must use first-party `/go/{slug}` redirects, shielded with `Disallow: /go/` in `robots.txt`, `X-Robots-Tag: noindex, nofollow`, and `rel="nofollow noopener noreferrer"`.
5. **Mandatory 5 Compliance Pages:** Every site must have `/about/`, `/contact/` (using `contact@fasttrackcreator.com`), `/privacy-policy/`, `/terms-of-service/`, and `/affiliate-disclosure/` with an FTC disclosure notice in the global footer.
6. **GA4 Tracking:** GA4 property `G-YHR1WVZJ59` with automated `affiliate_click` outbound conversion event listeners on `/go/*` links.
7. **Complete Favicon Suite:** Multi-resolution icons (`favicon.ico`, `favicon.svg`, `favicon-48x48.png` for Google SERP, 32x32, 16x16, `apple-touch-icon.png`, `site.webmanifest`).
8. **Cloudflare Edge Routing:** Deploy `_worker.js` for instant 301 redirects from `www` to apex canonical, and always deploy with `--branch=main`.
9. **Search Ingestion:** Submit sitemap to Google Search Console via Service Account API and ping IndexNow (`api.indexnow.org` and `bing.com`) for all site URLs.
