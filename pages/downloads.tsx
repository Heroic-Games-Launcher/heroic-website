import { NextPage } from 'next'
import React from 'react'

const Downloads: NextPage = () => {
  return (
    <header className="hero">
    <div className="container">
        <h1>Download</h1>
        <p>Heroic is available for all operating systems.</p>

        <hr className="spacer" />

        <details open>
            <summary>Linux</summary>
            <div className="grid">
                <article className="secondary">
                    <h4>Flatpak</h4>
                    <p>Get the best Heroic experience on any Linux distribution via Flatpak.</p>
                    <footer>
                        <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">Get from Flathub</a>
                    </footer>
                </article>
                <article>
                    <h4>AppImage</h4>
                    <p>Download it in AppImage format to take it always with you, everywhere.</p>
                    <footer>
                        <a
                            href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">Download</a>
                    </footer>
                </article>
                <article>
                    <h4>Other</h4>
                    <p>Download it in AppImage format to take it always with you, everywhere.</p>
                    <footer>
                        <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">See
                            all</a>
                    </footer>
                </article>
            </div>
        </details>

        <details>
            <summary>Windows</summary>
            <p>
                <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">Download</a> 
                here the latest version for Windows.
            </p>
        </details>

        <details>
            <summary>MacOS</summary>
            <p>
                <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">Download</a> 
                here the latest version for MacOS.
            </p>
        </details>
    </div>
</header>
  )
}

export default Downloads