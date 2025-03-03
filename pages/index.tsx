/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

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

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta
          name="description"
          content={t('meta_description')}
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
          <h1>{t('hero.title')}</h1>
          <div
            style={{
              width: '90%',
              maxWidth: '500px',
              textAlign: 'left'
            }}
          >
            <Trans i18nKey="hero.description" t={t}>
              Heroic is a Free and Open Source <strong>Epic</strong>,{' '}
              <strong>GOG</strong> and <strong>Amazon Prime Games</strong>{' '}
              launcher for <strong>Linux</strong>, <strong>Windows</strong> and{' '}
              <strong>macOS</strong>. Also available on the{' '}
              <strong>SteamDeck</strong>!
            </Trans>
            <p className={styles.buttonContainer}>
              <Link href="/downloads" passHref>
                <span role="button" className="secondary">
                  {t('hero.download')}
                </span>
              </Link>
              <Link href="/faq" passHref>
                <span role="button" className="contrast outline">
                  {t('hero.faq')}
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
        </div>
      </motion.header>
      <h1
        style={{
          textAlign: 'center',
          paddingInline: '25px'
        }}
      >
        {t('features.title')}
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
                  alt="Game Page"
                  title="Game Page"
                  aria-label="Game Page"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.game_page.title')}</h2>
              <p>{t('features.game_page.description')}</p>
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
                  alt="Platform Selection"
                  title="Platform Selection"
                  aria-label="Platform Selection"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.platform_selection.title')}</h2>
              <p>{t('features.platform_selection.description')}</p>
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
                  alt="Epic Store inside Heroic"
                  title="Epic Store inside Heroic"
                  aria-label="Epic Store inside Heroic"
                  src={img4}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.stores.title')}</h2>
              <p>{t('features.stores.description')}</p>
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
                  alt="Context Menu"
                  title="Context Menu"
                  aria-label="Context Menu"
                  src={img8}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.organize.title')}</h2>
              <p>{t('features.organize.description')}</p>
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
                  alt="Themes"
                  title="Themes"
                  aria-label="Themes"
                  src={gif}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.themes.title')}</h2>
              <p>{t('features.themes.description')}</p>
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
                  alt="Wine Manager"
                  aria-label="Wine Manager"
                  src={img5}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.wine_manager.title')}</h2>
              <p>{t('features.wine_manager.description')}</p>
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
                  alt="Wine Settings"
                  title="Wine Settings"
                  aria-label="Wine Settings"
                  src={img6}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.wine_settings.title')}</h2>
              <p>{t('features.wine_settings.description')}</p>
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
                  alt="Heroic is supported in several languages"
                  title="Heroic is supported in several languages"
                  aria-label="Heroic is supported in several languages"
                  src={img7}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>{t('features.multi_language.title')}</h2>
              <p>
                <Trans i18nKey="features.multi_language.description" t={t}>
                  Heroic was translated by the community in more than 40
                  languages, from Portuguese to Korean, from Farsi to French. You
                  can also help with translations by accessing{' '}
                  <a
                    href="https://hosted.weblate.org/projects/heroic-games-launcher/"
                    rel="norefferer"
                    target="_blank"
                  >
                    {' '}
                    our Weblate Page
                  </a>
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default Home
