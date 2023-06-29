import { userLogout } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useMenu = () => {
    const router = useRouter();
    const [visible, setVisible] = useState<boolean>(false);

    const toggle = useCallback(() => setVisible(!visible), [visible]);

    const handleLogout = useCallback(async () => {
        await userLogout();
        router.push("/login");
        setVisible(false);
    }, [visible, router]);

    return { visible, toggle, handleLogout };
};
