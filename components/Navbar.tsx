/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
const logo = require('../assets/logo.png?webp')
import {
  faTwitter,
  faGithub,
  faDiscord,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'

export default function Navbar() {
  const { t } = useTranslation('common');
  
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <Link href="/" passHref>
            <span className="contrast link">
              <img
                src={logo}
                title={t('title')}
                alt={t('title')}
                height="32px"
                width="32px"
              />
              <strong>{t('title')}</strong>
            </span>
          </Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <a
              rel="me"
              title={t('navbar.mastodon')}
              href="https://mastodon.social/@heroiclauncher"
            >
              <FontAwesomeIcon
                icon={faMastodon}
                height={22}
                width={22}
                color={'#00000'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/HeroicLauncher"
              title={t('navbar.twitter')}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                height={22}
                width={22}
                color={'#00000'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Heroic-Games-Launcher"
              title={t('navbar.github')}
            >
              <FontAwesomeIcon
                icon={faGithub}
                height={22}
                width={22}
                color={'#00000'}
              />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/rHJ2uqdquK"
              title={t('navbar.discord')}
            >
              <FontAwesomeIcon
                icon={faDiscord}
                height={22}
                width={22}
                color={'#00000'}
              />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/faq">{t('navbar.faq')}</Link>
          </li>
          <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">
              {t('navbar.documentation')}
            </a>
          </li>
          <li>
            <Link href="/donate">{t('navbar.support_us')}</Link>
          </li>
          <li>
            <Link href="/cla">{t('navbar.cla')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
