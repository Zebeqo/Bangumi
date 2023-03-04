const path = require("path");
export default {
  stories: [{
    directory: "../ui",
    titlePrefix: "UI",
    files: "**/*.@(mdx|stories.*)"
  }, {
    directory: "../components",
    titlePrefix: "Components",
    files: "**/*.@(mdx|stories.*)"
  }, {
    directory: "../hooks",
    titlePrefix: "Hooks",
    files: "**/*.@(mdx|stories.*)"
  }],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-storysource", "storybook-dark-mode", "@tomfreudenberg/next-auth-mock/storybook", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js")
    }
  },
  docs: {
    autodocs: "tag"
  },
  features: {
    interactionsDebugger: true // 👈 Enable playback controls
  }
};