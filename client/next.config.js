/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["s2.coinmarketcap.com", "assets.coingecko.com", "coin-images.coingecko.com"],
  },
};
