import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Donate: NextPage = () => {
  const { t } = useTranslation('donate')

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>

          <hr className="spacer" />

          <div className="grid">
            <article>
              <h4>{t('patreon.title')}</h4>
              <small>{t('patreon.type')}</small>
              <p>{t('patreon.description')}</p>
              <footer>
                <a href="https://patreon.com/heroicgameslauncher">
                  <strong>{t('patreon.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>{t('kofi.title')}</h4>
              <small>{t('kofi.type')}</small>
              <p>{t('kofi.description')}</p>
              <footer>
                <a href="https://ko-fi.com/heroicgames">
                  <strong>{t('kofi.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>{t('gog.title')}</h4>
              <small>{t('gog.type')}</small>
              <p>{t('gog.description')}</p>
              <footer>
                <a href="https://af.gog.com?as=1838482841">
                  <strong>{t('gog.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>{t('github.title')}</h4>
              <small>{t('github.type')}</small>
              <p>{t('github.description')}</p>
              <footer>
                <a href="https://github.com/sponsors/Heroic-Games-Launcher">
                  <strong>{t('github.button')}</strong>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </header>
    </>
  )
}

export default Donate
