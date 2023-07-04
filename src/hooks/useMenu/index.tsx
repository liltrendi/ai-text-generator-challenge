import { userLogout } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useMenu = () => {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [settingsVisible, setSettingsVisible] = useState<boolean>(false);

    const toggleMenu = useCallback(
        () => setMenuVisible(!menuVisible),
        [menuVisible]
    );
    const closeSettings = useCallback(() => setSettingsVisible(false), []);

    const handleLogout = useCallback(async () => {
        await userLogout();
        router.push("/login");
        setMenuVisible(false);
    }, [router]);

    const openSettings = useCallback(() => {
        setMenuVisible(false);
        setSettingsVisible(true);
    }, []);

    return {
        menuVisible,
        settingsVisible,
        toggleMenu,
        openSettings,
        closeSettings,
        handleLogout,
    };
};
