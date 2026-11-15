This is a the Heroic Games Launcher Website repository

## How to contribute

Setting up a development environment:

1. Make sure Git, NodeJS, and Yarn are installed
2. Clone the repo and enter the cloned folder, for example with the following commands:

```bash
git clone https://github.com/Heroic-Games-Launcher/heroic-website.git
cd heroic-website
```

To run the development server:

```bash
npm run dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The site is a static Next.js export (`pnpm build && pnpm export` → `out/`):

- `.github/workflows/deploy-vps.yml` builds it and force-pushes `out/` to the
  `deploy` branch.
- The VPS pulls that branch every 5 minutes via `scripts/vps-pull-deploy.sh`
  and rsyncs it into the web root.
- `deploy.sh` does the same thing from a local machine (used when GitHub can't
  reach the VPS).

### Server configuration

`deploy/nginx.conf.example` is the nginx vhost. Two rules in it are
load-bearing and must not be replaced by a catch-all `index.html` fallback:

1. **Unknown paths return a real 404.** A `** -> /index.html` rewrite (which
   `firebase.json` used to have) makes every typo a duplicate home page: Google
   files them as soft 404s and Plausible counts them as pageviews.
2. **Non-canonical URLs 301 to the canonical one.** `/donate/` and
   `/donate.html` redirect to `/donate`. Without this, `/donate/` served the
   home page and Plausible recorded a URL that no `page`/`exit page` filter
   matches.

### Post-deploy check

```bash
pnpm check:deploy          # https://heroicgameslauncher.com
SITE_URL=http://localhost:8080 pnpm check:deploy   # any static server
```

Verifies that `/donate` and `/downloads` render, that trailing-slash and
`.html` variants 301 to the clean URL, and that unknown paths return 404. It is
also wired into the deploy workflow as an informational (non-blocking) step.
