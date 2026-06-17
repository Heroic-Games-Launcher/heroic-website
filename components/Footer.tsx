import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMastodon,
  faTwitter,
  faGithub,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'
import styles from './Footer.module.css'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../assets/logo.png?webp')

const social = [
  { href: 'https://mastodon.social/@heroiclauncher', icon: faMastodon, label: 'Mastodon' },
  { href: 'https://twitter.com/HeroicLauncher', icon: faTwitter, label: 'Twitter' },
  { href: 'https://github.com/Heroic-Games-Launcher', icon: faGithub, label: 'GitHub' },
  { href: 'https://discord.com/invite/rHJ2uqdquK', icon: faDiscord, label: 'Discord' }
]

const Footer = () => {
  const { t } = useTranslation()
  const year = 2026

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" passHref>
            <a className={styles.brandLink}>
              <img src={logo} alt="Heroic Games Launcher" width="36" height="36" />
              <strong>Heroic Games Launcher</strong>
            </a>
          </Link>
          <p className={styles.tagline}>{t('footer.tagline')}</p>
          <ul className={styles.social}>
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href} title={s.label} aria-label={s.label}>
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.cols}>
          <div className={styles.col}>
            <h4>{t('footer.getHeroic')}</h4>
            <Link href="/downloads"><a>{t('navbar.downloads')}</a></Link>
            <Link href="/steamdeck"><a>{t('navbar.steamdeck')}</a></Link>
          </div>
          <div className={styles.col}>
            <h4>{t('footer.resources')}</h4>
            <Link href="/faq"><a>{t('navbar.faq')}</a></Link>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">
              {t('navbar.documentation')}
            </a>
            <Link href="/donate"><a>{t('navbar.supportUs')}</a></Link>
          </div>
          <div className={styles.col}>
            <h4>{t('footer.project')}</h4>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher">GitHub</a>
            <a href="https://discord.com/invite/rHJ2uqdquK">Discord</a>
            <Link href="/cla"><a>{t('navbar.cla')}</a></Link>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <small className={styles.copy}>
          &copy; {year} Heroic Games Launcher · {t('footer.license')}
        </small>
        <div className={styles.controls}>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}

export default Footer
