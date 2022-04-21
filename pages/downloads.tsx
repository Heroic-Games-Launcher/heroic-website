import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './api/github'

const Downloads: NextPage = () => {
  const userAgent = global.window?.navigator?.userAgent || ''
  const [releases, setReleases] = React.useState<ReleaseUrls>({
    Linux: '',
    Windows: '',
    Mac: ''
  })

  React.useEffect(() => {
    const getLatestPackages = async () => {
      const latests = await getLatestReleases()
      setReleases(latests)
    }
    getLatestPackages()
  })

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
        <p>Heroic is available for all Major operating systems.</p>

        <hr className="spacer" />

        <details open={isLinux}>
          <summary>Linux</summary>
          <div className="grid">
            <article className="secondary">
              <h4>Flatpak</h4>
              <p>
                Get the best Heroic experience on any Linux distribution or on
                the Steam Deck via Flatpak.
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
                Download it in AppImage format so it will work on any Linux
                distro.
              </p>
              <footer>
                <a href={releases.Linux}>
                  <strong>Download</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>Other</h4>
              <p>Heroic is also distributed in RPM, DEB and a TAR.XZ file.</p>
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
            <a href={releases.Windows}>
              <strong>Download </strong>
            </a>
            here the latest version for Windows.
          </p>
        </details>

        <details open={isMac}>
          <summary>MacOS</summary>
          <p>
            <a href={releases.Mac}>
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
