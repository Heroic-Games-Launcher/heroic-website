import React, { ReactNode } from 'react'
import styles from './SteamDeckMockup.module.css'

interface Props {
  children: ReactNode
}

/**
 * A stylized Steam Deck device frame. Wrap a screenshot or GIF as children;
 * it is rendered inside the screen area. Swap the media for the Console Mode
 * GIF once it is ready.
 */
export default function SteamDeckMockup({ children }: Props) {
  return (
    <div className={styles.deck} aria-hidden="false">
      <span className={`${styles.grip} ${styles.gripLeft}`} />
      <div className={styles.screen}>{children}</div>
      <span className={`${styles.grip} ${styles.gripRight}`} />
    </div>
  )
}
