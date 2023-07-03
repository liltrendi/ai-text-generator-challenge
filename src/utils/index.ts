import { toast } from "react-toastify";
import { User } from "gotrue-js";
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

    if (password.length < 1) {
        errors.password.push("Password cannot be empty");
    }

    return errors;
};

export const validateSignupDetails = ({
    name,
    email,
    password,
    confirmPassword,
}: ISignupParams) => {
    const errors: ISignupValidationErrors = {
        name: [],
        email: [],
        password: [],
        confirmPassword: [],
    };

    if (name.length < 3) {
        errors.name.push("Name is too short");
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

    if (password !== confirmPassword) {
        errors.confirmPassword.push("Passwords do not match");
    }

    return errors;
};

export const shouldAbortLogin = (
    email: string,
    password: string,
    loading: boolean
) => {
    const errors = validateLoginDetails(email, password);
    return loading || Object.values(errors).some(item => item.length !== 0);
};

export const shouldAbortSignup = (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    loading: boolean
) => {
    const errors = validateSignupDetails({
        name,
        email,
        password,
        confirmPassword,
    });
    return loading || Object.values(errors).some(item => item.length !== 0);
};

export const triggerAlert = ({
    message,
    position = "top-right",
    type = "default",
    theme = "dark",
    closeOnClick = true,
    pauseOnHover = true,
    pauseOnFocusLoss = false,
    autoClose = 1500,
}: IAlertProps) => {
    toast(message, {
        position,
        type,
        theme,
        closeOnClick,
        pauseOnHover,
        pauseOnFocusLoss,
        autoClose,
    });
};

export const getUserInitials = (user: User | null | undefined) => {
    const defaultInitals = "😃";

    if (!user) return defaultInitals;

    const fullName: string = user.user_metadata?.name || "";
    const namesList = fullName.split(" ");

    // if the user's full name is less than one character
    if (fullName.length < 1 || namesList.length < 1) return defaultInitals;

    // get two of the user's initials, otherwise one initial works
    const userInitials = namesList.slice(0, 2).reduce((initials, name) => {
        // eslint-disable-next-line
        initials += name[0]?.toUpperCase() || name[0];
        return initials;
    }, "");

    return userInitials;
};

export const isValidPromptText = (promptText: string | undefined) => {
    if (promptText && promptText.length > 2) {
        return true;
    }
    triggerAlert({
        message: "Your message is too short",
        type: "error",
    });
    return false;
};
