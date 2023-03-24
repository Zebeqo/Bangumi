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
  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return [
      {
        source: "/calendar",
        destination: "/calendar/today",
        permanent: true,
      },
      {
        source: "/hot",
        destination: "/hot/anime",
        permanent: true,
      },
      {
        source: "/top",
        destination: "/top/anime",
        permanent: true,
      },
      {
        source: "/collection",
        destination: "/collection/anime",
        permanent: true,
      },
      {
        source: "/",
        destination: "/top/anime",
        permanent: false,
      },
      {
        source: "/collection/:collection_type",
        destination: "/collection/:collection_type/anime",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
