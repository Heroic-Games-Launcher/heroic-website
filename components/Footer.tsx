import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
]

const Footer = () => {
  const { t, i18n } = useTranslation('common')

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  const currentLang = i18n.language?.split('-')[0] || 'en'

  return (
    <footer className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        <select
          value={currentLang}
          onChange={changeLanguage}
          aria-label="Select language"
          style={{
            width: '120px',
            padding: '6px 8px 6px 6px',
            fontSize: '13px',
            borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255, 255, 255, 1)',
            color: 'inherit',
            cursor: 'pointer',
            appearance: 'none',
            WebkitAppearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
            transition: 'border-color 0.2s, box-shadow 0.2s'
          }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} style={{ background: '#ffffffff' }}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
      <small>{t('copyright')} &copy; {new Date().getFullYear()}</small>
    </footer>
  )
}

export default Footer
