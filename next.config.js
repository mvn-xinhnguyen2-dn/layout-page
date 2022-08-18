/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { images: { allowFutureImage: true }},
  images: {
    domains: ["assets.market-storefront.envato-static.com", "new.axilthemes.com", ],
  },
};

module.exports = nextConfig;