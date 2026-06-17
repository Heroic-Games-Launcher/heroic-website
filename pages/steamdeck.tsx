import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

const deckImage = require('../assets/screenshots/console-on-deck.webp')

const SteamDeck: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title="Heroic on the Steam Deck — Console Mode"
        description="Play your Epic, GOG and Amazon games on the Steam Deck with Heroic. Install it from Flathub and enjoy a controller-friendly full-screen Console Mode."
      />
      <header className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>{t('steamdeck.title')}</h1>
          <p style={{ maxWidth: '640px', margin: '0 auto 48px' }}>
            {t('steamdeck.subtitle')}
          </p>

          <img
            src={deckImage}
            alt={t('steamdeck.mockupAlt') as string}
            style={{ width: '100%', maxWidth: '860px', height: 'auto' }}
          />

          <p style={{ marginTop: '48px' }}>
            <a
              href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl"
              role="button"
              className="secondary"
            >
              {t('steamdeck.getFlathub')}
            </a>
          </p>

          <hr className="spacer" />

          <div className="grid" style={{ textAlign: 'left' }}>
            <article>
              <h4>{t('steamdeck.consoleMode.title')}</h4>
              <p>{t('steamdeck.consoleMode.description')}</p>
            </article>
            <article>
              <h4>{t('steamdeck.install.title')}</h4>
              <p>{t('steamdeck.install.description')}</p>
            </article>
            <article>
              <h4>{t('steamdeck.compatibility.title')}</h4>
              <p>{t('steamdeck.compatibility.description')}</p>
            </article>
          </div>
        </div>
      </header>
    </>
  )
}

export default SteamDeck
