import { IValidationErrors } from "@/hooks/useLogin/types";

export const isEmailValid = (email: string) =>
    !!email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

export const isPasswordValid = (password: string) =>
    password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

export const validateLoginDetails = (email: string, password: string) => {
    const errors: IValidationErrors = { email: [], password: [] };

    // if (!showValidationErrors) return errors;

    if (!isEmailValid(email)) {
        errors.email.push("Email is not valid");
    }

    if (password.length < 6) {
        errors.password.push("Password is too short");
    }

    if (!isPasswordValid(password)) {
        errors.password.push(
            "Password must have one numeric digit, one uppercase letter and one lowercase letter"
        );
    }

    return errors;
};
