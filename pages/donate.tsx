import { NextPage, GetStaticProps } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import SupportersMarquee from '../components/SupportersMarquee'
import {
  Supporter,
  getGitHubSponsors,
  getPatreonSupporters,
  getRoleFromAmount
} from '../lib/supporters'
import { cached } from '../lib/cache'
import kofiData from '../lib/kofi_supporters.json'

interface DonateProps {
  kofi: Supporter[]
  github: Supporter[]
  patreon: Supporter[]
}

const Donate: NextPage<DonateProps> = ({ kofi, github, patreon }) => {
  const { t } = useTranslation()

  return (
    <>
      <Seo
        title="Support Heroic Development — Heroic Games Launcher"
        description="Heroic Games Launcher is free and open source. Support its development through Patreon, Ko-fi, GitHub Sponsors or by shopping on GOG with our link."
      />
      <header className="hero">
        <div className="container">
          <h1>{t('donate.title')}</h1>
          <p>{t('donate.subtitle')}</p>

          <hr className="spacer" />

          <div className="grid">
            <article>
              <h2>{t('donate.patreon.title')}</h2>
              <small>{t('donate.patreon.type')}</small>
              <p>{t('donate.patreon.description')}</p>
              <footer>
                <a href="https://patreon.com/heroicgameslauncher">
                  <strong>{t('donate.patreon.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h2>{t('donate.kofi.title')}</h2>
              <small>{t('donate.kofi.type')}</small>
              <p>{t('donate.kofi.description')}</p>
              <footer>
                <a href="https://ko-fi.com/heroicgames">
                  <strong>{t('donate.kofi.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h2>{t('donate.gog.title')}</h2>
              <small>{t('donate.gog.type')}</small>
              <p>{t('donate.gog.description')}</p>
              <footer>
                <a href="https://af.gog.com?as=1838482841">
                  <strong>{t('donate.gog.button')}</strong>
                </a>
              </footer>
            </article>
            <article>
              <h2>{t('donate.github.title')}</h2>
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

      <SupportersMarquee github={github} patreon={patreon} kofi={kofi} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [github, patreon] = await Promise.all([
    cached('github-sponsors', 6 * 60 * 60 * 1000, getGitHubSponsors),
    cached('patreon-supporters', 6 * 60 * 60 * 1000, getPatreonSupporters)
  ])

  const sortedKofi = [...kofiData]
    .map((s) => ({
      ...s,
      role: getRoleFromAmount(s.amount)
    }))
    .sort((a, b) => {
      const roleOrder: Record<string, number> = {
        'mega supporter': 4,
        'hero supporter': 3,
        'supporter plus': 2,
        supporter: 1
      }
      const orderA = roleOrder[a.role || ''] || 0
      const orderB = roleOrder[b.role || ''] || 0
      if (orderA !== orderB) return orderB - orderA
      return b.amount - a.amount
    })

  return {
    props: {
      kofi: sortedKofi,
      github,
      patreon
    },
    revalidate: 86400
  }
}

export default Donate
