import { useEffect, useState } from "react";
import { User } from "gotrue-js";
import { getCurrentUser } from "@/services/auth";

export const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<null | undefined | User>(undefined);

    useEffect(() => {
        const currentUser = getCurrentUser();
        setUser(currentUser);
        setLoading(false);
    }, []);

    return { loading, user };
};
