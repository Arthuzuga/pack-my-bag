/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        pathname: "/*",
      },
    ],
  },
  env: {
    weatherAPI: process.env.WEATHER_API_TOKEN,
  },
};

module.exports = nextConfig;
