import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User } from "gotrue-js";
import { getCurrentUser } from "@/services/auth";

export const useAuth = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<null | undefined | User>(undefined);

    useEffect(() => {
        const currentUser = getCurrentUser();

        setUser(currentUser);
        setLoading(false);

        if (currentUser) {
            router.push("/");
        } else if (!currentUser && pathname === "/") {
            router.push("/login");
        }
    }, []);

    return { loading, user };
};
