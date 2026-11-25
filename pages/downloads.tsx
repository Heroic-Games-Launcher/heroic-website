import { NextPage } from 'next'
import React from 'react'
import { getLatestReleases, ReleaseUrls } from '../lib/github'
import styles from '../styles/Home.module.css'
import Seo from '../components/Seo'
import DownloadNudge, { useDownloadNudge } from '../components/DownloadNudge'
import VersionDropdown, { VersionOption } from '../components/VersionDropdown'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinux, faWindows, faApple } from '@fortawesome/free-brands-svg-icons'

const Downloads: NextPage = () => {
  const { t } = useTranslation()
  const { show: showNudge, notify, dismiss } = useDownloadNudge()

  // Resolved after mount so server and client render the same markup (avoids a
  // hydration mismatch on the <details open> defaults).
  const [userAgent, setUserAgent] = React.useState('')
  const [releases, setReleases] = React.useState<ReleaseUrls>({
    Linux: '',
    LinuxArm: '',
    Windows: '',
    WindowsArm: '',
    Mac: '',
    MacArm: ''
  })

  React.useEffect(() => {
    setUserAgent(global.window?.navigator?.userAgent || '')
    const getLatestPackages = async () => {
      const latests = await getLatestReleases()
      setReleases(latests)
    }
    getLatestPackages()
  }, [])

  const isWindows = userAgent.toLowerCase().includes('windows')
  const isMac = userAgent.toLowerCase().includes('mac')
  const isLinux = !isWindows && !isMac

  // Download URLs look like https://github.com/.../releases/download/<tag>/<file>,
  // so the tag is the 8th path segment.
  const versionOf = (url?: string | null) => url?.split('/')[7] ?? ''

  // Stable is always the default action; beta joins the menu only when the
  // latest prerelease actually ships an asset for this platform.
  const channels = (
    stableLabel: string,
    stableUrl: string,
    betaLabel: string,
    betaUrl?: string | null
  ): VersionOption[] => [
    { label: stableLabel, version: versionOf(stableUrl), href: stableUrl },
    ...(betaUrl
      ? [{ label: betaLabel, version: versionOf(betaUrl), href: betaUrl }]
      : [])
  ]

  return (
    <>
      <Seo
        title="Download Heroic Games Launcher — Linux, Windows & macOS"
        description="Download Heroic Games Launcher for Linux, Windows and macOS. Available as Flatpak, AppImage, Windows installer (x64 and ARM64), and macOS app for Apple Silicon and Intel, in stable and beta builds."
      />
      <header className="hero" style={{ width: '100%' }}>
        <div className="container">
          <h1>{t('downloads.title')}</h1>
          <p>{t('downloads.subtitle')}</p>

          <hr className="spacer" />

          <details open={isLinux}>
            <summary className={styles.osSummary}>
              <FontAwesomeIcon icon={faLinux} />
              {t('downloads.linux.title')}
            </summary>
            <p>
              {t('downloads.supportedOS')} {t('downloads.osRequirements.linux')}
            </p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h2>
                  {t('downloads.linux.flatpak.title')}
                  <span className={styles.recommended}>
                    {t('downloads.recommended')}
                  </span>
                </h2>
                <p>{t('downloads.linux.flatpak.description')}</p>
                <footer>
                  <a
                    href="https://flathub.org/apps/details/com.heroicgameslauncher.hgl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong onClick={notify}>
                      {t('downloads.linux.flatpak.button')}
                    </strong>
                  </a>
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h2>{t('downloads.linux.appimage.title')}</h2>
                <p>{t('downloads.linux.appimage.description')}</p>
                <footer>
                  <div className={styles.appImageGrid}>
                    <div className={styles.archColumn}>
                      <span className={styles.archLabel}>x86_64</span>
                      <VersionDropdown
                        label={t('home.download')}
                        options={channels(
                          t('downloads.linux.appimage.stable'),
                          releases.Linux,
                          t('downloads.linux.appimage.beta'),
                          releases.LinuxBeta
                        )}
                        onSelect={notify}
                      />
                    </div>
                    <div className={styles.archColumn}>
                      <span className={styles.archLabel}>ARM64</span>
                      <VersionDropdown
                        label={t('home.download')}
                        options={channels(
                          t('downloads.linux.appimage.stable'),
                          releases.LinuxArm,
                          t('downloads.linux.appimage.beta'),
                          releases.LinuxArmBeta
                        )}
                        onSelect={notify}
                      />
                    </div>
                  </div>
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h2>{t('downloads.linux.other.title')}</h2>
                <p>{t('downloads.linux.other.description')}</p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={notify}>
                      {t('downloads.linux.other.button')}
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isWindows}>
            <summary className={styles.osSummary}>
              <FontAwesomeIcon icon={faWindows} />
              {t('downloads.windows.title')}
            </summary>
            <p>
              {t('downloads.supportedOS')}{' '}
              {t('downloads.osRequirements.windows')}
            </p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h2>
                  {t('downloads.windows.setup.title')} (x64)
                  <span className={styles.recommended}>
                    {t('downloads.recommended')}
                  </span>
                </h2>
                <p>{t('downloads.windows.setup.description')}</p>
                <footer>
                  <VersionDropdown
                    label={t('home.download')}
                    options={channels(
                      t('downloads.windows.setup.stable'),
                      releases.Windows,
                      t('downloads.windows.setup.beta'),
                      releases.WindowsBeta
                    )}
                    onSelect={notify}
                  />
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h2>{t('downloads.windows.setup.title')} (ARM64)</h2>
                <p>{t('downloads.windows.setupArm.description')}</p>
                <footer>
                  <VersionDropdown
                    label={t('home.download')}
                    options={channels(
                      t('downloads.windows.setup.stable'),
                      releases.WindowsArm,
                      t('downloads.windows.setup.beta'),
                      releases.WindowsArmBeta
                    )}
                    onSelect={notify}
                  />
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h2>{t('downloads.windows.portable.title')}</h2>
                <p>{t('downloads.windows.portable.description')}</p>
                <footer>
                  <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/latest">
                    <strong onClick={notify}>
                      {t('downloads.windows.portable.button')}
                    </strong>
                  </a>
                </footer>
              </article>
            </div>
          </details>

          <details open={isMac}>
            <summary className={styles.osSummary}>
              <FontAwesomeIcon icon={faApple} />
              {t('downloads.macos.title')}
            </summary>
            <p>
              {t('downloads.supportedOS')} {t('downloads.osRequirements.macos')}
            </p>
            <div className="grid">
              <article className={styles.downloadBoxes}>
                <h2>{t('downloads.macos.appleChips.title')}</h2>
                <p>{t('downloads.macos.appleChips.description')}</p>
                <footer>
                  <VersionDropdown
                    label={t('home.download')}
                    options={channels(
                      t('downloads.macos.appleChips.stable'),
                      releases.MacArm,
                      t('downloads.macos.appleChips.beta'),
                      releases.MacArmBeta
                    )}
                    onSelect={notify}
                  />
                </footer>
              </article>
              <article className={styles.downloadBoxes}>
                <h2>{t('downloads.macos.intelChips.title')}</h2>
                <p>{t('downloads.macos.intelChips.description')}</p>
                <footer>
                  <VersionDropdown
                    label={t('home.download')}
                    options={channels(
                      t('downloads.macos.intelChips.stable'),
                      releases.Mac,
                      t('downloads.macos.intelChips.beta'),
                      releases.MacBeta
                    )}
                    onSelect={notify}
                  />
                </footer>
              </article>
            </div>
          </details>
        </div>
      </header>

      <DownloadNudge show={showNudge} onDismiss={dismiss} />
    </>
  )
}

export default Downloads
