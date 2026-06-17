import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { Supporter, getGitHubSponsors, getPatreonSupporters, getRoleFromAmount } from '../lib/supporters'
import { getLatestReleases, ReleaseUrls } from '../lib/github'
import kofiData from '../lib/kofi_supporters.json'
import SupportersMarquee from '../components/SupportersMarquee'
import Sponsorship from '../components/Sponsorship'
import DownloadButton from '../components/DownloadButton'
import ScreenshotsCarousel, { Slide } from '../components/ScreenshotsCarousel'
import Seo, { SITE_URL } from '../components/Seo'

import styles from '../styles/Home.module.css'

const img1 = require('../assets/heroic_01.webp')
const img2 = require('../assets/heroic_game.webp')
const img3 = require('../assets/heroic_install.webp')
const img4 = require('../assets/heroic_stores.webp')
const img5 = require('../assets/heroic_wine.webp')
const img6 = require('../assets/heroic_wine_settings.webp')
const img7 = require('../assets/heroic_langs.png?webp')
const img8 = require('../assets/heroic_menu.webp')
const gif = require('../assets/themes.gif')

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
    { src: img2, title: ts('gamePage.title'), description: ts('gamePage.description') },
    { src: img3, title: ts('platformSelection.title'), description: ts('platformSelection.description') },
    { src: img4, title: ts('accessStores.title'), description: ts('accessStores.description') },
    { src: img8, title: ts('organizeLibrary.title'), description: ts('organizeLibrary.description') },
    { src: gif, title: ts('themes.title'), description: ts('themes.description') },
    { src: img5, title: ts('wineManager.title'), description: ts('wineManager.description') },
    { src: img6, title: ts('wineSettings.title'), description: ts('wineSettings.description') },
    { src: img7, title: ts('multiLanguage.title'), description: ts('multiLanguage.description') }
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
              <Link href="/faq" passHref>
                <span role="button" className="contrast outline" style={{ marginTop: '14px' }}>
                  {t('home.faq')}
                </span>
              </Link>
            </p>
          </div>
          <img
            src={img1}
            alt="Heroic Games Launcher preview"
            title="Heroic Games Launcher preview"
            className="heroicPreview"
          />
          <SupportersMarquee github={github} patreon={patreon} kofi={kofi} />
        </div>
      </motion.header>
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
