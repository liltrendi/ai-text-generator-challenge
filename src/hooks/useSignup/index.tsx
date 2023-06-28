import { useCallback, useMemo, useState } from "react";
import {
    IUseSignupResponse,
    TTextChangeEvent,
    TTextChangeHandler,
} from "@/hooks/useSignup/types";
import { validateSignupDetails } from "@/utils";

export const useSignup = (): IUseSignupResponse => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showValidationErrors, setShowValidationErrors] =
        useState<boolean>(false);

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
        const abortLogin: boolean = validationErrors.name.length > 0 || validationErrors.email.length > 0 ||
            validationErrors.password.length > 0 || validationErrors.confirmPassword.length > 0;
        if (abortLogin) return;

        console.log({ email, password });
        // eslint-ignore
    }, [name, email, password, confirmPassword, validationErrors]);

    return {
        name,
        email,
        password,
        confirmPassword,
        handleTextChange,
        validationErrors,
        handleSignup,
    };
};
