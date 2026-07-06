import '../styles/globals.css'
import i18n from '../lib/i18n'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  // Privacy-friendly analytics by Plausible (self-hosted). Imported dynamically
  // so the tracker (which touches `location` at module load) never runs during
  // the static server-side build.
  useEffect(() => {
    import('@plausible-analytics/tracker').then(({ init }) => {
      init({
        domain: 'heroicgameslauncher.com',
        endpoint: 'https://analytics.heroicgameslauncher.com/api/event',
        outboundLinks: true,
        fileDownloads: true
      })
    })
  }, [])

  // Static export ships a single locale; the active language is resolved on the
  // client. Keep <html lang> in sync so screen readers and search engines see
  // the language the visitor is actually reading.
  useEffect(() => {
    const setLang = (lng: string) => {
      document.documentElement.lang = lng
    }
    setLang(i18n.language || 'en')
    i18n.on('languageChanged', setLang)
    return () => {
      i18n.off('languageChanged', setLang)
    }
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
