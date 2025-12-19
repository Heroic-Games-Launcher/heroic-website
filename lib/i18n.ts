import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

const supportedLanguages = ['en', 'es', 'pt', 'de', 'fr', 'it', 'ko', 'zh', 'ja', 'pl', 'hu', 'tr']

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    debug: process.env.NODE_ENV === 'development',

    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false // React already escapes by default
    },

    backend: {
      loadPath: '/locales/{{lng}}/translations.json'
    },

    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    react: {
      useSuspense: false
    }
  })

export default i18n
