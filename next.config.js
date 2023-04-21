/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    weatherAPI: process.env.WEATHER_API_TOKEN,
  },
};

module.exports = nextConfig;
