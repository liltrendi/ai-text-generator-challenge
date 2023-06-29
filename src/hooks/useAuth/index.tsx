import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "gotrue-js";
import { getCurrentUser } from "@/services/auth";

export const useAuth = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<null | undefined | User>(undefined);

    const redirect = useCallback((currentUser: null | undefined | User) => {
        const route = window.location.pathname;

        if (currentUser) {
            router.push("/");
            return;
        }

        if (route === "/") {
            router.push("/login");
        }
    }, []);

    useEffect(() => {
        const currentUser = getCurrentUser();

        setUser(currentUser);
        setLoading(false);

        redirect(currentUser);
    }, []);

    return { loading, user };
};
