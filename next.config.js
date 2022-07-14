/** @type {import('next').NextConfig} */
const withPWA  = require("next-pwa")

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
})

module.exports = nextConfig
