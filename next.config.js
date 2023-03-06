/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [
      ["@swc-jotai/debug-label", {}],
      // https://github.com/pmndrs/swc-jotai/issues/6
      // ["@swc-jotai/react-refresh", {}],
    ],
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
