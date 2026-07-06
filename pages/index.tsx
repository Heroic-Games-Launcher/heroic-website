import type { NextPage, GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { getLatestReleases, ReleaseUrls } from '../lib/github'
import { cached } from '../lib/cache'
import Sponsorship from '../components/Sponsorship'
import DownloadButton from '../components/DownloadButton'
import Highlights from '../components/Highlights'
import ScreenshotsCarousel, { Slide } from '../components/ScreenshotsCarousel'
import Seo, { SITE_URL } from '../components/Seo'

import styles from '../styles/Home.module.css'

const heroImg = require('../assets/screenshots/01-home.webp')
const shotGamePage = require('../assets/screenshots/02-gamepage.webp')
const shotStores = require('../assets/screenshots/08-stores.webp')
const shotPlatforms = require('../assets/screenshots/07-platforms.webp')
const shotDownloads = require('../assets/screenshots/03-downloads.webp')
const shotEditGame = require('../assets/screenshots/06-edit-game.webp')
const shotWineManager = require('../assets/screenshots/05-wine-manager.webp')
const shotWineSettings = require('../assets/screenshots/09-wine-settings.webp')
const shotConsole = require('../assets/screenshots/04-console.webp')

const initial = { y: '300px', opacity: 0 }
const final = { y: '0px', opacity: 1 }
const transition = { duration: 0.5 }

interface HomeProps {
  releases: ReleaseUrls
}

const Home: NextPage<HomeProps> = ({ releases }) => {
  const { t } = useTranslation()

  // Helper to convert translation to string
  const ts = (key: string) => String(t(`home.${key}`))

  const screenshots: Slide[] = [
    { src: shotGamePage, title: ts('gamePage.title'), description: ts('gamePage.description') },
    { src: shotStores, title: ts('accessStores.title'), description: ts('accessStores.description') },
    { src: shotPlatforms, title: ts('platformSelection.title'), description: ts('platformSelection.description') },
    { src: shotDownloads, title: ts('downloadQueue.title'), description: ts('downloadQueue.description') },
    { src: shotEditGame, title: ts('customizeGames.title'), description: ts('customizeGames.description') },
    { src: shotWineManager, title: ts('wineManager.title'), description: ts('wineManager.description') },
    { src: shotWineSettings, title: ts('wineSettings.title'), description: ts('wineSettings.description') },
    { src: shotConsole, title: ts('consoleMode.title'), description: ts('consoleMode.description') }
  ]

  const version = releases.Linux.split('/')[7]
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Heroic Games Launcher',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://github.com/Heroic-Games-Launcher',
      'https://twitter.com/HeroicLauncher',
      'https://mastodon.social/@heroiclauncher',
      'https://discord.com/invite/rHJ2uqdquK'
    ]
  }
  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Heroic Games Launcher',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Linux, Windows, macOS',
    url: SITE_URL,
    downloadUrl: `${SITE_URL}/downloads`,
    image: `${SITE_URL}/og-image.png`,
    description:
      'Free and open source launcher for Epic Games, GOG and Amazon Prime Games on Linux, Windows, macOS and the Steam Deck.',
    license: 'https://www.gnu.org/licenses/gpl-3.0.html',
    isAccessibleForFree: true,
    ...(version && version.startsWith('v')
      ? { softwareVersion: version.replace(/^v/, '') }
      : {}),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Heroic Games Launcher' }
  }

  return (
    <>
      <Seo
        title="Heroic Games Launcher — Free Epic, GOG & Amazon Games Launcher"
        description="Heroic is a free and open source launcher for Epic Games, GOG and Amazon Prime Games. Play your games on Linux, Windows, macOS and the Steam Deck."
        jsonLd={[organizationLd, softwareLd]}
      />
      <motion.header
        initial={initial}
        animate={final}
        transition={transition}
        className={`hero center ${styles.heroHeader}`}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <h1>{t('home.heroTitle')}</h1>
          <div
            style={{
              width: '90%',
              maxWidth: '500px',
              textAlign: 'left'
            }}
          >
            <Trans i18nKey="home.heroDescription" t={t}>
              Heroic is a Free and Open Source <strong>Epic</strong>,{' '}
              <strong>GOG</strong> and <strong>Amazon Prime Games</strong>{' '}
              launcher for <strong>Linux</strong>, <strong>Windows</strong> and{' '}
              <strong>macOS</strong>. Also available on the{' '}
              <strong>SteamDeck</strong>!
            </Trans>
            <div className={styles.buttonContainer}>
              <DownloadButton releases={releases} />
              <a
                href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher"
                role="button"
                className="contrast outline"
              >
                {t('home.viewOnGithub')}
              </a>
            </div>
            <dl className={styles.stats} aria-label={ts('stats.ariaLabel')}>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>{t('home.stats.downloads')}</dt>
                <dd className={styles.statValue}>20M+</dd>
              </div>
              <div className={styles.statDivider} aria-hidden="true" />
              <div className={styles.stat}>
                <dt className={styles.statLabel}>{t('home.stats.users')}</dt>
                <dd className={styles.statValue}>500K+</dd>
              </div>
            </dl>
          </div>
          <img
            src={heroImg}
            alt="Heroic Games Launcher preview"
            className="heroicPreview"
            loading="eager"
            decoding="async"
            // The hero image is the LCP element; tell the browser to fetch it
            // with high priority. `fetchpriority` is not in React 17's img types,
            // so it is spread in as a raw DOM attribute.
            {...{ fetchpriority: 'high' }}
          />
        </div>
      </motion.header>

      <Highlights />

      <h2
        style={{
          textAlign: 'center',
          paddingInline: '25px',
          // Section heading: keep the previous h1 visual size while fixing the
          // heading order (the page already has its single h1 in the hero).
          fontSize: '2rem'
        }}
      >
        {t('home.mainFeatures')}
      </h2>

      <ScreenshotsCarousel slides={screenshots} />

      <Sponsorship />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Supporters moved to /donate; the home only needs release URLs, which is a
  // single fast request, so the page is no longer blocked by Patreon paging.
  const releases = await cached('releases', 60 * 60 * 1000, getLatestReleases)

  return {
    props: {
      releases
    },
    revalidate: 86400
  }
}

export default Home
