// Visual + timing probe. Usage: node scripts/shoot.mjs <url> <out.png> [clickSelector] [out2.png]
const pwEntry = process.env.PW || '/tmp/pw/node_modules/playwright/index.js'
const pw = await import(pwEntry)
const chromium = pw.chromium || pw.default?.chromium

const [url, outPath, clickSelector, outPath2] = process.argv.slice(2)

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })

const errors = []
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text())
})
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

const t0 = Date.now()
await page.goto(url, { waitUntil: 'domcontentloaded' })
const domReady = Date.now() - t0
await page.waitForLoadState('networkidle').catch(() => {})
const netIdle = Date.now() - t0

await page.screenshot({ path: outPath, fullPage: true })
console.log(`[${url}] domcontentloaded=${domReady}ms networkidle=${netIdle}ms`)
if (errors.length) console.log('  console errors:\n   - ' + errors.slice(0, 8).join('\n   - '))
else console.log('  no console errors')

if (clickSelector) {
  const before = page.url()
  const c0 = Date.now()
  await page.click(clickSelector).catch((e) => console.log('  click failed:', e.message))
  await page.waitForLoadState('networkidle').catch(() => {})
  const after = page.url()
  console.log(`  click "${clickSelector}": ${before} -> ${after} (${Date.now() - c0}ms)`)
  if (outPath2) await page.screenshot({ path: outPath2, fullPage: true })
}

await browser.close()
