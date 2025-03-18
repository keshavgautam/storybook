import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import { join, resolve,dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Add alias support for `@` to point to src/
    config.resolve = {
      alias: {
        ...(config.resolve?.alias || {}),
        "@": resolve(__dirname, "../src"),
      },
    };
    return config;
  },
  staticDirs: ["../public"],
};
export default config;
