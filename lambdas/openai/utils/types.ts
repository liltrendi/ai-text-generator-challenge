import { IAppConversation, TChatOrigin } from "@/components/chats/types";

export interface ILambdaBody {
    userName: string;
    userMessage: string;
    previousMessages: IAppConversation[];
    temperature: number;
    outputLength: string;
    tone: string;
}

export interface IMessageHistory {
    role: TChatOrigin;
    content: string;
}

export interface IServerErrorResponse {
    code: number;
    message: string;
    error: unknown;
}

export interface IServerSuccessResponse {
    code: number;
    body: string;
}
