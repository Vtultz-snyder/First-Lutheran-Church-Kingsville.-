#!/bin/bash
# Verify the First Lutheran site the only way that actually works:
# render every page in a real browser and check what the visitor sees
# AFTER React runs, not what the HTML says.
#
#   ./check-site.sh          checks this folder (via a temporary local server)
#   ./check-site.sh live     checks https://first-lutheran-kingsville.vercel.app
#
# Exit code 0 = clean, 1 = problems found.

set -uo pipefail
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME"; exit 1; }

PAGES="/ /about/ /worship-services/ /calendar-events/ /prayer-group/ /childrens-ministry/ /youth-ministry/ /faith-scriptures/ /connect-groups/ /health-care-ministry/"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"; [ -n "${SRV:-}" ] && kill "$SRV" 2>/dev/null' EXIT

if [ "${1:-local}" = "live" ]; then
  BASE="https://first-lutheran-kingsville.vercel.app"
  echo "Checking LIVE: $BASE"
else
  PORT=8811
  python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
  SRV=$!
  sleep 1.5
  BASE="http://127.0.0.1:$PORT"
  echo "Checking THIS FOLDER via $BASE"
fi
echo

for p in $PAGES; do
  name=$(echo "$p" | tr -d '/'); name=${name:-home}
  curl -sfL "$BASE$p" -o "$TMP/raw-$name.html" || echo "  WARN: could not fetch $p"
  "$CHROME" --headless --disable-gpu --virtual-time-budget=14000 \
    --dump-dom "$BASE$p" 2>/dev/null > "$TMP/hyd-$name.html"
done

python3 - "$TMP" "$BASE" <<'PY'
import sys, os, re, html, glob, urllib.request, urllib.parse

TMP, BASE = sys.argv[1], sys.argv[2]
fails = []

def plain(path):
    t = open(path, encoding="utf-8", errors="replace").read()
    t = re.sub(r"<script.*?</script>", "", t, flags=re.S)
    t = re.sub(r"<style.*?</style>", "", t, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", t)))

# Anything in this list must never appear on the rendered page again.
STALE = {
    "Lutheran Church-Canada":  r"Lutheran Church-Canada",
    "1947 founding":           r"Serving Kingsville Since 1947|over 75 years|Established 1947",
    "organ":                   r"piano and organ",
    "1st & 3rd Sundays":       r"1st\s*&\s*3rd|first and third Sundays",
    "CoDA / FunFit":           r"CoDA|Co-?Dependency|FunFit",
    "Music & Choir":           r"Music & Choir",
    "old ministry label":      r"Health & Care Ministry",
    "May/June leftovers":      r"Details: June Events|May and June 2026 Calendar|refreshed from the May and June",
    "Date unknown":            r"Date unknown",
    "long dash":               r"[–—]",
    "long Brandner quote":     r"a lot of churches do not have",
}

print("1. Stale copy on the rendered page")
bad = 0
for f in sorted(glob.glob(TMP + "/hyd-*.html")):
    n = os.path.basename(f)[4:-5]
    t = plain(f)
    hits = [k for k, p in STALE.items() if re.search(p, t, re.I)]
    if hits:
        bad += 1; print(f"   FAIL {n}: {hits}"); fails.append(n)
print("   clean on all pages" if not bad else "")

print("\n2. Does the HTML survive React? (edits made only in HTML get reverted)")
IGNORE = re.compile(r"June|Zumba|Gleaners|SMART|Ladies Community Tea|Music Concert|All rights reserved|May and June", re.I)
# /calendar-events/ rebuilds its whole listing at runtime from
# calendar-highlights-data.js, so a pre/post diff there is meaningless.
SKIP_DIFF = {"calendar-events"}
for f in sorted(glob.glob(TMP + "/hyd-*.html")):
    n = os.path.basename(f)[4:-5]
    if n in SKIP_DIFF: continue
    raw = TMP + "/raw-" + n + ".html"
    if not os.path.exists(raw): continue
    def lines(p):
        t = open(p, encoding="utf-8", errors="replace").read()
        t = re.sub(r"<script.*?</script>", "", t, flags=re.S)
        t = re.sub(r"<style.*?</style>", "", t, flags=re.S)
        t = html.unescape(re.sub(r"<[^>]+>", "\n", t))
        return [l.strip() for l in t.split("\n") if l.strip()]
    a, b = lines(raw), set(lines(f))
    lost = [x for x in a if x not in b and len(x) > 15 and not IGNORE.search(x)]
    if lost:
        print(f"   FAIL {n}: {len(lost)} line(s) in the HTML vanish once React runs")
        for l in lost[:4]: print(f"        - {l[:110]}")
        fails.append(n)
print("   (past events auto-hide, and /calendar-events/ rebuilds itself, so both are ignored)")

print("\n3. Links and images")
refs = set()
for f in glob.glob(TMP + "/hyd-*.html"):
    t = open(f, encoding="utf-8", errors="replace").read()
    for m in re.finditer(r'(?:href|src)="(/[^"#?]*)"', t): refs.add(m.group(1))
broken = []
if BASE.startswith("http://127.0.0.1") or BASE.startswith("https://"):
    for r in sorted(refs):
        u = BASE + urllib.parse.quote(r)
        try:
            code = urllib.request.urlopen(urllib.request.Request(u, method="HEAD"), timeout=25).status
        except Exception as e:
            code = getattr(e, "code", "ERR")
        if code != 200: broken.append((r, code))
print(f"   {len(refs)} checked, {len(broken)} broken")
for b in broken: print("        BROKEN:", b); fails.append("links")

print()
if fails:
    print("RESULT: problems found. Fix them in BOTH the HTML and the matching")
    print("        _next/static/chunks/app/**/page-*.js, then run this again.")
    sys.exit(1)
print("RESULT: clean.")
PY
