import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

const Donate: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title={t('donate.pageTitle') as string}
        description="Heroic Games Launcher is free and open source. Support its development through Patreon, Ko-fi, GitHub Sponsors or by shopping on GOG with our link."
      />
      <header className="hero">
        <div className="container">
          <h1>{t('donate.title')}</h1>
          <p>{t('donate.subtitle')}</p>

          <hr className="spacer" />

          <div className="grid">
            <article>
              <h4>{t('donate.patreon.title')}</h4>
              <small>{t('donate.patreon.type')}</small>
              <p>{t('donate.patreon.description')}</p>
              <footer>
                <a href="https://patreon.com/heroicgameslauncher">
                  <strong>{t('donate.patreon.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>{t('donate.kofi.title')}</h4>
              <small>{t('donate.kofi.type')}</small>
              <p>{t('donate.kofi.description')}</p>
              <footer>
                <a href="https://ko-fi.com/heroicgames">
                  <strong>{t('donate.kofi.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>{t('donate.gog.title')}</h4>
              <small>{t('donate.gog.type')}</small>
              <p>{t('donate.gog.description')}</p>
              <footer>
                <a href="https://af.gog.com?as=1838482841">
                  <strong>{t('donate.gog.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>{t('donate.github.title')}</h4>
              <small>{t('donate.github.type')}</small>
              <p>{t('donate.github.description')}</p>
              <footer>
                <a href="https://github.com/sponsors/Heroic-Games-Launcher">
                  <strong>{t('donate.github.button')}</strong>
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
