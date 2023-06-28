import { useCallback, useMemo, useState } from "react";
import {
    IUseLoginResponse,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/useLogin/types";
import { shouldAbortLogin, validateLoginDetails } from "@/utils";

export const useLogin = (): IUseLoginResponse => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showValidationErrors, setShowValidationErrors] =
        useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    const handleTextChange: TTextChangeHandler = useCallback(
        (e: TTextChangeEvent) => {
            const value = e.target.value || "";
            switch (e.target.name) {
                case "email":
                    setEmail(value);
                    break;
                case "password":
                    setPassword(value);
                    break;
                default:
                    break;
            }
            if (!showValidationErrors) setShowValidationErrors(true);
        },
        [email, password, showValidationErrors]
    );

    const validationErrors = useMemo(() => {
        if (!showValidationErrors) return { email: [], password: [] };
        return validateLoginDetails(email, password);
    }, [email, password, showValidationErrors]);

    const handleLogin = useCallback(async () => {
        const abortLogin: boolean = shouldAbortLogin(email, password, loading);
        if (abortLogin){
            setShowValidationErrors(true)
            return;
        }

        setLoading(true)
        // eslint-ignore
    }, [email, password, validationErrors, loading]);

    return {
        email,
        password,
        handleTextChange,
        validationErrors,
        handleLogin,
        loading
    };
};
