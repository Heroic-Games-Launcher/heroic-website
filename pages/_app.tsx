import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from './components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
            <Head>
        <title>Heroic Games Launcher</title>
        <meta name="description" content="An Open Source GOG and Epic Games Launcher" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
