/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    reactRemoveProperties: false,
  },
}

module.exports = nextConfig;
