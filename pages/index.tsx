/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

const Home: NextPage = () => {
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
          <h1>PLAY LIKE A HERO!</h1>
          <div
            style={{
              width: '90%',
              maxWidth: '500px',
              textAlign: 'left'
            }}
          >
            Heroic is a Free and Open Source <strong>Epic</strong>,{' '}
            <strong>GOG</strong> and <strong>Amazon Prime Games</strong>{' '}
            launcher for <strong>Linux</strong>, <strong>Windows</strong> and{' '}
            <strong>macOS</strong>. Also available on the{' '}
            <strong>SteamDeck</strong>!
            <p className={styles.buttonContainer}>
              <Link href="/downloads" passHref>
                <span role="button" className="secondary">
                  Download
                </span>
              </Link>
              <Link href="/faq" passHref>
                <span role="button" className="contrast outline">
                  FAQ
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
        MAIN FEATURES AND MORE INFO
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
              <h2>Game Page</h2>
              <p>
                Check game details like description, publisher, download and
                install size, time played and more.
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
                  alt="Platform Selection"
                  title="Platform Selection"
                  aria-label="Platform Selection"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Platform Selection</h2>
              <p>
                On Linux and on MacOS you can select to install the Windows
                version of a native game. This might be handy in case the native
                version is not supported anymore. On Linux you can choose that
                for GOG games only.
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
                  alt="Epic Store inside Heroic"
                  title="Epic Store inside Heroic"
                  aria-label="Epic Store inside Heroic"
                  src={img4}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Access to the Stores</h2>
              <p>
                Go to the Epic, Amazon Prime or GOG store without even leaving
                Heroic. Get free games or buy new ones directly from Heroic's
                interface!
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
                  alt="Context Menu"
                  title="Context Menu"
                  aria-label="Context Menu"
                  src={img8}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Organize your library</h2>
              <p>
                Add games to favorites or simply hide the games you already
                played or will never play at all!
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
                  alt="Themes"
                  title="Themes"
                  aria-label="Themes"
                  src={gif}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Themes</h2>
              <p>
                If you don't like the default colors, you have the ability to
                change them. It also includes the famous Dracula theme.{' '}
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
                  alt="Wine Manager"
                  aria-label="Wine Manager"
                  src={img5}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Wine Manager</h2>
              <p>
                On Linux, download the latest version of Wine-GE, Wine-Lutris or
                even Proton-GE using the Wine Manager. These selection of Wine
                version are focused on improving the gaming experience and
                compatibility.
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
                  alt="Wine Settings"
                  title="Wine Settings"
                  aria-label="Wine Settings"
                  src={img6}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Wine Settings</h2>
              <p>
                Besides using the right Wine version, it is important to setup
                everything to have the best gameplay experience on Linux and on
                macOS. Under the Wine Settings it is possible to auto install
                tools like DXVK, VKD3D, FSR and also to run WineCFG, Winetricks
                and Run EXE on the prefix, so you can install games
                pre-requisites in a easy way.
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
                  alt="Heroic is supported in several languages"
                  title="Heroic is supported in several languages"
                  aria-label="Heroic is supported in several languages"
                  src={img7}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="description">
              <h2>Multi Language</h2>
              <p>
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
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Home
