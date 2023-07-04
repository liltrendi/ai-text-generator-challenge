import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ThemeDecorator = (Story: FC) => (
    <ThemeProvider theme={theme}>
        <div className={inter.className}>
            <Story />
        </div>
    </ThemeProvider>
);

export default ThemeDecorator;
