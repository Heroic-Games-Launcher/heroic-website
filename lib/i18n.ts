import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import enTranslations from '../public/locales/en/translations.json'

const supportedLanguages = ['en', 'es', 'pt', 'de', 'fr', 'it', 'ko', 'zh', 'ja', 'pl', 'hu', 'tr']

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    // Bundle the English strings so they are available synchronously during the
    // static export (HttpBackend cannot fetch at build time) and on the client's
    // first render. Without this the exported HTML ships raw i18n keys and the
    // client re-render triggers React hydration mismatches (logged as console
    // errors). HttpBackend still lazy-loads the other languages on demand.
    resources: { en: { translations: enTranslations } },
    partialBundledLanguages: true,
    // Map region locales (pt-BR, de-DE, ...) to the base language we ship.
    load: 'languageOnly',
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
      // localStorage first so a manual language choice persists across reloads.
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    react: {
      useSuspense: false
    }
  })

export default i18n
