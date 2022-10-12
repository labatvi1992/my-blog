/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
  },
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
