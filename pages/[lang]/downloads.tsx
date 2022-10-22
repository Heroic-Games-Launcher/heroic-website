import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from './../api/github'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import i18next from 'i18next'

interface DownloadsPage{
  siteLang: string|string[]|undefined
}

const Downloads: NextPage = ({siteLang}:DownloadsPage) => {
  const router = useRouter()

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
    setTimeout(() => {
      router.push(`/${siteLang}/donate`)
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>{i18next.t("Download.title")}</title>
        <meta
          name="description"
          content={i18next.t("Download.meta_desc")}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{i18next.t("Download.Download")}</h1>
          <p>{i18next.t("Download.AvailableFor")}</p>

          <hr className="spacer" />

          <details open={isLinux}>
            <summary>Linux</summary>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h4>Flatpak</h4>
                <p>
                  {i18next.t("Download.Linux.Flatpack_desc")}
                </p>
                <footer>
                  <a href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl">
                    <strong onClick={() => handleDownload('flatpak')}>
                      {i18next.t("Download.Linux.Flatpack_get")}
                    </strong>
                  </a>
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>AppImage</h4>
                <p>
                  {i18next.t("Download.Linux.AppImage_desc")}
                </p>
                <footer className="downloadLink">
                  <a href={releases.Linux}>
                    <strong onClick={() => handleDownload('appimage-stable')}>
                      {i18next.t("Download.Stable")}
                    </strong>

                    <span className="smallText">
                      {` (${releases.Linux.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.LinuxBeta && (
                    <a href={releases.LinuxBeta}>
                      <strong onClick={() => handleDownload('appimage-beta')}>
                        {i18next.t("Download.Beta")}
                      </strong>
                      <span className="smallText">
                        {` (${releases.LinuxBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{i18next.t("Download.Other")}</h4>
                <p>
                  {i18next.t("Download.Linux.Other_desc")}
                </p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={() => handleDownload('all-packages')}>
                      {i18next.t("Download.See_all")}
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
                <h4>{i18next.t("Download.Setup")}</h4>
                <p>
                  {i18next.t("Download.Windows.Setup_desc")}
                </p>
                <footer>
                  <a href={releases.Windows}>
                    <strong onClick={() => handleDownload('windows-stable')}>
                      {i18next.t("Download.Stable")}
                    </strong>
                    <span className="smallText">
                      {` (${releases.Windows.split('/')[7] ?? ''})`}
                    </span>
                  </a>
                  {releases.WindowsBeta && (
                    <a href={releases.WindowsBeta}>
                      <strong onClick={() => handleDownload('windows-beta')}>
                        {i18next.t("Download.Beta")}
                      </strong>
                      <span className="smallText">
                        {` (${releases.WindowsBeta.split('/')[7] ?? ''})`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h4>{i18next.t("Download.Portable")}</h4>
                <p>
                  {i18next.t("Download.Windows.Portable_desc")}
                </p>
                <footer>
                  <a href={releases.WindowsPortable}>
                    <strong
                      onClick={() => handleDownload('windows-portable-stable')}
                    >
                      {i18next.t("Download.Stable")}
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
                        {i18next.t("Download.Beta")}
                      </strong>
                      <span className="smallText">
                        {` (${
                          releases.WindowsPortableBeta.split('/')[7] ?? ''
                        })`}
                      </span>
                    </a>
                  )}
                </footer>
              </article>
            </div>
          </details>

          <details open={isMac}>
            <summary>MacOS</summary>
            <article className={styles.downloadBoxes}>
              <h4>{i18next.t("Download.MacOS.Application")}</h4>
              <p>
                {i18next.t("Download.MacOS.Application_desc")}
              </p>
              <footer>
                <a href={releases.Mac}>
                  <strong onClick={() => handleDownload('mac-stable')}>
                    {i18next.t("Download.Stable")}
                  </strong>
                  <span className="smallText">
                    {` (${releases.Mac.split('/')[7]})`}
                  </span>
                </a>
                {releases.MacBeta && (
                  <a href={releases.MacBeta}>
                    <strong onClick={() => handleDownload('mac-beta')}>
                      {i18next.t("Download.Beta")}
                    </strong>
                    <span className="smallText">
                      {` (${releases.MacBeta.split('/')[7] ?? ''})`}
                    </span>
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
