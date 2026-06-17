import { promises as fs } from 'fs'
import path from 'path'

const CACHE_DIR = path.join(process.cwd(), '.cache')

/**
 * Disk-cache the result of an expensive fetch for `ttlMs`. The home page's
 * getStaticProps pulls supporters from Patreon (paginated, ~30s); without this
 * `next dev` re-ran it on every navigation to "/". The cache keeps repeated dev
 * loads and rebuilds instant, while production builds still refresh on deploy.
 */
export async function cached<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const file = path.join(CACHE_DIR, `${key}.json`)

  try {
    const stat = await fs.stat(file)
    if (Date.now() - stat.mtimeMs < ttlMs) {
      return JSON.parse(await fs.readFile(file, 'utf8')) as T
    }
  } catch {
    // no usable cache entry — fall through and fetch
  }

  const data = await fetcher()

  try {
    await fs.mkdir(CACHE_DIR, { recursive: true })
    await fs.writeFile(file, JSON.stringify(data))
  } catch {
    // ignore write failures (e.g. read-only filesystem)
  }

  return data
}
