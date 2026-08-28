#!/usr/bin/env bash
# Manual local deploy for heroicgameslauncher.com to the Hostinger VPS.
#
# Use this when the GitHub Actions workflow can't reach the VPS over SSH
# (Hostinger appears to block inbound SSH from GitHub's cloud IP ranges,
# regardless of port - see .github/workflows/deploy-vps.yml comments).
# Run this from your own machine instead, which connects fine.
#
# One-time setup before the first run:
#   scp -o StrictHostKeyChecking=no root@69.62.111.54:/home/deploy/.ssh/id_ed25519 ~/.ssh/heroic_deploy_key
#   chmod 600 ~/.ssh/heroic_deploy_key
#
# Usage:
#   ./deploy.sh

set -euo pipefail

VPS_HOST="69.62.111.54"
DEPLOY_KEY="$HOME/.ssh/heroic_deploy_key"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$SCRIPT_DIR"

if [ ! -f "$DEPLOY_KEY" ]; then
  echo "Deploy key not found at $DEPLOY_KEY"
  echo ""
  echo "Fetch it from the VPS first (one-time setup):"
  echo "  scp -o StrictHostKeyChecking=no root@${VPS_HOST}:/home/deploy/.ssh/id_ed25519 $DEPLOY_KEY"
  echo "  chmod 600 $DEPLOY_KEY"
  exit 1
fi

# macOS ships an ancient rsync (2.6.9, from ~2006, for licensing reasons -
# Apple never shipped a GPLv3 rsync). Its command-line syntax doesn't match
# what the VPS's restricted rrsync wrapper expects, and fails with
# "invalid rsync-command syntax or options". A Homebrew-installed rsync
# (3.x) works fine, so prefer that one if it's present.
RSYNC_BIN="rsync"
if command -v brew >/dev/null 2>&1; then
  BREW_PREFIX="$(brew --prefix rsync 2>/dev/null || true)"
  if [ -n "$BREW_PREFIX" ] && [ -x "$BREW_PREFIX/bin/rsync" ]; then
    RSYNC_BIN="$BREW_PREFIX/bin/rsync"
  fi
fi

RSYNC_VERSION_LINE="$("$RSYNC_BIN" --version | head -1)"
echo "Using rsync: $RSYNC_BIN ($RSYNC_VERSION_LINE)"

if echo "$RSYNC_VERSION_LINE" | grep -Eq "openrsync|version 2\."; then
  echo ""
  echo "This is the macOS-bundled rsync (Apple's openrsync / 2.x-compatible),"
  echo "which the VPS's restricted rrsync wrapper rejects."
  echo "Install a modern rsync via Homebrew and re-run this script:"
  echo "  brew install rsync"
  exit 1
fi

echo "==> Installing dependencies (pnpm install)"
pnpm install

echo "==> Building (pnpm build)"
pnpm build

echo "==> Exporting static site (pnpm export)"
pnpm export

if [ ! -d out ]; then
  echo "Error: out/ directory not found after export. Aborting deploy."
  exit 1
fi

echo "==> Deploying out/ to ${VPS_HOST} via rsync"
"$RSYNC_BIN" -avz --delete \
  -e "ssh -i ${DEPLOY_KEY} -o StrictHostKeyChecking=no" \
  out/ "deploy@${VPS_HOST}:"

echo "==> Done. https://heroicgameslauncher.com should reflect the new build shortly."
