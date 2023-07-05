import { IAppConversation } from "@/components/chats/types";

export interface IPromptProps {
    appendToStatefulChatHistory: (message: IAppConversation) => void;
}
