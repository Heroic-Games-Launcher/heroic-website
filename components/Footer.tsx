import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Footer: FC = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  
  // Language names in their native form with corresponding flag emojis
  const languages = {
    en: { name: 'English', flag: '🇬🇧' },
    de: { name: 'Deutsch', flag: '🇩🇪' },
    fr: { name: 'Français', flag: '🇫🇷' },
    es: { name: 'Español', flag: '🇪🇸' },
    pt: { name: 'Português', flag: '🇵🇹' },
    it: { name: 'Italiano', flag: '🇮🇹' },
    ru: { name: 'Русский', flag: '🇷🇺' },
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Use i18n to change language
    i18n.changeLanguage(newLocale);
    // Change the page URL to reflect the new language
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  
  return (
    <footer className="container">
      <div className="grid">
        <div>
          <small>{t('footer.copyright', { year: new Date().getFullYear() })}</small>
        </div>
        <div className="language-selector">
          <select 
            onChange={changeLanguage} 
            value={router.locale || 'en'}
            aria-label={t('language_selector') || 'Select language'}
            title={t('language_selector') || 'Select language'}
          >
            {Object.entries(languages).map(([code, { name, flag }]) => (
              <option key={code} value={code}>
                {flag} {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  )
}

export default Footer
