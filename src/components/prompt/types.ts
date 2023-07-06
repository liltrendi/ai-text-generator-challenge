import { IAppConversation } from "@/components/chats/types";
import { Dispatch, SetStateAction } from "react";

export interface IPromptProps {
    scrollToBottom: () => void;
    updateReactiveChatHistory: (message: IAppConversation) => void;
    setIsBotTyping: Dispatch<SetStateAction<boolean>>;
}
