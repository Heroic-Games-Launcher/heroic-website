import React from 'react'

const logo = require('../../assets/logo.png')

export default function Header() {
  return (
    <nav className="container-fluid">
    <ul>
        <li>
            <a href="/" className="contrast">
                <img src={logo} alt="Heroic Games Launcher"
                    style={{height: "32px"}} />
                <strong>Heroic Games Launcher</strong>
            </a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://github.com/Heroic-Games-Launcher">
                <ion-icon className="icon" name="logo-github"></ion-icon>
            </a>
        </li>
        <li>
            <a href="https://discord.com/invite/rHJ2uqdquK">
                <ion-icon className="icon" name="logo-discord"></ion-icon>
            </a>
        </li>
        <li>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki">Documentation</a>
        </li>
        <li>
            <a href="/donate">Support Us</a>
        </li>
    </ul>
</nav>
  )
}
