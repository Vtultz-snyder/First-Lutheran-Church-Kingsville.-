# First Lutheran Church Kingsville - website

Live: https://first-lutheran-kingsville.vercel.app
Branch: `august-2026-update` (this is the real one, `main` is a dead June snapshot)

## Read this before changing any text

This folder is a **compiled Next.js export**. There is no `.tsx` source any more,
anywhere. Every visible string exists in **two** places:

1. the served HTML, for example `about/index.html`
2. the JavaScript bundle, for example `_next/static/chunks/app/about/page-*.js`

The pages are client components. About a second after load, React re-renders from
the bundle and **overwrites anything you changed only in the HTML**.

This is not theoretical. Between June and August 2026, three rounds of review fixes
were made HTML-only. Every one of them silently reverted, `curl` and grep showed the
text as correct, and the client kept reporting the same problems for three months.

**So: change both, always. Then verify in a browser, never with curl.**

```bash
./check-site.sh          # check this folder
./check-site.sh live     # check the deployed site
```

That script renders every page in headless Chrome and inspects what a visitor
actually sees after React runs. If it says clean, the change really landed.

## Two pages that do not keep their content in the HTML

- `/calendar-events/` builds its month listing at runtime from
  `calendar-highlights.js` and `calendar-highlights-data.js`. The monthly content
  is in **`calendar-highlights-data.js`** (`monthLabel`, `pageIntro`, events).
  To add a new month's newsletter, edit that file. Nothing in the HTML.
- `featured-events.js` runs on every page. It adds the "Coming up" banner, the
  Facebook links in the footer, and a mobile nav fix. Events with a past `iso`
  date drop off automatically.

## History timeline (About page)

Photos live in the `p=[...]` array in the About bundle plus matching slides in
`about/index.html`. Each has a `date` field, currently empty. Put a real date in
and the red caption appears on its own. Leave it empty and no caption shows.
Do not put "Date unknown" back.

## Giving links

There is exactly **one** donation destination on this site:

    https://pushpay.com/g/lutheranchurchkingsville

It loads as "Give to First LC Kingsville". Every Give and Give Online button
uses it, in the nav, the mobile menu, and twice in the footer.

Do not add a second destination. Until 4 Sep 2026 the gold footer button linked
to `canadahelps.org/en/dn/35651`, which is **Arts Council Windsor & Region**, so
donations started from it went to another charity on all eleven pages. There is
no CanadaHelps listing for First Lutheran Kingsville. If the church ever sets one
up, get the exact URL from Austin and confirm the charity name on the page before
using it.

## Writing rules

**No long dashes. Ever.** No em dashes and no en dashes, including in number and
date ranges. Use hyphens, commas, colons, or reword. Victoria treats the em dash
as a tell that text was AI-written. `check-site.sh` fails the build if one appears.

## Deploying

Two hosts during the move. Both are plain static uploads, no build step.
**Do not add a `vercel.json` with a `buildCommand`.** One existed with `next build`
in it, and since there is no source to build, it failed every production deploy on 14 Aug.

```bash
git add -A && git commit -m "..." && git push origin august-2026-update
npx vercel deploy --prod --yes          # Vercel, current live preview
./deploy-cloudflare.sh                  # Cloudflare, where the church domain is going
```

Then check both, in a real browser:

```bash
./check-site.sh live
./check-site.sh https://first-lutheran-kingsville.victoria-tultz.workers.dev
```

### Cloudflare notes (set up 15 Sep 2026)

- Worker `first-lutheran-kingsville` in Victoria's personal Cloudflare account
  (victoria.tultz@gmail.com), same account as LEGACY. Static assets, free.
- `deploy-cloudflare.sh` copies only the public site into `.cf-dist/` and uploads that.
  Its excludes start with `/` so they match the top level only. An unanchored `app`
  also strips `_next/static/chunks/app/`, which is every page's content. The pages still
  load, look almost right, and check-site section 2 passes because the bundles never run.
  The script now aborts if those bundles are missing.
- Keep every `index.txt`. Next.js fetches them for page-to-page navigation.
- Cloudflare returns 403 to `Python-urllib`. check-site.sh sends a browser User-Agent for
  its link check. A wall of 403s means blocked, not broken.

### Never publish internal files

`.vercelignore` keeps this file, `check-site.sh`, the deploy script and `.env*` off
Vercel. Until 15 Sep 2026 Vercel was serving this file publicly, phone number included.

## Sharing the link

Send **https://first-lutheran-kingsville.vercel.app** and nothing else. Preview
URLs like `first-lutheran-kingsville-h4nxbqwbo.vercel.app` expire from view and
have already caused confusion. Never append `/app/` to it, that path is a 404.

## People

- Austin Dowhan, abd2795@outlook.com, 519-563-7474. Main church contact, holds
  the GoDaddy account for kingsvillelutheran.church (2FA, call before signing in)
- Becky Bunn, bbunn300@gmail.com. Sends the monthly newsletter, reviews content
- Steve and Janice Tultz, Victoria's parents, both review the site

## Still open

- Newsletter prints `lutheranchurchkingsville.com`, which has no DNS record at all.
  The old Wix site is at `kingsvillelutheran.church` (and still says 10:15 am).
  Becky/Ilene need the right address in the next newsletter.
- Sunday School is on pause this fall. Public pages now say so. Jennifer and
  Pamela are still named, matching the newsletter. Ask Becky if that should go neutral.
- No news page exists, so monthly items with no home (births, Food Bank moving to
  the Lions Hall, Anchor Youth Centre updates, volunteer calls) have nowhere to go.
- Confirm "Erie Migration District School" with Austin (he wrote "High School")
- GYM grades 9-12 wording, pending Sue Nurse
- Lunch ministry photos from Austin
- DNS cutover: Board approved 9 Sep 2026. Zone added to Cloudflare 15 Sep 2026 (records imported, all set DNS only, pending). Move kingsvillelutheran.church nameservers from GoDaddy (ns33/ns34.domaincontrol.com) to Cloudflare daisy.ns.cloudflare.com + ernest.ns.cloudflare.com on a call with Austin (his account, 2FA). Current records: apex A 185.230.63.107 (Wix), www CNAME pointing.wixdns.net, _dmarc TXT, no MX.
