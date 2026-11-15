import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import styles from './DownloadNudge.module.css'

// Delay before offering the donation page: long enough that the browser has
// started the download and the click visibly did something, short enough that
// the visitor is still around.
export const NUDGE_DELAY_MS = 3000

interface Props {
  show: boolean
  onDismiss: () => void
}

// Corner toast shown after a download starts. It never navigates on its own —
// the visitor has to click through — unlike the old 3s redirect it replaced.
const DownloadNudge: React.FC<Props> = ({ show, onDismiss }) => {
  const { t } = useTranslation()

  // Escape dismisses the toast, matching the close button.
  useEffect(() => {
    if (!show) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onDismiss()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [show, onDismiss])

  if (!show || typeof document === 'undefined') return null

  // Portalled to <body> so page-level transforms/overflow cannot trap a fixed
  // element (the home hero animates with framer-motion).
  return createPortal(
    <div className={styles.nudge} role="status" aria-live="polite">
      <p className={styles.text}>{t('home.downloadNudge.message')}</p>
      <Link href="/donate">
        <a className={styles.cta} onClick={onDismiss}>
          {t('home.downloadNudge.cta')}
        </a>
      </Link>
      {/* Last in the DOM so the reading order is message -> CTA -> dismiss,
          while CSS pins it to the corner. */}
      <button
        type="button"
        className={styles.close}
        onClick={onDismiss}
        aria-label={String(t('home.downloadNudge.dismiss'))}
      >
        ×
      </button>
    </div>,
    document.body
  )
}

// Shared state for the nudge: call `notify` from a download link's onClick.
export const useDownloadNudge = (delay = NUDGE_DELAY_MS) => {
  const [show, setShow] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const notify = () => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setShow(true), delay)
  }

  const dismiss = () => {
    if (timer.current) clearTimeout(timer.current)
    setShow(false)
  }

  return { show, notify, dismiss }
}

export default DownloadNudge
