import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { getGitHubSponsors, getPatreonSupporters, Supporter } from '../lib/supporters'

interface SupportersProps {
  github: Supporter[]
  patreon: Supporter[]
  kofi: Supporter[]
}

const Supporters: NextPage<SupportersProps> = ({ github, patreon, kofi }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('donate.supporters.pageTitle')}</title>
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
              {patreon.length > 0 ? (
                patreon.map((s, i) => (
                  <div key={i} className={`supporter-tag ${!s.avatar ? 'no-avatar' : ''}`}>
                    {s.avatar && <img src={s.avatar} alt="" className="supporter-avatar" />}
                    <span>{s.name}</span>
                  </div>
                ))
              ) : (
                <p>Loading or no supporters found.</p>
              )}
            </div>
          </section>

          <section>
            <h2>{t('donate.supporters.github')}</h2>
            <div className="supporter-grid">
              {github.length > 0 ? (
                github.map((s, i) => (
                  <div key={i} className={`supporter-tag ${!s.avatar ? 'no-avatar' : ''}`}>
                    {s.avatar && <img src={s.avatar} alt="" className="supporter-avatar" />}
                    <span>{s.name}</span>
                  </div>
                ))
              ) : (
                <p>Loading or no supporters found.</p>
              )}
            </div>
          </section>

          <section>
            <h2>{t('donate.supporters.kofi')}</h2>
            <div className="supporter-grid">
              {kofi.length > 0 ? (
                kofi.map((s, i) => (
                  <div key={i} className={`supporter-tag ${!s.avatar ? 'no-avatar' : ''}`}>
                    {s.avatar && <img src={s.avatar} alt="" className="supporter-avatar" />}
                    <span>{s.name}</span>
                  </div>
                ))
              ) : (
                <p>Manual update required for Ko-fi.</p>
              )}
            </div>
          </section>
        </div>
      </header>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [github, patreon] = await Promise.all([
    getGitHubSponsors(),
    getPatreonSupporters()
  ])

  return {
    props: {
      github,
      patreon,
      kofi: [] // Ko-fi requires manual list or webhooks
    },
    // Revalidate once a day
    revalidate: 86400
  }
}

export default Supporters
