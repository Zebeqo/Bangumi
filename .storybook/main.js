const path = require("path");
module.exports = {
  stories: [
    {
      // 👇 The directory field sets the directory your stories
      directory: "../ui",
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: "UI",
      // 👇 Storybook will load all files that contain the stories extension
      files: "**/*.stories.*",
    },
    {
      // 👇 The directory field sets the directory your stories
      directory: "../components",
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: "Components",
      // 👇 Storybook will load all files that contain the stories extension
      files: "**/*.stories.*",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  docs: {
    docsPage: true,
  },
};
