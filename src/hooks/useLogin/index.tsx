import { useCallback, useMemo, useState } from "react";
import {
    IValidationErrors,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/useLogin/types";
import { isEmailValid } from "@/utils";

export const useLogin = () => {
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
        const errors: IValidationErrors = { email: [], password: [] };

        if (!showValidationErrors) return errors;

        if (!isEmailValid(email)) {
            errors.email.push("Email is not valid");
        }

        if (password.length < 6) {
            errors.password.push("Password is too short");
        }

        return errors;
    }, [email, password, showValidationErrors]);

    const handleLogin = useCallback(async () => {
        const abortLogin: boolean =
            validationErrors.email.length > 0 ||
            validationErrors.password.length > 0;
        if (abortLogin) return;

        console.log({ email, password });
    }, [email, password, validationErrors]);

    return {
        email,
        password,
        handleTextChange,
        validationErrors,
        handleLogin,
    };
};
