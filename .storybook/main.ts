import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config: any) => {
        config.resolve.modules = [
            path.resolve(__dirname, ".."),
            "node_modules",
        ];

        config.resolve.alias = {
            ...config.resolve.alias,
            "@/app": path.resolve(__dirname, "../src/app"),
            "@/theme": path.resolve(__dirname, "../src/theme"),
        };

        return config;
    },
};

export default config;
