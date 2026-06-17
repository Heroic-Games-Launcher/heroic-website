import type { NextPage, GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { Supporter, getGitHubSponsors, getPatreonSupporters, getRoleFromAmount } from '../lib/supporters'
import { getLatestReleases, ReleaseUrls } from '../lib/github'
import kofiData from '../lib/kofi_supporters.json'
import SupportersMarquee from '../components/SupportersMarquee'
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

const initial = { y: '300px', opacity: 0 }
const final = { y: '0px', opacity: 1 }
const transition = { duration: 0.5 }

interface HomeProps {
  kofi: Supporter[]
  github: Supporter[]
  patreon: Supporter[]
  releases: ReleaseUrls
}

const Home: NextPage<HomeProps> = ({ kofi, github, patreon, releases }) => {
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
    { src: shotWineSettings, title: ts('wineSettings.title'), description: ts('wineSettings.description') }
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
        className="hero center"
        style={{
          marginBottom: '210px',
          marginTop: '120px'
        }}
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
            <p className={styles.buttonContainer}>
              <DownloadButton releases={releases} />
              <a
                href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher"
                role="button"
                className="contrast outline"
                style={{ marginTop: '14px' }}
              >
                {t('home.viewOnGithub')}
              </a>
            </p>
          </div>
          <img
            src={heroImg}
            alt="Heroic Games Launcher preview"
            className="heroicPreview"
          />
          <SupportersMarquee github={github} patreon={patreon} kofi={kofi} />
        </div>
      </motion.header>

      <Highlights />

      <h1
        style={{
          textAlign: 'center',
          paddingInline: '25px'
        }}
      >
        {t('home.mainFeatures')}
      </h1>

      <ScreenshotsCarousel slides={screenshots} />

      <Sponsorship />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [github, patreon, releases] = await Promise.all([
    getGitHubSponsors(),
    getPatreonSupporters(),
    getLatestReleases()
  ])

  const sortedKofi = [...kofiData]
    .map(s => ({
      ...s,
      role: getRoleFromAmount(s.amount)
    }))
    .sort((a, b) => {
      const roleOrder: Record<string, number> = {
        'mega supporter': 4,
        'hero supporter': 3,
        'supporter plus': 2,
        'supporter': 1
      };
      const orderA = roleOrder[a.role || ''] || 0;
      const orderB = roleOrder[b.role || ''] || 0;
      if (orderA !== orderB) return orderB - orderA;
      return b.amount - a.amount;
    })

  return {
    props: {
      kofi: sortedKofi,
      github,
      patreon,
      releases
    },
    revalidate: 86400
  }
}

export default Home
