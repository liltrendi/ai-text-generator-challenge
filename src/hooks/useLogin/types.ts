import { ChangeEvent, ChangeEventHandler } from "react";

export type TTextChangeHandler =
    | ChangeEventHandler<HTMLInputElement>
    | undefined;

export type TTextChangeEvent = ChangeEvent<HTMLInputElement>;

export interface IValidationErrors {
    email: string[];
    password: string[];
}
