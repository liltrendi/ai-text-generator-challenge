import React from "react";
import * as NextImage from "next/image";
import type { Preview } from "@storybook/react";
import themeDecorator from "../src/theme/storybook";
import "../src/app/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: props =>
        React.createElement(OriginalNextImage, { ...props, unoptimized: true }),
});

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [themeDecorator],
};

export default preview;
