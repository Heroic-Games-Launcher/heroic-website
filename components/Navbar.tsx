/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const logo = require('../assets/logo.png')
import { LogoGithub, LogoDiscord, LogoTwitter } from 'react-ionicons'

export default function Navbar() {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <Link href="/" passHref>
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
          <a href="https://twitter.com/HeroicLauncher">
            <LogoTwitter color={'#00000'} title="Heroic Github Page" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Heroic-Games-Launcher">
            <LogoGithub color={'#00000'} title="Heroic Github Page" />
          </a>
        </li>
        <li>
          <a href="https://discord.com/invite/rHJ2uqdquK">
            <LogoDiscord color={'#00000'} title="Heroic Discord Server" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">
            Documentation
          </a>
        </li>
        <li>
          <Link href="/donate">Support Us</Link>
        </li>
      </ul>
    </nav>
  )
}
