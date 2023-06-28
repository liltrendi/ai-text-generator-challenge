import type { Preview } from "@storybook/react";
import themeDecorator from "../src/theme/storybook";

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
