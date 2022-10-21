/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import i18next from '../components/i18next'

import styles from '../styles/Home.module.css'

const img1 = require('../assets/heroic_01.png?webp')
const img2 = require('../assets/heroic_game.png?webp')
const img3 = require('../assets/heroic_install.png?webp')
const img4 = require('../assets/heroic_stores.png?webp')
const img5 = require('../assets/heroic_wine.png?webp')
const img6 = require('../assets/heroic_wine_settings.png?webp')
const img7 = require('../assets/heroic_langs.png?webp')
const img8 = require('../assets/heroic_menu.png?webp')
const gif = require('../assets/themes.gif')

const initial = { y: '300px', opacity: 0 }
const final = { y: '0px', opacity: 1 }
const hover = { scale: 1.05 }
const transition = { duration: 0.5 }

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heroic Games Launcher</title>
        <meta
          name="description"
          content="An Open Source GOG and Epic Games Launcher"
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
          <h1>{i18next.t("PLAY_LIKE_A_HERO")}</h1>
          <div
            style={{
              width: '90%',
              maxWidth: '500px',
              textAlign: 'left'
            }}
          >
            Heroic is an Open Source <strong>GOG</strong> and{' '}
            <strong>Epic games</strong> launcher for <strong>Linux</strong>,{' '}
            <strong>Windows</strong> and <strong>macOS</strong>. Also available
            on the <strong>SteamDeck</strong>!
            <p className={styles.buttonContainer}>
              <Link href="/downloads" passHref>
                <span role="button" className="secondary">
                  {i18next.t("Download")}
                </span>
              </Link>
              <a
                href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki"
                role="button"
                className="contrast outline"
              >
                {i18next.t("Documentation")}
              </a>
            </p>
          </div>
          <img
            src={img1}
            alt="Heroic Games Launcher preview"
            className="heroicPreview"
          />
        </div>
      </motion.header>

      <h1
        style={{
          textAlign: 'center'
        }}
      >
        {i18next.t("MAIN_FEATURES_AND_MORE_INFO")}
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
                  alt={i18next.t("Game_Page")}
                  aria-label={i18next.t("Game_Page")}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Game_Page")}
              </h2>
              <p>
                {i18next.t("Game_Page_desc")}
              </p>
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
                  alt={i18next.t("Platform_Selection")}
                  aria-label={i18next.t("Platform_Selection")}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Platform_Selection")}
              </h2>
              <p>
                {i18next.t("Platform_Selection_desc")}
              </p>
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
                  alt={i18next.t("Epic_Store_inside_Heroic")}
                  aria-label={i18next.t("Epic_Store_inside_Heroic")}
                  src={img4}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Access_to_the_Stores")}
              </h2>
              <p>
                {i18next.t("Access_to_the_Stores_desc")}
              </p>
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
                  alt={i18next.t("Context_Menu")}
                  aria-label={i18next.t("Context_Menu")}
                  src={img8}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Organize_your_library")}
              </h2>
              <p>
                {i18next.t("Organize_your_library_desc")}
              </p>
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
                  alt={i18next.t("Themes")}
                  aria-label={i18next.t("Themes")}
                  src={gif}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Themes")}
              </h2>
              <p>
                {i18next.t("Themes_desc")}
              </p>
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
                  alt={i18next.t("Wine_Manager")}
                  aria-label={i18next.t("Wine_Manager")}
                  src={img5}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Wine_Manager")}
              </h2>
              <p>
                {i18next.t("Wine_Manager_desc")}
              </p>
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
                  alt={i18next.t("Wine_Settings")}
                  aria-label={i18next.t("Wine_Settings")}
                  src={img6}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Wine_Settings")}
              </h2>
              <p>
                {i18next.t("Wine_Settings_desc")}
              </p>
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
                  alt={i18next.t("Epic_Store_inside_Heroic")}
                  aria-label={i18next.t("Epic_Store_inside_Heroic")}
                  src={img7}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>
                {i18next.t("Multi_Language")}
              </h2>
              <p>
                {i18next.t("Multi_Language_desc")}
                <a
                  href="https://hosted.weblate.org/projects/heroic-games-launcher/"
                  rel="norefferer"
                  target="_blank"
                >
                  {' '}
                  {i18next.t("Multi_Language_desc_Weblate_link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Home
