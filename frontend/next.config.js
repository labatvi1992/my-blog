/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config")
const nextConfig = {
  i18n: i18n,
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
