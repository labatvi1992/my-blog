/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    concurrentFeatures: true,
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = nextConfig
