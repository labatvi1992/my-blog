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
  async rewrites() {
    return [
      {
        source: '/ve-toi',
        destination: '/about',
        locale: false,
      },
      {
        source: '/bai-viet',
        destination: '/blog',
        locale: false,
      },
      {
        source: '/cua-hang',
        destination: '/store',
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
