import { User } from "gotrue-js";
import { IAppConversation } from "@/components/chats/types";
import { ISettingsConfig } from "@/hooks/useSettings/types";

export interface ISendUserMessageArgs {
    userMessage: string;
    chatHistory: IAppConversation[];
    user: User | null | undefined;
    settings: ISettingsConfig;
}

export interface ISendUserMessageResponse {
    result: string[];
}
