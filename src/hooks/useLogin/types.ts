import { ChangeEvent, ChangeEventHandler } from "react";

export type TTextChangeHandler =
    | ChangeEventHandler<HTMLInputElement>
    | undefined;

export type TTextChangeEvent = ChangeEvent<HTMLInputElement>;

export interface IValidationErrors {
    email: string[];
    password: string[];
}

export interface IUseLoginResponse {
    email: string;
    password: string;
    handleTextChange: TTextChangeHandler;
    validationErrors: IValidationErrors;
    handleLogin: () => Promise<void>;
}
