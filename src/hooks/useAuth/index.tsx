import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User } from "gotrue-js";
import { getCurrentUser } from "@/services/auth";

export const useAuth = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<null | undefined | User>(undefined);

    const redirect = useCallback(
        (currentUser: null | undefined | User) => {
            console.log("redirectingg", currentUser, pathname);
            if (currentUser) {
                router.replace("/");
                return;
            }

            if (pathname === "/") {
                router.replace("/login");
            }
        },
        [pathname]
    );

    useEffect(() => {
        const currentUser = getCurrentUser();

        setUser(currentUser);
        setLoading(false);

        redirect(currentUser);
    }, []);

    return { loading, user };
};
