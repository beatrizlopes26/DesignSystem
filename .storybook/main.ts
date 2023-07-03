import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", '@storybook/addon-actions', 'storybook-addon-sass-postcss',{
    name: '@storybook/addon-styling',
    options: {
      sass: {
        // Require your Sass preprocessor here
        implementation: require('sass')
      }
    }
  }, "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};

export default config;