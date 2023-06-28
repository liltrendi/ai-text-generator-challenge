import { toast } from 'react-toastify';
import { ISignupValidationErrors } from "@/hooks/useSignup/types";
import { ILoginValidationErrors } from "@/hooks/useLogin/types";
import { IAlertProps, ISignupParams } from "@/utils/types";

export const isEmailValid = (email: string) =>
    !!email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

export const isPasswordValid = (password: string) =>
    password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

export const validateLoginDetails = (email: string, password: string) => {
    const errors: ILoginValidationErrors = { email: [], password: [] };

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

export const validateSignupDetails = ({name, email, password, confirmPassword}: ISignupParams) => {
    const errors: ISignupValidationErrors = { name: [], email: [], password: [], confirmPassword: [] };

    if(name.length < 3){
        errors.name.push("Name is too short")
    }

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

    if(password !== confirmPassword){
        errors.confirmPassword.push("Passwords do not match")
    }

    return errors;
};

export const shouldAbortLogin = (email: string, password: string, loading: boolean) => {
    const errors = validateLoginDetails(email, password);
    return loading || Object.values(errors).some(item => item.length !== 0);
}

export const shouldAbortSignup = (name: string, email: string, password: string, confirmPassword: string, loading: boolean) => {
    const errors = validateSignupDetails({name, email, password, confirmPassword})
    return loading || Object.values(errors).some(item => item.length !== 0);
}

export const triggerAlert = ({message, position = "top-right",type = "default",theme = "dark",closeOnClick = true,pauseOnHover = true}: IAlertProps) => {
    toast(message, {position, type, theme, closeOnClick, pauseOnHover})
}