import { useCallback, useMemo, useState } from "react";
import {
    IUseLoginResponse,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/useLogin/types";
import { validateLoginDetails } from "@/utils";

export const useLogin = (): IUseLoginResponse => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showValidationErrors, setShowValidationErrors] =
        useState<boolean>(false);

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
        const abortLogin: boolean =
            validationErrors.email.length > 0 ||
            validationErrors.password.length > 0;
        if (abortLogin) return;

        console.log({ email, password });
        // eslint-ignore
    }, [email, password, validationErrors]);

    return {
        email,
        password,
        handleTextChange,
        validationErrors,
        handleLogin,
    };
};
