import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import {User} from 'gotrue-js';
import { getCurrentUser } from "@/services/auth";

export const useAuth = () => {
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<null | undefined | User>(undefined);

    useEffect(() => {
        const currentUser = getCurrentUser();
        router.push(currentUser ? "/" : "/login")
        setUser(currentUser);
        setLoading(false);
    }, [])

    return {loading, user}
}