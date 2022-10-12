/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
}

module.exports = nextConfig
