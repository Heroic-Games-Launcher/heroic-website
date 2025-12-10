import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './api/github'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

const Downloads: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation()

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
        <title>{t('downloads.pageTitle')}</title>
        <meta
          name="description"
          content="An Open Source GOG , Amazon Prime and Epic Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('downloads.title')}</h1>
          <p>{t('downloads.subtitle')}</p>

          <hr className="spacer" />

          <details open={isLinux}>
            <summary>{t('downloads.linux.title')}</summary>
            <p>{t('downloads.supportedOS')} {t('downloads.osRequirements.linux')}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.linux.flatpak.title')}</h4>
                <p>{t('downloads.linux.flatpak.description')}</p>
                <footer>
                  <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">
                    <strong onClick={() => handleDownload('flatpak')}>
                      {t('downloads.linux.flatpak.button')}
                    </strong>
                  </a>
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.linux.appimage.title')}</h4>
                <p>{t('downloads.linux.appimage.description')}</p>
                <footer className="downloadLink">
                  <a href={releases.Linux}>
                    <strong onClick={() => handleDownload('appimage-stable')}>
                      {t('downloads.linux.appimage.stable')}
                    </strong>

                    <span className="smallText">
                      {` (${releases.Linux.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.LinuxBeta && (
                    <a href={releases.LinuxBeta}>
                      <strong onClick={() => handleDownload('appimage-beta')}>
                        {t('downloads.linux.appimage.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.LinuxBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.linux.other.title')}</h4>
                <p>{t('downloads.linux.other.description')}</p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      {t('downloads.linux.other.button')}
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isWindows}>
            <summary>{t('downloads.windows.title')}</summary>
            <p>{t('downloads.supportedOS')} {t('downloads.osRequirements.windows')}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.windows.setup.title')}</h4>
                <p>{t('downloads.windows.setup.description')}</p>
                <footer>
                  <a href={releases.Windows}>
                    <strong onClick={() => handleDownload('windows-stable')}>
                      {t('downloads.windows.setup.stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Windows.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.WindowsBeta && (
                    <a href={releases.WindowsBeta}>
                      <strong onClick={() => handleDownload('windows-beta')}>
                        {t('downloads.windows.setup.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.WindowsBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.windows.portable.title')}</h4>
                <p>{t('downloads.windows.portable.description')}</p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      {t('downloads.windows.portable.button')}
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isMac}>
            <summary>{t('downloads.macos.title')}</summary>
            <p>{t('downloads.supportedOS')} {t('downloads.osRequirements.macos')}</p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.macos.appleChips.title')}</h4>
                <p>{t('downloads.macos.appleChips.description')}</p>
                <footer>
                  <a href={releases.MacArm}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      {t('downloads.macos.appleChips.stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.MacArm.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacArmBeta && (
                    <a href={releases.MacArmBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        {t('downloads.macos.appleChips.beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.MacArmBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{t('downloads.macos.intelChips.title')}</h4>
                <p>{t('downloads.macos.intelChips.description')}</p>
                <footer>
                  <a href={releases.Mac}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      {t('downloads.macos.intelChips.stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Mac.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacBeta && (
                    <a href={releases.MacBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        {t('downloads.macos.intelChips.beta')}
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
