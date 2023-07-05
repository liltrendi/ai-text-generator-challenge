import { IAppConversation } from "@/components/chats/types";

export interface ISendUserMessageArgs {
    userMessage: string;
    chatHistory: IAppConversation[];
}
