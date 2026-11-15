#!/usr/bin/env node
// Post-deploy smoke test for heroicgameslauncher.com.
//
// Catches the two regressions that went unnoticed for months (see
// deploy/nginx.conf.example for the background):
//
//   1. Serving the home page with HTTP 200 for unknown paths (soft 404 farm).
//   2. Serving /donate/ (or /donate.html) instead of redirecting to /donate,
//      which also makes Plausible record a URL that no filter matches.
//
// Usage:
//   node scripts/check-deploy.mjs                      # production
//   SITE_URL=http://localhost:8080 node scripts/check-deploy.mjs
//
// Exits 1 when any check fails, so it can gate a deploy or run on a schedule.

const BASE = (
  process.env.SITE_URL || 'https://heroicgameslauncher.com'
).replace(/\/+$/, '')

const checks = [
  {
    name: 'home page',
    path: '/',
    expect: 200,
    contains: 'Heroic Games Launcher'
  },
  {
    name: 'donate page',
    path: '/donate',
    expect: 200,
    contains: 'Support Heroic Development'
  },
  {
    name: 'downloads page',
    path: '/downloads',
    expect: 200,
    contains: 'Download Heroic Games Launcher'
  },
  {
    name: 'trailing slash redirects to canonical URL',
    path: '/donate/',
    expect: 301,
    location: '/donate'
  },
  {
    name: '.html redirects to clean URL',
    path: '/donate.html',
    expect: 301,
    location: '/donate'
  },
  {
    name: 'unknown path returns 404 (not the home page)',
    path: '/this-path-does-not-exist-please-404',
    expect: 404
  },
  {
    name: 'unknown path with trailing slash returns 404 (directly or after the 301)',
    path: '/this-path-does-not-exist-please-404/',
    expect: 404,
    // The vhost 301s the trailing slash off first, so following one redirect is
    // a pass as long as the destination actually 404s.
    followRedirect: true
  }
]

const get = async (path) => {
  const res = await fetch(BASE + path, {
    redirect: 'manual',
    headers: { 'user-agent': 'heroic-website-deploy-check' }
  })
  const body = res.status === 200 ? await res.text() : ''
  return { status: res.status, location: res.headers.get('location'), body }
}

const run = async () => {
  console.log(`Checking ${BASE}\n`)
  let failed = 0

  for (const check of checks) {
    let result
    try {
      result = await get(check.path)
      if (
        check.followRedirect &&
        result.status >= 300 &&
        result.status < 400 &&
        result.location
      ) {
        const target = new URL(result.location, BASE)
        result = {
          ...(await get(target.pathname + target.search)),
          followed: true
        }
      }
    } catch (error) {
      failed++
      console.log(
        `FAIL  ${check.name}\n      ${check.path} -> ${error.message}`
      )
      continue
    }

    const problems = []
    if (result.status !== check.expect) {
      problems.push(`expected HTTP ${check.expect}, got ${result.status}`)
    }
    if (check.location && !(result.location || '').endsWith(check.location)) {
      problems.push(
        `expected redirect to ${check.location}, got ${
          result.location || 'none'
        }`
      )
    }
    if (check.contains && !result.body.includes(check.contains)) {
      problems.push(`response does not contain "${check.contains}"`)
    }

    if (problems.length) {
      failed++
      console.log(`FAIL  ${check.name}`)
      console.log(`      ${check.path}`)
      for (const problem of problems) console.log(`      - ${problem}`)
    } else {
      console.log(`ok    ${check.name} (${check.path} -> ${result.status})`)
    }
  }

  console.log()
  if (failed) {
    console.log(`${failed} check(s) failed`)
    process.exit(1)
  }
  console.log('All checks passed')
}

run()
