import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './../api/github'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import i18next from 'i18next'
import DownloadsPageArticleCard from '../../components/DownloadsPageArticleCard'

const Downloads = () => {
  const router = useRouter()

  const userAgent = global.window?.navigator?.userAgent || ''
  const [releases, setReleases] = React.useState<ReleaseUrls>({
    Linux: '',
    Windows: '',
    WindowsPortable: '',
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
      router.push(`/${i18next.language}/donate`)
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>{i18next.t('Download.title')}</title>
        <meta name="description" content={i18next.t('Download.meta_desc')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{i18next.t('Download.Download')}</h1>
          <p>{i18next.t('Download.AvailableFor')}</p>

          <hr className="spacer" />

          <details open={isLinux}>
            <summary>Linux</summary>
            <div className="grid">
              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle="Flatpack"
                articleDescription={i18next.t('Download.Linux.Flatpack_desc')}
              >
                <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">
                  <strong onClick={() => handleDownload('flatpak')}>
                    {i18next.t('Download.Linux.Flatpack_get')}
                  </strong>
                </a>
              </DownloadsPageArticleCard>

              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle="AppImage"
                articleDescription={i18next.t('Download.Linux.AppImage_desc')}
              >
                <>
                  <a href={releases.Linux}>
                    <strong onClick={() => handleDownload('appimage-stable')}>
                      {i18next.t('Download.Stable')}
                    </strong>

                    <span className="smallText">
                      {` (${releases.Linux.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.LinuxBeta && (
                    <a href={releases.LinuxBeta}>
                      <strong onClick={() => handleDownload('appimage-beta')}>
                        {i18next.t('Download.Beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.LinuxBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </>
              </DownloadsPageArticleCard>

              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle={i18next.t('Download.Other')}
                articleDescription={i18next.t('Download.Linux.Other_desc')}
              >
                <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                  <strong onClick={() => handleDownload('all-packages')}>
                    {i18next.t('Download.See_all')}
                  </strong>
                </a>
              </DownloadsPageArticleCard>
            </div>
          </details>

          <details open={isWindows}>
            <summary>Windows</summary>
            <div className="grid">
              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle={i18next.t('Download.Setup')}
                articleDescription={i18next.t('Download.Windows.Setup_desc')}
              >
                <>
                  <a href={releases.Windows}>
                    <strong onClick={() => handleDownload('windows-stable')}>
                      {i18next.t('Download.Stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Windows.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.WindowsBeta && (
                    <a href={releases.WindowsBeta}>
                      <strong onClick={() => handleDownload('windows-beta')}>
                        {i18next.t('Download.Beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.WindowsBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </>
              </DownloadsPageArticleCard>

              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle={i18next.t('Download.Portable')}
                articleDescription={i18next.t('Download.Windows.Portable_desc')}
              >
                <>
                  <a href={releases.WindowsPortable}>
                    <strong
                      onClick={() => handleDownload('windows-portable-stable')}
                    >
                      {i18next.t('Download.Stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.WindowsPortable.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.WindowsPortableBeta && (
                    <a href={releases.WindowsPortableBeta}>
                      <strong
                        onClick={() => handleDownload('windows-portable-beta')}
                      >
                        {i18next.t('Download.Beta')}
                      </strong>
                      <span className="smallText">
                        {` (${
                          releases.WindowsPortableBeta.split('/')[7] ?? ''
                        })`}
                      </span>
                    </a>
                  )}
                </>
              </DownloadsPageArticleCard>
            </div>
          </details>

          <details open={isMac}>
            <summary>MacOS</summary>
            <div className="grid">
              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle={i18next.t('Download.MacOS.IntelChips')}
                articleDescription={i18next.t('Download.MacOS.IntelChips_desc')}
              >
                <>
                  <a href={releases.Mac}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      {i18next.t('Download.Stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Mac.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacBeta && (
                    <a href={releases.MacBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        {i18next.t('Download.Beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.Mac.split('/')[7]})`}
                      </span>
                    </a>
                  )}
                </>
              </DownloadsPageArticleCard>

              <DownloadsPageArticleCard
                className={styles.downloadBoxes}
                articleTitle={i18next.t('Download.MacOS.AppleChips')}
                articleDescription={i18next.t('Download.MacOS.AppleChips_desc')}
                sampleCode="xattr -r -d com.apple.quarantine /Applications/Heroic.app"
              >
                <>
                  <a href={releases.MacArm}>
                    <strong onClick={() => handleDownload('mac-stable')}>
                      {i18next.t('Download.Stable')}
                    </strong>
                    <span className="smallText">
                      {` (${releases.MacArm.split('/')[7]})`}
                    </span>
                  </a>
                  {releases.MacArmBeta && (
                    <a href={releases.MacArmBeta}>
                      <strong onClick={() => handleDownload('mac-beta')}>
                        {i18next.t('Download.Beta')}
                      </strong>
                      <span className="smallText">
                        {` (${releases.MacArm.split('/')[7]})`}
                      </span>
                    </a>
                  )}
                </>
              </DownloadsPageArticleCard>
            </div>
          </details>
        </div>
      </header>
    </>
  )
}

export default Downloads
