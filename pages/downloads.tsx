import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './api/github'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useCookies from '../components/hooks/useCookies'

const Downloads: NextPage = () => {
  const router = useRouter()
  const { cookiesState } = useCookies()

  const userAgent = global.window?.navigator?.userAgent || ''
  const [releases, setReleases] = React.useState<ReleaseUrls>({
    Linux: '',
    Windows: '',
    WindowsPortable: '',
    Mac: ''
  })

  React.useEffect(() => {
    const getLatestPackages = async () => {
      const latests = await getLatestReleases()
      setReleases(latests)
    }
    getLatestPackages()
  }, [])

  if (!userAgent) {
    return null
  }

  const isWindows = userAgent.toLowerCase().includes('windows')
  const isMac = userAgent.toLowerCase().includes('mac')
  const isLinux = !isWindows && !isMac

  function handleDownload(version: string) {
    // Send info about which packages are being download ONLY
    setTimeout(() => {
      router.push('/donate')
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>Download Heroic</title>
        <meta
          name="description"
          content="An Open Source GOG and Epic Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>Download</h1>
          <p>Heroic is available for all Major operating systems.</p>

          <hr className="spacer" />

          <details open={isLinux}>
            <summary>Linux</summary>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>Flatpak</h4>
                <p>
                  Get the best Heroic experience on any Linux distribution or on
                  the Steam Deck via Flatpak.
                </p>
                <footer>
                  <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">
                    <strong onClick={() => handleDownload('flatpak')}>
                      Get from Flathub
                    </strong>
                  </a>
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>AppImage</h4>
                <p>
                  Download it in AppImage format so it will work on any Linux
                  distro. The AppImage can update itself when a new version is
                  released.
                </p>
                <footer>
                  <a href={releases.Linux}>
                    <strong onClick={() => handleDownload('appimage-stable')}>
                      Stable
                    </strong>
                  </a>
                  {releases.LinuxBeta && (
                    <a href={releases.LinuxBeta}>
                      <strong onClick={() => handleDownload('appimage-beta')}>
                        Beta
                      </strong>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>Other</h4>
                <p>
                  Heroic is also distributed in RPM, DEB and a TAR.XZ file.
                  Check for alternative repos in our Github.
                </p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      See all
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isWindows}>
            <summary>Windows</summary>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>Setup</h4>
                <p>
                  Install Heroic on your system and get auto-updates when a new
                  version is released. Next, Next, Finish!
                </p>
                <footer>
                  <a href={releases.Windows}>
                    <strong onClick={() => handleDownload('windows-stable')}>
                      Stable
                    </strong>
                  </a>
                  {releases.WindowsBeta && (
                    <a href={releases.WindowsBeta}>
                      <strong onClick={() => handleDownload('windows-beta')}>
                        Beta
                      </strong>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>Portable</h4>
                <p>
                  Use the portable version in case you do not want the full
                  installation. You will still have all the features included.
                </p>
                <footer>
                  <a href={releases.WindowsPortable}>
                    <strong
                      onClick={() => handleDownload('windows-portable-stable')}
                    >
                      Stable
                    </strong>
                  </a>
                  {releases.WindowsPortableBeta && (
                    <a href={releases.WindowsPortableBeta}>
                      <strong
                        onClick={() => handleDownload('windows-portable-beta')}
                      >
                        Beta
                      </strong>
                    </a>
                  )}
                </footer>
              </article>
            </div>
          </details>

          <details open={isMac}>
            <summary>MacOS</summary>
            <article className={styles.downloadBoxes}>
              <h4>Application</h4>
              <p>
                Download the DMG, open it and copy the Heroic App to the
                Applications folder and you are good to go! Heroic will auto
                update once a new version is released!
              </p>
              <footer>
                <a href={releases.Mac}>
                  <strong onClick={() => handleDownload('mac-stable')}>
                    Stable
                  </strong>
                </a>
                {releases.MacBeta && (
                  <a href={releases.MacBeta}>
                    <strong onClick={() => handleDownload('mac-beta')}>
                      Beta
                    </strong>
                  </a>
                )}
              </footer>
            </article>
          </details>
        </div>
      </header>
    </>
  )
}

export default Downloads
