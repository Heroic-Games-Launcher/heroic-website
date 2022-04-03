import Link from 'next/link'
import React from 'react'

const logo = require('../assets/logo.png')
import { LogoGithub, LogoDiscord } from 'react-ionicons'

export default function Header() {
    return (
        <nav className="container-fluid">
            <ul>
                <li>
                    <Link href="/">
                        <span className="contrast link">
                            <img src={logo} alt="Heroic Games Launcher"
                                style={{ height: '32px' }} />
                            <strong>Heroic Games Launcher</strong>
                        </span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://github.com/Heroic-Games-Launcher">
                        <LogoGithub color={'#00000'} />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/invite/rHJ2uqdquK">
                        <LogoDiscord color={'#00000'} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">Documentation</a>
                </li>
                <li>
                    <Link href="/donate">Support Us</Link>
                </li>
            </ul>
        </nav>
    )
}
