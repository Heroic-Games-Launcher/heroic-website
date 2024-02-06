/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const logo = require('../assets/logo.png')
import {
  faTwitter,
  faGithub,
  faDiscord,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <Link href="/" passHref>
            <span className="contrast link">
              <img
                src={logo}
                title='Heroic Games Launcher'
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
              title="Heroic Twitter Page"
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
              title="Heroic GitHub Page"
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
              title="Heroic Discord Server"
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
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">
              Documentation
            </a>
          </li>
          <li>
            <Link href="/donate">Support Us</Link>
          </li>
          <li>
            <Link href="/cla">CLA</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
