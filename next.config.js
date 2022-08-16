/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.market-storefront.envato-static.com", "new.axilthemes.com", ],
  },
  experimental: { images: { allowFutureImage: true } }
};

module.exports = nextConfig;