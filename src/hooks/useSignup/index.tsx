import { useCallback, useMemo, useState } from "react";
import {
    IUseSignupResponse,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/useSignup/types";
import { shouldAbortSignup, validateSignupDetails } from "@/utils";
import { userLogin, userSignup } from "@/services/auth";
import { useRouter } from "next/navigation";

export const useSignup = (): IUseSignupResponse => {
    const router = useRouter()
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showValidationErrors, setShowValidationErrors] =
        useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    const handleTextChange: TTextChangeHandler = useCallback(
        (e: TTextChangeEvent) => {
            const value = e.target.value || "";
            switch (e.target.name) {
                case "name":
                    setName(value);
                    break;
                case "email":
                    setEmail(value);
                    break;
                case "password":
                    setPassword(value);
                    break;
                case "confirmPassword":
                    setConfirmPassword(value);
                    break;
                default:
                    break;
            }
            if (!showValidationErrors) setShowValidationErrors(true);
        },
        [name, email, password, confirmPassword, showValidationErrors]
    );

    const validationErrors = useMemo(() => {
        if (!showValidationErrors) return { name: [], email: [], password: [], confirmPassword: [] };
        return validateSignupDetails({name, email, password, confirmPassword});
    }, [name, email, password, confirmPassword, showValidationErrors]);

    const handleSignup = useCallback(async () => {
        const abortLogin: boolean = shouldAbortSignup(name, email, password, confirmPassword, loading)
        if (abortLogin){
            setShowValidationErrors(true)
            return;
        }

        setLoading(true);
        const response = await userSignup({name, email, password})

        if(response){
            await userLogin({email, password});
            router.push("/")
        }

        setLoading(false);
    }, [name, email, password, confirmPassword, validationErrors, loading]);

    return {
        name,
        email,
        password,
        confirmPassword,
        handleTextChange,
        validationErrors,
        handleSignup,
        loading
    };
};
