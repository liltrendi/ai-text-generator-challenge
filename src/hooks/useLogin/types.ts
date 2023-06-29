import { ChangeEvent, ChangeEventHandler } from "react";

export type TTextChangeHandler =
    | ChangeEventHandler<HTMLInputElement>
    | undefined;

export type TTextChangeEvent = ChangeEvent<HTMLInputElement>;

export interface ILoginValidationErrors {
    email: string[];
    password: string[];
}

export interface IUseLoginResponse {
    email: string;
    password: string;
    handleTextChange: TTextChangeHandler;
    validationErrors: ILoginValidationErrors;
    handleLogin: () => Promise<void>;
    loading: boolean;
}
