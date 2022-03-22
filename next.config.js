/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [optimizedImages, {
    optipng: {
      optimizationLevel: 4,
    },
  }], {
    reactStrictMode: true,
    images: {
      disableStaticImages: true
  }
  }])
