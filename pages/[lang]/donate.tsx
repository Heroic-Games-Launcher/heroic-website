import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import i18next from '../../components/i18next'
import SuppotUsPageArticleCard from '../../components/SuppotUsPageArticleCard'
import styles from '../../styles/Home.module.css'

const Donate: NextPage = () => {
  return (
    <>
      <Head>
        <title>{i18next.t('Support_Us.title')}</title>
        <meta
          name="description"
          content={i18next.t('Support_Us.meta_desc')}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{i18next.t('Support_Us.Support_Us')}</h1>
          <p>{i18next.t('Support_Us.Heroic_is_free')}</p>

          <hr className="spacer" />

          <div className="grid">
            <SuppotUsPageArticleCard
              className={styles.downloadBoxes}
              articleTitle={i18next.t("Support_Us.GitHub_Sponsor")}
              articleSubTitle={i18next.t("Support_Us.One-time_or_flexible-sub")}
              articleContent={i18next.t("Support_Us.GitHub_Sponsor_desc")}
              articleLink="https://github.com/sponsors/Heroic-Games-Launcher"
              articleLinkText={i18next.t("Support_Us.Go_to_GitHub")}
            />
            <SuppotUsPageArticleCard
              className={styles.downloadBoxes}
              articleTitle={i18next.t("Support_Us.Patreon")}
              articleSubTitle={i18next.t("Support_Us.Monthly-sub")}
              articleContent={i18next.t("Support_Us.Patreon_desc")}
              articleLink="https://patreon.com/heroicgameslauncher"
              articleLinkText={i18next.t("Support_Us.Go_to_Patreon")}
            />
            <SuppotUsPageArticleCard
              className={styles.downloadBoxes}
              articleTitle={i18next.t("Support_Us.Ko-fi")}
              articleSubTitle={i18next.t("Support_Us.One-time")}
              articleContent={i18next.t("Support_Us.Ko-fi_desc")}
              articleLink="https://ko-fi.com/heroicgames"
              articleLinkText={i18next.t("Support_Us.Go_to_Ko-fi")}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Donate
