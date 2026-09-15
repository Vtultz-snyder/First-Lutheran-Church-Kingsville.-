#!/bin/bash
# Deploy the site to Cloudflare. Copies ONLY the public site into .cf-dist,
# then uploads that. Internal files (CLAUDE.md, .env, node_modules, .git) never leave this machine.
#   ./deploy-cloudflare.sh            deploy
#   ./deploy-cloudflare.sh --dry-run  show what would upload
# Excludes starting with "/" match the top level only. Do NOT drop the slash:
# an unanchored "app" also strips _next/static/chunks/app/, which is every page's content.
set -euo pipefail
cd "$(dirname "$0")"
rm -rf .cf-dist
rsync -a \
  --exclude "/.cf-dist" --exclude "/.git" --exclude "/.git 2" --exclude "/.vercel" --exclude "/.shipstudio" \
  --exclude "/node_modules" --exclude "/app" --exclude "/public" \
  --exclude "/CLAUDE.md" --exclude "/check-site.sh" --exclude "/deploy-cloudflare.sh" \
  --exclude "/wrangler.jsonc" --exclude "/.gitignore" --exclude "/.vercelignore" \
  --exclude ".env*" --exclude ".DS_Store" \
  ./ .cf-dist/
[ -d .cf-dist/_next/static/chunks/app ] || { echo "ABORT: page bundles missing from .cf-dist"; exit 1; }
echo "Staged $(find .cf-dist -type f | wc -l | tr -d ' ') files"
npx --yes wrangler@4 deploy "$@"
