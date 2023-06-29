import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import {User} from 'gotrue-js';
import { getCurrentUser } from "@/services/auth";

export const useAuth = () => {
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<null | undefined | User>(undefined);

    console.log({user})

    useEffect(() => {
        const currentUser = getCurrentUser();
        const route = window.location.pathname;
        if(currentUser){
            router.push("/")
        }else{
            if(route === "/"){
                router.push("/login")
            }
        }
        setUser(currentUser);
        setLoading(false);
    }, [])

    return {loading, user}
}