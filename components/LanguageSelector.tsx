import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from './LanguageSelector.module.css'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' }
]

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = i18n.language?.split('-')[0] || 'en'
  const currentLang = languages.find((l) => l.code === current) || languages[0]

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const pick = (code: string) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <FontAwesomeIcon className={styles.globe} icon={faGlobe} />
        <span>
          {currentLang.flag} {currentLang.name}
        </span>
        <FontAwesomeIcon className={styles.chevron} icon={faChevronDown} />
      </button>
      {open && (
        <ul className={styles.menu} role="listbox">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`${styles.option} ${
                  lang.code === current ? styles.active : ''
                }`}
                role="option"
                aria-selected={lang.code === current}
                onClick={() => pick(lang.code)}
              >
                <span className={styles.flag}>{lang.flag}</span>
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
