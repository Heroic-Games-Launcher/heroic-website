// Generates public/og-image.png (1200x630) used for Open Graph / Twitter cards.
// Re-run after updating the hero screenshot:  node scripts/generate-og-image.mjs
import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const W = 1200
const H = 630

const logoB64 = readFileSync(resolve(root, 'assets/logo.png')).toString('base64')

const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b1020" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#0b1020" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#0b1020" stop-opacity="0.96"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#shade)"/>
  <image x="64" y="430" width="120" height="120" xlink:href="data:image/png;base64,${logoB64}"/>
  <text x="200" y="492" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="58" font-weight="700" fill="#ffffff">Heroic Games Launcher</text>
  <text x="200" y="540" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="30" font-weight="400" fill="#c9b6e0">Epic · GOG · Amazon — Linux, Windows, macOS &amp; Steam Deck</text>
  <text x="64" y="590" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="24" font-weight="700" fill="#b06fd6">FREE &amp; OPEN SOURCE</text>
</svg>`

await sharp(resolve(root, 'assets/screenshots/01-home.webp'))
  .resize(W, H, { fit: 'cover', position: 'top' })
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .png()
  .toFile(resolve(root, 'public/og-image.png'))

console.log('Wrote public/og-image.png')
