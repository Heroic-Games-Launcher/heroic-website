import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReleaseUrls } from '../lib/github'
import DownloadNudge, { useDownloadNudge } from './DownloadNudge'
import styles from './DownloadButton.module.css'

type OS = 'windows' | 'mac' | 'linux'

const FLATHUB = 'https://flathub.org/apps/details/com.heroicgameslauncher.hgl'

const osLabel: Record<OS, string> = {
  windows: 'Windows',
  mac: 'macOS',
  linux: 'Linux'
}

interface DownloadOption {
  label: string
  href: string
  // Store links navigate away from the site (unlike installer files, which the
  // browser downloads in place), so they open in a new tab: the visitor keeps
  // this page and can still see the post-download nudge.
  newTab?: boolean
}

interface Props {
  releases: ReleaseUrls
}

export default function DownloadButton({ releases }: Props) {
  const { t } = useTranslation()
  const [os, setOs] = useState<OS | null>(null)
  const detailsRef = useRef<HTMLDetailsElement | null>(null)
  const { show: showNudge, notify, dismiss } = useDownloadNudge()

  useEffect(() => {
    const ua = (global.window?.navigator?.userAgent || '').toLowerCase()
    if (ua.includes('windows')) setOs('windows')
    else if (ua.includes('mac')) setOs('mac')
    else setOs('linux')
  }, [])

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false
  }

  // Download links point at GitHub/Flathub, so the browser either starts a
  // download (page stays) or navigates away (timer dies with the document).
  // Only the first case ends up showing the nudge, which is what we want.
  const handleDownloadClick = () => {
    closeMenu()
    notify()
  }

  const optionsByOs: Record<OS, DownloadOption[]> = {
    windows: [
      {
        label: t('home.downloadMenu.windowsInstaller'),
        href: releases.Windows
      },
      { label: t('home.downloadMenu.windowsArm'), href: releases.WindowsArm }
    ],
    mac: [
      { label: t('home.downloadMenu.macApple'), href: releases.MacArm },
      { label: t('home.downloadMenu.macIntel'), href: releases.Mac }
    ],
    linux: [
      {
        label: t('home.downloadMenu.linuxFlatpak'),
        href: FLATHUB,
        newTab: true
      },
      { label: t('home.downloadMenu.linuxAppImage'), href: releases.Linux }
    ]
  }

  // Before OS detection (and on the server-rendered static export) show every
  // platform so the markup is meaningful; narrow to the detected OS on mount.
  const options: DownloadOption[] = os
    ? optionsByOs[os]
    : [...optionsByOs.windows, ...optionsByOs.mac, ...optionsByOs.linux]

  const label = os
    ? t('home.downloadMenu.forOS', { os: osLabel[os] })
    : t('home.download')

  return (
    <>
      <details className={styles.dropdown} ref={detailsRef}>
        <summary role="button" className={styles.trigger}>
          {label}
        </summary>
        <ul className={styles.menu}>
          {options.map((option) => (
            <li key={option.label}>
              <a
                href={option.href}
                onClick={handleDownloadClick}
                {...(option.newTab
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {option.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/downloads">
              <a className={styles.allLink} onClick={closeMenu}>
                {t('home.downloadMenu.allVersions')}
              </a>
            </Link>
          </li>
          <li className={styles.supportItem}>
            <Link href="/donate">
              <a className={styles.supportLink} onClick={closeMenu}>
                {t('home.downloadMenu.support')}
              </a>
            </Link>
          </li>
        </ul>
      </details>

      <DownloadNudge show={showNudge} onDismiss={dismiss} />
    </>
  )
}
