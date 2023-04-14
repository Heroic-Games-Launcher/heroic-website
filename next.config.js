/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['code.visualstudio.com']
  }
}

module.exports = nextConfig
