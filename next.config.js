/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

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
    }
  }
])
