import { IAppConversation } from "@/components/chats/types";
import { ISettingsConfig } from "@/hooks/useSettings/types";

export interface ISendUserMessageArgs {
    userMessage: string;
    chatHistory: IAppConversation[];
    settings: ISettingsConfig;
}

export interface ISendUserMessageResponse {
    result: string[];
}
