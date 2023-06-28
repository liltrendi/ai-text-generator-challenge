export interface ISignupParams {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IAlertProps {
    message: string;
    type: "info" | "success" | "warning" | "error" | "default";
    position?: "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center";
    theme?: "light" | "dark" | "colored";
    autocloseDelay?: number;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
}