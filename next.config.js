/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lain.bgm.tv",
      },
    ],
  },
  transpilePackages: ["jotai-devtools"],
};

module.exports = nextConfig;
