import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { useRouter } from 'next/router'
import i18next from 'i18next'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  let supportedLanguages = [
    "en",
    "hu"
  ]

  let {lang} = router.query
  lang = lang+"" // required for TypeScript to accept it as String and not "String | String[]"
  
  let siteLang:string = (lang && supportedLanguages.includes(lang))? lang?.toString(): "en"
  
  // change language by the given regional code in the url
  i18next.changeLanguage(siteLang)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
