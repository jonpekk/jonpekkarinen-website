/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ["../public", { from: "../public/fonts", to: "/fonts" }],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: "button",
  },
};
export default config;
