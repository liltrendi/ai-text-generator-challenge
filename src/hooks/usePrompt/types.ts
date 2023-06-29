import {
    ChangeEvent,
    ChangeEventHandler,
    Dispatch,
    SetStateAction,
} from "react";

export type TTextChangeHandler =
    | ChangeEventHandler<HTMLInputElement>
    | undefined;

export type TTextChangeEvent = ChangeEvent<HTMLInputElement>;

export interface IUsePromptHandlers {
    promptText: string;
    setPromptText: Dispatch<SetStateAction<string>>;
    clearPromptText: () => void;
}
