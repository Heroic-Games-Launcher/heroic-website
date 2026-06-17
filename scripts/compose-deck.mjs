// Composites the Console Mode screenshot onto the Steam Deck press-kit image.
// Usage: node scripts/compose-deck.mjs <left> <top> <width> <height> <radius>
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const [L, T, W, H, R] = process.argv.slice(2).map(Number)

const screen = await sharp(resolve(root, 'assets/screenshots/04-console.webp'))
  .resize(W, H, { fit: 'cover', position: 'center' })
  .toBuffer()

const mask = Buffer.from(
  `<svg width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${R}" ry="${R}"/></svg>`
)

const rounded = await sharp(screen)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer()

await sharp(resolve(root, 'assets/steamdeck.webp'))
  .composite([{ input: rounded, left: L, top: T }])
  .webp({ quality: 90 })
  .toFile(resolve(root, 'assets/screenshots/console-on-deck.webp'))

console.log(`composited screen at ${L},${T} ${W}x${H} r${R}`)
