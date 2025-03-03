module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'pt', 'it', 'ru'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}