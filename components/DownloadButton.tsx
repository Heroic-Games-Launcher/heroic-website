import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReleaseUrls } from '../lib/github'
import styles from './DownloadButton.module.css'

type OS = 'windows' | 'mac' | 'linux'

const FLATHUB =
  'https://flathub.org/apps/details/com.heroicgameslauncher.hgl'

const osLabel: Record<OS, string> = {
  windows: 'Windows',
  mac: 'macOS',
  linux: 'Linux'
}

interface DownloadOption {
  label: string
  href: string
}

interface Props {
  releases: ReleaseUrls
}

export default function DownloadButton({ releases }: Props) {
  const { t } = useTranslation()
  const [os, setOs] = useState<OS | null>(null)

  useEffect(() => {
    const ua = (global.window?.navigator?.userAgent || '').toLowerCase()
    if (ua.includes('windows')) setOs('windows')
    else if (ua.includes('mac')) setOs('mac')
    else setOs('linux')
  }, [])

  const optionsByOs: Record<OS, DownloadOption[]> = {
    windows: [
      { label: t('home.downloadMenu.windowsInstaller'), href: releases.Windows },
      { label: t('home.downloadMenu.windowsArm'), href: releases.WindowsArm }
    ],
    mac: [
      { label: t('home.downloadMenu.macApple'), href: releases.MacArm },
      { label: t('home.downloadMenu.macIntel'), href: releases.Mac }
    ],
    linux: [
      { label: t('home.downloadMenu.linuxFlatpak'), href: FLATHUB },
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
    <details role="list" className={styles.dropdown}>
      <summary
        aria-haspopup="listbox"
        role="button"
        className={styles.trigger}
      >
        {label}
      </summary>
      <ul role="listbox">
        {options.map((option) => (
          <li key={option.label}>
            <a href={option.href}>{option.label}</a>
          </li>
        ))}
        <li>
          <Link href="/downloads">
            <a className={styles.allLink}>
              {t('home.downloadMenu.allVersions')}
            </a>
          </Link>
        </li>
      </ul>
    </details>
  )
}
