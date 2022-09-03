/** @type {import('next').NextConfig} */
module.exports = {
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true
  },
  images: {
    domains: ['pbs.twimg.com', 'cdn.sanity.io']
  }
}
