/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([withBundleAnalyzer], [
  [optimizedImages], {
    reactStrictMode: true,
    images: {
      disableStaticImages: true
  }
  }])
