/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const { i18n } = require('./next-i18next.config')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optipng: {
        optimizationLevel: 3
      }
    }
  ],
  {
    reactStrictMode: true,
    images: {
      disableStaticImages: true
    },
    i18n
  }
])
