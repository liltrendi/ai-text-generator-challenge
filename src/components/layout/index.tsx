"use client";

import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from 'react-toastify';
import { IAppLayoutProps } from "@/components/layout/types";
import { theme } from "@/theme";
import 'react-toastify/dist/ReactToastify.css';

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
    return(
    <ThemeProvider theme={theme}>
        <ToastContainer />
        {children}     
    </ThemeProvider>
)};

export default AppLayout;
