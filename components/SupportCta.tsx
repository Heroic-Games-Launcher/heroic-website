import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { PatreonIcon, KofiIcon, GitHubIcon } from './DonateIcons'
import styles from './SupportCta.module.css'

// Direct links to the three recurring/one-off funding channels. The full list
// (including affiliate links) still lives on /donate, which this section links
// to at the bottom.
const options = [
  {
    key: 'patreon',
    href: 'https://patreon.com/heroicgameslauncher',
    Icon: PatreonIcon
  },
  {
    key: 'kofi',
    href: 'https://ko-fi.com/heroicgames',
    Icon: KofiIcon
  },
  {
    key: 'github',
    href: 'https://github.com/sponsors/Heroic-Games-Launcher',
    Icon: GitHubIcon
  }
] as const

const SupportCta: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section
      className={`container ${styles.section}`}
      aria-labelledby="support-cta-title"
    >
      <h2 id="support-cta-title" className={styles.title}>
        {t('home.supportCta.title')}
      </h2>
      <p className={styles.subtitle}>{t('home.supportCta.subtitle')}</p>

      <div className={styles.options}>
        {options.map(({ key, href, Icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.option}
          >
            <Icon className={styles.icon} />
            <span className={styles.optionText}>
              <strong>{t(`home.supportCta.options.${key}.title`)}</strong>
              <small>{t(`home.supportCta.options.${key}.description`)}</small>
            </span>
          </a>
        ))}
      </div>

      <Link href="/donate">
        <a className={styles.allLink}>{t('home.supportCta.allWays')}</a>
      </Link>
    </section>
  )
}

export default SupportCta
