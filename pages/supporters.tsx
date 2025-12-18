import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'

// Mock data - In a real scenario, this would be fetched in getStaticProps
const MOCK_SUPPORTERS = {
  patreon: [
    { name: 'Patron Large 1' },
    { name: 'Patron Large 2' },
    { name: 'Patron 3' },
    { name: 'Patron 4' },
    { name: 'Patron 5' },
    { name: 'Patron 6' },
  ],
  github: [
    { name: 'Sponsor 1' },
    { name: 'Sponsor 2' },
    { name: 'Sponsor 3' },
  ],
  kofi: [
    { name: 'Supporter 1' },
    { name: 'Supporter 2' },
  ]
}

const Supporters: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('supporters.pageTitle')}</title>
        <meta
          name="description"
          content="Heroic Games Launcher Supporters"
        />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('donate.supporters.title')}</h1>
          <p>{t('donate.supporters.subtitle')}</p>

          <section>
            <h2>{t('donate.supporters.patreon')}</h2>
            <div className="supporter-grid">
              {MOCK_SUPPORTERS.patreon.map((s, i) => (
                <span key={i} className="supporter-tag">{s.name}</span>
              ))}
            </div>
          </section>

          <section>
            <h2>{t('donate.supporters.github')}</h2>
            <div className="supporter-grid">
              {MOCK_SUPPORTERS.github.map((s, i) => (
                <span key={i} className="supporter-tag">{s.name}</span>
              ))}
            </div>
          </section>

          <section>
            <h2>{t('donate.supporters.kofi')}</h2>
            <div className="supporter-grid">
              {MOCK_SUPPORTERS.kofi.map((s, i) => (
                <span key={i} className="supporter-tag">{s.name}</span>
              ))}
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export default Supporters
