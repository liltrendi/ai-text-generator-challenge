"use client";

import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { IAppLayoutProps } from "@/components/layout/types";
import { theme } from "@/theme";
import { useAuth } from "@/hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header";
import { usePathname } from "next/navigation";

const AppLayout: FC<IAppLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const { loading, user } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            {pathname === "/" && <Header user={user} />}
            {children}
        </ThemeProvider>
    );
};

export default AppLayout;
