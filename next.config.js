/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lain.bgm.tv",
      },
    ],
  },
};

module.exports = nextConfig;
