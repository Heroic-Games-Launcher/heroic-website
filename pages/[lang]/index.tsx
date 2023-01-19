/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import i18next from '../../components/i18next'

import styles from '../../styles/Home.module.css'
import IndexSection from '../../components/IndexSection'
import Router from 'next/router'

const img1 = require('../../assets/heroic_01.png?webp')
const img2 = require('../../assets/heroic_game.png?webp')
const img3 = require('../../assets/heroic_install.png?webp')
const img4 = require('../../assets/heroic_stores.png?webp')
const img5 = require('../../assets/heroic_wine.png?webp')
const img6 = require('../../assets/heroic_wine_settings.png?webp')
const img7 = require('../../assets/heroic_langs.png?webp')
const img8 = require('../../assets/heroic_menu.png?webp')
const gif = require('../../assets/themes.gif')

const initial = { y: '300px', opacity: 0 }
const final = { y: '0px', opacity: 1 }
const hover = { scale: 1.05 }
const transition = { duration: 0.5 }


const Home = () => {
  
  return (
    <>
      <Head>
        <title>Heroic Games Launcher</title>
        <meta
          name="description"
          content={i18next.t("Home_Page.meta_desc")}
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
          <h1>{i18next.t("Home_Page.PLAY_LIKE_A_HERO")}</h1>
          <div
            style={{
              width: '90%',
              maxWidth: '500px',
              textAlign: 'left'
            }}
          >
            {i18next.t("Home_Page.Heroic_Summary.Heroic")} <strong>{i18next.t("Home_Page.Heroic_Summary.GOG")}</strong> {i18next.t("Home_Page.Heroic_Summary.and")}{' '}
            <strong>{i18next.t("Home_Page.Heroic_Summary.Epic_games")}</strong> {i18next.t("Home_Page.Heroic_Summary.Launcher")} <strong>{i18next.t("Home_Page.Heroic_Summary.Linux")}</strong>,{' '}
            <strong>{i18next.t("Home_Page.Heroic_Summary.Windows")}</strong> {i18next.t("Home_Page.Heroic_Summary.and")} <strong>{i18next.t("Home_Page.Heroic_Summary.macOS")}</strong>. {i18next.t("Home_Page.Heroic_Summary.AlsoAvailable")} <strong>{i18next.t("Home_Page.Heroic_Summary.SteamDeck")}</strong>!
            <p className={styles.buttonContainer}>
              <Link href={`/${i18next.language}/downloads`} passHref>
                <span role="button" className="secondary">
                  {i18next.t("Home_Page.Download")}
                </span>
              </Link>
              <Link href={`/${i18next.language}/faq`} passHref>
                <span role="button" className="contrast outline">
                  {i18next.t("Home_Page.FAQ")}
                </span>
              </Link>
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
        {i18next.t("Home_Page.MAIN_FEATURES_AND_MORE_INFO")}
      </h1>

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img2}
        sectionImageAlt={i18next.t("Home_Page.Game_Page")}
        sectionTitle={i18next.t("Home_Page.Game_Page")}
        sectionContent={i18next.t("Home_Page.Game_Page_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img3}
        sectionImageAlt={i18next.t("Home_Page.Platform_Selection")}
        sectionTitle={i18next.t("Home_Page.Platform_Selection")}
        sectionContent={i18next.t("Home_Page.Platform_Selection_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img4}
        sectionImageAlt={i18next.t("Home_Page.Epic_Store_inside_Heroic")}
        sectionTitle={i18next.t("Home_Page.Access_to_the_Stores")}
        sectionContent={i18next.t("Home_Page.Access_to_the_Stores_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img8}
        sectionImageAlt={i18next.t("Home_Page.Context_Menu")}
        sectionTitle={i18next.t("Home_Page.Organize_your_library")}
        sectionContent={i18next.t("Home_Page.Organize_your_library_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={gif}
        sectionImageAlt={i18next.t("Home_Page.Themes")}
        sectionTitle={i18next.t("Home_Page.Themes")}
        sectionContent={i18next.t("Home_Page.Themes_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img5}
        sectionImageAlt={i18next.t("Home_Page.Wine_Manager")}
        sectionTitle={i18next.t("Home_Page.Wine_Manager")}
        sectionContent={i18next.t("Home_Page.Wine_Manager_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img6}
        sectionImageAlt={i18next.t("Home_Page.Wine_Settings")}
        sectionTitle={i18next.t("Home_Page.Wine_Settings")}
        sectionContent={i18next.t("Home_Page.Wine_Settings_desc")}
      />

      <IndexSection
        sectionInitial={initial}
        sectionTransition={transition}
        sectionWhileInView={final}
        sectionWhileHover={hover}
        
        sectionImage={img7}
        sectionImageAlt={i18next.t("Home_Page.Epic_Store_inside_Heroic")}
        sectionTitle={i18next.t("Home_Page.Multi_Language")}
        sectionContent={
          <>
            {i18next.t('Home_Page.Multi_Language_desc')}
            <a
              href="https://hosted.weblate.org/projects/heroic-games-launcher/"
              rel="norefferer"
              target="_blank"
            >
              {' '}
              {i18next.t('Home_Page.Multi_Language_desc_Weblate_link')}
            </a>
          </>
        }
      />
    </>
  )
}

export default Home
