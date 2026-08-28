#!/usr/bin/env bash
# Runs ON THE VPS to pull the latest static build from the repo's "deploy"
# branch and sync it into the web root.
#
# The GitHub Actions workflow (.github/workflows/deploy-vps.yml) builds the
# site and force-pushes the contents of out/ to the "deploy" branch. This
# script polls that branch and deploys it when a new commit appears. Pull
# instead of push because Hostinger blocks inbound SSH from GitHub's runner
# IP ranges.
#
# Safe to run as root (it re-executes itself as the deploy user) or as the
# deploy user directly. Pass --force to redeploy even when the branch hasn't
# changed since the last run.
#
# One-time setup on the VPS (as root):
#   1. Copy this script to /home/deploy/vps-pull-deploy.sh
#   2. chown deploy:deploy /home/deploy/vps-pull-deploy.sh
#      chmod +x /home/deploy/vps-pull-deploy.sh
#   3. Add it to the deploy user's crontab:
#        crontab -u deploy -e
#        */5 * * * * /home/deploy/vps-pull-deploy.sh >> /home/deploy/deploy.log 2>&1

set -euo pipefail

REPO_URL="https://github.com/Heroic-Games-Launcher/heroic-website.git"
BRANCH="deploy"
DEPLOY_USER="deploy"
DEPLOY_HOME="/home/deploy"
CHECKOUT_DIR="$DEPLOY_HOME/.site-checkout"
STAMP_FILE="$DEPLOY_HOME/.last-deployed-commit"

# If invoked as root, hand over to the deploy user so every file ends up with
# the right owner (a root-owned checkout would break the cron runs later).
if [ "$(id -u)" = "0" ]; then
  chown -R "$DEPLOY_USER:$DEPLOY_USER" "$CHECKOUT_DIR" 2>/dev/null || true
  exec sudo -u "$DEPLOY_USER" WEBROOT="${WEBROOT:-}" "$(readlink -f "$0")" "$@"
fi

# Web root = the directory the old rsync-over-SSH deploy wrote to, which is
# locked into the rrsync forced command in authorized_keys, e.g.:
#   command="/usr/bin/rrsync -wo /var/www/site",restrict ssh-ed25519 ...
# Auto-detect it from there; override by exporting WEBROOT if needed.
if [ -z "${WEBROOT:-}" ]; then
  WEBROOT="$(grep -oE '[^", ]*rrsync[^"]*' "$DEPLOY_HOME/.ssh/authorized_keys" 2>/dev/null \
    | head -1 | awk '{print $NF}')"
fi
WEBROOT="${WEBROOT:-$DEPLOY_HOME}"
echo "Web root: $WEBROOT"

if [ ! -d "$CHECKOUT_DIR/.git" ]; then
  git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$CHECKOUT_DIR"
fi

cd "$CHECKOUT_DIR"
git fetch --depth 1 origin "$BRANCH"
REMOTE="$(git rev-parse "origin/$BRANCH")"
LAST_DEPLOYED="$(cat "$STAMP_FILE" 2>/dev/null || echo none)"

if [ "${1:-}" = "--force" ]; then
  LAST_DEPLOYED=none
fi

if [ "$REMOTE" = "$LAST_DEPLOYED" ]; then
  exit 0
fi

git reset --hard "origin/$BRANCH"

# --exclude '/.*' keeps root-level dotfiles/dirs (.ssh, .bashrc, the checkout
# itself, this stamp file) safe from --delete when WEBROOT is the home dir.
echo "Syncing to $WEBROOT ..."
rsync -a --delete --stats --exclude '/.*' "$CHECKOUT_DIR"/ "$WEBROOT"/ \
  | grep -E 'files transferred|deleted'

echo "$REMOTE" > "$STAMP_FILE"
echo "$(date -u '+%Y-%m-%dT%H:%M:%SZ') deployed $REMOTE"
