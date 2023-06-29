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
            "@/public": path.resolve(__dirname, "../public"),
            "@/hooks": path.resolve(__dirname, "../src/hooks"),
            "@/utils": path.resolve(__dirname, "../src/utils"),
            "@/components": path.resolve(__dirname, "../src/components"),
            "@/services": path.resolve(__dirname, "../src/services"),
        };

        return config;
    },
};

export default config;
