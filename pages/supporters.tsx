import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Supporter, getGitHubSponsors, getPatreonSupporters } from '../lib/supporters'
import kofiData from '../lib/kofi_supporters.json'

interface SupportersProps {
  kofi: Supporter[]
  github: Supporter[]
  patreon: Supporter[]
}

const Supporters: NextPage<SupportersProps> = ({ kofi, github, patreon }) => {
  const { t } = useTranslation()
  const [showAllPatreon, setShowAllPatreon] = useState(false)
  const [showAllGithub, setShowAllGithub] = useState(false)
  const [showAllKofi, setShowAllKofi] = useState(false)

  const formatCurrency = (amountInCents?: number) => {
    if (!amountInCents) return null
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amountInCents / 100)
  }

  const renderSupporter = (s: Supporter, i: number) => (
    <div key={i} className={`supporter-tag ${!s.avatar ? 'no-avatar' : ''}`}>
      {s.avatar && <img src={s.avatar} alt="" className="supporter-avatar" />}
      <div className="supporter-info">
        <span className="supporter-name">{s.name}</span>
        {s.amount && (
          <span className="supporter-amount">{formatCurrency(s.amount)}</span>
        )}
      </div>
    </div>
  )

  const displayedPatreon = showAllPatreon ? patreon : patreon.slice(0, 20)
  const displayedGithub = showAllGithub ? github : github.slice(0, 30)
  const displayedKofi = showAllKofi ? kofi : kofi.slice(0, 30)

  return (
    <>
      <Head>
        <title>{t('donate.supporters.pageTitle')}</title>
        <meta name="description" content="Heroic Games Launcher Supporters" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('donate.supporters.title')}</h1>
          <p>{t('donate.supporters.subtitle')}</p>

          <section>
            <h2>{t('donate.supporters.patreon')}</h2>
            <div className="supporter-grid">
              {patreon.length > 0 ? (
                displayedPatreon.map((s, i) => renderSupporter(s, i))
              ) : (
                <p>No supporters found.</p>
              )}
            </div>
            {patreon.length > 20 && (
              <button
                className="outline"
                onClick={() => setShowAllPatreon(!showAllPatreon)}
                style={{ marginTop: '2rem' }}
              >
                {showAllPatreon
                  ? t('donate.supporters.hideAll') || 'Hide Supporters'
                  : t('donate.supporters.showAll') || 'Show All Supporters'}
              </button>
            )}
          </section>

          <section>
            <h2>{t('donate.supporters.github')}</h2>
            <div className="supporter-grid">
              {github.length > 0 ? (
                displayedGithub.map((s, i) => renderSupporter(s, i))
              ) : (
                <p>No supporters found.</p>
              )}
            </div>
            {github.length > 30 && (
              <button
                className="outline"
                onClick={() => setShowAllGithub(!showAllGithub)}
                style={{ marginTop: '2rem' }}
              >
                {showAllGithub
                  ? t('donate.supporters.hideAll') || 'Hide Supporters'
                  : t('donate.supporters.showAll') || 'Show All Supporters'}
              </button>
            )}
          </section>

          <section>
            <h2>{t('donate.supporters.kofi')}</h2>
            <p
              style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}
            >
              <strong>* Monthly Supporters only</strong>
            </p>
            <div className="supporter-grid">
              {kofi.length > 0 ? (
                displayedKofi.map((s, i) => renderSupporter(s, i))
              ) : (
                <p>No supporters found.</p>
              )}
            </div>
            {kofi.length > 30 && (
              <button
                className="outline"
                onClick={() => setShowAllKofi(!showAllKofi)}
                style={{ marginTop: '2rem' }}
              >
                {showAllKofi
                  ? t('donate.supporters.hideAll') || 'Hide Supporters'
                  : t('donate.supporters.showAll') || 'Show All Supporters'}
              </button>
            )}
          </section>
        </div>
      </header>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch GitHub and Patreon supporters on the server side
  const [github, patreon] = await Promise.all([
    getGitHubSponsors(),
    getPatreonSupporters()
  ])

  // Sorting Ko-fi data by amount and filtering those < $10
  const sortedKofi = [...kofiData]
    .filter((s) => s.amount >= 1000)
    .sort((a, b) => b.amount - a.amount)

  return {
    props: {
      kofi: sortedKofi,
      github,
      patreon
    },
    // Revalidate once a day
    revalidate: 86400
  }
}

export default Supporters
