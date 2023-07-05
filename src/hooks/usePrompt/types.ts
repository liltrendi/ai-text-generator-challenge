import { IAppConversation } from "@/components/chats/types";
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
    appendToStatefulChatHistory: (message: IAppConversation) => void;
}

export interface IUsePromptArgs {
    appendToStatefulChatHistory: (message: IAppConversation) => void;
}
