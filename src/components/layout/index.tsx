"use client";

import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { IAppLayoutProps } from "@/components/layout/types";
import { theme } from "@/theme";
import { useAuth } from "@/hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
// import Header from "@/components/header";
// import { usePathname } from "next/navigation";
import SettingsModal from "@/components/settings";
import { useMenu } from "@/hooks/useMenu";
import { useLocalPersistence } from "@/hooks/useLocalPersistence";

const AppLayout: FC<IAppLayoutProps> = () => {
    useLocalPersistence();
    // const pathname = usePathname();
    const { loading } = useAuth();
    const {
        // menuVisible,
        settingsVisible,
        // toggleMenu,
        // openSettings,
        closeSettings,
        // handleLogout,
    } = useMenu();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer />
            <SettingsModal
                settingsVisible={settingsVisible}
                closeSettings={closeSettings}
            />
            {/* {pathname === "/" && (
                <Header
                    user={user}
                    menuVisible={menuVisible}
                    openSettings={openSettings}
                    toggleMenu={toggleMenu}
                    handleLogout={handleLogout}
                />
            )}
            {children} */}
        </ThemeProvider>
    );
};

export default AppLayout;
