import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { useRouter } from 'next/router'
import i18next from 'i18next'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  let {lang} = router.query
  lang = lang?.toString()

  // change language by the given regional code in the url
  i18next.changeLanguage(lang)

  return (
    <Layout siteLang={lang}>
      <Component siteLang={lang} {...pageProps} />
    </Layout>
  )
}

export default MyApp
