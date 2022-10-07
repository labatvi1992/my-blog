/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    concurrentFeatures: true,
  },
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
