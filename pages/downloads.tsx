import { NextPage } from 'next'
import React from 'react'

const Downloads: NextPage = () => {
  const userAgent = global.window?.navigator?.userAgent || ''

  if (!userAgent) {
    return null
  }

  const isWindows = userAgent.toLowerCase().includes('windows')
  const isMac = userAgent.toLowerCase().includes('mac')
  const isLinux = !isWindows && !isMac

  return (
    <header className="hero">
      <div className="container">
        <h1>Download</h1>
        <p>Heroic is available for all operating systems.</p>

        <hr className="spacer" />

        <details open={isLinux}>
          <summary>Linux</summary>
          <div className="grid">
            <article className="secondary">
              <h4>Flatpak</h4>
              <p>
                Get the best Heroic experience on any Linux distribution via
                Flatpak.
              </p>
              <footer>
                <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">
                  <strong>Get from Flathub</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>AppImage</h4>
              <p>
                Download it in AppImage format to take it always with you,
                everywhere.
              </p>
              <footer>
                <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                  <strong>Download</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>Other</h4>
              <p>
                Download it in AppImage format to take it always with you,
                everywhere.
              </p>
              <footer>
                <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                  <strong>See all</strong>
                </a>
              </footer>
            </article>
          </div>
        </details>

        <details open={isWindows}>
          <summary>Windows</summary>
          <p>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
              <strong>Download </strong>
            </a>
            here the latest version for Windows.
          </p>
        </details>

        <details open={isMac}>
          <summary>MacOS</summary>
          <p>
            <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
              <strong>Download </strong>
            </a>
            here the latest version for MacOS.
          </p>
        </details>
      </div>
    </header>
  )
}

export default Downloads
