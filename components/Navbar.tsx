/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

const logo = require('../assets/logo.png?webp')
import {
  faTwitter,
  faGithub,
  faDiscord,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <Link href="/" passHref>
            <span className="contrast link">
              <img
                src={logo}
                title="Heroic Games Launcher"
                alt="Heroic Games Launcher"
                height="32px"
                width="32px"
              />
              <strong>Heroic Games Launcher</strong>
            </span>
          </Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>
            <a
              rel="me"
              title={String(t('navbar.heroicMastodon'))}
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
              title={String(t('navbar.heroicTwitter'))}
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
              title={String(t('navbar.heroicGithub'))}
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
              title={String(t('navbar.heroicDiscord'))}
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
            <Link href="/donate">{t('navbar.supportUs')}</Link>
          </li>
          <li>
            <Link href="/cla">{t('navbar.cla')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
