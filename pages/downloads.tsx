import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './api/github'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { osRequirements } from './api/constants'
import { useTranslation } from 'react-i18next'

const Downloads: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('downloads')

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
        <title>{t('pageTitle')}</title>
        <meta
          name="description"
          content="An Open Source GOG , Amazon Prime and Epic Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>

          <hr className="spacer" />

          <details open={isLinux}>
            <summary>{t('linux.title')}</summary>
            <p>{t('supportedOS')} {osRequirements.linux}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>{t('linux.flatpak.title')}</h4>
                <p>{t('linux.flatpak.description')}</p>
                <footer>
                  <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">
                    <strong onClick={() => handleDownload('flatpak')}>
                      {t('linux.flatpak.button')}
                    </strong>
                  </a>
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('linux.appimage.title')}</h4>
                <p>{t('linux.appimage.description')}</p>
                <footer className="downloadLink">
                  <a href={releases.Linux}>
                    <strong onClick={() => handleDownload('appimage-stable')}>
                      {t('linux.appimage.stable')}
                    </strong>

                    <span className="smallText">
                      {` (${releases.Linux.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.LinuxBeta && (
                    <a href={releases.LinuxBeta}>
                      <strong onClick={() => handleDownload('appimage-beta')}>
                        {t('linux.appimage.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.LinuxBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('linux.other.title')}</h4>
                <p>{t('linux.other.description')}</p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      {t('linux.other.button')}
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isWindows}>
            <summary>{t('windows.title')}</summary>
            <p>{t('supportedOS')} {osRequirements.windows}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>{t('windows.setup.title')}</h4>
                <p>{t('windows.setup.description')}</p>
                <footer>
                  <a href={releases.Windows}>
                    <strong onClick={() => handleDownload('windows-stable')}>
                      {t('windows.setup.stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Windows.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.WindowsBeta && (
                    <a href={releases.WindowsBeta}>
                      <strong onClick={() => handleDownload('windows-beta')}>
                        {t('windows.setup.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.WindowsBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('windows.portable.title')}</h4>
                <p>{t('windows.portable.description')}</p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      {t('windows.portable.button')}
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isMac}>
            <summary>{t('macos.title')}</summary>
            <p>{t('supportedOS')} {osRequirements.macos}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>{t('macos.appleChips.title')}</h4>
                <p>{t('macos.appleChips.description')}</p>
                <footer>
                  <a href={releases.MacArm}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      {t('macos.appleChips.stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.MacArm.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacArmBeta && (
                    <a href={releases.MacArmBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        {t('macos.appleChips.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.MacArmBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('macos.intelChips.title')}</h4>
                <p>{t('macos.intelChips.description')}</p>
                <footer>
                  <a href={releases.Mac}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      {t('macos.intelChips.stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Mac.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacBeta && (
                    <a href={releases.MacBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        {t('macos.intelChips.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.MacBeta.split('/')[7] ?? ''})`}
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
