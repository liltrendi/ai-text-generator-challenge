import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

const ThemeDecorator = (Story: FC) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
);

export default ThemeDecorator;
