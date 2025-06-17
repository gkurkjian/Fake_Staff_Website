// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['reqres.in'], // ✅ Allow external images from reqres.in
  },
}

module.exports = nextConfig
