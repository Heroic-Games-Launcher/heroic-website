import Head from 'next/head'
import { useRouter } from 'next/router'

export const SITE_URL = 'https://heroicgameslauncher.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

interface Props {
  title: string
  description: string
  /** Overrides the canonical path. Defaults to the current route. */
  path?: string
  image?: string
  type?: 'website' | 'article'
  /** Optional JSON-LD structured data object(s) for rich results / AEO. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd
}: Props) {
  const router = useRouter()
  const route = path ?? router.pathname
  const url = `${SITE_URL}${route === '/' ? '' : route}`
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Heroic Games Launcher" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HeroicLauncher" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  )
}
