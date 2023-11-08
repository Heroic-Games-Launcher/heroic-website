import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './api/github'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { osRequirements } from './api/constants'

const Downloads: NextPage = () => {
  const router = useRouter()

  const userAgent = global.window?.navigator?.userAgent || ''
  const [releases, setReleases] = React.useState<ReleaseUrls>({
    Linux: '',
    Windows: '',
    WindowsArm: '',
    Mac: '',
    MacArm: ''
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

  console.log(releases)

  const isWindows = userAgent.toLowerCase().includes('windows')
  const isMac = userAgent.toLowerCase().includes('mac')
  const isLinux = !isWindows && !isMac

  function handleDownload(version: string) {
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
          content="An Open Source GOG , Amazon Prime and Epic Games Launcher"
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
            <p>Supported OS versions: {osRequirements.linux}</p>
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
                <footer className="downloadLink">
                  <a href={releases.Linux}>
                    <strong onClick={() => handleDownload('appimage-stable')}>
                      Stable
                    </strong>

                    <span className="smallText">
                      {` (${releases.Linux.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.LinuxBeta && (
                    <a href={releases.LinuxBeta}>
                      <strong onClick={() => handleDownload('appimage-beta')}>
                        Beta
                      </strong>
                      <span className="smallText">
                        {` (${releases.LinuxBeta.split('/')[7] ?? ''})`}
                      </span>
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
            <p>Supported OS versions: {osRequirements.windows}</p>
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
                    <span className="smallText">
                      {` (${releases.Windows.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.WindowsBeta && (
                    <a href={releases.WindowsBeta}>
                      <strong onClick={() => handleDownload('windows-beta')}>
                        Beta
                      </strong>
                      <span className="smallText">
                        {` (${releases.WindowsBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
{/*               {releases.WindowsArm && (
                <article className={styles.downloadBoxes}>
                  <h4>Windows ARM64</h4>
                  <p>
                    For Windows on ARM64 devices like the Surface Pro X and
                    others
                  </p>
                  <footer>
                    <a href={releases.WindowsArm}>
                      <strong onClick={() => handleDownload('mac-stable')}>
                        Stable
                      </strong>
                      <span className="smallText">
                        {` (${releases.WindowsArm.split('/')[7]})`}
                      </span>
                    </a>
                    {releases.WindowsArmBeta && (
                      <a href={releases.WindowsArmBeta}>
                        <strong onClick={() => handleDownload('mac-beta')}>
                          Beta
                        </strong>
                        <span className="smallText">
                          {` (${releases.WindowsArmBeta.split('/')[7] ?? ''})`}
                        </span>
                      </a>
                    )}
                  </footer>
                </article>
              )} */}
              <article className={styles.downloadBoxes}>
                <h4>Portable</h4>
                <p>
                  Use the portable version in case you do not want the full
                  installation. Check for x64 and arm64 versions on our Github.
                </p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      See all packages
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isMac}>
            <summary>MacOS</summary>
            <p>Supported OS versions: {osRequirements.macos}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>Intel Chips</h4>
                <p>
                  Optimized for Intel Chips. Open it and copy the Heroic App to
                  the Applications folder and you are good to go!
                </p>
                <footer>
                  <a href={releases.Mac}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      Stable
                    </strong>
                    <span className="smallText">
                      {` (${releases.Mac.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacBeta && (
                    <a href={releases.MacBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        Beta
                      </strong>
                      <span className="smallText">
                        {` (${releases.MacBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>Apple Chips (M1/M2)</h4>
                <p>
                  Might need to run this command on the terminal to make it
                  work:
                  <code>
                    xattr -r -d com.apple.quarantine /Applications/Heroic.app
                  </code>
                </p>
                <footer>
                  <a href={releases.MacArm}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      Stable
                    </strong>
                    <span className="smallText">
                      {` (${releases.MacArm.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacArmBeta && (
                    <a href={releases.MacArmBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        Beta
                      </strong>
                      <span className="smallText">
                        {` (${releases.MacArmBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
            </div>
          </details>
        </div>
      </header>
    </>
  )
}

export default Downloads
