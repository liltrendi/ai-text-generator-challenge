"use client";

import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { IAppLayoutProps } from "@/components/layout/types";
import { theme } from "@/theme";

const AppLayout: FC<IAppLayoutProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppLayout;
