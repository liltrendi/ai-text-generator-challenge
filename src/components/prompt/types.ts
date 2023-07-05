import { IAppConversation } from "@/components/chats/types";

export interface IPromptProps {
    scrollToBottom: () => void;
    appendToStatefulChatHistory: (message: IAppConversation) => void;
}
