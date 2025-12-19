import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import { Supporter, getGitHubSponsors, getPatreonSupporters, getRoleFromAmount } from '../lib/supporters'
import kofiData from '../lib/kofi_supporters.json'
import SupportersMarquee from '../components/SupportersMarquee'

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
const hover = { scale: 1.05 }
const transition = { duration: 0.5 }

interface HomeProps {
  kofi: Supporter[]
  github: Supporter[]
  patreon: Supporter[]
}

const Home: NextPage<HomeProps> = ({ kofi, github, patreon }) => {
  const { t } = useTranslation()

  // Helper to convert translation to string
  const ts = (key: string) => String(t(`home.${key}`))

  return (
    <>
      <Head>
        <title>Heroic Games Launcher</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            alignItems: 'center'
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
              <Link href="/downloads" passHref>
                <span role="button" className="secondary">
                  {t('home.download')}
                </span>
              </Link>
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

      <motion.section
        initial={initial}
        transition={transition}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img2}>
                <img
                  src={img2}
                  alt={ts('gamePage.title')}
                  title={ts('gamePage.title')}
                  aria-label={ts('gamePage.title')}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.gamePage.title')}</h2>
              <p>{t('home.gamePage.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={initial}
        transition={transition}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img3}>
                <img
                  src={img3}
                  alt={ts('platformSelection.title')}
                  title={ts('platformSelection.title')}
                  aria-label={ts('platformSelection.title')}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.platformSelection.title')}</h2>
              <p>{t('home.platformSelection.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        transition={transition}
        initial={initial}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img4}>
                <img
                  alt={ts('accessStores.title')}
                  title={ts('accessStores.title')}
                  aria-label={ts('accessStores.title')}
                  src={img4}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.accessStores.title')}</h2>
              <p>{t('home.accessStores.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={initial}
        transition={transition}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img8}>
                <img
                  alt={ts('organizeLibrary.title')}
                  title={ts('organizeLibrary.title')}
                  aria-label={ts('organizeLibrary.title')}
                  src={img8}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.organizeLibrary.title')}</h2>
              <p>{t('home.organizeLibrary.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={initial}
        whileInView={final}
        transition={transition}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={gif}>
                <img
                  alt={ts('themes.title')}
                  title={ts('themes.title')}
                  aria-label={ts('themes.title')}
                  src={gif}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.themes.title')}</h2>
              <p>{t('home.themes.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={initial}
        transition={transition}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img5}>
                <img
                  alt={ts('wineManager.title')}
                  aria-label={ts('wineManager.title')}
                  src={img5}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.wineManager.title')}</h2>
              <p>{t('home.wineManager.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={initial}
        transition={transition}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img6}>
                <img
                  alt={ts('wineSettings.title')}
                  title={ts('wineSettings.title')}
                  aria-label={ts('wineSettings.title')}
                  src={img6}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.wineSettings.title')}</h2>
              <p>{t('home.wineSettings.description')}</p>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={initial}
        transition={transition}
        whileInView={final}
        viewport={{ once: true }}
        whileHover={hover}
        className="container feature"
      >
        <div className="hero">
          <div className="grid center">
            <div>
              <a href={img7}>
                <img
                  alt={ts('multiLanguage.title')}
                  title={ts('multiLanguage.title')}
                  aria-label={ts('multiLanguage.title')}
                  src={img7}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('home.multiLanguage.title')}</h2>
              <p>
                {t('home.multiLanguage.description')}{' '}
                <a
                  href="https://hosted.weblate.org/projects/heroic-games-launcher/"
                  rel="norefferer"
                  target="_blank"
                >
                  {' '}
                  {t('home.multiLanguage.weblateLinkText')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [github, patreon] = await Promise.all([
    getGitHubSponsors(),
    getPatreonSupporters()
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
      patreon
    },
    revalidate: 86400
  }
}

export default Home
