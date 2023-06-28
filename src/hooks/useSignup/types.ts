import { ChangeEvent, ChangeEventHandler } from "react";

export type TTextChangeHandler =
    | ChangeEventHandler<HTMLInputElement>
    | undefined;

export type TTextChangeEvent = ChangeEvent<HTMLInputElement>;

export interface ISignupValidationErrors {
    name: string[];
    email: string[];
    password: string[];
    confirmPassword: string[];
}

export interface IUseSignupResponse {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    handleTextChange: TTextChangeHandler;
    validationErrors: ISignupValidationErrors;
    handleSignup: () => Promise<void>;
    loading: boolean;
}
