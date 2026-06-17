import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLock,
  faCodeBranch,
  faGamepad,
  faLanguage,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import styles from './Highlights.module.css'

interface Highlight {
  icon: IconDefinition
  key: string
}

const highlights: Highlight[] = [
  { icon: faLock, key: 'privacy' },
  { icon: faCodeBranch, key: 'openSource' },
  { icon: faGamepad, key: 'crossPlatform' },
  { icon: faLanguage, key: 'languages' }
]

export default function Highlights() {
  const { t } = useTranslation()

  return (
    <section className={`container ${styles.highlights}`}>
      {highlights.map(({ icon, key }) => (
        <div className={styles.card} key={key}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={icon}
            height={28}
            width={28}
            aria-hidden
          />
          <h3>{t(`home.highlights.${key}.title`)}</h3>
          <p>{t(`home.highlights.${key}.description`)}</p>
        </div>
      ))}
    </section>
  )
}
