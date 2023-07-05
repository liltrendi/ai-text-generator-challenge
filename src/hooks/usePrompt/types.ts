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
    scrollToBottom: () => void;
    appendToStatefulChatHistory: (message: IAppConversation) => void;
    setIsBotTyping: Dispatch<SetStateAction<boolean>>;
}

export interface IUsePromptArgs {
    scrollToBottom: () => void;
    appendToStatefulChatHistory: (message: IAppConversation) => void;
    setIsBotTyping: Dispatch<SetStateAction<boolean>>;
}
