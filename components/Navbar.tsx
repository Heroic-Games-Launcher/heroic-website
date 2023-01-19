/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import i18next from '../components/i18next'

const logo = require('../assets/logo.png')
import {
  faTwitter,
  faGithub,
  faDiscord,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

interface Navbar {
  siteLang: string
}

export default function Navbar({siteLang}:Navbar) {

  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <Link href={`/${siteLang}/`} passHref>
            <span className="contrast link">
              <img
                src={logo}
                alt="Heroic Games Launcher"
                height="32px"
                width="32px"
              />
              <strong>Heroic Games Launcher</strong>
            </span>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <a
            rel="me"
            title="Heroic Mastodon Page"
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
            title={i18next.t("Navbar.Heroic_Twitter_Page")}
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
            title={i18next.t("Navbar.Heroic_GitHub_Page")}
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
            title={i18next.t("Navbar.Heroic_Discord_Server")}
          >
            <FontAwesomeIcon
              icon={faDiscord}
              height={22}
              width={22}
              color={'#00000'}
            />
          </a>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">
            {i18next.t("Navbar.Documentation")}
          </a>
        </li>
        <li>
          <Link href={`/${siteLang}/donate`}>{i18next.t("Navbar.Support_Us")}</Link>
        </li>
      </ul>
    </nav>
  )
}
